import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()
let islogin=JSON.parse(localStorage.getItem("isLogin"))||false;
let userdata=JSON.parse(localStorage.getItem("user"))
let cart=JSON.parse(localstorage.getitem("cart"))||[]

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

const mapper=(cart)=>{
    document.getElementById("cart").innerHTML=`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`
    cart.map((item,i)=>{
        let td1=document.createElement("td");
        let img=createtag("img",item.img)
        td1.append(img)
        let td2=createtag("td",item.title);
        let td3=createtag("td",item.category);
        let td4=createtag("td",item.price);
        let td5=document.createElement("td");
        
    })
}