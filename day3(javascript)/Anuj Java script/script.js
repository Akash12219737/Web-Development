// let c = 22;
// let d =12;
console.log("a+b is", a+b);
const name = "Akash";
console.log("name", name)
console.log("The type of a",typeof(a));    //date type
var x = 12;  //this is old way to declare variable
a = String(a);


// Operator in js
let num1  = 10;
let num2 =20;
console.log(num1+ num2);
console.log(num1-num2)
console.log(num1--)
console.log(num1)

// #############//Type conversion##################
let result = 10 + '5'; // Result will be '105'
console.log(result);

// Explicit Type Conversion:String(), Number(), parseInt(), parseFloat()
// String to Number
let str = '123';
let nm = Number(str);

// Number to String
let num = 123;
let srt = String(num);

// String to Integer
let tr = '123';
let intNum = parseInt(tr);

// String to Float
let st = '3.14';
let floatNum = parseFloat(st);

// Boolean to String
let bool = true;
let stri = String(bool);

// String to Boolean
let sr = 'true';
let bol = Boolean(st);



// *****Conditional statement*********
// ###If...Else Statement:
if (condition) {
    // Block of code to be executed if condition is true
} else {
    // Block of code to be executed if condition is false
}

let A = 10;

if (A > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is non-positive");
}
// Looping Statements:
// Using for loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Using while loop to print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// ###Else If Statement:
let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// ####Switch Statement:
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("It's neither Monday nor Tuesday");
}


// ###Ternary Operator (Conditional Operator):
condition ? expression1 : expression2;

if (condition) {
    expression1;
} else {
    expression2;
}
// example
let age = 20;
let allowed = (age >= 18) ? "Allowed" : "Not Allowed";
console.log(allowed);





// *********Array in javascript*****
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
console.log(numbers[0]); // Output: 1
console.log(fruits[1]);  // Output: banana
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]
fruits.push('grape'); // Add an element to the end of the array
console.log(fruits);   // Output: ['apple', 'banana', 'orange', 'grape']

fruits.pop(); // Remove the last element from the array
console.log(fruits);   // Output: ['apple', 'banana', 'orange']

//array for of loop in js
// Example with an array
const fuits = ['apple', 'banana', 'orange'];

for (const fruit of fuits) {
    console.log(fruit);
}
// Output:
// apple
// banana
// orange
