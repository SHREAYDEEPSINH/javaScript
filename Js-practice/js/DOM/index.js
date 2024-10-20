// prime or not 

let p=11;

if(p>1){
  let flag=true;

  for(let i=2;i<p-1;i++){
    if(p%i==0){
        flag=false;
        break;
    }
  }
  if(flag==true){
    console.log("prime number");
  }else{
    console.log("not prime");
  }


}else{
    console.log("not prime");
}