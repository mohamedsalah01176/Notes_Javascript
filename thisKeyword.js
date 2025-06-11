//this keyword in browser it refer to windo or file script
console.log(this); // window (global)

function fun(){
    console.log("this from fun",this); // global
    return this
}

console.log("this from return" ,fun()); // global


let obj={
    userName:"mohamed",
    eat:function(){
        console.log("this from statement function",this);// refer to objec
    },
    eatMethod(){
        console.log("this from method function",this);// refer to objec
    },
    walk:()=>{
        console.log("this from arrow function",this);// refer to global
    }
}
obj.eat()
obj.eatMethod()
obj.walk()


//complax expamle on this
function printThis(){
    return this; //global
}
let obj2={
    userName2:"ahmed",
    printuserName(){
        return printThis().userName2;// in this state this for function "printThis" is refer to window and the userName varible not found in window object
    },
    printuserNameSolution(){
        return printThis.call(obj2).userName2;// in this state this for function "printThis" is refer to current object because we do binding  
        // return printThis.bind(obj2)().userName2;// in this state this for function "printThis" is refer to current object because we do binding  
        // return printThis.call(this).userName2;// in this state this for function "printThis" is refer to current object because we do binding 
    }
}

console.log(obj2.printuserName());// undefind
console.log(obj2.printuserNameSolution());// ahmed


// explicit binding

function printUser(msg){
    return `Hi, ${this.userName3} and ${msg}`;
}

let obj3={
    userName3:"maryam",
}
console.log(printUser.call(obj3,"welcome Back"));



// implicit binding 

let obj4={
    userName4:"Ahmed",
    age:30,
    printUser4(){
        return `hi ${this.userName4} and your age is ${this.age}` //implicit binding
    }
}
console.log(obj4.printUser4());


class Person{
    userNameClass;
    constructor(userName){
        this.userNameClass=userName;
    }

    welcome(){
        return `Welcome ${this.userNameClass}`;
    }
}
let mohamed=new Person("Mohamed");
console.log(mohamed.welcome());

// appaly => obj.appaly(obj2,[arg1,arg2,...]) we must do execute ()
// bind => obj.bind(obj2,arg1,arg2,...) we must do execute ()
// call => obj.call(obj2,arg1,arg2,...) the default it do execute




// problem var
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3

// solution 1
var printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2

// solution 2
var printNumTwo;
for (var i = 0; i < 3; i++) {
    ((j)=>{
        
        if (j === 2) {
          printNumTwo = function() {
            return j;
          };
        }
    })(i)
}
console.log(printNumTwo());
// return 2





