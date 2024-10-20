let firstInput=document.querySelector(".firstinput");
let secondInput=document.querySelector(".secondinput");
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let multiple=document.querySelector(".multiple");
let divide=document.querySelector(".divide");
let result=document.querySelector(".ans");
console.log(firstInput,secondInput,plus,minus,multiple,divide,result);


let incrimentFunction=(e)=>{
    e.preventDefault();
    plus=(+firstInput.value.trim())+(+secondInput.value.trim());
    result.innerText=plus;
}
let decrimentFunction=(e)=>{
    e.preventDefault();
    minus=(+firstInput.value.trim())-(+secondInput.value.trim());
    result.innerText=minus;
}
let multipleFunction=(e)=>{
    e.preventDefault();
    multiple=(+firstInput.value.trim())*(+secondInput.value.trim());
    result.innerText=multiple;
}
let divideFunction=(e)=>{
    e.preventDefault();
    divide=(+firstInput.value.trim())/(+secondInput.value.trim());
    result.innerText=divide;
}

plus.addEventListener("click",incrimentFunction);
minus.addEventListener("click",decrimentFunction);
multiple.addEventListener("click",multipleFunction);
divide.addEventListener("click",divideFunction);