console.log(Math.random());// 0 to 1
console.log((Math.random() * 10) +1);// 0 to 100
console.log((Math.floor(Math.random() * 10)+1));// 0 to 10

const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));// 10 to 20