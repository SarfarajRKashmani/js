let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let content=document.querySelector("#content")
let rgb1= "rgba(34,193,195,1)"
let rgb2= "rgba(253,187,45,1)"

const colours=()=>{
    let hexvalues="0123456789abcdef";
    let colors="#"
    for (let i=0; i<6;i++){
        colors+=hexvalues[Math.floor(Math.random()*16)];
        }
        return colors;
}
const handlebtn1=()=>{
    rgb1=colours();
    btn1.textContent=rgb1
    console.log(rgb1);
    document.body.style.background=`linear-gradient(50deg, ${rgb1}, ${rgb2})`;
    content.innerHTML=`background: linear-gradient(50deg, ${rgb1} , ${rgb2});`
}
const handlebtn2=()=>{
    rgb2=colours();
    btn2.textContent=rgb2
    console.log(rgb2);
    document.body.style.background=`linear-gradient(50deg, ${rgb1}, ${rgb2})`;
    content.innerHTML=`background: linear-gradient(50deg, ${rgb1} , ${rgb2});`
}
btn1.addEventListener("click",handlebtn1)
btn2.addEventListener("click",handlebtn2)
content.addEventListener("click",()=>{
    navigator.clipboard.writeText(content.innerHTML)
    alert("copid Sucessfully")
})




        

        





