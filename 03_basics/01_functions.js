function sayMyName(){
    console.log("a");
    console.log("j");
    console.log("a");
    console.log("y");
}

//sayMyName()

//function addTwoNumbers(number1,number2){
   // console.log(number1+number2);
    
//}
function addTwoNumbers(number1,number2){
   
    //let result =number1+number2
    //return result
    return number1+number2
}
//addTwoNumbers(3,4 )
const result = addTwoNumbers(3,5)

//console.log("Result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("ajay"))
//console.log(loginUserMessage(""))


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400));
const user ={
    username:"ajay",
    price:199
}
//how to pass object in function
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $
        {anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
// array pass in function

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log( returnSecondValue(myNewArray));
console.log( returnSecondValue([200,400,500,1000]));
