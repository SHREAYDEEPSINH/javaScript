// alert("are you sure?")


// var a=10;
// if(a>18){
//     console.log("you can vote");
// }else{
//      alert("you are under age");
// }


// var a=confirm("allow location");
// if(a==true){
//     alert("we are accessing your locatin");
// }else{
//     alert("dennide");
// }


// var age=prompt("enter your age");
// console.log(age);

// var age=prompt("enter your age ");
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("not");
// }


// 20/02/24
//1 swap

// var a=10;
// var b=20;

// console.log(a);
// console.log(b);

// var temp=a;
// a=b;
// b=temp;

// console.log("a:",a);
// console.log("b:",b);

// 2 range 
// var marks=35;
// if(marks>=90 && marks<=100){
//     console.log("A grade");
// }else if(marks>=80 && marks<90){
//     console.log("B grade");
// }else if(marks>=70 && marks<80){
//     console.log("C grade");
// }else if(marks>=35 && marks<70){
//     console.log("D grade");
// }else if(marks<0 || marks>100){
//     console.log("invalid");
// }else{
//     console.log("fail");
// }

// 3 interest 

// var p=3000;
// var r=10;
// var t=1;
// var si=p*r*t/100;
// console.log(si);



// 22/02/24 

// var obj={
//     Maths:58,
//     Socialscience:74,
//     Gujarati:76,
//     English:64,
//     Science:53,
//     Sanskrit:74
// };
// console.log(obj["Maths"]);
// console.log(obj["Socialscience"]);
// console.log(obj["Gujarati"]);
// console.log(obj["English"]);
// console.log(obj["Science"]);
// console.log(obj["Sanskrit"]);


// var obj={
//     Maths:58,
//     Socialscience:74,
//     Gujarati:76,
//     English:64,
//     Science:53,
//     Sanskrit:74
// };
// console.log(typeof obj);
// console.log(obj.Maths);


// var obj={
//     Maths:58,
//     Socialscience:74,
//     Gujarati:76,
//     English:64,
//     Science:53,
//     Sanskrit:74
// };
// obj["com"]=99;
// obj["Maths"]=95;
// console.log(obj);

// 26/02/24

// var a="2";
// var b="3";
// var c=a.concat(b);
// console.log(c);



// var obj={
//     name:"ram",
//     mo:1234567890,
//     pin:360001,
//     add:{
//         c:"india",
//         s:"guj",
//         city:"ahme",
//     }
// }
// // console.log(obj.add.city);
// console.log(obj["add"]["c"]);



// var intro={
//     name:"tokyo",
//     age:22,
//     hobbies:["robbery","party","somthing"]
// }
// console.log(intro["hobbies"][0]);




// var bottles=[
//     {
//         img:"url",
//         des:"milton aqua",
//         price:1400
//     },
//     {
//         img:"url2",
//         des:"plain copper aqua",
//         price:1000
//     }
// ]
// console.log(bottles[1]["img"]);




// var bottles=[
//     {
//         img:"url",
//         des:"milton aqua",
//         price:1400,
//         rating:1
//     },
//     {
//         img:"url2",
//         des:"plain copper aqua",
//         price:1000,
//         rating:2
//     },
//     {
//         img:"url3",
//         des:"plain copper aqua",
//         price:1000,
//         rating:1
//     },
//     {
//         img:"url4",
//         des:"plain copper aqua",
//         price:1000,
//         rating:4
//     },
//     {
//         img:"url5",
//         des:"plain copper aqua",
//         price:1000,
//         rating:5
//     },
//     {
//         img:"url6",
//         des:"plain copper aqua",
//         price:1000,
//         rating:3
//     },
//     {
//         img:"url7",
//         des:"plain copper aqua",
//         price:1000,
//         rating:3
//     },
//     {
//         img:"url8",
//         des:"plain copper aqua",
//         price:1000,
//         rating:2
//     },
// ]

// var sum=0;
// for(var i=0;i<bottles.length;i++){
//     if(bottles[i].rating==1){
//         console.log(bottles[i]);
//     }
// }

// for(var i=0;i<bottles.length;i++){
//     sum+=bottles[i].price;
// }
// console.log(sum);




// var str1="Hello";
// var str2="world";
// var result=str1+" "+str2;
// console.log(result);


// var str1="Today is ";
// var str2="a beautiful";
// var str3="day!";
// var result=str1.concat(str2,str3);
// console.log(result);

// var str="hello";
// str+="world";
// console.log(str);

// var str1="hello";
// var str2="world";
// var result=str1.concat(" ",str2);
// console.log(result);



// var obj={
//     married:"true",
// }
// obj["married"]="false";
// console.log(obj);





// var amazon=[
//     {
//         name:"iphone 13",
//         price:75000,
//         rationg:4
//     },
//     {
//         name:"macbook",
//         price:220000,
//         rationg:4.5
//     },
//     {
//         name:"plastation 5",
//         price:50000,
//         rationg:4.2
//     },
//     {
//         name:"xbox",
//         price:42000,
//         rationg:3.8
//     },
// ]
// for(var i=0;i<amazon.length ;i++){
//     if(amazon[i].price>25000 && amazon[i].price<60000){
//         console.log(amazon[i].name);
//     }
// }

// 27/02/24

// var obj={
//     name:"tokyo",
//     age:23,
//     g:"f"
// }
// for(var key in obj){
//     console.log(obj[key]);
// }