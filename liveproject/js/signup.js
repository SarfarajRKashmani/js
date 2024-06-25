import value from "../components/helper.js";
import navbar from "../components/navbar.js";

const handledata=(e)=>{
    e.preventDefault()
    let user={
        username:value("username"),
        email:value("email"),
        password:value("password"),  
    }
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("isLogin",true)
}


document.getElementById("navbar").innerHTML=navbar()
document.getElementById("data").addEventListener("submit",handledata)