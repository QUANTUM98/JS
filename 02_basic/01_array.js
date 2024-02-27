const arr= [1,2,3,4,"Aman"];

const arr1 = new Array(5,6,7,8,9,10);

// console.log(arr);

// console.log(arr[1])

// Array Methods
arr.push(5);
// console.log(arr);

const a = arr1.slice(1,3);//do not modifies the array
const b = arr1.splice(1,3);//modofies the array 

console.log(a);
console.log(b);
console.log(arr1);
