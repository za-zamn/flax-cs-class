---
description: How can I make changes to a page based on an input?
---

# U2LA3: Inputs and Conditionals

### Teacher Notes & Overview

Students will be working with a single input field and writing conditional statements to validate (and invalidate) user inputs. Prerequisite knowledge includes finding IDs in the `index.html`, using `querySelector()`, writing functions, and using `addEventListener()`.

The extensions allow for more practice with the topic in slightly more challenging ways focussing more on conditionals than on various input types. The lab that follows puts more emphasis on various inputs while also including conditional statements.

### Objectives

Students will be able to:

* retrieve inputs from a textbox input
* use if, else if, and else to trigger conditional events.
* write conditional and compound conditional statements using conditional operators

### Suggested Duration

1 period (\~45 minutes)

### NYS Computing Standards

* **9-12.CT.8** Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **DOM**: The Document Object Model (DOM) defines the logical structure of documents and the way a document is accessed and manipulated.
* **Conditional Statements**: statements that are created by the programmer which evaluates actions in the program and evaluates if it's true or false. If-then-else statement allows conditional execution based on the evaluation of an expression.
* **event listener**: a procedure or function in a computer program that waits for an event to occur.
* **query Selector**: The `querySelector()` is a method used for searching and returning the very first element within the document that matches the given selector.
* **Function**: a “chunk” of code that you can use over and over again, rather than writing it out multiple times.
* **innerHTML**: The Element property `innerHTML` gets or sets the HTML markup contained within the element

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                                                               Multiple Means of Representation                                                                                                              |                                                                                        Multiple Means of Engagement                                                                                       |                                                                            Multiple Means of Expression                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| The 5 boroughs of Manhattan were picked in this "Quiz" because it is an innocuous entry point. Definitely change this to something else that's more important/relevant to your specific class - school clubs, historical icons being taught currently, etc. | Have some partially completed code (potentially more than what's provided) that students can add to throughout the code along for students who need extra support. Have syntax reference sheet available. | Mild, medium, and spicy activities act as a formal assessment of skills while the "Wrap Up" writing activity offers reflection and higher order thinking; an informal assessment. |

### Suggestions for Differentiation

To differentiate across different levels, we recommend keeping instruction short and having students work in pairs when getting practice. The Lesson & Demo section is written with this method in mind.

The activities below are in an order that progresses in difficulty. The advanced students will work quickly through the first couple of challenges giving you time to support the struggling students. Once they get a grasp on things, you can support the more advanced students who by that time are probably stuck on the more advanced challenges.

Be sure to end early enough that everyone has reached but not necessarily started the extensions. It is okay if most students don't complete any or all extensions. They exist mainly for differentiation and an engaging challenge for the students that need it

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U2LA3-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA3/U2LA3-Starter))
* [**Lesson Exemplar Code**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA3/U2LA3-Exemplar)
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools\*\***](https://www.w3schools.com/html/) - readable documentation
* [**(OPTIONAL) MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* [**Practice: "5 Boroughs Quiz"**](U2LA3/U2LA3-Starter/index.html)

### Assessments

**Formative:**

* During **group work:** spot check to ensure students are using conditional statements and innerHTML correctly. Getting errors with accessing variables out of scope is most common here. Give students a chance to articulate to you their understanding verbally for an informal formative check.
* **Activity Code** can be collected and assessed as needed
* **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

* Unit 2, "The Interactive Site" Lab 3 (Upcoming Lab)
* "Input-Output Helper Site" Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

Ask students to open the starter code to the `script.js`. Point out the 3 `querySelectors` at the top of the file, and ask students to work in pairs and find the IDs that are associated to each one based on the variable names: `textBox`, `outputBox`, and `statusBox`. (\~5 minutes)

After about 5 minutes, ask for three volunteers to share what they found (1 volunteer per ID). Emphasize how this can be a bit challenging, and reward them for trying regardless of their answers. Fill in any missing IDs and have them do the same. Show the console log in the dev tools to illustrate the success. (\~3 minutes)

Lastly, ask students what they think these 3 DOM elements will be used for.

* `textBox` is used to capture the user's input
* `outputBox` is used to display the appropriate response depending on the input.
* `statusBox` is used to tell the user if the input is invalid and if they've guessed all 5 boroughs.

### Lesson & Demo: Accessing User Input & Writing Conditional Output (\~25 min)

1. After going through the warmup, briefly walk the students through the rest of the code pre-coded in the `script.js`. Show them how there's an event listener on the `textBox` which is listening for a change in the input field, and show them the function that it's connected to `checkAnswer()`.
2.  Demonstrate how when an input is added to the textfield, for example "Manhattan", nothing happens. Use `.value` to access that input, save it into a variable `currentAnswer`, and print it to the console. Show the students through the console log that now, when something is inputted, we have proof that the value is saved.

    ```js
    const checkAnswer = () => {
        // Retrieve inputted value
        const currentAnswer = textBox.value;
        console.log("Checking", currentAnswer);
    ```
3.  Now that we have access to the input, lets "check" if the input is a valid answer. Show students how we can use an **if statement** to check that the input is one of the Boroughs, "Manhattan" for example. Be sure to talk through each statement as you code it, and give students the choice to just watch or to code along.

    ```js
    // Match against boroughs; Add text to output and increment score
    if (currentAnswer === "Manhattan") {
        outputBox.innerHTML += "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>";
        score += 1;
    }
    ```

    * If they input Manhattan, lets change the outputBox's `innerHTML` to include a special message.
    * Also, since Manhattan is a correct guess, increase the score variable by 1 point.
4. Take a moment to demonstrate that this is now working before adding an `else if`.
5.  Now that Manhattan is working properly, what if the user inputs another borough like "Brooklyn". We can use "else if" to continue our check. Set up an `else if`, but leave it blank as follows. Tell students they will finish this code in a second.

    ```js
        score += 1;
    } else if (currentAnswer === "Brooklyn" ) {
        //
    }
    ```
6.  The last thing they need to know is that finally after all checks are complete, you can end with an "else" statement without putting a condition. Ask students in what situation they think will the instructions in this scope be run. It should only run if an invalid input is entered. Set the else statement up, but again leave it blank and tell students they will complete it in the activity to follow.

    ```js
    // Match against boroughs; Add text to output and increment score
    if (currentAnswer === "Manhattan") {
        outputBox.innerHTML += "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>";
        score += 1;
    } else if (currentAnswer === "Brooklyn" ) {
        //
    } else {
        // invalid input
    }
    ```
7. Students can now work in pairs on the following mild, medium, and spicy activities.

**Mild Activities**

1. Continue the `else if` _conditional statements_ in the same pattern as how "Manhattan" is coded. Test each one out as you code it so you know you're on the right track. Here are the special messages that should be printed out with each correct guess:

* **Manhattan** - `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
* **Brooklyn** - `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
* **Bronx** - `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
* **Queens** - `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
* **Staten Island** - `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`

2.  For the `else` statement, change the `innerHTML` of the `statusBox` to be an invalid message containing the inputted guess. NOTE: Don't increment the score as this is an incorrect guess. You can use a formatted string as follows:

    ```js
    `Sorry, but ${currentAnswer} is not a NYC Borough.`
    ```
3. Test out the website with right and wrong guesses.

**NB:** _When formatting strings, you are using back ticks and NOT single or double quotes - the back tick can be found to the left of the 1 key on the top left corner of the keyboard._

**Medium Activities**

4.  Create a new function `checkScore()` that changes the statusBox message if the score is equal to 5. The message should say `"Congratulations, you found all five boroughs!"`. Then, call the `checkScore()` function under the comment in the `checkAnswer()` function as follows:

    ```js
    //check if score = 5! (winner)
    checkScore();
    ```
5. Add a secret town to the list of valid entries. It can be a town in one of the boroughs like "Chinatown" or "West Village", it can be a town in New Jersey like "Jersey City", or it can be a made up town like "Halloween Town". When this entry is inputted, it should have its own special output like the 5 boroughs, but it should not add 1 to the score.
6. Under the score variable, create a boolean variable for your additional town, and set it to `false`.
   * When your town is guessed, change the boolean variable to `true`.
   * In the `checkScore()` function, if the score is equal to 5 and if the boolean value is true, put a special message in the `statusBox`, and disable it! Check out this resource to find out [how to disable an input field](https://www.w3schools.com/jsref/prop\_text\_disabled.asp).

**Spicy Activities**

7. Currently, if you type any of the following guesses in the `inputBox`, you will get an invalid result: "The Bronx", "bronx", "Bronx " (notice the space after). Think about ways you can allow for these nuanced responses to be successful, and solve them with your partner. Consider the following resources:
   * [String Methods](https://www.w3schools.com/js/js\_string\_methods.asp)
   * [Compound Conditional Statements](https://www.w3schools.com/js/js\_comparisons.asp)
8. Currently, this game is a bit flawed. Try typing in "Manhattan" 5 times and see what happens! With your partner, come up with a way to make sure this doesn't happen. The `statusBox` should have a message that tells the user they've already guessed that borough.

### Wrap Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question to answer on a post-it or other easily collectable paper:

1. What did you find most challenging about this lab? How did you overcome that challenge?
2. What other inputs might you see on a webpage that would require some conditional computing.
3. If you didn't get to #7, read it and think of a solution you would do to prevent a user from successfully typing the same valid input more than once.
