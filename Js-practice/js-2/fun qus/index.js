// // array sum 

// let arr=[1,2,3,4,5,6]
// let sum=0;
// let arraysum=()=>{
//     for(let i=0;i<=arr.length-1;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// let total=arraysum();
// console.log(total);



// // odd number from original array 

// let arr=[1,2,3,4,5,6];
// console.log(arr)
// let oddarr=[];
// let oddnumber=()=>{
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]%2===0){
//             oddarr.push(arr[i]);
//         }
//     }
//     return oddarr;
// }

// let ans=oddnumber();
// console.log(ans)


// // Even number from original array 

// let arr=[1,2,3,4,5,6];
// console.log(arr)
// let evenarr=[];
// let evennumber=()=>{
//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]%2!==0){
//             evenarr.push(arr[i]);
//         }
//     }
//     return evenarr;
// }
// let ans=evennumber();
// console.log(ans);





let arr1=["sonal","harsh"]
let arr3=[...arr1]
console.log(arr3);
arr1.push("")