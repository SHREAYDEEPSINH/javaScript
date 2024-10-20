let likes=0
let b=document.getElementById("count");
function abc(){
    likes++;
    b.innerText=likes
}

function xyz(){
  if(likes<1){
    b.innerText=0;
  }else{
    likes--;
    b.innerText=likes;
  }
}