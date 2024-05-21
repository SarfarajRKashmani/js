let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let apm=document.getElementById("am-pm")

setInterval(()=>{
    let d=new Date();
    let h=d.getHours()
    hour.innerHTML=(d.getHours()<10?"0":"")+d.getHours();
    if (h>12){
        h=h-12
        hour.innerHTML=(h<10 ? "0":"") + `${h}`;
    }
    min.innerHTML=(d.getMinutes()<10?"0":"")+d.getMinutes();
    sec.innerHTML=(d.getSeconds()<10?"0":"")+d.getSeconds();
   
let newH=d.getHours()
if(newH>12 && newH<24){
    apm.innerHTML="pm"
}else{
    apm.innerHTML="am"
}

},1000)
