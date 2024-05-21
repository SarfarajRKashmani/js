const products=[]
    const delete1=(index)=>{
        products.splice(index,1)
        uimaker();
    }
    const uimaker=()=>{
        document.getElementById("cart").innerHTML=""
        products.map((items,index)=>{
        let img=document.createElement('img')
        img.src=items.image1
        let price=document.createElement('p')
        price.innerHTML=items.price1
        let tile=document.createElement('p')
        tile.innerHTML=items.title1
        let btn1=document.createElement('button')
        btn1.innerHTML="BUY NOW"
        btn1.addEventListener("click",()=>{
            alert("Added To Cart Sucessfully")
        })
        let btn2=document.createElement('button')
        btn2.innerHTML="Delete"
        btn2.addEventListener("click",()=>delete1())
        let div1=document.createElement('div')
        div1.append(btn1,btn2)

        let div2=document.createElement('div')
        div2.append(img,price,tile,div1)
        document.getElementById("cart").append(div2)})
    }

const handeldata=(e)=>{
    e.preventDefault();
    let cart1 ={
        image1:document.getElementById("image").value,
        title1:document.getElementById("title").value,
        price1:document.getElementById("price").value   
    }
        products.push(cart1)
     uimaker()
}
document.getElementById('data').addEventListener("submit",handeldata)

