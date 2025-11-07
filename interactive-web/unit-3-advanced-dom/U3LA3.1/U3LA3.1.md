---
description: What structures can I use to store and manipulate larger and more nuanced data?
---

# U3LA3.1: Javascript Mutability

### Teacher Notes & Overview

This is a vanilla javascript lab. It takes place solely in the console and is aimed at teaching students about mutability. Students will learn when an assignment is _passed-by-reference_ vs when it is _passed-by-value_, and they will learn a _"shallow copy"_ vs a _"deep copy"_.

These tools are helpful debugging tools and not essential skills that should be graded or memorized. This lesson can be framed as a debugging session or an exploration -- a chance to review certain topics and understand other concepts deeper and with more context.

Depending on the level of your specific classroom, this lesson can take 1 to 2 days. The long lesson demo is sectioned off into smaller portions. You can break these up over a couple of days ending the day with an "Exploration" of `let` vs `const` with the day's material thus far (see Student Exploration below). 

### Objectives

Students will be able to:

* Intentionally make mutable and immutable variables.
* Debug code with objects that have unintentionally been made mutable.
* Use assignment operations that pass-by-value and pass-by reference.
* Make deep copies and distinguish them from shallow copies
* Explain the difference between "let" and "const" in relation to mutability.

### Suggested Duration

1-2 periods (45-90 minutes)

### NYS Computing Standards

[Courtney to Edit]

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **pass-by-reference**: a method of passing the address of an argument in the calling function to a corresponding parameter in the called function. (ie. pass the entire reference of the data)
* **pass-by-value**: you are making a copy in memory of the actual parameter's value that is passed in, a copy of the contents of the actual parameter (ie. pass the data itself)
* **spread operator**: expands iterable into individual elements. The spread operator is commonly used to make deep copies of JS objects.
* **mutable object**: An object that allows you to change its values without changing its identity
* **deep copy**: a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. (ie. released of all variable references)
* **shallow copy**: a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
* **memory location**: location in computer memory that holds data in the form of a binary number or decimal number of some sort.

### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :----------------: | :------------------: | :--------------: |
| The themes here were randomly chosen merely to illustrate the programmatic concepts. Consider having students fill out a survey giving you an array or object of data in the theme they choose that you can use in place of the arbitrary themes used here for the examples.  | Students will be engaged in a code along with multiple examples of several different themes. Consider having a resource like a slide deck to consolidate the examples for students to reference at a later time. | Student will mainly be note taking and writing their reflections. Consider having them write down their questions whether or not they choose to ask them. This can then be anonymously collected, or asked on a follow up day.  |

### Suggestions for Differentiation

Students have opportunities to predict, look up documentation, and explore the code on their own allowing them to self differentiate for the most part.

Consider having the code pre-written and commented so your students can uncomment sections as you go through them. In some cases, this will allow for them to be more available to make predictions and ask questions. Students may also require this as per an IEP, for example.

There are a lot of new vocabulary words used in this section. Consider having these words defined for students as a supplemental material, on the board, large post-it, or other easily accessible location.

### Resources

* **[Repl.it](https://replit.com/\~)**- online IDE
* **[W3 Schools**](https://www.w3schools.com/html/)** - readable documentation
* **[MDN](https://developer.mozilla.org/en-US/)** - a robust but sometimes less student-friendly documentation
* **[Practice: "Javascript Arrays, Iteration, and Objects"](/unit-3-advanced-dom/U3LA1/U3LA1-Exemplar/index.html)**

### Assessments

**Formative:**

- During **code along:** use participation during predictive questions to informally asses whether students are following or thinking critically.

- **Activity Code** can be collected and assessed as needed

- **Student Exploration** and **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

- Unit 3, Lab 3 (Upcoming Lab)

- Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

1. Have students open the starter `script.js` and work in pairs to predict whether each output is True or False. Implore them not to run the code just yet. (NOTE: the script is not linked in the `index.html` anyway as of right now)

2. After a few minutes, open the `index.html` and connect the `script.js`: `<script src="script.js"></script>`. Open the `script.js`, comment out all lines but the first one, and ask groups for their predictions as you show each result one at a time. The answers should be: _True_, _True_, _False_, _False_, _False_.

3. Don't spend much time explaining why the results are what they are. Instead, use the curiosity to lead into the lesson.

4. Tell students that there is something weird happening behind the scenes here, and that in this lesson we're going to dive deeper and find out what.


### Mini Lesson: Primitive Types and Mutability (\~25 min)

**Primitive Datatypes vs Objects**

1. Tell students that we will do some more analysis and predictions as we uncover what is happening. Copy down the following code and give students a minute to analyze and predict the output before taking predictions:
    ```js
    let numX = 10;
    let numY = numX;
    numY += 5;

    console.log("numX", numX);
    console.log("numY", numY);
    ```
    _"numX 10"
    "numY 15"_
    It may help to breakdown the statements one line at a time if this is not clear for your students. 

2. Now, copy down the following code and give students a minute again to analyze and predict the output before taking predictions:
    ```js
    let arrX = [1, 2, 3];
    let arrY = arrX;
    arrY[0] = 999;

    console.log("arrX", arrX);
    console.log("arrY", arrY);
    ```
    After the reveal, tell students that array Y is not being assigned to the value of the array, `[1, 2, 3]`, as they may try to intuit. Instead the **memory location** of that value is saved because it's an object.

3. Explain to students that in the first example, `10` is a **primitive datatype**, a single, simple value that gets passed as such. Other primitive datatypes are _strings, booleans, null, and undefined_. In the second example, `[1, 2, 3]` is an array. Because it isn't primitive, the variable `arrX` points to the specific array's **memory location** which gets passed to `arrY`. **Since they both point to the same array, when you change 1, you change the other!**

**The Spread Operator**

4. What's the solution!? How do we make a copy of the array without connecting them together? We use the **spread operator**. Consider the following:
    ```js
    let arrA = [1, 2, 3];
    let arrB = [...arrA];   //spread the contents of arrA into a new one

    arrB[0] = 999;

    console.log("arrA", arrA);
    console.log("arrB", arrB);
    ```
    We've spread out the contents of arrA into a new array. Hurray! This works with objects too.
    
5. Have students take a look at this next example using the spread operator and predict what the output may be for `objA` and `objB`.
    ```js
    let objA = {
        species: "dog",
        breed: "golden retriever",
    };
    let objB = {...objA};

    objB.breed = "yorkie";

    console.log("objA", objA);
    console.log("objB", objB);
    ```
    The breed of `objB` changed, but the breed of `objA` stayed the same. Without the spread operator, we would have also changed the breed of `objA`, most likely unintentionally. With the spread operator, we can copy all the contents making a **shallow copy**. 

6. (Optional) The previous action of creating a copy and changing a value can be done all at once, too:
    ```js
    let objC = {
        ...objA,            // spread objA into this new object
        breed: "yorkie",    // overwrite the previous attribute
    };

    console.log("objC", objC);
    ```
    And, you can add new key-value pairs while your at it...
    ```js
    let objD = {
        ...objA, 
        breed: "yorkie",    // changes 'breed'
        name: "Ralph",      // adds new attribute, 'name'!
    };
    console.log("objD", objD);
    ```

**Documentation: Shallow Copy or In Place**

7. Let's look at an example of a method we've seen before. Give students a minute to analyze the following code and ask them to predict if...
    - `.map()` will change the values of the array its mapping?
    - `arr1[0] = 9;` will change a value in `arr2`, too?
    ```js
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.map(number => number * 10);

    console.log("arr1 before: ", arr1);
    console.log("arr2 before: ", arr2);

    arr1[0] = 9;
    console.log("arr1 after: ", arr1);
    console.log("arr2 after: ", arr2);
    ```
    _Nope, `.map()` actually creates a new array with the changed values._

8. Open the [documentation for `.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) with the students, and point out that it says **"method creates a new array"**.

9. Now, show students the following code and have them look up the documentation for `.filter()` and `.sort()`. The goal is to find out if the they will make a shallow copy, or if they will change the original array ("in place"). Then, predict the results based on their finding.
    ```js
    let employees = ["Marcos", "Daniel", "Zoey", "Albert", "Joe"];

    console.log("'employees' Filter():", employees.filter(employee => (employee.length > 4)) );
    console.log("'employees' Sort()", employees.sort() );

    console.log("Original 'employees' after filter() and sort(): ", employees);
    ```
    _filter() makes a copy and sort() works in place_

**For..of & Changing Values In Place**

10. Have students take a look at the following code and predict what the output will be.
    ```js
    let numbers = [2, 3, 4];
    console.log("Original 'numbers': ", numbers);

    for(let x of numbers) {
        x = x*x;
    }
    console.log("For..of Results: ", numbers);
    ```
    _The values are passed but the original array is not changed._ There's actually 2 ways we can change the values of the array:
    ```js
    // Using an explicit, traditional for loop
    for(let idx=0; idx<numbers.length; idx++){
        numbers[idx] = numbers[idx]*numbers[idx];
    }
    console.log("Explicit forLoop Results: ", numbers);

    // This may be more familiar though...
    numbers = numbers.map(num => num*num);
    ```

**Nested Deep Copy vs a Shallow Copy**

11. Let's look at and predict one more example. In the example below, 2 things are "changed". Have students take a look and predict the output:
    ```js
    let teacher = {
        name: "Mrs. Puff",
        subject: "Math",
        students: ["Spongebob", "Patrick"],
    };
    let teacherClone = {...teacher};

    teacherClone.subject = "English";           //changes primitive "string" datatype
    teacherClone.students.push("Pearl");        //changes non-primitive "array" object

    console.log("Teacher", teacher);
    console.log("Shallow Teacher Clone", teacherClone);
    ```
    _The old subject stays "Math", but the array get's a push_. Very unintuitive! This is called a **shallow copy**. The contents were copied over, but students, because its value is an array, that array has to be spread too.

12. Instead of manually spreading all nested values, we can use a function called `structuredClone()` that does a **deep copy** for us, getting rid of all the "connections". Notice the following:
    ```js
    let deepTeacherClone = structuredClone(teacher);
    
    deepTeacherClone.students.push("Sandy");    // changes deep copy of object!

    console.log("Teacher", teacher);
    console.log("Deep Teacher Clone", deepTeacherClone);
    ```

### Student Exploration: `Let` vs `Const` (~10 min)

- Have the students go back to the beginning of the notes and switch every `let` to `const` one at a time. Keep the ones that allow this and change it back to `let` if you encounter an error.
    - [Bonus] - See if you can predict which ones will and will not work
    - [Bonus] - For each change, write down why they are causing an error or why they are allowing the change. HINT: `const` (short for constant) means cannot be changed. Are you changing it somehow?

### Wrap Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

The ["Student Exploration"](#student-exploration-let-vs-const-10-min) above can be used as a wrap up, writing activity to summarize the lesson. If you'd like to add more to that or if you'd like something more reflective, use the questions below:

1. Why might using `const` be more helpful than `let`? When would `let` be more necessary?
2. What was something that you struggled with today? How did you overcome that barrier?
3. Do you have any unanswered questions?