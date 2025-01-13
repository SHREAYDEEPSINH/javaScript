# what is JS?

> js is single-threaded , synchoronous programing language. its primarily used for adding interactivity , dynamic behavior to website and web application.

# scripting language

> type of interprited language

# Difference between spread and rest operators

> spread operator is used to split an array or object into individual elements.
> rest parameters is function parameters to collecting multiple arguments into a single array.

# NaN value

> Not-a-Number it's result of invalid mathematical operations.

# event delegation

> event delegation is technique where you attach a single event listener to a common ancestor of multiple elements .

# clone an array

> slice() methode , spread operator([...array]) , concat() , array.form()

# callback function

> A callback function is a function passed as an argument to another function and is executed later, usually after an asynchronous operation. create asynchronous code that doesn't block the main thread of execution.

# bind() method

> 

# Differnce between let ,const,var

> var : re-assign or re-declare
> let : re-assign , not re-declare
> const : not re-assign , not re-declare

> var has function-level scope, while let and const have block-level scope
> Hoisting: var variables are hoisted, meaning they can be accessed before they are declared, but let and const variables are not.
> Temporal dead zone: var variables don't have a temporal dead zone, but let and const variables do.

# how do iterate through an array in JS?

> for loops, forEach, for...of loops, and methods like map(), fillter(), reduce() .

# JSON.stringify()

> JSON.stringify() method converts a js object or value into a JSON string format , making it suitable for data exchange or storage.

# typeof operater

> return a string indicating the data type of a given value.

# Difference between synchronous and asynchronous code ?

> synchronos code executes in sequence , blocking further execution until it completes.
> asynchronous code allow other operation is being continue while the asynchronous task is performed using callbacks, promises, asyn/awit.

# object destructuring in JS

> a way to extract properties from an object and assign them to variables . concise syntax .

# super keyword in class inheritance ?

> super keyword is used to call method from a parent class. commonly used in the constructor to call the parent class constructor .

# DOM

> Document object Model is programming interface provided by web browsers. it represents the stucture of a web page as a hierarchical tree of objects.

# closures

> A closure is a function that retains access to its outer function's variables even after the outer function has completed execution.

> Closures are created when a function is defined inside another function, and the inner function retains access to the outer function's variables. This connection between inner and outer functions allows the inner function to access the outer variables

# "this" keyword

> this keyword refers to the currunt context or object.
> in regular function this refers to the global object(window in browsers)
> in method this refers to the object the method its calles on.

# Promises in JS

> Promises are a way to handle asynchronous operation in more structured and readable manner. they provide methos to handle success and failure cases. solve "callback hell" problem

# Hoisting

> Hoisting is a js default behavior that moves the declaration of functions, variables, classes, or imports to the top of their scope before the code is executed, during compilation.

# Prototypal inheritance work in JS ?

>

# Arrow function

> concise syntax introduced in ES6 , Do not bind their own 'this' value instead , they inherit the 'this' value from srroounding code.

# event loop

> It manages the execution of asynchronous code, ensuring that synchronous code runs to completion before processing any pending asynchronous tasks. The event loop constantly checks the call stack and task queue, moving tasks from the queue to the stack when the stack is empty

# Modules in JS ?

> Modules are a way to organize code into reusable and maintainable units.

# async/await

> The async keyword is used to define an asynchronous function, and the await keyword is used to pause execution until a promise is resolved.

# event bubbling in JS?

>

# ES6

> arrow functions, class syntax, let and const declarations, modules, template literals, spread and rest operators, Default Parameters, Promises

# clone an object in JS?

> object.assing() method or the spread syntax(...)

# Cross-site scripting(xss) attacks in JS

> Cross-site scripting attacks occur when user-provided input is not properly sanitized and executed as code in a web page

# constructor

> A constructor is a special function that creates and initializes an object instance of a class.

# new keyword

> to creact an instance(object) or call constructor function

# oops

> use object and making code redable and understandeble
> Encapsulation , Abstraction, Inheritance, Polymorphism

# IIFE - Immediately Invoked Function Expression

> A function that runs the moment it is invoked or called in the JavaScript event loop
> Syntax: (function() { // Code to be executed })()

# object prototype

>

# Primitive and Non-Primitive datatype

> Primitive : store only single data type values.
> Non-Primitive : store multiple data type values.

# Prototypal inheritance

> where object can inherit properties and methods from other objects. Each object has a prototype object from which it inherits.

# race condition

>

# call by value and call by reference

>

# callback hell

> peramid of Doom , nesting of loop inside onther

# code practice

> settimeout
> spread rest
> array and object destucturing
> Promises
> call by value and call by reference
