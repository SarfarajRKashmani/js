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

const handleqty=(index,opr)=>{
    if (opr=="+"){
        cart[index].qty+=1
    }
}
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

        let btn1=createtag("button","-");
        let btn2=createtag("button",item.qty)
        let btn3=createtag("button","+");
        btn1.addEventListener("click",handleqty(i,"-"))
        btn3.addEventListener("click",handleqty(i,"+"))
        td5.append(btn1,btn2,btn3)
        let td7=createtag
    })
}