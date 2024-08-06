import { nbar, nbar_styles } from "../api/navbar.js";
import { getele } from "../api/Helper.js";
import { fot } from "../api/navbar.js";

const nbarr = getele("nbarr");
nbarr.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
  const styletag = document.createElement("style")
  styletag.innerHTML = nbar_styles();
  document.head.appendChild(styletag)
})

const foot = getele("footr")
foot.innerHTML = fot();





import { createElement, getValue } from "../api/Helper.js";

let data = [];

const API = async () => {
  let request = await fetch("https://dummyjson.com/products");
  let response = await request.json();
  console.log(response.products);
  UI_Product(response.products);
};

const card_Head = document.getElementById("card-head");
const UI_Product = (Data) => {
  card_Head.innerHTML = "";
  Data?.map((elem) => {
    const card_body = createElement("div", "", { class: "card-body" });
    const card = createElement("div", "", { class: "card  h-100 p-4" });
    const col = createElement("div", "", {
      class: "col rounded-4",
      id: "card",
    });
    const View = createElement("button", "View", {
      class: "fs-6 fw-bold border-0 buy-now-btn",
    });
    const bynow = createElement("button", "Buy Now", {
      class: " fw-bold border-0 buy-now-btn",
    });

    card_body.append(
      createElement("h5", `${elem.title}`, { class: "card-title fw-bold" }),
      // createElement("p", `${elem.description}`, { class: "card-text" }),
      createElement(
        "p",
        `Category : <span class="fw-bold">${elem.category}</span>`,
        {
          class: "card-text fw-medium",
        }
      ),
      createElement(
        "p",
        `Price : <span class="fw-bold"> $ ${elem.price}</span>`,
        {
          class: "card-text",
        }
      ),
      View,
         bynow
    );

    card.append(
      createElement("img", "", {
        class: "card-img-top border shadow hover-zoom rounded-3",
        id: "card-img",
        src: `${elem.thumbnail}`,
        alt: `${elem.title}`,
        width: "100%",
        height: "100%",
      }),
      card_body
    );
    col.append(card);
    card_Head.append(col);
    data.push(elem);
    View.addEventListener("click", () => {
      localStorage.setItem("product_id", JSON.stringify(elem.id));
      window.location.href = "/pages/detailPage.html";
    });
    
  });
};

const applyFilters = (event) => {
  event.preventDefault();

  console.log(data);

  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((input) => input.value);

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked'
  )?.value;

  const filteredProducts =
    selectedCategories.length === 0 || selectedCategories.includes("All")
      ? [...data]
      : data.filter((product) => selectedCategories.includes(product.category));

  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "HTL") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "LTH") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };
  const sortedProducts = sortProducts(filteredProducts, selectedPrice);

  UI_Product(sortedProducts);
};

const SearchInputData = (event) => {
  event.preventDefault();
  const search_Value = getValue("input-search");

  const handleSearchData = (value) => {
    return data.filter((ele) => ele.title.includes(value));
  };
  const searchProducts = handleSearchData(search_Value);

  UI_Product(searchProducts);
};

API();
document.getElementById("btn-filter").addEventListener("click", applyFilters);
document
  .getElementById("input-search")
  .addEventListener("keyup", SearchInputData);
document
  .getElementById("search-btn")
  .addEventListener("click", SearchInputData);



// cart
let cart = JSON.parse(localStorage.getItem("cart")) || []

document.getElementById("count").innerHTML = cart.length

const isExists = (id) => {
  let temp = cart.filter((ele) => ele.id == id)
  return temp.length > 0 ? true : false
}
const handleCart = (ele) => {
  if (isExists(ele.id)) {
    cart.map((item, index) => {
      if (item.id == ele.id) {
        cart[index].qty += 1

      }
    })
    alert("qty added to cart")
  }
  else {
    // ele.qty=1
    cart.push({ ...ele, qty: 1 })
    // cart.push(ele)
    alert("added  to the cart")
    document.getElementById("count").innerHTML = cart.length
  }

  localStorage.setItem("cart", JSON.stringify(cart))

}
