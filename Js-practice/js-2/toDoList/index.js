let todoInput = document.querySelector(".todoInput");
let addbtn = document.querySelector(".addButton");
let clearAllbtn = document.querySelector(".clearButton");
let ul = document.querySelector(".ul");

console.log(todoInput, addbtn, clearAllbtn, ul)

let arr = JSON.parse(localStorage.getItem("tasks")) || [];

// rendering function
let renderingFunction = () => {
    let dataFromLocal = JSON.parse(localStorage.getItem("tasks"));
    ul.innerHTML = "";

    
    dataFromLocal.forEach((ele, index) => {

        // li create
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = ele.text;
        li.append(span);

        // delete Button 
        let divli = document.createElement("div");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❎";

        deleteBtn.onclick = () => {
            deleteBtnFunction(index);
        }
        divli.append(deleteBtn);

        // edit Button 
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => {
            editBtnFunction(index);
        }

        divli.append(editBtn);

        li.append(divli);
        ul.append(li);
    })
}


addbtn.addEventListener("click", () => {
    if (todoInput.value !== "") {
        let userInput = todoInput.value.trim();
        let obj = {
            text: userInput
        }
        arr.push(obj);
        localStorage.setItem("tasks", JSON.stringify(arr));


        // rendering function call
        renderingFunction();
    } else {
        alert("fill input");
    }

    todoInput.value = "";

})



let deleteBtnFunction = (index) => {
    arr.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(arr));
    renderingFunction();
}


let editBtnFunction = (index) => {
    console.log(arr[index]);
    console.log(arr[index].text);
    let editTask = prompt("edit input here", arr[index].text);
    if (editTask !== "" && editTask.trim()) {
        arr[index].text = editTask;
        localStorage.setItem("tasks", JSON.stringify(arr));
        renderingFunction();
    } else {
        alert("edit properly");
    }
}


clearAllbtn.addEventListener("click", () => {
    arr = [];
    localStorage.setItem("tasks", JSON.stringify(arr));
    renderingFunction();
})

renderingFunction();

