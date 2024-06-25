import value from "../components/helper.js";
import navbar from "../components/navbar.js";
let userData=JSON.parse(localStorage.getItem("user"))
document.getElementById("navbar").innerHTML=navbar()
const handledata =(e)=>{
    e.preventDefault();
    let user ={
        email:value("email"),
        password:value("password"),
    }
    console.log(user);
    if (userData){
    if (userData.email!=user.email){
        alert("user not found"+user.email)
    }
    else if (userData.password!=user.password){
        alert("Incorret Password"+user.password)
    }
    else{
        alert("Login Sucessfull"+user.password)
        localStorage.setItem("isLogin",true)
        window.location.href="/liveproject/liveproject.html"
    }
}
else{
    alert("plz Signup First")
    setTimeout(()=>{
        window.location.href="/liveproject/pages/signup.html"
    },2000)
}
}

document.getElementById("data").addEventListener("submit",handledata)