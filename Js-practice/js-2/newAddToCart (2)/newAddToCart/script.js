// signup form 
let signupForm = document.querySelector(".signup-form")
let signupName = document.querySelector(".signup-name")
let signupEmail = document.querySelector(".signup-email")
let signupPassword = document.querySelector(".signup-password")
let signupHeader = document.querySelector(".signup-header")
console.log("signupForm", signupForm, signupEmail, signupName, signupPassword);

// login form 4 june 2024 start
let loginForm = document.querySelector(".login-form")
let loginEmail = document.querySelector(".login-email")
let loginPassword = document.querySelector(".login-password")
let loginHeader = document.querySelector(".login-header")
// login form 4 june 2024 end

// users array 
let users = JSON.parse(localStorage.getItem("users")) || []
console.log("users", users);

// signup from event listner start
signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = signupName.value.trim()
    let email = signupEmail.value.trim()
    let password = signupPassword.value.trim()
    // validation 
    if (name && email && password) {
        console.log("clicked");
        // to check if user is a new user or not 
        let isUserExists = users.some((user) => {
            return user.email === email
        })
        console.log("isUserExists", isUserExists);
        // is user is an new user then add it to array 
        if (!isUserExists) {
            // let newUser = { name: name, email: email, password: password }
            // or 
            let newUser = { name, email, password }
            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users))
        } else {   //if user is not a new user then redirect user to login 
            console.log("already exist plz login");
        }
    } else {
        console.log("please enter details");
    }
})
// signup from event listner end

// loginForm from event listner 4 june 2024 start
loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("from loginhANDLER");
    let email = loginEmail.value.trim()
    let password = loginPassword.value.trim()
    // validation 
    if (email && password) {
        let currentUser = users.find((ele, idx) => {
            return ele.email === email
        })
        if (currentUser) {
            // validation to check password
            if (password === currentUser.password) {
                localStorage.setItem("currentUser", JSON.stringify(currentUser))
            } else {
                console.log("wrong password");
            }
        } else {
            // if user is a new user 
            console.log("new user plz sign up first");
            signupForm.style.display = "flex"
            signupHeader.style.display = "block"
            loginForm.style.display = "none"
            loginHeader.style.display = "none"
        }
    } else {
        console.log("please enter details");
    }
})
// loginForm from event listner 4 june 2024 end
