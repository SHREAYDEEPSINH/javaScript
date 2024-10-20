let incrementBtn=document.getElementsByClassName("increment")[0];
let counter=+document.getElementsByClassName("count")[0].innerText;
let decrementBtn=document.getElementsByClassName("decrement")[0]; 

let countVar=document.querySelector(".count");

let resetBtn=document.querySelector(".reset");
console.log(resetBtn);

console.log(incrementBtn);
console.log(decrementBtn);
console.log(counter);
console.log(countVar);

incrementBtn.addEventListener("click",()=>{
    counter=counter+1;
    countVar.innerText=counter;
})

decrementBtn.addEventListener("click",()=>{
    if(counter>0){
        counter=counter-1;
        countVar.innerText=counter;
    }
})

resetBtn.addEventListener("click",()=>{
        counter=0;
        countVar.innerText=counter;
})






