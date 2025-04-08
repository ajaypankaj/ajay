// const tinderUser = new object()
const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);
const regularUser ={
    email:"some@gmail.com",
    fullname:  {
        userfullname:{
            firstname:"ajay",
            lastname:"pankaj"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={obj1, obj2}
//const obj3=Object.assign({},obj1,obj2) // {} is target here and all other are sorce tthat cpopied in target
//const obj3 ={...obj1,...obj2}
//console.log(obj3);
const users =[
    {
        id:1,
        email:"ajay@google.com"
    },
    {
        id:1,
        email:"ajay@google.com"
    },
    {
        id:1,
        email:"ajay@google.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//de-structuring
const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ajay"
}


const {courseInstructor: instructor} =course
//console.log(courseInstructor);
//console.log(instructor);


// API

//{
//    "name":"hitesh",
//  "coursename": "js in hindi",
//"price": "free"
//}
//[
    //{},
   // {},
   // {}
//]
// to study API use json fomate site + random user api