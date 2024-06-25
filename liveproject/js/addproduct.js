import navbar from "../components/navbar.js";
import value from "../components/helper.js"
document.getElementById("navbar").innerHTML=navbar()
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
const handledata=(e)=>{
    e.preventDefault()
    let product={
        title:value("title"),
        price:value("price"),
        img:value("img"),
        category:value("category"),
    
    }
    products.push(product) 
    localStorage.setItem("products",JSON.stringify(products))
    console.log(product);
}
document.getElementById("productdata").addEventListener("submit",handledata)
