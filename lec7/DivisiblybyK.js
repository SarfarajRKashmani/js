const evenfun=()=>{
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
     div(num1,num2)
    
}
const div=(num1,num2)=>{
    let i;
    for(i=1;i<=num1;i++){ 
        if(i%num2==0){
            document.getElementById("ans").append(`${i} `)
            console.log(i);
        }
    }
    }
   


