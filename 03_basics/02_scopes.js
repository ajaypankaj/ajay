// {} is scope
let a =300 // globle scope
if(true){
    let a=10 // block scope
    const b=20
    var c= 30
    //console.log("INNER:",a);
    
}
//console.log(a); // ye kaam nahi karega
//console.log(b); // ye bhi kaam nhi kaerega
//console.log(c); ye kaam karega kyunki var he jo scope ke bahar bhi kam karta he 

function one(){
    const username ="ajay"

    function two(){
        const website ="youtube"
        console.log(username);

    }
    //console.log(website);
    two()
}

//one()

if(true){
 const username ="ajay"
 if(username==="ajay"){
    const website =" youtube"
    //console.log(username+website);
    
 }
 //console.log(website);
 
}
//console.log(username);
// +++++++++++++++++++++ interesting +++++++++++++++



function addone(num){
    return num+1
}

addone(5)


const addtwo =function(num){
    return num+2
}
addtwo(5)