
// // odd number using loop and function 

// function number(){
//     for(let i=1 ;i<=20;i++){
//         if(i%2===0){
//             console.log("odd numbers",i);
//         }
//     }
// }
// number();

// let number=function(){
//     for(let i=1 ;i<=20;i++){
//         if(i%2===0){
//             console.log("odd numbers",i);
//         }
//     }
// }
// number();


// let number=()=>{
//     for(let i=1 ;i<=20;i++){
//         if(i%2===0){
//             console.log("odd numbers",i);
//         }
//     }
// }
// number();


// // Even number using loop and function 


// function number(){
//     for(let i=1 ;i<=20;i++){
//         if(i%2!==0){
//             console.log("Even numbers",i);
//         }
//     }
// }
// number();

// let number=function(){
//     for(let i=1 ;i<=20;i++){
//         if(i%2!==0){
//             console.log("Even numbers",i);
//         }
//     }
// }
// number();


// let number=()=>{
//     for(let i=1 ;i<=20;i++){
//         if(i%2!==0){
//             console.log("Even number",i);
//         }
//     }
// }
// number();







// // 17-04-24 

// let name1="sonal"
// let str="";
// for(let i=name1.length-1;i>=0;i--){
//     str=str+name1[i];
// }
// console.log(str)




let revers=(name1)=>{
    let str="";
    for(let i=name1.length-1;i>=0;i--){
        str=str+name1[i];
    }
    return str;
}
let ans= revers("sonal");
console.log(ans);




// let arr=[1,2,"sonal","monal",true,false,undefined]
// let name1=prompt("Enter name");
// let value="";
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]==name1){
//         value=arr[i].length;
//         console.log(value);
//     }
// }





// let income = +prompt("Enter your income");
// let tax = 0;
// let taxcal = () => {
//     if (income > 0 && income <= 10000) {
//         tax = income * 5 / 100;
//     } else if (income > 10000 && income <= 20000) {
//         tax = income * 10 / 100;
//     } else if (income > 20000 && income <= 30000) {
//         tax = income * 15 / 100;
//     } else if (income > 30000) {
//         tax = income * 20 / 100;
//     }
//     return tax;
// }

// let ans= taxcal();   
// console.log(`Tax is ${ans}`);





// let month=+prompt("Enter a number ");

// let monthname=()=>{
//     switch(month){
//         case 1:console.log("january");
//         break;
//         case 2:console.log(("feb"));
//         break;
//         case 3:console.log("march");
//         break;
//         case 4:console.log(("april"));
//         break;
//         case 5:console.log("may");
//         break;
//         case 6:console.log(("june"));
//         break;
//         case 7:console.log("july");
//         break;
//         case 8:console.log(("aug"));
//         break;
//         case 9:console.log("september");
//         break;
//         case 10:console.log(("octber"));
//         break;
//         case 11:console.log("november");
//         break;
//         case 12:console.log(("december"));
//         break;
//         default:console.log("not valid month")
//     }
// }
// monthname();









// // qus 3 


// let price=+prompt("Enter Price");
// let discount=0;
// let afterdiscount=0;

// let total=()=>{
//     if(price>0 && price<=100){
//         discount=price*5/100;
//         afterdiscount=price-discount;
//         console.log("After discount",afterdiscount);
//     }else if(price>=101 && price<500){
//         discount=price*10/100;
//         afterdiscount=price-discount;
//         console.log("After discount",afterdiscount);
//     }else if(price>=500){
//         discount=price*15/100;
//         afterdiscount=price-discount;
//         console.log("After discount",afterdiscount);
//     }
// }
// total();





// // qus 4 

// let weight=+prompt("Enter Your Weight ");
// let height=+prompt("Enter Your Height in meter");
// let BMI=weight/(height*height);

// let weightcount=()=>{
//     if(BMI<18.5){
//         console.log("Underweight");
//     }else if(BMI>=18.5 && BMI <=24.9){
//         console.log("Normal");
//     }else if(BMI>=25 && BMI<=29.9){
//         console.log("Overweight");
//     }else{
//         console.log("Obese");
//     }
// }
// weightcount();
