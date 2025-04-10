const user ={
    username:"ajay",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // this keyword current context ko refer karta he
        console.log(this);
        
    }

}
//user.welcomeMessage()
//user.username ="sam"
//user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username ="ajay"
//     //console.log(this);
//     //console.log(this.username);
    
    
// }
// chai()

// const chai =function(){
//     let username ="ajay"
//     console.log(this.username);
    
// }

//arrow function
const chai =()=>{
    let username ="ajay"
    console.log(this.username);
    
}
//chai()
//explicitly return
// const addTwo =(num1,num2)=>{
//     return num1 +num2
// }

//implicitly return
//const addTwo =(num1,num2) => num1+num2

const addTwo =(num1,num2) =>({username:"ajay"}) // obejct acccess ke liye parantheses () lagana paadega
console.log(addTwo(3,4));
