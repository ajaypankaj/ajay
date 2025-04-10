// Immediately Invoked function Expression (IIFE)
(function chai(){
    //named iife
    console.log(`DB connected`);
    
})();

(()=>{
    console.log(`DB CONNECTED TWO`);
    
})()
((name)=>{

    console.log(`DB CONNECTED TWO ${name}`);
    
})('ajay')


// javascript execution + call stack
// global execution context ,js is single thearded
// function execution context and eval execution context
// memory creation phase and execution phase
// let val1 =10
// let val2 =5
// function addNum(num1,num2){
//     let total =num1 +num2
//     return total
// }
// let result =addNum(val1,val2)
// let result2 =addNum(10,2)
//1.global execution ->this 2.memory phase val1 ->undefined,val2->undefined,addition->undefined,result1->undefined,result2->undefined
//3.execution phase val1<-10,val2<-5,addNUm->new variable enviornment+execution thread=>memory phase val1->undefined,val2->undefined,total->undefined
//new variable enviornment+execution thread=>execution context,num1=10,num2=5,total=15(global execution context me return),result1 =15
//new variable enviornment+execution thread=>delete
//new variable enviornment+execution thread=>same process repeat for result2