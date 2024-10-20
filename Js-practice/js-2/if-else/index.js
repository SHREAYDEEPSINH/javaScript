// let number = +prompt("enter a number ");


// if(number>9 && number<100 || number<-9 && number>-100 ){
//     console.log("two digit number")
// }else{
//     console.log("not two digit number")
// }


// console.log(a);
// let a="ram";
// console.log(a);


// let year=+prompt("Enter year");

// if(year%4===0 && year%100===0 && year%400===0){
//   console.log("leap year");
// }
// else if(year%4===0 && year%100!==0){
//   console.log("leap year");
// }else{
//     console.log("not leap");
// }




// // leap year or not 

// let year=+prompt("Enter year");
// if(year%4===0){
//   if(year%100!==0){
//     console.log("leap year");
//   }
//   else{
//     if(year%400===0){
//       console.log("leap year");
//     }else{
//       console.log("not leap year");
//     }
//   }
// }
// else{
//     console.log("not leap");
// }





// // greastest of three number 

// let a=+prompt("enter first value");
// let b=+prompt("enter seconed value");
// let c=+prompt("enter third value");
// if(a>b && a>c){
//    console.log("a is greatest");
// }else if(b>a && b>c){
//    console.log("b is greatest");
// }else{
//    console.log("c is greatest");
// }



// // greastest of three number using function

// let a = +prompt("enter first value");
// let b = +prompt("enter seconed value");
// let c = +prompt("enter third value");
// let ans="";

// let greatnumber =(first, sec, third) => {
//     if (first > sec && first > third) {
//         ans=first;
//     } else if (sec > first && sec > third) {
//         ans=sec;
//     } else {
//         ans=third;
//     }
//     return ans;
// }
// let great=greatnumber(a, b, c);
// console.log(great);






// // check number is positive negative or zero

// let number=+prompt("Enter a number :");

// if(number>0){
//     console.log("positive number ");
// }else if(number<0){
//     console.log("negative number ");
// }else{
//     console.log("zero");
// }



// // number is divisible by 5 and 11 or not

// let number=+prompt("Enter a number ");

// if(number%5===0 && number%11===0){
//     console.log("Divisible by 5 and 11");
// }else{
//     console.log("not divisible by 5 and 11");
// }



// // Grade

// let physics=+prompt("Enter physics mark");
// let chemisty=+prompt("Enter chemisty mark");
// let biology=+prompt("Enter biology mark");
// let mathematics=+prompt("Enter mathematics mark");
// let computer=+prompt("Enter computer mark");

// let sum=physics+chemisty+biology+mathematics+computer;
// console.log(sum);
// let percentage=sum/5;
// console.log(percentage);

// if(percentage>= 90){
//     console.log("A Grade");
// }else if(percentage>=80){
//     console.log("B Grade");
// }else if(percentage>=70){
//     console.log("C Grade");
// }else if(percentage>=60){
//     console.log("D Grade");
// }else if(percentage>=40){
//     console.log("E Grade");
// }else if(percentage<40){
//     console.log("F grade");
// }