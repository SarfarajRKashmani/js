let min =1 
let sec=3
let hour
let id=setInterval(()=>{
    console.log(`${min}:${sec}`);
    
    sec=sec-1
    if (min==0&& sec==0){
        clearInterval(id)
        console.log("Sale is end");
    }
    if (sec==0){
        min=min-1
        sec=3
    }
},1000)