let age = Number(prompt("Enter your age"));

if(isNaN(age)){
    console.log("Invalid input, please enter a valid number");
}else if(age < 18){
    console.log("You are not eligible to vote");
}else{
    console.log("You are eligible to vote");
}
// isNaN() function is used to check if a value is a number or not. If the value is not a number, it returns true, otherwise it returns false. This helps in validating the user input