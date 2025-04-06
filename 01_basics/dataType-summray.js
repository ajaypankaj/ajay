// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id==anotherId);

// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman","naagraj","doga"]; //arrays
//object
let myObjects={
    name: "Ajay",
    age: 22,
}
//function

const myFunction = function(){
    console.log("hello world");
    
}

