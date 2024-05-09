const cal = (opr, num1, num2) => {
    let ans = 0
    if (opr == "+") {
        ans = Number(num1) + Number(num2)
    }
    else if (opr == "-") {
        ans=num1-num2
    }
    else if(opr=="*"){
        ans=num1*num2
    }
    else{
        ans=num1/num2
    }
    return ans;
}







const getvalue = () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let opr = document.getElementById("opr").value
        let result = cal(opr,num1,num2)
     document.getElementById("result").innerHTML = result
}