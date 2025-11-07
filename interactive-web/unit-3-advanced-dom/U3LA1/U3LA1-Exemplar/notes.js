// warm up shows pain of saving lots of information in multiple variables

// CRUD arrays - create, read, update, and delete

let favFood1 = 'taco';
let favFood2 = 'burger';
let favoriteFood3 = 'pizza';
let fav_food4 = 'sushi';

let favFoods = ['taco', 'burger', 'pizza', 'sushi'];
let testGrades = [90, 88, 94, 100, 64];

console.log(testGrades[1]);
console.log(favFoods[0]);

testGrades[4] = 74;
console.log(testGrades);
testGrades.push(81);
console.log(testGrades);

favFoods.splice(3, 1);
console.log(favFoods);

// Array iteration

/// For each
const printFoods = (element) => {
  console.log( element, "is so tasty!" );
}

favFoods.forEach( printFoods );

/// Map
let curvedGrades = testGrades.map( grade => (grade * 0.5 + 50) );

console.log( curvedGrades );

/// Filter

let aGrades = testGrades.filter( grade => (grade >= 90) );

console.log( aGrades )

/// For of

for (const element of favFoods) {
  console.log( element );
}

// Crud objects

let studentList = [422689, 'Daniel', 'Perez', 'blue', 12, 18];

let student = {
  id: 422689,
  firstName: 'Daniel',
  lastName: 'Perez',
  eyeColor: 'blue',
  grade: 12,
  age: 17
};

console.log( student.id )
console.log( `${student.firstName} ${student.lastName} is ${student.age} years old.` );


student.firstName = 'Ezra';
student.age += 1;
student.major = 'Computer Science';
console.log( student );

delete student.grade;
console.log( student );

// Object function

let student2 = {
  id: 410023,
  firstName: 'Tyler',
  lastName: 'Young',
  eyeColor: 'brown',
  age: 21,
  printBio: function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`
  }
};

console.log( student2.printBio() )
