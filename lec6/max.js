let arr=[1,2,3,4,5,66,7,8,90]
let n=arr.length
const max=(arr,n)=>{
    let maxi=arr[0]
    for(let i=0;i<n;i++){
        if(arr[i]>maxi){
            maxi=arr[i]
        }
    }
    return maxi;
}
console.log(max(arr,n));