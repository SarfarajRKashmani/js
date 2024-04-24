const clickevent=()=>{
    let num=document.getElementById("num").value
    let result = check(num)
    document.getElementById("result").innerHTML=result
}

const check=(num)=>{
    let ans=0;
    if (num%2==0){
       ans= "it's an even number"
    }
    else{
      ans=  "it's an odd number"
    }
    return ans;
}  