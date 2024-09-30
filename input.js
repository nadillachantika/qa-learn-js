const prompt = require("prompt-sync")({ sigint: true });

// let name = prompt("What is your name? ");

// console.log(`Hello, ${name}!`);

// const number1 = prompt("Enter first number: ");
// const number2 = prompt("Enter second number: ");

// console.log(`${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}`);

// const password = prompt("Enter password: ");
// const validPassword = "password";

// if (password === validPassword) {
//     console.log("Password is correct");
// } else {
//     console.log("Password is incorrect");
// }

// const age = prompt("Enter your age: ");
// const validAge = 18;

// if (age >= validAge) {
//     console.log("You are old enough to drive");
// } else {
//     console.log("You are not old enough to drive");
// }

// const number = prompt("Enter a number: ");

// if (number % 2 === 0) {
//     console.log("The number is even");
// } else {
//     console.log("The number is odd");
// }

// const nilai = prompt("Enter a number: ");
// let grade;

// if (nilai >= 80) {

//     grade = "A";

// } else if (nilai >= 60) {

//     grade = "B";

// } else if (nilai >= 40) {

//     grade = "C";

// } else if (nilai >= 20) {

//     grade = "D";

// } else {

//     grade = "E";

// }

// console.log(`Grade: ${grade}`);

// const score = prompt("Enter a number: ");
// let gradeA;

// switch (true) {
//     case (score >= 80):
//         gradeA = "A";
//         break;
//     case (score >= 60):
//         gradeA = "B";
//         break;
//     case (score >= 40):
//         gradeA = "C";
//         break;
//     case (score >= 20):
//         gradeA = "D";
//         break;
//     default:
//         gradeA = "E";
//         break;
// }

// console.log(`Grade: ${gradeA}`);

const x = prompt("Enter first number: ");
let y;

if(x < 0){
    console.log("The number is negative");
} else if(x %2 != 0){
    console.log("The number is odd");
} else {
    y = Math.sqrt(x);
    console.log(`The square root of ${x} is ${y}`);

}
