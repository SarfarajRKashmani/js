import { createtag } from "../components/helper.js";
import value from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let islogin=JSON.parse(localStorage.getItem("isLogin"))||false;
let userdata=JSON.parse(localStorage.getItem("user"))
let cart=JSON.parse(localStorage.getItem("cart"))||[]


const isExist=(id)=>{
    let temp=cart.filter((ele)=>ele.id==id)
    return temp.length>0 ? true : false
}

const handleCart=(le)=>{
    if(isExist(le.id)){
        cart.map((item,index)=>{
            if (item.id==le.id){
                cart[index].qty=+1
            }
        })
        alert("Qty Added To Cart")
    }
    else{
        cart.push({...le,qty:1})
        alert("Item Added To Cart")
        document.getElementById("count").innerHTML=cart.length
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}




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
        img.setAttribute("class","imgg")
        let title = createtag("h4", item.title);
        let price = createtag("p", item.price);
        let category = createtag("p", item.category);
        let div = document.createElement("div");
        let btn = createtag("button", "Buy");
        btn.addEventListener("click", () => handleCart(item));
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
    let searchval=value("searchvalue")
    handlesearch(searchval)
}
const keypress=(e)=>{
    // if(e.key=="Enter"){
    //     let searchval= value ("searchvalue")
    //     handlesearch(searchval)
    //     console.log(searchval);
    // }
    let searchval=value("searchvalue")
    handlesearch(searchval)
}
document.getElementById("searchvalue").addEventListener("keypress",keypress)
document.getElementById("search").addEventListener("submit",handlesearchdata)