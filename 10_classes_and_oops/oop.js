// object literal

const user = {
     username:"ajay",
     loginCount:8,
     signedIn:true,

     getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username:${this.username}`);
        console.log(this);
     }
}

console.log(user.username);
console.log(user.signedIn);
console.log(user.getUserDetails());
console.log(this);


//constructor new = cnostructor function

// const promiseOne = new Promise()
// const date= new Date()

function myuser(username,logincount,islogedin){
    this.username=username;
    this.loginCount=logincount;
    this.islogedin=islogedin;

    return this
}

const userOne= myuser("ajay",12,true)
const userTwo=new  myuser("ajay",12,true)
console.log(userOne);
console.log(userTwo);