
// let count=0
// let cc1,cc2,cc3,cc4
// const counter=(count,s_id,key)=>{
//     count++
//     document.getElementById(s_id).innerHTML=count
//     if(key=="key4"){
//         sessionStorage.setItem(key,count);
//     }
//     else{
//         localStorage.setItem(key,count)
//     }
// }
// const cc=(c_id,c,s_id,key)=>{
//     document.getElementById(c_id).addEventListener("click",()=>{
//         if(key=="key4"){
//            c= sessionStorage.getItem(key)||0;
//         }
//         else{
//           c=  localStorage.getItem(key)||0;
//         }
//         counter(c,s_id,key);
//     })
//     document.addEventListener("DOMContentLoaded",()=>{
//         if(key=="key4"){
//            c= sessionStorage.getItem(key)||0;
//         }
//         else{
//           c=  localStorage.getItem(key)||0;
//         }
//         document.getElementById(s_id).innerHTML=c
//     })
// }
//  cc("heart",cc1,"c1","key1")
//  cc("com",cc2,"c2","key2")
//  cc("sub",cc3,"c3","key3")
//  cc("share",cc4,"c4","key4")


let value=0

const calc=(id,c_id,key)=>{
    document.getElementById(c_id).addEventListener("click",()=>{
        value=localStorage.getItem(key)||0
        value++
        console.log(value);
        localStorage.setItem(key,value)
        document.getElementById(id).innerHTML=value
    })
}
calc("c1","heart","key")