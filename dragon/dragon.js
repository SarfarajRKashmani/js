let shop=[]
const uimaker=()=>{
    document.getElementById("cart").innerHTML=""

    for (let i=0;i<students.length;i++){
        let p=document.createElement("p")
        a.innerHTML=students[i].title
        let c=document.createElement("p")
        b.innerHTML=students[i].price
        let d=document.createElement("img")
        c.innerHTML=students[i].url
        documents.getElementById("cart").append9(a,b,c)
    }
}
const handledata=(e)=>{
    e.preventdefault();
    let data={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        url:document.getElementById("url").value
    }
    students.push(data)
    uimaker()
}
document.getElementById("f1").addEventListener("submit",handledata)