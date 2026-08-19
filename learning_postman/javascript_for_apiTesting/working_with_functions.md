## Working with functions

##### Understanding functions

Function is a piece of code intended to do something: Ex.: parseInt() - is a function that transform a decimal number or string in a integer
``function sayHello() {console.log("Hello from the pre-request script!")} sayHello()``

In a function it's possible to add one or more parameter(s): 
``function sayHello(name) {console.log(`Hello ${name}`)} sayHello(firstName)
let firstName = "Pedro" sayHello(firstName)``

---

##### Using return
- return is used to externalize the result of the function operation.
``function add(a,b){return a + b}
let number1 = 1
let number2 = 2
console.log(add(number1,number2))``

---

##### Built-in js functions
- Native functions from javascript that can be used within other functions.
[Developer Mozilla reference - guide for built in functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

##### Arrow functions
``const hello = function (){
console.log("Hello")}``

- ***A function without a name is an anonymous function***
- Another way to use a function without a name is to use arrow functions:

``const hello = (name) => {
return `Hello${name}!`}``


##### Callback functions

- We generally use it to pass a function as an argument to another function;
- That way we can call a function latter, after doing what we want to do;
``const announceBreakfast = () =>{
    console.log('Breakfast is ready!');
}
``


``function makeBreakfast(callbackFunction){
    console.log('Starting to make breakfast');
    callbackFunction();
    console.log('Serving coffee')
    }
``






