// singleton
// object.create


// object literals =>object declare karne ka tarika
const mySym = Symbol("key1") // symbol used for unique value and inside object it is always intialize in bracket

const JsUser = {
    "full name":"ajay pankaj",
    [mySym] :"mykey1",
    age:21,
    location:"jaipur",
    email:"ajay@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]

}

//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email ="ajaypankaj@google.com"
Object.freeze(JsUser)
JsUser.email ="ajaypankaj@gpt.com"
//console.log(JsUser);

 
JsUser.greeting = function(){
    console.log("hello JS user");    
}
JsUser.greetingtwo =function(){
    console.log('hello Js user,${this.name}');
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
