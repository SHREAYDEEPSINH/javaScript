let fullName=document.querySelector(".fullName");
let email=document.querySelector(".email");
let password=document.querySelector(".password");
let confirmpassword=document.querySelector(".confirmpassword");

let submitBtn=document.querySelector(".submit");


let formValidetion=(e)=>{
    e.preventDefault();
    if(fullName.value.trim()===""){
        alert("enter your name");
    }else if(email.value.trim()===""){
        alert("enter your email");
    }else if(!(email.value.trim().includes("@") && email.value.trim().includes("."))){
        alert("somthing wrong in email");
    }else if(password.value.trim()!==confirmpassword.value.trim()){
        alert("password does not match");
    }else if(password.value.trim()===""){
        alert("enter password");
    }else{
        alert("form submited");
        fullName.value="";
        email.value="";
        password.value="";
        confirmpassword.value="";
    }

}
submitBtn.addEventListener("click",formValidetion);


