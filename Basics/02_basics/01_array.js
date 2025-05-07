                                                            // Array//object
// Array is a collection of elements

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray[0]); // 1

// Array is a reference type
                                                            // Methods//
// push() - add element at the end
myArray.push(11);
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// pop() - remove element from the end
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// unshift() - add element at the beginning
myArray.unshift(0);
console.log(myArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// shift() - remove element from the beginning
myArray.shift();
console.log(myArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// splice() - add or remove element from the middle
myArray.splice(2, 0, 2.5);
console.log(myArray); // [1, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10]
// slice() - create a new array from the original array
const newArray = myArray.slice(2, 5);
console.log(newArray); // [2.5, 3, 4]
// concat() - combine two arrays
const array1 = [1, 2, 3];           
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3); // [1, 2, 3, 4, 5, 6]

