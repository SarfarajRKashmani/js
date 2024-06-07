let count=0
const counter=(id,key)=>{
    count++
    document.getElementById(id).innerHTML=(count)
}
const cc=()=>{
    counter("c1","count")
    counter("c2","count")
    counter("c3","count")
    counter("c4","count")
}
document.getElementById("heart").addEventListener("click",cc)
document.getElementById("com").addEventListener("click",cc)
document.getElementById("sub").addEventListener("click",cc)
document.getElementById("share").addEventListener("click",cc)
