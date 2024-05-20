let arr=[1,2,3,4,5,6,7,8,-9,12]
// console.log(Math.max(...arr));       find max number
// console.log(Math.min(...arr));       find min number
// console.log(Math.pow(25,2));         find square, cube,quad ........
// console.log(Math.sqrt(625));         find square root
// console.log(Math.round(Math.random()*1000000));      round off and generate random number between 0-1.    
// console.log(Math.floor(2.6));            round off to smaller number
// console.log(Math.ceil(2.6));                round off to greater number

// timing function
setTimeout(()=>{
    let day =new Date();
    console.log(day.getHours(),day.getMinutes(),day.getSeconds());
})
// interval time 

// setInterval(()=>{
//     let date=new Date();
//     console.log(date.getDate(),`/`, date.getMonth()+1,`/`,date.getFullYear()
// ,date.getDay()+1,);
// },1000)