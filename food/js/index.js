import { fooddt, usr, updtusr } from "../components/api.js";
import { crtelm, getelm } from "../Components/helper.js";
import { nbar, styls } from "../components/navbar.js";

const navbar = getelm("navbarr");
navbar.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styls();
  document.head.appendChild(styleTag);
});

const user = JSON.parse(localStorage.getItem("loginUser"));
let city = user.city;

(async () => {
  const food = await fooddt();
  const filterFood = food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  ftl(filterFood);
})();

const ftl = (data) => {
  document.getElementById("food").innerHTML = "";

  data.map((elem) => {
    const foodItem = document.createElement("div", { class: "foodItem" });
    const img = crtelm("img", "", {
      src: `${elem.image}`,
      class: "t-img",
    });
    const name = crtelm("h3", elem.name);
    const ratingTag = crtelm("i", "", { class: "fa-solid fa-star m-1" });
    const rating = crtelm("h5", `${elem.rating}`);
    const price = crtelm("h4", `Price : ${elem.price}`);
    const ratingDiv = crtelm("div", "", { class: "d-flex" });
    const buyBtn = crtelm("button", "Add to Cart", {
      class: "btn btn-dark m-2",
    });
    ratingDiv.append(ratingTag, rating);

    foodItem.append(img, name, ratingDiv, price, buyBtn);
    document.getElementById("food").append(foodItem);

    buyBtn.addEventListener("click", async () => {
      const users = await usr();
      const userData = await users.find((u) => u.id == user.id);
      if(city===user.city.toLowerCase()){
      userData.cart.map((e) => {
        if (e.id === elem.id) {
          e.qty += 1;
          updtusr(userData.id, userData);alert("Product already in cart!");
          return;
        } else {
          userData.cart.push({ ...elem, qty: 1 });
          updtusr(userData.id, userData);
          alert("Product added to Cart!");
          return;
        }   
      });
   
      localStorage.setItem("loginUser", JSON.stringify(user));
      alert("Product added to Cart!");


    }
    else{
      alert("Product cant be delivered");
    }
    });
  });
};

document.getElementById("apply").addEventListener("click", async (event) => {
  event.preventDefault();
  const food = await fooddt();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  const selectedPrice = document.querySelector('input[name="price"]:checked' )?.value;

  if (selectedPrice == "HTL") filterFood.sort((a, b) => b.price - a.price);
  else if (selectedPrice == "LTH") filterFood.sort((a, b) => a.price - b.price);

  ftl(filterFood);
});

document.getElementById("search").addEventListener("submit", async (event) => {
  event.preventDefault();
  const food = await fooddt();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  const searchValue = document.getElementById("search-food").value;
  const searchProducts = filterFood.filter((elem) =>
    elem.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  ftl(searchProducts);
});

document.getElementById("city").addEventListener("submit", async (event) => {
  event.preventDefault();
  city = document.getElementById("cty").value;
  const food = await fooddt();
  const filterFood = await food.filter(
    (elem) => city.toLowerCase() == elem.city.toLowerCase()
  );

  ftl(filterFood);
});