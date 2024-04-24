const getvalue=()=>{
    let num=document.getElementById("num1").value;
    div(num)
}
 
const div=(num1)=>{
    
    if (num1%3==0){
        document.getElementById("result").innerHTML="Yes"
    }
    else{
        document.getElementById("result").innerHTML="No"
    }
}



