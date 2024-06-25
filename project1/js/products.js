import { createtag } from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let islogin=JSON.parse(localStorage.getItem("isLogin"))||false;
let userdata=JSON.parse(localStorage.getItem("user"))

const logg =()=>{
    if(islogin){
        document.getElementById("navbar").innerHTML=navbar(" Logout", " "+userdata.username)
        document.getElementById("log").addEventListener("click",()=>{
            localStorage.setItem("isLogin",false)
        })
    }
    else{
        window.location.href="/project1/pages/login.html"
    }
}
logg()
let products=JSON.parse(localStorage.getItem("products"))||[]

const mapper = (products) => {
    // document.getElementById("productlist").innerHTML = "";
    products.map((item) => {
        let img = createtag("img", item.img);
        let title = createtag("h4", item.title);
        let price = createtag("p", item.price);
        let category = createtag("p", item.category);
        let div = document.createElement("div");
        let btn = createtag("button", "Buy");
        // btn.addEventListener("click", () => handleCart(item));
        div.append(img, title, price, category, btn);
        document.getElementById("productslist").append(div);
    });
};

mapper(products);

