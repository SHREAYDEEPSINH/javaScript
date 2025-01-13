
let form = document.querySelector("#myForm")
let name = document.querySelector("#name")
let ul = document.querySelector(".ul")
let addbtn = document.querySelector("#addbtn")


let arr = []
let editId = null

let renderFunction = () => {

    ul.innerHTML = arr.map((ele, ind) =>
        `
        <li> ${ele.inputData} 
        <button onClick="deleteHandler(${ind})"> Delete </botton>
        <button onClick="editHandler(${ind})"> Edit </botton>
        </li>
        `
    ).join("")


    addbtn.innerText = (editId == null) ? "Add" : "update"
}

renderFunction()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("first")

    let inputData = name.value.trim()
    if (inputData) {
        if (editId == null) {
            let obj = {
                inputData: inputData
            }
            arr.push(obj)
        } else {
            updateHandler(inputData)
        }
    }
    name.value = ""
    renderFunction()
})


// delete
let deleteHandler = (index) => {
    arr = arr.filter((e, i) => i !== index)
    renderFunction()
}

// edit 
let editHandler = (index) => {
    name.value = arr[index].inputData
    editId = index
    renderFunction()
}

let updateHandler = (inputData) => {
    arr[editId].inputData = inputData
    editId = null
}



