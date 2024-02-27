const arr= [1,2,3,4,"Aman"];

const arr1 = new Array(5,6,7,8,9,10);

// console.log(arr);

// console.log(arr[1])

// Array Methods
arr.push(5);
// console.log(arr);

const a = arr1.slice(1,3);//do not modifies the array
const b = arr1.splice(1,3);//modofies the array 

//onsole.log(a);
//console.log(b);
//console.log(arr1);
const marvel =["Ironman","Spiderman","Thor"]
const dc = ["Flash","Arrow","Superman"]

// marvel.push(dc);
// console.group(marvel)
const c = marvel.concat(dc);
// console.log(c);

const allheroes = [...marvel,...dc];//spread operator is used
// console.log(allheroes)

const d= [1,2,3,[4,5,6,7],[8,9,[10,11]]]
const e = d.flat(Infinity);
// console.log(e)

console.log(Array.from("Abhishek"))
let marks1= 100;
let marks2= 90;
let marks3= 95;
console.log(Array.of(marks1,marks2,marks3))

