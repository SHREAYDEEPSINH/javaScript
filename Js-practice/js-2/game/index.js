let userNumber = document.querySelector("#userNumber");
let btn = document.querySelector("#btn");
let randomNumber = document.querySelector("#randomNumber");
let endgame = document.querySelector("#endgame");
let main1=document.querySelector("#main1")
let main2=document.querySelector("#main2")
console.log(main2);

let gameFunction = () => {
    if (userNumber.value >= 1 && userNumber.value <= 20) {
        randomNumber.innerText = Math.floor(Math.random() * 20 + 1)
        if (userNumber.value == randomNumber.innerText) {
            console.log("you won the game");
            endgame.innerText = "you won the game"
            main1.style.backgroundImage="url('https://www.icegif.com/wp-content/uploads/2023/07/icegif-129.gif')";
            main2.style.backgroundImage="url('https://www.icegif.com/wp-content/uploads/2023/07/icegif-129.gif')";

        }else{
            console.log("you lost the game");
            endgame.innerText = "you lost the game";
            main1.style.backgroundImage="url('https://media0.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif?cid=6c09b952z9ezwapjkomelz8wdtcd8oaep2soge4tdw1romz8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=ts')";
            main2.style.backgroundImage="url('https://media0.giphy.com/media/fdGbhuUQpGQkkuuzIr/giphy.gif?cid=6c09b952z9ezwapjkomelz8wdtcd8oaep2soge4tdw1romz8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=ts')";
        }
    }
    else {
        alert("please guess number 1 to 20");
    }
}
btn.addEventListener("click", gameFunction);