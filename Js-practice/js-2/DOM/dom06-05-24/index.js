// // get attribute

// let para=document.querySelector("#para");
// console.log(para.getAttribute("id"));




// // set attribute

// let para=document.querySelector("#para");
// console.log(para.setAttribute("id","new-id"));




// // prepand

// let div=document.querySelector(".abc");
// let btn=document.createElement("button");
// btn.innerText="click here";
// console.log(div);
// console.log(btn);

// div.prepend(btn);




// // append 

// let div=document.querySelector(".abc");
// let btn=document.createElement("button");
// btn.innerText="click here";
// console.log(div);
// console.log(btn);

// div.append(btn);



// // before

// let div=document.querySelector(".abc");
// let btn=document.createElement("button");
// btn.innerText="click here";
// console.log(div);
// console.log(btn);

// div.before(btn);



// // after

// let div=document.querySelector(".abc");
// let btn=document.createElement("button");
// btn.innerText="click here";
// console.log(div);
// console.log(btn);

// div.after(btn);




// // remove

// let div=document.querySelector(".abc");
// let btn=document.createElement("button");
// btn.innerText="click here";
// console.log(div);
// console.log(btn);

// div.after(btn);
// btn.remove();





// let fchild=document.getElementById("first").lastChild.innerHTML;
// // console.log(fchild); 
//  document.getElementById("store").innerHTML = fchild;


let text=document.getElementById("myList").firstChild.innerHTML;

document.getElementById("demo").innerHTML=text;

console.log(text);