let URL = "https://cat-fact.herokuapp.com/facts";
let fetchedPromise = fetch(URL);
// console.log("fetchedPromise", fetchedPromise);
let catFacts = JSON.parse(localStorage.getItem("data")) || [];
console.log(catFacts, "catfacts")
fetchedPromise
    .then((res) => res.json())
    .then((res) => {
        // console.log("inside second then");
        console.log("Random Cat Image:", res);
        catFacts = [...res]
        localStorage.setItem("data", JSON.stringify(res))
        console.log(catFacts);
    })
    .catch((err) => {
        console.log(err);
    });



let maindiv = document.querySelector(".maindiv")

catFacts.forEach((ele) => {

    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = ele.text;

    div.append(h2);
    maindiv.append(div);
    console.log(ele.text)
})
