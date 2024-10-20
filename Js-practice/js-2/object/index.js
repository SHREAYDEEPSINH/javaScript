// // object function 

// let person={
//     firstName:"shreaydeepsinh",
//     lastName:"vaghela",
//     about:function(){
//         console.log(`myname is ${this.firstName} ${this.lastName}`);
//     }
// }
// person.about();







// function personalInfo(){
//     console.log(`myname is ${this.firstName} ${this.lastName}`);
// }

// let person={
//     firstName:"shreaydeepsinh",
//     lastName:"vaghela",
//     about:personalInfo
// }
// let person2={
//     firstName:"satya",
//     lastName:"gohil",
//     about:personalInfo
// }

// console.log(person);
// person.about();
// console.log(person2);








// // call method 

// function personalInfo(age=12){
//     console.log(`myname is ${this.firstName} ${this.lastName} and age is ${age}`);
// }

// let person={
//     firstName:"shreaydeepsinh",
//     lastName:"vaghela",
//     about:personalInfo
// }

// let person2={
//     firstName:"satya",
//     lastName:"gohil",
//     about:personalInfo
// }

// personalInfo.call(person,23);
// personalInfo.call(person2);







// // apply method 

// function personalInfo(age=12,hobby){
//     console.log(`myname is ${this.firstName} ${this.lastName} and age is ${age} and hobby is ${hobby}`);
// }

// let person={
//     firstName:"shreaydeepsinh",
//     lastName:"vaghela",
//     about:personalInfo
// }

// let person2={
//     firstName:"satya",
//     lastName:"gohil",
//     about:personalInfo
// }

// personalInfo.apply(person,[23,"guitar"]);
// personalInfo.apply(person2,[23,"artwork"]);







// // bind method 

// function personalInfo(age=12,hobby){
//     console.log(`myname is ${this.firstName} ${this.lastName} and age is ${age} and hobby is ${hobby}`);
// }

// let person={
//     firstName:"shreaydeepsinh",
//     lastName:"vaghela",
//     about:personalInfo
// }

// let person2={
//     firstName:"satya",
//     lastName:"gohil",
//     about:personalInfo
// }

// let ans=personalInfo.bind(person,23,"guitar");
// let ans2=personalInfo.bind(person2,23,"artwork");
// ans();
// ans2();




// // prototype function 

// function hello(){
//     console.log("hello");
// }
// hello.prototype.key="harsh"
// console.log(hello.prototype);
// console.log(typeof hello);







// // proto

// let person={
//     firstname:"satya",
//     lastname:"gohil"
// }
// console.log(person);

// let person2=Object.create(person);
// person2.address="gujarat";
// console.log(person2.firstname);
// console.log(person2.address);
// console.log(person2);