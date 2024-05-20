let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let apm=document.getElementById("am-pm")

setInterval(()=>{
    let d=new Date();
    hour.innerHTML=(d.getHours()<10?"0":"")+d.getHours();
    if (hour>12){
        hour=hour-12
    }
    min.innerHTML=(d.getMinutes()<10?"0":"")+d.getMinutes();
    sec.innerHTML=(d.getSeconds()<10?"0":"")+d.getSeconds();
    apm.innerHTML="pm"
    if (hour<12) 
     apm.innerHTML="am"
},1000)
