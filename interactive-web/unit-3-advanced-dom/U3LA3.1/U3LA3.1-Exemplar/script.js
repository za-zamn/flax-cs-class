// Example 1
// primitive data types (numbers, strings, boolean, null, undefined)
//      get passed as values. (Deep copy)

let numX = 10;
let numY = numX;
numY += 5;

console.log("numX", numX);
console.log("numY", numY);


// Example 2
// objects (arrays, maps, objects, etc.)
//      get passed by reference. (Shallow Copy)

let arrX = [1, 2, 3];
let arrY = arrX;
arrY[0] = 999;

console.log("arrX", arrX);
console.log("arrY", arrY);


// Example 3a
// use the spread operator to make a shallow copy

let arrA = [1, 2, 3];
let arrB = [...arrA];   //spread the contents of arrA into a new one
arrB[0] = 999;

console.log("arrA", arrA);
console.log("arrB", arrB);


// Example 3b
// same thing for objects

let objA = {
    species: "dog",
    breed: "golden retriever",
};
let objB = {...objA};

objB.breed = "yorkie";

console.log("objA", objA);
console.log("objB", objB);

// Example 3c
// You can also copy and change all at once! 
let objC = {
    ...objA, 
    breed: "yorkie",    // this overwrites the previous one
};
console.log("objC", objC);

// Or add more attributes!
let objD = {
    ...objA, 
    breed: "yorkie",    // changes breed
    name: "Ralph",      // adds new attribute
};
console.log("objD", objD);


// Example 4
// What about methods like '.map()'?
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.map(number => number * 10);

console.log("arr1 before: ", arr1);
console.log("arr2 before: ", arr2);

arr1[0] = 9;
console.log("arr1 after: ", arr1);
console.log("arr2 after: ", arr2);


// Example 5
// .map() documentation says it makes a copy!
// Check out the documentation for: filter(), sort()
// will they make a shallow copy, or will they change the original "in place"?

let employees = ["Marcos", "Daniel", "Zoey", "Albert", "Joe"];

console.log("'employees' Filter():", employees.filter(employee => (employee.length > 4)) );
console.log("'employees' Sort()", employees.sort() );

console.log("Original 'employees' after filter() and sort(): ", employees);


// Example 6
// for loops

let numbers = [2, 3, 4];
console.log("Original 'numbers': ", numbers);

for(let x of numbers) {
    x = x*x;
}
console.log("For..of Results: ", numbers);

for(let idx=0; idx<numbers.length; idx++){
    numbers[idx] = numbers[idx]*numbers[idx];
}
console.log("Explicit forLoop Results: ", numbers);

// alternatively... 
numbers = numbers.map(num => num*num);


// Example 7
// Shallow copy vs deep copy with nested data
let teacher = {
    name: "Mrs. Puff",
    subject: "Math",
    students: ["Spongebob", "Patrick"],
};

let teacherClone = {...teacher};
teacherClone.subject = "English";             //changes primitive "string" datatype
teacherClone.students.push("Pearl");        //changes non-primitive "array" object

console.log("Teacher", teacher);
console.log("Shallow Teacher Clone", teacherClone);

let deepTeacherClone = structuredClone(teacher);
deepTeacherClone.students.push("Sandy");    //changes deep copy of object!

console.log("Teacher", teacher);
console.log("Deep Teacher Clone", deepTeacherClone);

// Part 2 - Students Exploration
// Go back and see which variable you can change from let to const
// Why does JS allow some and not others?
