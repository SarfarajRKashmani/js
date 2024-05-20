const roll=()=>{
    
    document.getElementById("dice").innerHTML=""
    let rol=Math.floor(Math.random()*6)+1;
    let img=document.createElement("img")
    img.src="./"+rol+".png";

    document.getElementById("dice").append(img);
}
document.getElementById("roll").addEventListener("click",roll);
