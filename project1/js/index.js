import navbar from "../components/navbar.js";
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
        window.location.href="./pages/login.html"
    }
}
logg()