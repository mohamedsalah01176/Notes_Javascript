//============= the scope of var not effect with if condation and for loop (current scope)
// because varible is global scop or current scope
// we can do redcrelatio and reassign and not intionalize
// var is global scope in which we can use is it by using window object "window.varibleName" 

for(let i=0;i<2;i++){
    var userName="mohamed";
}

if(true){
    var userName="mohamed";
}

// console.log(userName);


// ===========the scope of var effect function Statement,decleration function =>referance Error varble is not defined
// because varible is function scop 

// var fun=()=>{
    //     var userName="mohamed";
    
    // }
function fun(){
    var userNameF="mohamed";
}
fun()
// console.log(userNameF);


// =============the scope of let is effect with if codition and for loop and function statement and function decrelation (block scope)
// we can reassign and not initailize
// we can not redecleration
// let is block scope in which we can nogt use it by window object

for(let i=0;i<2;i++){
    let age=50;
}

if(true){
    let age2=50;

}

let fun2=()=>{
    let age3=30;
    
}
function fun3(){
    let age4=30;
}
fun2()
console.log(age3);


// =============the scope of const is effect with if codition and for loop and function statement and function decrelation (block scope)
// we can not redecleration and reassign and not initailize  
// const is block scope in which we can nogt use it by window object


for(let i=0;i<2;i++){
    const age=50;
}

if(true){
    const age2=50;

}

const fun26=()=>{
    const age3=30;
    
}
function fun3(){
    const age4=30;
}
fun2()
console.log(age3);

// 'var' variables are hoisted with undefined, 
// while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized. => let and cinst not take initial value 

// ============ example

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

greet(); // "Hello, world!"
function greet() {
    console.log("Hello, world!");
}

hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};






// == it compare without type
// === it compare with type

//object methds
let obj3={
    name:"mohamed",
    age:18,
    eat:function(){//it is property
        return 'he is eating'
    },
    walk(){//it is method
        return "he is walking"
    }

}



//hyre order function

// map => accept array and return array
// filter => accept array and return array
// find => accept array and elements or undefined
// some => accept array and boolean value ,it do ckeck if founded  one element or some elements accepted condition in array (one or more)
// evey => accept array and boolean value ,it do ckeck if founded all elements accepted condition in array (all)
// reduce => accept array and number, it do calculation on array =>total = arr.reduce((previosNumber,currenrNumber)=>previosNumber + currenrNumber, 1)
