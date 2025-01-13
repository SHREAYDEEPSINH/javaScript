// var arr=[4,5,6,7];
// var sum=0;

// for(var i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     sum+=arr[i];
//     }
// console.log(sum);



// var arr=[[1,2,3],
//           [4,5,6]];

// for(var i=0;i<2;i++){
//     for(var j=0;j<3;j++){
//         console.log(arr[i][j])
//     }
// }





// var arr=[10,20,10,60];
// arr.push(50);
// console.log(arr);




// var arr=[10,20,10,60];
// arr.pop();
// console.log(arr);




// //  min  number 

// var array=[5,2,4,7,3];
// var min=Infinity;
// for(var i=0;i<array.length;i++){
//     if(array[i]<min){
//         min=array[i];
//     }
// }
// console.log(min);


// // max number 

// var array=[5,2,4,7,3];
// var max=-Infinity;
// for(var i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//     }
// }
// console.log(max);



// var min=Math.min(10,50,60,80);
// console.log(min);



// // revers Array 

// var arr=[1,2,3,4,5];

// for(var i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }



// var a= [10,20,30]
// var bag= []
// for(var i=a.length-1; i>=0 ;i--){
//     bag.push(a[i])
// }
// console.log(bag)




// // Math.ceil ,floor ,round 

// var month=5.4;
// console.log(Math.ceil(month));

// var month=5.8;
// console.log(Math.floor(month));

// var month=5.8;
// console.log(Math.round(month));





// var bag=[];
// for(var i=1;i<=5;i++){
//     bag.push("* ");
//     console.log(bag); 
// }

// var bag="";
// for(var i=1;i<=5;i++){
//     bag+="* "
//     console.log(bag); 
//     }





// var obj={
//     "my-property":"banglo"
// }
// console.log(obj["my-property"])




// var obj ={
//     name:"tokyo",
//     age:22,
//     g:"f"
// }

// for(var key in obj){
//     console.log(key,obj[key]);
// }





// function aFun(a,b){
//     var sum=a+b;
//     return sum
// }
// console.log(aFun(10,20))







// function a(b){
//     for(var i=0;i<b.length;i++){
//         console.log(b[i]);
//     }
// }

// var array=[7,8,9];
// a(array);






// class Info{
//     myName(name){
//         this.name=name;
//         console.log("my name is",this.name);
//     }
//     myAge(age){
//         this.age=age
//         console.log("my age is",this.age);
//     }
// }

// let person1= new Info();
// let person2= new Info();
// console.log("person1 is",person1);
// console.log("person2 is",person2);
// person1.myName("shreay");
// person1.myAge(22)
// person2.myName("sr");
// person2.myAge(23)





// class Person{
//     constructor(name,age,edu){
//         this.name=name;
//         this.age=age;
//         this.edu=edu;
//     }
//     myName(){
//         console.log(`my name is ${this.name}`)
//     }
//     myAge(){
//         console.log(`my age is ${this.age}`);
//     }
//     myEdu(){
//         console.log(`my education is ${this.edu}`)
//     }
// }

// let person1= new Person("shreay",22,"m.com");
// person1.myName();
// person1.myAge();
// person1.myEdu();



// const arr=[10,2,3,4,5,6,7,8,9,10];

// const sumOfNumber = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum
// }
// console.log(sumOfNumber(arr));



// const sumOfArray = arr.reduce((acc, curr)=>{
//      acc = acc + curr;
//      return acc;
// }, 0)
// console.log(sumOfArray);




// // min number 

// const arr=[10,2,3,4,5,6,7,8,9,10];

// let minNumber= function (arr){
//     let min=Infinity;
//     for(let i=0 ;i < arr.length; i++){
//         if(min>arr[i]){
//             min=arr[i];
//         }
//     }
//     return min; 
// }
// console.log(minNumber(arr));



// min with reduce method 

// const arr=[10,20,3,4,5,6,7,8,9,10];
// let minNummber= arr.reduce((acc,curr)=>{
//     if(acc>curr){
//         acc=curr;
//     }
//     return acc;
// },Infinity)
// console.log(minNummber);


// // max number 
// const arr=[1,2,3,4,5,6,7,80,9,10];

// let maxNumber=(arr)=>{
//    let max=-Infinity;
//    for(let i=0;i<arr.length;i++){
//      if(max<arr[i]){
//         max=arr[i];
//      }
//    }
//    return max;
// }
// console.log(maxNumber(arr));




// // max number using reduce 

// const arr=[1,2,3,4,5,6,7,70,9,10];

// let maxNumber=arr.reduce((acc,curr)=>{
//    if(acc<curr){
//     acc=curr
//    }
//    return acc;
// },-Infinity)
// console.log(maxNumber);




// multiply Numbers 

// const arr=[1,2,3,4];

// let multiplyNumbers=(arr)=>{
//     let multiply=1;
//     for(let i=0;i<arr.length;i++){
//         multiply=multiply*arr[i];
//     }
//     return multiply
// }
// console.log(multiplyNumbers(arr));


// multiply Numbers using reduce 

// let arr=[1,2,3,4];

// let multiplyNumbers=arr.reduce((acc,curr)=>{
//      acc=acc*curr;
//      return acc;
// },1)
// console.log(multiplyNumbers);








// var date=new Date();
// console.log(date)

// var b=date.getMilliseconds();
// console.log(b);


















// pattern 
// var bag = []
// for(var i=1 ; i<=5 ;i++){
//     bag.push("* ")
// }
// console.log(bag)

// var bag=" ";
// for(var i=1 ; i<=5 ; i++){
//     bag+="* "
//     console.log(bag)
// }



// for(var i=0 ; i<5 ;i++){
//     var bag = " "
//     for(var j=0 ; j<5 ;j++){
//       if(i==0 || j==0 || i==4 || j==4){
//           bag+="* "
//       }else{
//         bag+="  "
//       }
//     }
//     console.log(bag)
// }



// let name = "shreay     ";
// let newName = name.trim().toUpperCase().slice(0,4)
// console.log(newName)


// for(let i=0; i<=5 ; i++){
//     let row= ""
//     for(let j=0 ; j<=i ; j++){
//         row+=j+" "
//     }
//     console.log(row)
// }



// let a=["one" ,"two" ,"three"]
// let b = [...a]

// console.log(b,"b is")

// a.push("four")
// console.log(a ,"after");
// console.log(b ,"after");


// function sum(){
//     return function printHello(){
//         console.log("hello")
//     }
// }
// let ans=sum()
// ans() 




// find

// let arr = [1,2,3,4,5,6,7,8,9,12]
// let ans = arr.find((ele,ind,arr)=>{
//     return ele === 12 ;
// })
// console.log(ans)


// some


// let arr = [1,3,5,7,9,10]
// let ans = arr.some((ele , ind , arr)=>{
//     return ele%2==0
// })
// console.log(ans)



// findIndex

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let ans = arr.findIndex((ele,ind,arr)=>{
//     return ele === 5 ;
// })
// console.log(ans)


// object 

// let person = {
//     name : "sonal",
//     address : "delhi",
//     profession : "teaching"
// }
// //for in
// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// console.log(Object.keys(person))
// // for of
// for(let key of Object.keys(person)){
//     console.log(`${key} : ${person[key]}`)
// }

// console.log(Object.values(person))




// prtotype 

function hello(){
    console.log("hello");
}
hello.prototype.key="shrey"
hello.prototype.key1="deep"
console.log(hello.prototype)
console.log(typeof hello)