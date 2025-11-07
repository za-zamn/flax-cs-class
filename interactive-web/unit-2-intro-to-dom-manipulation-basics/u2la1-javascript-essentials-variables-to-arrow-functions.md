---
description: >-
  How can I store and manipulate data to later be used in various ways
  throughout my website?
---

# U2LA1: JavaScript Essentials - Variables to Arrow Functions

### Teacher Notes & Overview

This is likely students' first time working in JavaScript. However, students will likely pick up the material quickly as this course was built with the idea that most (if not all) of them have just finished a course using p5.js. Therefore, consider putting more emphasis on vocabulary throughout the instruction for this lesson.

Here, students will be learning the basic JavaScript syntax: variables & data types, arithmetic, concatenation, comparison operators, basic if/else syntax, and functions (namely arrow functions). Instruction will consist of mainly a lecture style presentation. However, the presentation is written with opportunities for students to engage by making predictions.

This lesson is designed as a vanilla JavaScript lesson. There is no front end other than the console in the development tools window (the "dev tools console"). Be mindful that this is likely the first time students will see the console section in the dev tools window.

As it is now, the starter `script.js` code is mostly blank. Depending on where a majority of your students are coming from, you may consider modifying the amount of starter code you give to relieve the pressure of copying notes allowing students to add comments or put more of their attention on your presentation. Be mindful that students with IEPs may **require** a visual manipulative. Alternatively to taking notes, they can rank their confidence on each section as you go through. (See the [#Wrap up](u2la1-javascript-essentials-variables-to-arrow-functions.md#wrap-up-5-minutes) section below)

### Objectives

Students will be able to:

* Explain and use variables with both `let` and `const`
* Use `console.log()` and the developer console to determine whether code is working
* Perform arithmetic operations with variables and literals
* Write if, else if, and else to trigger conditional events including their conditional operators.
* Recognize and explain what a function is and how it is used
* Predict the expected return value of a function

### Suggested Duration

1-2 periods (45-90 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.8** Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.
* **9-12.CT.9** Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **variable**: Variables are containers for storing data (storing data values).
* **declaration**: a declaration determines the name and data type of a variable or other element.
* **assignment**: to give a new value to a variable or property
* **concatenation**: the operation of joining two strings together.
* **methods**: a method is a programmed procedure that is defined as part of a class and included in any object of that class.
* **comparison operators**: operators that compare values and return true or false. The operators include: > , < , >= , <= , === , and !==
* **conditional statements**: they instruct the computer on the decision to make when given some comparison.
* **arrow function**: a “chunk” of code that you can use over and over again, rather than writing it out multiple times.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                       Multiple Means of Representation                                                                       |                                                     Multiple Means of Engagement                                                     |                                                  Multiple Means of Expression                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Have students find websites they've visited that they can **interact** with. Use this as an anchor site that students can identify with to rationalize back-end programming. | Print a reference sheet or form a slide deck on basic Javascript syntax that students can reference while completing the challenges. | Students have an opportunity to self assess at the close of this lesson. The activity can also be used as a formal assessment. |

### Suggestions for Differentiation

This lesson is about 80% lecture and 20% percent student engagement. The intention is to have students code along and a build a program full of syntax specific pieces that they can refer to at a later point during the unit.

There are small moments within the lecture where it is encouraged that you stop and ask predictive questions, e.g. "What do you predict this `console.log()` statement will print?". These questions are intentionally open ended and challenging. The more advance students will have an opportunity to problem solve while copying notes, and the students with less experience won't feel expected to have prior knowledge in order to answer these predictive questions.

Furthermore, students can remain in pairs so that during the code along, they can ask each other for clarification as you move on. They can also help each other debug small syntax errors in similar situations.

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U2LA1-Lesson-Starter-Code#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA1/U2LA1-Starter))
* **Lesson Exemplar** ([repl.it](https://replit.com/@qrtnycs4all/U2LA1-Exemplar) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA1/U2LA1-Exemplar))
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* [**MDN**](https://developer.mozilla.org/en-US/)- a robust but sometimes less student-friendly documentation

### Assessments

**Formative:**

* **Lesson Notes** can be collected and marked for completion
* **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

> Note: All assignments from this point on will include javascript. This lesson includes the essentials, the foundational tools that are encompassed in all future lessons and labs. Two big ones are mentioned here.

* Unit 2, "Javascript Essentials: Arrow Functions" Lab 1 (Upcoming Lab)
* "Input-Output Helper Site" Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Open up the Exemplar `script_demo.js` and tell students that theres is this function here called `triple` and we're calling it 3 times on 3 different numbers: 10, 22, and 0. Ask them what they think the function will do. Emphasize that students should be making a prediction here, and that it is likely, and expected, that they wouldn't know for sure.

> Note: this may feel like a stretch to have students get this, and it partially is, but students will likely intuit (because of the function name) that the numbers will be tripled.

Show the students the 3 tripled numbers in the console of the dev tools window, and briefly explain how the code is connected to a website.

Don't spend much time on articulating the syntax and how the function is working, but instead mention that it's called a function, and that by the end of the lesson, they will know how to write and read one. Before doing more intermediate topics like functions, we gotta review the basics.

### Lesson & Demo: The Javascript Essentials (\~35 min)

1. There is a lot syntax that will be unloaded onto the students. Preface this next section by telling students that you will be giving them a reference sheet that they will copy and code along with you. They can come back to this document for the entirety of the unit to refer to specific syntax. The students' starter code is empty. It is recommended to start with a similar `script.js` and add each segment one at a time.
2.  Before any code can be written, the students need to connect the `script.js` to the website by including it in a `<script>` tag in the `index.html`. Demo these steps and have students do them as well.

    ```html
    <script src="script.js"></script>
    ```
3.  Now, in the `script.js` include the following **variable declarations**. Students having come from P5 will likely know what a variable is and possibly what the data types are, but this will be a good time to refresh and remind students.

    ```js
    // Fundamental data types
    const studentID = "j61L22";
    let firstName = "Jayden";
    let age = 19;
    let year = "freshman";
    let isStudent = true;
    let gpa = 4.0;
    let major = undefined;

    console.log(firstName, age)
    ```

    This is a good time to:

    * ask students what they predict will be outputted as a result of the `console.log()` line. It should print "Jayden 19"
    * point out `const` vs `let` and explain that Jayden's studentID wont change through his years as a student, but everything else might.
    * briefly review the difference between a string, integer, float, boolean, and undefined
4.  Add the next few **reassignment statements** to the code, and ask students to predict the output of age. It should be 22 after these statements.

    ```js
    // Reassignment (no let)
    age = 20;
    age = age + 1;
    age += 1;

    console.log(age)
    ```
5.  Next, include the following notes about **arithmetic operations** and **Math methods**. Go over the expected outputs for the 3 Math methods without spending too much time on the syntax as this will be best learned through their practice using them.

    ```js
    // Essential Operations
    age + 10;
    age - 5;
    age * 2;
    age / 5;


    // Additional operations
    console.log( Math.round(5.8) );

    console.log( Math.floor(23 / 4) );

    console.log( Math.ceil(5.5) );
    ```
6.  There are two ways to combine string literals with string variables and even numerical variables: **string concatenation** and **string formatting**. These 2 examples produce the same results, and they're both important to recognize and use. If you remember, `"Jayden"` was the firstName from before, and `19` was his age. Any ideas what `string1` will print to the console?

    ```js
    // Concatenation v. templates
    let string1 = firstName + " is " + age + " years old.";
    let string2 = `${firstName} is ${age} years old.`;
    ```

    You can purposely leave the `console.log(string1);` statement out hoping someone will mention it, bring it up when nothing get's printed, or just include it from the start. They should both read `Jayden is 19 years old.`
7.  There's also some cool methods that can be run off of strings (**String Methods**). For example, `.toUpperCase()` turns all the letters in a string to their capitalized version.

    ```js
    // String methods
    console.log( string1.toUpperCase() ); 

    console.log( string1.includes("old") );
    ```
8.  Now, there are ways to compare two values using something called **comparison operators**. These ask the question to the computer, and the answer is always either `true` or `false`.

    ```js
    // Comparison operators - true or false?
    age === 10;     // is age equal to 10? notice the triple equal sign!
    "42" === 42;
    age > 10;
    age <= 99;      // is age less than or equal to 99?
    year === "freshman";
    ```
9.  We can use these comparison operators to determine what actions will be done as a result. Continue to code the following **conditional statements** as you explain each line in a pseudo-code like language (i.e "If the user's name is Miles and his age is equal to 18, then... etc.)

    ```js
    // Conditional statements;
    let username = "Miles";
    let age2 = 18;

    if (username === "Miles" && age2 === 18) {
        console.log("Welcome, Spiderman");
    } else if (age2 < 18) {
        console.log("Unauthorized youth access.");
    } else {
        console.log(`Welcome ${username}`);
    }
    ```

    If time allows, challenge students to come up with different `username` and `age2` values to get each of the 3 results before moving on. Again, don't spend too much time on syntax as this will be covered more in depth in lesson 3 of this unit.
10. Finally, we have functions. Give students the following code and ask them to predict any of the 3 `console.log()` statements before showing them the results.

    ```js
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

    console.log(a, b, c);

    ```
11. Functions can also be written as **arrow functions**. This is another way of writing a function, and it's the more common way to write it. Notice that the body of the function doesn't change, just the signature.

    ```js
    const getHalf2 = (x) => {
        if (x % 2 === 0) {
            return x / 2;
        } else {
            return false;
        }
    };
    ```

**Practice Activities**

If time allows include these optional activities in your lesson based on your individual students' needs. Feel free to add or remove any functions from this list.

_For each of the following functions, change them into arrow functions and write one sentence to summarize what the function is doing. Plug in as many different inputs as you need to make your prediction._

A.

```js
function double(x) {
    return x * 2;
}

console.log( double(10) );
```

B.

```js
function isEven(x) {
    if ( x%2 == 0 ) {
        return true;
    } else {
        return false;
    }
}

console.log( isEven(9) );
```

C.

```js
function squareRoot(x) {
    if ( x >= 0 ) {
        return Math.sqrt(x);
    } else {
        return undefined;
    }
}

console.log( squareRoot(-4) );
```

D.

```js
function likelyVerb(x) {
    if( x.includes("ing") ) {
        return true;
    } else {
        return false;
    }
}

console.log( likelyVerb("coding") );
```

E.

```js
function cropString(x) {
    if( x.length > 10 ) {
        return x.substring(0, 10);
    } else {
        return x;
    }
}

console.log( cropString( "This is javascript!") );
```

### Wrap Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to complete the following task on an easily collectable paper:

**The Self Reflection Assessment**

Using the following scale from 1-4, scroll up to the notes given to you today and grade your confidence on each topic:

* Fundamental data types
* Reassignment
* Essential Operations
* Additional operations
* Concatenation v. templates
* String methods
* Comparison operators - true or false?
* Conditional statements
* Functions

Your confidence levels:

* **1**: I don't understand this topic at all
* **2**: I partially understand but need more practice
* **3**: I mostly understand it, but I'm not an expert yet
* **4**: I fully understand this topic; I can help others with it
