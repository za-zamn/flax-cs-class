  // Fundamental data types
const studentID = "j61L22";
let firstName = "Jayden";
let age = 19;
let year = "freshman";
let isStudent = true;
let gpa = 4.0;
let major = undefined;

// console.log(firstName, age)

  // Reassignment (no let)
age = 20;
age = age + 1;
age += 1;

// console.log(age)

  // Essential Operations
age + 10;
age - 5;
age * 2;
age / 5;

  // Additional operations
// console.log( Math.round(5.8) );
// console.log( Math.floor(23 / 4) );
// console.log( Math.ceil(5.5) );

  // Concatenation v. templates
let string1 = firstName + " is " + age + " years old.";
let string2 = `${firstName} is ${age} years old.`;

  // String methods
// console.log( string1.toUpperCase() ); // () CALL the method.
// console.log( string1.includes("old") );

  // Comparison operators - true or false?
age === 10;
"42" === 42;
age > 10;
age <= 99;
year === "freshman";

  // Conditional statements
let username = "Miles";
let age2 = 18;

if (username === "Miles" && age === 18) {
  console.log("Welcome, Spiderman");
} else if (age2 < 18) {
  console.log("Unauthorized youth access.");
} else {
  console.log(`Welcome ${username}`);
}

// functions
// Returns half the number if it can be halved; otherwise returns false
function getHalf(x) {
  if (x % 2 === 0) {
    return x / 2;
  } else {
    return false;
  }
}

a = getHalf(10); // () CALL the function
b = getHalf(22);
c = getHalf(3);

// console.log(a, b, c);

// Functions can also be written as arrows. Body of function doesn't change, just the signature.

let getHalf2 = (x) => {
  if (x % 2 === 0) {
    return x / 2;
  } else {
    return false;
  }
};

// Practice - refactor existing functions as arrow functions. Call functions. Figure out what functions do / predict what functions do.
