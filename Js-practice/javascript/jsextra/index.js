
// console.log(age);
// var age=10;
// console.log(age);


//qus- prime number 
// var p=12;

// for(var i=0;i<=100;i++){
//     if(p%p==0 || p%1==0 || p%i==0){
//         console.log("no");
//     }else{
//         console.log("yes");
//     }
// }
    

// for(var i=1;i<=5;i++){
//     var bag="";
//     for(var j=0;j<=5;j++){
//        if(i==j){

//            bag+="*  ";
//        }else{
//         bag+="  ";
//        }
//     }
//     console.log(bag);
// }




// // object 
// var obj={
//     name:"raj",
//     age:22,
//     gender:"m"
// };

// obj["gender"]="games";
// console.log( obj);






// // concat

// var firstname="2";
// var secondname="3";

// var c=firstname.concat(secondname);
// console.log(c);



// // nested obj

// var obj={
//     name:"ram",
//     mo:12345678,
//     add:{
//         c:"india",
//         s:"guj",
//         city:"ahm"
//     }
// };

// console.log(obj["add"]["s"]);



// // obj with array 

// var intro={
//     name:"tokyo",
//     age:22,
//     g:"f",
//     hobbies:["robbery","party"]
// }
// console.log(intro["hobbies"][1]);



// // for in loop

// var intro={
//     name:"tokyo",
//     age:22,
//     g:"f",
//     hobbies:["robbery","party"]
// }
// for(var key in intro){
//     console.log(key,intro[key]);
// }





// // for Each  and map

// let array=["jale","bi","kaju"];

// array.map(function(ele,index,arr){
//     console.log(arr);
// })



// // filter

// let fil=[7,8,6,23,2,1,45,5];
// let a=fil.filter(function(y){
//     if(y%2==0){
//         return y;
//     }
// })
// console.log(a);


// //reduce accumulator

// let array=[20,30,40,50];
// let a=array.reduce(function(accu,ele,index,arr){
//     return accu+ele;
// },20)
// console.log(a);




// // prime number 

// let p=12;

// if(p>1){
//     let flag=true;
//    for(var i=2;i<p-1;i++){
//       if(p%i==0){
//         flag=false;
//         break;
//       }
//    }

//    if(flag){
//      console.log("prime number");
//    }else{
//     console.log("not prime number");
//    }

// }else{
//     console.log("not prime");
// }




// sort 
let arr=[1,30,4,21,1000];
arr.sort(function(a,b){
    return b-a;
})
console.log(arr);

