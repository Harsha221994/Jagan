let second=require('./Second') 
// used to import other Javascript files/ modules

console.log(second.addFn(4,5))

console.log("sub fn ", second.subFn(5,6))

console.log("Hello world")
console.log("we are learning Node JS")
//global object -> global
// TO run a node JS project/code we need to use the following
//command
// node HelloWorld
//alert("We are using alert")
//console // alert --> JS language
// Browser has an object called as  window
//alert() => window.alert()
//console.log()=> window.console.log()  -> global 
// Node JS has a global object called as global
let x=20   // var -- hoisting
let y=10   //don't ever use var 
console.log(x+y)
