// javascript is synchronous (blocking) language => it compile line by line (default)
// inwhich we can use asynchronous (non-blocking) part of code 

// javaScript is a single threaded language
// thread => it is a smallest unit of execution of program

// javascript has only one call stack and one heap

// javascript engin => v8 engin


// =====javascript runtime inside browser======

// callStack => it response to hold synchronous operation in stack to execute ,the last in frist out
// callback queue => it response to hold asynchronous operation in queue and take number to execute after finish callstack,
// the operation in callback queue take a rank accourding time duration (Ascending)
// Web API => it is methods related to browser such as Timers(setTimeOut,..) ,Fetch API, Dom .... => it not add callstack but it add to callback queue
// Event loop => it take asynchronous operation and put it in callback queue unit callstack will be empty then do check on callstack 
// if empity it will take operation from callback queue an put it in callstack to execute





// =====javascript runtime outside browser====== (mobile ,backend ,server side)

// the problem we can use web Api for browser =>timer fetch,
// but javascript provide us c++ binding and thread pool to use the functionalty of browser timer ,fetch =>in mobile server side



//===========1
// console.log("first");//1
// setTimeout(()=>{
//     console.log("setTimeout1");//4
// },4000)
// setTimeout(()=>{
//     console.log("setTimeout2");//3
// },2000)
// console.log("last");//2


//==========2

// let arrData=[];
// function getData(calllback){
//     console.log("fetching data....");

//     setTimeout(()=>{
//         arrData.push(
//             {
//                 id:"1",
//                 course:"HTML"
//             },
//             {
//                 id:"2",
//                 course:"CSS"
//             },
//         )
//         calllback();
//     },5000)
// }

// console.log(arrData);//[]

// function  passFun() {
//     console.log(arrData);
//     console.log("complate fetching data");
// }
// getData(passFun);

// console.log("outside Function");



//============3

let arrData=[];
function getData(calllback){
    console.log("fetching data....");

    setTimeout(()=>{
        arrData.push(
            {
                id:"1",
                course:"HTML"
            },
            {
                id:"2",
                course:"CSS"
            },
        )
        calllback();
    },5000)
}

console.log(arrData);//[]

function  passFun() {
    console.log(arrData);
    console.log("complate fetching data");
}


function fetchUser(callback){
    setTimeout(()=>{
        console.log("fetching user by id");
        callback();
    },3000)
}

// callback Hell
fetchUser(()=>{
    getData(()=>{
        passFun()
    })
})
