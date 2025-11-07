// Objects

/******** Part 1 ********/
/// Use the object "movie" to answer the following challenges

let movie = {
  title: "Titanic",
  year: 1997,
  date: "December 19, 1997",
  rating: "PG-13",
  runtime: 180,
  rating: 7.9,
  actors: ["Leonardo DiCaprio", "Kate Winslet", "Kathy Bates"]
};

// 1. Console log the title and year of the movie
console.log("Title:", movie.title);
console.log("Year:", movie.year);

// 2. Change the runtime to 194 minutes instead of the rounded 180
movie.runtime = 194;

// 3. Add the property "director". His name is "James Cameron".
movie.director = "James Cameron"

// 4. Remove the date property from the object
delete movie.date;

// 5. Console log the actors in Titanic
console.log("Actors:", movie.actors);

// 6. Console log just the 1st actor in the array.
console.log("1st actor:", movie.actors[0]);

console.log("Full Movie", movie);

/******** Part 2 ********/
/// Use the object "shoppingCart" to answer the following challenges
/// Note: shoppingCart is an array of objects

let shoppingCart = [
  {
    product: 'bananas',
    price: 2.25,
    quantity: 3
  },
  {
    product: 'bread',
    price: 2.70,
    quantity: 1
  }, 
  {
    product: 'milk',
    price: 4.09,
    quantity: 2
  }
]

// 7. Console log the whole third object in the array
console.log("3rd shopping item:", shoppingCart[2]);

// 8. Console log the name of the second item in the shopping cart 
console.log("2nd shopping item name:", shoppingCart[1].product);

// 9. Console log the number of milks in the shopping cart
console.log("Number of milks:", shoppingCart[2].quantity);

// 10. Console log the full price for all bananas
console.log("Total cost of bananas:", shoppingCart[0].price*shoppingCart[0].quantity);



/******** Part 3 ********/
/// Use the object "student" to answer the following challenges

const student = {
  grade: 11,
  fname: "Riko",
  studentID: "24SM09UW",
  english: {
    className: "American Literature",
    room: 409,
    teacher: {
      name: "Ms. Hsu",
      yearsExperience: 5,
      otherClasses: ["Intro to Photography", "Advanced Photography"],
    },
  },
  math: {
    className: "Precalculus",
    room: 101,
    teacher: {
      name: "Mrs. King",
      yearsExperience: 22,
      otherClasses: ["Algebra II"],
    },
  },
  science: {
    className: "Physics",
    room: 205,
    teacher: {
      name: "Mr. Ramirez",
      yearsExperience: 7,
      otherClasses: ["Chemistry", "Choir"],
    },
  }
};

// 11. Console log the student's name and grade
console.log(student.fname, student.grade);

// 12. Console log all of Riko's math class details
console.log("Math class details", student.math);

// 13. Console log Riko's english class name and room number
console.log(student.english.className, student.english.room);

// 14. Console log Riko's science teacher's name 
console.log(student.science.teacher.name);

// 15. Write the code to access "Advanced Photography", Riko's english teacher's last class in the array
console.log(student.english.teacher.otherClasses[1]);

// 16. [Spicy] The math class changed to room 319. Change the room number in the object.
student.math.room = 319;

// 17. [Spicy] Add another class to the list. Make up your own details
student.history = {
  className: "World War II",
  room: 303,
  teacher: {
    name: "Ms. Parks",
    yearsExperience: 4,
    otherClasses: ["Geography", "History 1"],
  },
},

// 18. [Spicy] Mrs. King is now teaching "Intro to Javascript" add that class to her array of otherClasses
/// Be sure to print the updated "student" and check if this and your other class from #17 got updated.
student.math.teacher.otherClasses.push("Intro to Javascript");

console.log("Updated student", student);