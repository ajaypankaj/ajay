function multiplyby5(num){
    return num*5
}


// function behave as object
multiplyby5.power=2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username,score){
    this.username=username
    this.score= score
}

//use of this

createUser.prototype.increment=function(){
    this.score++
}


createUser.prototype.printMe=function(){
  console.log(`score is ${this.score}`);
}

const chai = createUser("chai",25)
const tea =createUser("tea",250)