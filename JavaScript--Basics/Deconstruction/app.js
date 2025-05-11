// deconstructing the array and assigning it to variables

const [name, age, city, hobby] = ["John Doe", 25, "New York", "Reading"];

console.log(name); // John Doe
console.log(age); // 25
console.log(city); // New York

// array destructuring with default values

const [firstName, lastName, , hobbyw = "playing guitar"] = ["John", "Doe"];

console.log(firstName); // John
console.log(lastName); // Doe
console.log(hobbyw); // playing guitar

// array destructuring with rest parameter  

const [first, second, ...rest] = ["John", "Doe", "New York", "Reading"];

console.log(first); // John
console.log(second); // Doe
console.log(rest); // ["New York", "Reading"]

// array destructuring with spread operator

const [firstw, secondw, ...rest2] = [...["John", "Doe", "New York", "Reading"]];

console.log(firstw); // John
console.log(secondw); // Doe
console.log(rest2); // ["New York", "Reading"]

// array destructuring with nested arrays

const [first2, [second2, third2]] = [["John", "Doe"], ["New York", "Reading"]];

console.log(first2); // John
console.log(second2); // New York
console.log(third2); // Reading

// array destructuring with object properties

const user = { name: "John Doe", age: 25, city: "New York" };

const { name: userName, age: userAge, city: userCity } = user;

console.log(userName); // John Doe

// array destructuring with destructuring patterns

const numbers = [1, 2, 3, 4, 5];

const [firstNum, secondNum, , fourthNum] = numbers;

console.log(firstNum); // 1

// array destructuring with destructuring patterns and renaming

const numbers2 = [1, 2, 3, 4, 5];

const [firstNum2, secondNum2, , fourthNum2 = "fourth number"] = numbers2;

console.log(firstNum2); // 1

console.log(fourthNum2); // fourth number   

// array destructuring with destructuring patterns and renaming and default values  

const numbers3 = [1, 2, 3, 4, 5];

const [firstNum3, secondNum3, , fourthNum3 = "fourth number", fifthNum = "fifth number"] = numbers3;

console.log(firstNum3); // 1

console.log(fourthNum3); // fourth number

console.log(fifthNum); // fifth number

// array destructuring with destructuring patterns and renaming and default values and rest parameter

const numbers4 = [1, 2, 3, 4, 5];

const [firstNum4, secondNum4, , ...restNumbers] = numbers4;

console.log(firstNum4); // 1

console.log(secondNum4); // 2

console.log(restNumbers); // [3, 4, 5]

