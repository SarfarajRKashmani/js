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
        window.location.href="/liveproject/pages/login.html"
    }
}
logg()
let products=JSON.parse(localStorage.getItem("products"))||[]

const mapper = (data) => {
    document.getElementById("productslist").innerHTML = "";
    data.map((item) => {
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


const handlesort=(sort)=>{
    if (sort=="lth"){
        let temp=products.sort((a,b)=>a.price-b.price)
        mapper(temp);
        console.log(temp);
    }
    
    else{
        let temp=products.sort((a,b)=>b.price-a.price)
        mapper(temp)
    }
}

document.getElementById("lth").addEventListener("click",()=>handlesort("lth"));
document.getElementById("htl").addEventListener("click",()=>handlesort("htl"));

const handlecategory=(category)=>{
    let temp=products.filter((ele)=>ele.category==category)
    mapper(temp)
}
document.getElementById("kids").addEventListener("click",()=>handlecategory("kids"))
document.getElementById("men").addEventListener("click",()=>handlecategory("men"))
document.getElementById("women").addEventListener("click",()=>handlecategory("women"))

const handlesearch=(value)=>{
    let temp=products.filter((ele)=>ele.title.includes(value))
    mapper(temp)
}
const handlesearchdata=(e)=>{
    e.preventDefault();
    let searchvalue=value("searchvalue")
}
const keypress=(e)=>{
    if(e.key=="Enter"){
        let searchval=value("searchvalue")
        handlesearch(searchval)
    }
    // let searchval=value("searchvalue")
    // handlesearch(searchval)
}
document.getElementById("searchvalue").addEventListener("keypress",keypress)
document.getElementById("search").addEventListener("submit",handlesearchdata)