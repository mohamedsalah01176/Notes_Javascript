
function oddEven(num){
  if(num%2 ===0){
    console.log("event number");
  }else{
    console.log("odd number");
  }
};
// oddEven(5)


// -------------


function factor(num){
  if(num>0){
    return num * factor(num-1);
  }else{
    return 1;
  }
}
// console.log(factor(5))


// -------------


function sumBteewnTwoDigit(num1,num2){
  if(num2>num1){
    return num2 + sumBteewnTwoDigit(num1,num2-1);
  }else if( num1>num2){
    return num1 + sumBteewnTwoDigit(num1-1,num2);
  }else{
    return 0;
  }
}
// console.log(sumBteewnTwoDigit(4,2));


// -------------


// function printRectangle(heigth,length){
//   for(let i=0;i<heigth;i++){
//     let line=""
//     for(let j=0;j<length;j++){
//       line+='*'
//     }
//     console.log(line)
//   }
// }
function printRectangle(heigth,length){
  if(heigth>0){
    let line=''
    for(let i=0;i<length;i++){
      line+='*'
    }
    console.log(line)
    printRectangle(heigth -1,length)
  }else{
    return 0;
  }
}
// printRectangle(2,5);


// -------------


// function printNumbers(num){
//   const str=num.toString();
//   for(let i=0;i<str.length-1;i++){
//     console.log(str[i]);
//   }
// }
function printNumbers(num){
  if(num>0){
    printNumbers(Math.floor(num/10))
    console.log(num%10); // last number
  }else{
    return 0;
  }
}
// console.log(printNumbers(123456))

// function moveArrayAndSomeOperation(arr1,arr2){
//   arr2=[...arr1];

//   let sum=0;
//   let mult=1;
//   for(let i=0;i<arr2.length;i++){
//     sum+=arr2[i]
//     mult*=arr2[i]
//   }
//   return [arr2,sum,mult];
// }
function moveArrayAndSomeOperation(arr1,arr2){
  for(let i=0;i<arr1.length;i++){
    arr2[i]=arr1[i]
  }

  let sum=0;
  let mult=1;
  for(let i=0;i<arr2.length;i++){
    sum+=arr2[i]
    mult*=arr2[i]
  }
  return [arr2,sum,mult];
}
// console.log(moveArrayAndSomeOperation([1,2,1,3],[]))


// -------------


// function sumEventOdd(arr){
//   let sumEven=0;
//   let sumOdd=0;

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       sumEven+=arr[i]
//     }else{
//       sumOdd+=arr[i]
//     }
//   }
//   return [sumEven,sumOdd]
// }
function sumEventOdd(arr){
  let sumEven=0;
  let sumOdd=0;

  arr.forEach((item)=>{
    if(item%2==0){
      sumEven+=item
    }else{
      sumOdd+=item
    }
  })
  return [sumEven,sumOdd]
}
// console.log(sumEventOdd([1,6,9,8,3,2,4]))


// -------------


// function searchValue(arr,val){
//   let isFound=false
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] == val){
//       isFound=true
//     }
//   }
//   if(isFound){
//     return `the ${val} is Found`
//   }else{
//     return `the ${val} is not Found`
//   }
// }
function searchValue(arr,val){
  const elementFounded=arr.filter(el=>el==val);
    if(elementFounded.length>0){
      return `the ${val} is Found`
    }else{
      return `the ${val} is not Found`
    }

  }
  // console.log(searchValue([1,3,9,5,1],1));


// -------------


// function searchAnyPosition(arr,char){
//   let newArr=[]
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[i][j]==char){
//         newArr.push(arr[i])
//       }
//     } 
//   }
//   return newArr
// }
function searchAnyPosition(arr,char){
  const newArr =arr.filter((item)=>item.indexOf(char) !==-1)
  return newArr
}
// console.log(searchAnyPosition(["mohamed","sara","doha"],"o"));


// -------------


function graeter(arr){
  let graeterNumber=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>graeterNumber){
      graeterNumber=arr[i];
    }
  }
  return graeterNumber;
}
// console.log(graeter([2,6,7,9,1,2]))


// -------------


function lessthan(arr){
  let lessthanNumber=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<lessthanNumber){
      lessthanNumber=arr[i];
    }
  }
  return lessthanNumber;
  
}
// console.log(lessthan([2,6,7,9,1,2]))


// -------------


// function sortAss(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//       if(arr[j]>arr[j+1]){
//         let temp=arr[j];
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//       }
//     }
//   }
//   return arr
// }
function sortAss(arr){
  arr.sort((a,b)=>a-b);
  return arr
}
// console.log(sortAss([1,2,8,3,8,32,6,3]))


// -------------


function sortDes(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j]<arr[j+1]){
        let temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp
      }
    }
  }
  return arr
}
function sortDes(arr){
  arr.sort((a,b)=>b-a)
  return arr
}
// console.log(sortDes([1,2,8,3,8,32,6,3]));


// -------------

// function reverseArr(arr){
//   let mid=Math.floor(arr.length/2);
//   for(let i=0;i<mid;i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-i-1];
//     arr[arr.length-i-1]=temp;
//   }
//   return arr
// }
function reverseArr(arr){
  arr.reverse()
  return arr
}
// console.log(reverseArr([1,2,8,3,8,32,6,3]))


// -------------


function sumTwoDigitAtArray(arr){
  for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[i].toString().length;j++){
      sum+=Number(arr[i].toString()[j])
    }
    console.log(sum)
  }
}
function sumTwoDigitAtArray(arr){
  let new2Arr=[]
  const newarr=arr.reduce((acc,curr)=>{const newVal=curr.toString().split("").reduce((acc2,curr2)=>acc2+Number(curr2),0); new2Arr.push(newVal)})
  return new2Arr;
}
// console.log(sumTwoDigitAtArray([11,31,52,72]))


// -------------

// function printQTR(num){
//   for(let i=0;i<num;i++){
//     let line=""
//     for(let j=0;j<num;j++){
//       if(i==j){
//         line+="*"
//       }else{
//         line+=" "
//       }
//     }
//     console.log(line)
//   }
// }
function printQTR(arr){
  for(let i=0;i<arr.length;i++){
    let line="";
    for(let j=0;j<arr.length;j++){
      if(i==j){
        line+=arr[i][j];
      }else{
        line+=" ";
      }
    }
    console.log(line);
  }
}
// console.log(printQTR([[1,2,3],[4,5,6],[7,8,9]]));


// -------------

// function showDiblicate(arr){
//   let doblicateArr=[];
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i] == arr[j]){
//         doblicateArr.push(arr[i])
//       }
//     }
//   }
//   return doblicateArr;
// }
function showDiblicate(arr){
  const sordArr=sortAss(arr);
  let doblicateArr=[]
  for(let i=0;i<sordArr.length;i++){
    if(sordArr[i] == sordArr[i+1]){
      doblicateArr.push(sordArr[i])
    }
  }
  return doblicateArr;
}
// console.log(showDiblicate([1,5,6,3,2,8,6,2,1]));


// -------------

// function removeDiblcate(arr){
//   let newArr=[]
//   for(let i=0;i<arr.length;i++){
//     let isDublicate=false
//     for(let j=0;j<arr.length;j++){
//       if(arr[i] == newArr[j]){
//         isDublicate=true;
//       }
//     }
//     if(!isDublicate){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// function removeDiblcate(arr){
//   let newArr=new Set([...arr]);
//   return newArr;
// }

function removeDiblcate(arr){
  let newArr=arr.filter((el,index)=>arr.indexOf(el)==index);
  return newArr;
}
// console.log(removeDiblcate([1,5,6,3,2,8,6,2,1]))


// -------------

function maxFrequence(arr){
  let maxCounter=0;
  let el;
  for(let i=0;i<arr.length;i++){
    let counter=0;
    for(let j=i;j<arr.length;j++){
      if(arr[i]==arr[j]){
        counter++;
      }
    }
    if(counter>maxCounter){
      el=arr[i]
      maxCounter=counter;
    }
  }
  return [el,maxCounter]
}
// console.log(maxFrequence([1,5,2,6,3,2,8,6,2,1]));


// -------------

function palindrom(string){
  let isPlandrom=true;
  for(let i=0;i<Math.floor(string.length/2);i++){
    if(string[i] !== string[string.length-1-i]){
      isPlandrom=false;
    }
  }
  if(isPlandrom){
    return 'this string is palindrom'
  }else{
    return 'this string is not palindrom'
  }
}
// console.log(palindrom("asda"))


// -------------


function capitalOrSmall(string){
  let capital=[]
  let small=[]

  for(let i=0 ;i<string.length;i++){
    if(/[A-Z]/.test(string[i])){
      capital.push(string[i]);
    }else{
      small.push(string[i]);
    }
  }
  return [capital,small];
}
// console.log(capitalOrSmall("MohamDHHaa"));

// -------------
const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function reverceMatrix(matrix){
  const newReverceMatrix=[];
  for(let i=0;i<matrix.length;i++){
    newReverceMatrix[i]=[]
    for(let j=0;j<matrix[i].length;j++){
      newReverceMatrix[i][j]=matrix[j][i]
    }
  }
  return newReverceMatrix
}
// console.log(reverceMatrix(matrix3))


// -------------

function transiction(arr1,arr2){
  let transictionArr=[];
  for(let i=0 ; i<arr1.length;i++){
    for(let j=0 ; j<arr1.length;j++){
      if(arr1[i] == arr2[j]){
        transictionArr[transictionArr.length]=arr1[i]
      }
    }
  }
  return transictionArr;
}
// console.log(transiction([1,4,7,6,2],[2,6,7,3]));


// -------------

function reverseArray(arr){
  for(let i=0;i<Math.floor(arr.length/2);i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i] =temp
  }
  return arr
}
// console.log(reverseArray([2,6,7,1,6,8,9,3]))


// -------------

function replaceZeroToOne(num){
  let str=num.toString();
  let result="";
  for(let i=0;i<str.length;i++){
    if(str[i] == '0'){
      result+="1"
    }else{
      result+=str[i]
    }
  }
  return result
}
console.log(replaceZeroToOne(150380460))


// -------------
// -------------
// -------------
// -------------
// -------------
// -------------



