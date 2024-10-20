let cel = document.querySelector(".cel");
let convertBtn = document.querySelector(".convert");
let ans = document.querySelector(".ans");



const convertFun=(e)=>{
    if(cel.value===""){
        alert("Enter Value");
    }else{
        e.preventDefault();
        let a=cel.value.trim();
        f=(a*9/5)+32;
        ans.innerText=f;
    }
}



convertBtn.addEventListener("click", convertFun);
