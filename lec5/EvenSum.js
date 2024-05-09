const evenfun=()=>{
    let num=document.getElementById("num").value
    let result = evensum(num)
    document.getElementById("ans").innerHTML=result
}
const evensum=(num)=>{
    let i,sum=0;
    for(i=1;i<=num;i++){ 
        if(i%2==0){
            sum+=i
        }
    }
    return sum ;
    }
   


