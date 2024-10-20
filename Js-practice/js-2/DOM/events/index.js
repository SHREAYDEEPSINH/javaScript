
// let btn=document.querySelector(".btn");
// console.log(btn);

// btn.onclick=()=>{
//     document.body.style.backgroundColor="red";
// }




// let button = document.querySelector(".btn")
// console.log(button);


// event object 
// button.onclick=(e)=>{
//     console.log("event is ",e);
//     console.log("i am clicked again");
// }


let btn = document.getElementById("btn");
btn.ondblclick = () => {
    console.log("click me 2 times!");
}