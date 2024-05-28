let t1=document.getElementById("1");
let submit =document.getElementById("sub")
let todo1=document.querySelector(".todo1")


const todo=()=>{
    let n1=document.createElement("p");
    n1.textContent=t1.value;
   todo1.append(n1)
   t1.textContent="";

};

todo1.addEventListener("click",)
submit.addEventListener("click",todo());

