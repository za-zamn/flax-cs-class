---
description: >-
  What structures can I use to store and manipulate larger and more nuanced
  data?
---

# U3LA1: JavaScript Arrays, Iteration, and Objects

### Teacher Notes & Overview

Students will be learning arrays, and iteration using `forEach()`, `map()`, and `filter()`, and objects. This lesson is designed as a vanilla javascript lesson. There is no front end other than the console in the development tools window (the "dev tools console"). Instruction will consist of mainly a lecture-style code along. However, the presentation is written with opportunities for students to engage by making predictions.

As it is now, the starter ([repl.it ](https://replit.com/@qrtnycs4all/U3LA1-Lesson-Starter-Code)| [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA1/U3LA1-Starter)) `notes.js` code is blank. Depending on where a majority of your students are coming from, you may consider modifying the amount of starter code you give to relieve the pressure of copying notes allowing students to add comments or put more of their attention on your presentation. Be mindful that students with IEPs may **require** a visual supplemental aid.

Depending on the level of your specific classroom, this lesson can take 1 to 3 days. Regardless, this lesson and the lab that follows offer many activities and challenges for students to feel more comfortable with the material.

### Objectives

Students will be able to:

* Create, read, update, and delete elements of an array.
* Iterate through an array using `.forEach`, `.map`, `.filter`, and `.reduce`.
* Identify the difference between array iteration methods and the standard for loop.
* Create, read, update, and delete key values in an object.
* Use functions as part of an object to call them like methods.
* Recognize the difference between arrays and objects and when to use one over the other

### Suggested Duration

1-3 periods (45-135 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.7** Design or remix a program that utilizes a data structure to maintain changes to related pieces of data.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **arrays**: An array is like a collection of boxes, each of which is called an element. Each element has a position in the array, and can hold a value. The data in an array must all be of the same data type .
* **iteration**: a function that repeats a block of code in a specified order, often until a specific result occurs.
* **for loop**: a control flow statement for specifying iteration.
* **Zero indexing**: Zero-based array indexing is a way of numbering the items in an array such that the first item of it has an index of 0, whereas a one-based array indexed array has its first item indexed as 1
* **object**: a collection of unordered properties. Values associated with a JavaScript object are called its properties.
* **key-value pairs**: a type of data storage that stores data as a set of unique identifiers (keys), each of which have an associated value which can be any data type or data structure.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                                                                                                                          Multiple Means of Representation                                                                                                                                                                         |                                                                                                                                  Multiple Means of Engagement                                                                                                                                  |                                                                                                               Multiple Means of Expression                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Consider having students share a social media page or area in life they are familiar with that warrants a **profile**. Have them create one for themselves; it should contain attributes such as a name, birthday or age, followers, strength, or similar attributes. They'll be learning about arrays and objects which are single variables that can hold all this information. | Students struggle most with syntax in dealing with advanced data structures. Consider giving them a resource that has a clear/simple example of accessing array elements or object key/values. For extra practice, have them write their profile with pencil and paper as an object and array. | Students will mostly be coding. Reflection questions give them an opportunity to reflect and articulate their thoughts and potential anxieties. Consider having students use pencil and paper to sketch arrays or objects before coding on the computer. |

### Suggestions for Differentiation

For best results, we suggest interchanging between the code along and the hands-on activity in the 3 parts that are sectioned below rather than doing the full code along and then having students do the full activity. The activity progressively increases in difficulty offering a low enough entry point for the students that need more guidance, and a challenging enough stretch goal for the students that need to be challenged. The critical point that students need to hit before moving on is indicated in the [exemplar (answer key)](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA1/U3LA1-Exemplar) version of the `script.js`.

There are small moments within the lecture where it is encouraged that you stop and ask predictive questions, e.g. "What do you predict this `console.log()` statement will print?". These questions are intentionally open-ended and challenging. The more advanced students will have an opportunity to problem solve while copying notes, and the students with less experience won't feel expected to have prior knowledge in order to answer these predictive questions.

Furthermore, students can remain in pairs so that during the code-along, they can ask each other for clarification as you move on. They can also help each other debug small syntax errors in similar situations.

### Resources

* **Lesson Starter Code** ([repl.it ](https://replit.com/@qrtnycs4all/U3LA1-Lesson-Starter-Code)| [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA1/U3LA1-Starter))
* [**Lesson Exemplar Code**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA1/U3LA1-Exemplar)
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools\*\***](https://www.w3schools.com/html/) - readable documentation
* [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* [**Practice: "Javascript Arrays, Iteration, and Objects"**](U3LA1/U3LA1-Exemplar/index.html)

### Assessments

**Formative:**

* During **group work:** spot check to ensure students are using `.forEach()`, `.map()`, and `.filter()` properly, and ask informal check-for-understanding questions. Look for opportunities to have students (who feel comfortable) show their properly completed code to help other students catch on.
* **Activity Code** can be collected and assessed as needed
* **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

* Unit 3, Arrays, Iteration, and Objects Lab 1 (Upcoming Lab)
* Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Open up the `notes.js` starter code along with students and have them write 10 variables with their favorite foods. At the same time, write 5 favorite foods yourself as written in the `notes.js` exemplar code, or have it already written. After only about a minute, open a discussion as to why that may be an unenjoyable task. What about if they had to write 50 variables? What issues could arise with having that many variables? Here's a couple:

* It's tedious
* Run out of variable names
* Not remember variable names

If only there was a way to save this list of variables, that are all related to each other, in one variable.

### Mini Lesson 1: Javascript Arrays (\~15 min)

> The students' starter code is empty. It is recommended to start with a similar `script.js` and add each segment one at a time so that students can code along with you. Now is a good time to tell students that you will be sharing all the following code if you plan on doing so.

1.  Code up the following array `favFoods` as a replacement for the 5 variables for 5 different favorite foods that you had written. Also code up `testGrades` and the following `console.log()`. Before running, ask students what they predict the output would be.

    ```js
    let favFoods = ['taco', 'burger', 'pizza', 'sushi'];
    let testGrades = [90, 88, 94, 100, 64];

    console.log( testGrades[1] );
    ```
2. If students haven't seen **indexing** before, they will most likely say **90** as opposed to the correct answer **88**. Take a brief moment and remind folks that in most languages indexing starts counting at 0. Then, head over to the Dev Tools window in the browser, and show the result being logged. Use more examples if your class needs it.
3.  Let's say you did extra credit and got an extra 10 points for the 64 test grade. Also, let's say you took another test and got an 81. How would we update the array to show these changes?

    ```js
    testGrades[4] = 74;         //changes the 64 to a 74
    testGrades.push(81);        //adds the 81 to the test grades

    console.log(testGrades);    //prints the whole array
    ```
4.  Now predict what this next line will do to the array. Run this code and notice what changes to the `favFoods` array. Play with the numbers and make a prediction as to what they represent.

    ```js
    favFoods.splice(3, 1);      //?

    console.log(favFoods);
    ```

    The `splice` method removes elements from the array. The first number is the index, and the second number is the number of elements to remove starting at the index. Here, we remove 1 element starting at the 3rd index.
5. There are other methods like `splice` and `push` you can use to manipulate the array in various ways. Here's some more information on [splice()](https://www.w3schools.com/jsref/jsref\_splice.asp) and [push()](https://www.w3schools.com/jsref/jsref\_push.asp).

### Mini Lesson 2: Array Iteration (\~15 min)

> You can use a named function or an anonymous function when iterating over an array using the following methods. Depending on the skill level of your students, consider leaning on either named functions or anonymous functions and allowing them to practice and "play" before showing them the other.

1.  Look at the following code, and predict what will be outputted. If students need a hint, ask them to look at the variable and function names. _The function will be run on every element of the array._ Run the code segment and show the results in the Dev Tools window in the browser. For [more examples on `forEach()`](https://www.w3schools.com/js/js\_array\_iteration.asp) check this link out.

    ```js
    // using a named function
    const printFoods = (element) => {
        console.log( element, "is so tasty!" );
    };

    favFoods.forEach( printFoods );
    ```
2.  \[Optional] There are 2 different ways to write this exact syntax. Above we used a named arrow function, and below notice that we use an anonymous arrow function. They produce the same results!

    ```js
    // using an anonymous function
    favFoods.forEach( (element) => {
        console.log( element, "is so tasty!" );
    } );

    // an anonymous function in one line!
    favFoods.forEach( element => console.log( element, "is so tasty!" ) );
    ```
3.  The `forEach()` method is an array method you can use to do something with each element in an array. If you wanted to change the values and make a **new** array you would use `.map()`. Let's say we wanted to curve all the grades.

    ```js
    // named function
    const curveGrade = (grade) => {
        return grade * 0.5 + 50;
    };

    let curvedGrades = testGrades.map( curveGrade );

    console.log("Test Grades", testGrades)
    console.log( "Curved Grades", curvedGrades );
    ```

    ```js
    // anonymous arrow function
    let curvedGrades = testGrades.map( (grade) => {
        return grade * 0.5 + 50;
    } );

    // one line
    let curvedGrades = testGrades.map( grade => (grade * 0.5 + 50) );
    ```

    Notice that the original test grades don't change! Instead we made a new array with each value curved. For [more examples on `map()`](https://www.w3schools.com/js/js\_array\_iteration.asp) check this link out.
4.  Code up the following, and have students predict the output. What do you notice as the similarities and differences between `filter()` and `map()`?

    ```js
    // named function
    const isGradA = (grade) => {
        return grade >= 90;
    };

    let aGrades = testGrades.filter( isGradA );

    console.log( aGrades );
    ```

    ```js
    // anonymous function
    let aGrades = testGrades.filter( (grade) => {
        return grade >= 90;
    } );

    // one line
    let aGrades = testGrades.filter( grade => grade >= 90 );
    ```

    Similar to `map()` this one creates a new array, and uses the arrow symbol to show what to do to each element. However, `filter()` requires a condition and only keeps the elements where the condition is true -- `map()` keeps all the elements all the time, but changes their value in some way. For [more examples on `filter()`](https://www.w3schools.com/js/js\_array\_iteration.asp) check this link out.
5.  `forEach()`, `map()`, and `filter()` are a few of the most common methods used to iterate over an array. However, if you wanted to write out some steps more explicitly, you can write a `for loop` instead. This is how it's typically written. _"For each element in `favFoods`, log the element."_

    ```js
    for (const element of favFoods) {
        console.log( element );
    }
    ```

> Whether or not you have stopped before this point to have students work on the challenges, it is highly encouraged that you now pause instruction and have students start using the syntax above before moving on to _Mini Lesson 3_.

### Mini Lesson 3: Javascript Objects (\~15 min)

1.  Look at this array and predict what each element represents. What are ways that our predictions can be made more obvious? You can probably guess the first and last name, but the representation of each element is unclear. If we had a label of some kind, it would be much easier to understand.

    ```js
    let studentList = [82, 'Daniel', 'Perez', 'blue', 12, 18];
    ```
2.  An object solves that problem for us. Take a look at the following code and predict the outputs. The first output will print out the students id which is 82. The second will print out the sentence "Daniel Perez is 17 years old." The keys are the labels on the left, and the values are the elements on the right are from the array above.

    ```js
    let student = {
        id: 82,
        firstName: 'Daniel',
        lastName: 'Perez',
        eyeColor: 'blue',
        grade: 12,
        age: 17
    };

    console.log( student.id );
    console.log( `${student.firstName} ${student.lastName} is ${student.age} years old.` );
    ```
3.  What if it's Daniel's birthday. He's 1 year older. And, now that he's an adult, he wants to change his name to Ezra. You can change both these values as follows.

    ```js
    student.firstName = 'Ezra';
    student.age += 1;

    console.log( student );
    ```
4.  Ezra is now out of highschool. So we can get rid of the key `'grade'`, and his major in college is `'Computer Science'`. Look carefully at the following code and predict what will happen. _This code doesn't produce an error even though major is not yet a key in the object. We can create a new key by assigning it a value as if it was always there._

    ```js
    student.major = 'Computer Science';
    delete student.grade;

    console.log( student );
    ```
5.  Finally, there's a new student who has their very own `printBio` function. The key word `this` tells the function to look in this object for the variables.

    ```js
    let student2 = {
        id: 123,
        firstName: 'Tyler',
        lastName: 'Young',
        eyeColor: 'brown',
        age: 21,
        printBio: function() {
            return `${this.firstName} ${this.lastName} is ${this.age} years old.`
        }
    };

    console.log( student2.printBio() )
    ```

**See the `script.js` for mild, medium, and spicy challenges to practice the concepts above.** For mor examples on objects, head over to [this link](https://www.w3schools.com/js/js\_loop\_forof.asp)!

### Wrap Up (\~5-10 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question or two to answer on an easily collectable paper or document:

1. What is something you struggled with?
2. Which iteration method do you prefer and why: named arrow functions or anonymous arrow functions?
3. Head back to the `notes.js`. Give yourself a rating from 1-5 for how you feel about the following topics:
   * Creating an array
   * "Indexing" arrays (starting at 0)
   * Iterating through arrays (using `forEach()`, `map()`, and `filter()`)
   * Creating an object
   * Accessing "values" in an object (using "keys")
