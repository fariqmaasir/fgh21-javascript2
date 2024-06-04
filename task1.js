// 1. console.log()
console.log("Hello World");
//return : Hello World

// 2. for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// return : 1 2 3 4 5

// 3. math.random()
const randomNumber = Math.random() * 10;
console.log(randomNumber);
// return : random number * 10 

// 4. Math.floor() / Math.ceil() / Math.round()
Math.floor(5.24569421);
//return : 5
Math.ceil(5.24569421);
//return : 6
Math.round(5.24569421);
//returm 5

// 5. parseInt() and typeof
const stringToChange = "12345";
typeof stringToChange;
//return : string

const newNumber = parseInt(stringToChange);
//return : 12345
typeof newNumber;
// return : number

// 6. array.length/string.length
const abc = "abc";
abc.length;
//return : 3

const myArray = ["1", "c", false, "Daniel", 9];
myArray.length;
// return : 5

// 7. Array.sort()
let array = [1, "1", false, [1, "a", "aaa"], { a: "t", b: "c" , c: "what?" }, "a", "b", "c", true];
array.sort()
// Rules = Numbers, Numbers as a String ,Arrays ,Objects ,Characters as a String ,False ,True
// return : [1, "1", [1, "a", "aaa"], { a: "t", b: "c" , c: "what?" }, "a", "b", "c", false, true]

// 8. Array.push() / Array.pop() and Aray.shift() / Array.unshift()
let array1 = [ "a", "b" ]
array.push("d")
// return : ["a", "b", "d"]
array.pop()
// return : [ "a", "b" ]

// 9. Array.splice()
let array2 = [1, "more", "array"]
array2.splice(1, 1, "last")
console.log(array2)
// return : [1, “last”, “array”]

// 10. String.toLowerCase() / String.toUpperCase()
const a = "cwICJAI"
a.toLowerCase()
// return : "cwicjai"
const b = "CJNACSNjnckwj"
b.toUpperCase()
// return : "CJNACSNJNCKWJ"