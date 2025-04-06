// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", "doga"] 

const myArr2 = new Array(1, 2, 3, 4)

// Array methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9) =>push at first position,overloading if large no. of  elements inside array
//myArr.shift()

//const newArr = myArr.join() // =>binds + convert arr to string

//console.log(myArr);
//console.log(newArr); 

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

