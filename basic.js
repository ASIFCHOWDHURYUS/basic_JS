// let greetting = "Hello my name is";
// let myname = "Asif";
// myname += " " + "Chowdhury";


// let str = "And I have";
// let apples = 30;
// apples *= 7;
// let end = "Apples";

// console.log(greetting, myname, str, apples, end);

// let a = 4 + 7;
// console.log(a);
// let b = 5 * 9;
// console.log(b);

// let c = b / a;
// console.log(c)

// let x = 32;
// if (x == 9) {
//   consele.log('true');
// } else {
//   console.log('false');
// }


// let y = 'green';
// if (y == "blue") {
//   console.log("blue is detected")
// } else if (y == "green") {
//   console.log("green is detected")
// } else {
//   console.log("not blue not green")
// }



// let n = 50;
// if (n > 45) {
//   if (n < 65) {
//     console.log(n);
//   }
// }
// let i = 2;
// while(i<10){
//   console.log(i);
//   i++;
// }

for(let i = 7; i < 13; i++){
    console.log(i);
}
let num = [8, 9, 10, 11, 12, 13, 14, 15];
console.log(num[3]);
console.log(num);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;
for(let i = 0; i < len; i++){
    if(arr[i] > 4){
        console.log(arr[i]);
    }
}

function welcomeToBooleans() {
    return true; 
  }

  function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return "Yes, that was true";
   }
  return "No, that was false";
  }
  // Setup
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  
function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  function testGreaterOrEqual(val) {
    if (val >= 20 ) {  
      return "20 or Over";
    }
  
    if (val >=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  const myArray = [50, 60, 70];
const myData = myArray[0];


const myArray = [18, 64, 99];

myArray[0] = 45;

const myArray = [];

let i =5;
while (i >= 0){
myArray.push(i);
i--;
}
-----------10---------------
const myArray = [];
for (let i=1; i < 6; i++){
  myArray.push(i);
}
-----------------------11---------------

const myArray = [];

for (let i=9; i > 0; i -= 2){
  myArray.push(i);
}
--------------12--------------
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
