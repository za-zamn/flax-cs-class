---
description: >-
  How do you implement a type ahead search so that users can see recommendations
  as they search?
---

# U3LA2.2: Typeahead Search

### Teacher Notes & Overview

In this lesson, students will be working with an array of objects using the iterative techniques learned in prior lessons. Typeahead search is a combination of an input field, a dropdown menu, and array filtering behind the scenes.

This lab can be done in 1 day or can be spread across \~3 days depending on the level of your students. The Warmup is set for \~15 minutes allowing students to kick start the lesson by reviewing material they should know up until this point. This can be stretched to a whole day if students struggle with it and need the extra time, or it can be shortened to 5 minutes if your students are coming in with more knowledge.

Furthermore, the practice activities give students more time with the code from this lesson allowing them to explore function calls, iteration, and DOM manipulation. If your students need the practice, this too can span \~1 day. Otherwise, if they are more comfortable, feel empowered to cherry-pick the activities that make the most sense for your class.

### Objectives

Students will be able to:

* Connect DOM elements by referencing HTML code.
* Iterate through an array of objects
* Control the flow of execution using conditional statements
* Add and remove class names from a class list

### Suggested Duration

1-3 period (\~45-135 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.8** Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.
* **9-12.CT.9** Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Typeahead Search**: a method for progressively searching for and filtering through text. It is also sometimes known as autocomplete.
* **querySelectorAll**: returns a static NodeList representing a list of the document's elements that match the specified group of selectors
* **iterative methods**: a method that repeats a block of code in a specified order, often until a specific result occurs. Algorithms use iterations to run a program repeatedly until it meets certain conditions or until the algorithm repeats a set number of times
* **conditional statements**: they instruct the computer on the decision to make when given some comparison.
* **arrow function**: a “chunk” of code that you can use over and over again, rather than writing it out multiple times.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                                        Multiple Means of Representation                                                                                       |                                                                                              Multiple Means of Engagement                                                                                             |                                                  Multiple Means of Expression                                                  |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Have students find 3 websites or apps that give suggestions while doing a search. (1 example could be Google) Have them discuss the differences between websites and or predictions in how this is happening. | Conditional statements, functions, and `filter()` are being used here. Consider offering a resource of some kind (Google slide deck, paper print out, etc.) to support students as they think through the challenges. | Students have an opportunity to self assess at the close of this lesson. The activity can also be used as a formal assessment. |

### Suggestions for Differentiation

Though there is nothing new being taught in this lesson, this is the first time students will see many of these concepts (conditional statements, iterative techniques, arrays, DOM manipulation) working in tandem.

The lesson is designed as \~50% code-along and \~50% student engagement in the material. With a larger Warm Up and plenty of practice activities, be sure to give your students the time they need to play and go at their own pace with this code at the beginning and end of the lesson.

As with previous code-along lessons, consider preparing partially completed code as a supplemental for students who will find it useful or who require it as per IEP or otherwise.

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA22-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA2.2/U3LA2.2-Starter))
* **Lesson Exemplar Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA22-EXEMPLAR#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA2.2/U3LA2.2-Exemplar))
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation

### Assessments

**Formative:**

* **Lesson Notes** can be collected and marked for completion
* **Practice Activities** and **Wrap Up** reflection questions can serve as formative assessments.

**Summative:**

* Unit 3, Lab 2 (Upcoming Lab)
* Final Project (End of Unit Project)

### Do Now/Warm Up (\~15 min)

Have students open up **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA22-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA2.2/U3LA2.2-Starter)) and give them a tour of the `script.js`. There are 4 DOM elements, 3 functions, and 1 incomplete `addEventListener()` for the user's input. Run up the webpage and show them that there is an input bar where users can search for a state by state name or capital.

There are 3 mini-goals that students should work together on as a warm-up to get this going:

* Connect the `addEventListener()` to the `updateDropdown()` function.
* For now, the function should console log the input every time a character is added or removed! (For example, if you want to enter in "New", you should see "N", "Ne", and "New" in the console as you search it.)
* \[BONUS] In the `updateDropdown()` function, add _"is-active"_ to the classList of the `dropdown` DOM element if there is an input. Otherwise, remove _"is-active"_ from the `classList` if there is no input.

Review the solution with the following questions in mind. Alternatively, you can have students discuss these questions in groups before sharing collectively:

* What's the difference between using **'input'** for the event listener instead of: 'change'? 'keydown'? 'keyup'? --
  * _**'input'** specifically looks to see if the input has changed. X out/ clear the input and notice the dropdown disappear._
  * _**'keyup'** is the closest to accurate cousin. It waits for the input to be fully adjusted, but will not take effect when the input is X'd out._
  * _**'keydown'** will save the input as it was before the key was pressed (before the new character was added/removed), and_
  * _**'change'** will only take affect when the input is entered._
* How did you display the input? Is there another way? -- _You can use `e.target.value` or just `input.value`. You can also save the value in a variable before printing it._
* Why are we manually _adding_ and _removing_ instead of _toggling_ the class name? -- _If students aren't sure about this one, demo it to see what happens. Toggling will show and hide the drop-down with every character added. This doesn't make sense for a search bar._

### Lesson & Demo: Array Iteration for Typeahead (\~25 min)

1.  After the warm-up, we're about halfway through finishing the search bar functionality. You should have something like this:

    ```js
    const updateDropdown = () => {
        const userInput = input.value;
        console.log( userInput );

        if(userInput.length > 0) {
            dropdown.classList.add('is-active')
        }
        else {
            dropdown.classList.remove('is-active');
        }
    };

    input.addEventListener('keyup', updateDropdown);
    ```
2. Take a moment to verbalize the next few steps you will guide students through in the code along. Use the finished exemplar to illustrate the final functionality. Through every input change, we want the dropdown to include any capital-state pairs that match the search. When a search result is clicked, a badge should appear for it. We'll do this in the following steps:
   * Connect to the drop-down.
   * Filter the array of states to match the input.
   * Create anchor tags for each match and add them to the dropdown.
3.  **Connect to the drop-down.** If we look in `index.html` we'll find the class name `.dropdown-content` which we'll add to the corresponding DOM element. Show students where this class name is located making notice of the template anchor tag, and code up the following:

    ```js
    const dropdownContent = document.querySelector(".dropdown-content");
    ```
4.  **Filter the array of states to match the input.** First, in the `setMatches(string)` function, lowercase the input and filter the `fiftyStates` using `includes()`.

    ```js
    const setMatches = (string) => {
        string = string.toLowerCase();

        const filtered_matches = fiftyStates.filter( stateObj => {
            const state = stateObj.state.toLowerCase();
            const capital = stateObj.capital.toLowerCase();
            return ( state.includes(string) || capital.includes(string) )
        })
    };
    ```
5.  **Create anchor tags for each match and add them to the dropdown.** Notice how we use the template anchor (a) tag from the `index.html`. However, format it so that the corresponding capital and state are placed in between.

    ```js
    const setMatches = (string) => {
        string = string.toLowerCase();

        const filtered_matches = fiftyStates.filter( stateObj => {
            const state = stateObj.state.toLowerCase();
            const capital = stateObj.capital.toLowerCase();
            return ( state.includes(string) || capital.includes(string) )
        })

        const anchorTags = filtered_matches.map( stateObj => (
            `<a class="dropdown-item">${stateObj.capital}, ${stateObj.state}</a>`
        ));
        
        dropdownContent.innerHTML = anchorTags.join('');
    };
    ```

    _**NOTE**: There are many ways to do the `setMatches()` function! The map and filter can be joined into 1, a for.. of loop can be used instead, etc. See the exemplar for a different solution that doesn't use `filter()` or `map()`. Use what makes the most sense for your particular class._
6.  Last step is to call `setMatches()` from `updateDropdown()` when there is text in the input bar. Be sure to pass the user's input to `setMatches()`.

    ```js
    const updateDropdown = () => {
        const userInput = input.value;
        console.log( userInput );

        if(userInput.length > 0) {
            dropdown.classList.add('is-active')
            setMatches(userInput);
        }

        //...
    ```
7.  You should now see that the type-ahead search is working! Lastly, when we click on the drop-down item, a badge should appear. In the anchor template, add an `onclick="displayBadge(this)"` attribute. The `displayBadge(element)` function is already written for you in the `script.js`. Notice that we include _"this"_ as a parameter. That means pass **this** element to the function to use as needed. The full formatted string should be:

    ```js
    `<a class="dropdown-item" onclick="displayBadge(this)">${stateObj.capital}, ${stateObj.state}</a>`
    ```

**Practice Activities**

**Mild**

* Once a _Capital, State_ pair is clicked by the user, hide the dropdown suggestions.
* Add an extra feature to each state. For example, population, state bird, slogan, or political majority. Include this new feature in the badge but not the drop-down.

**Medium**

* Allow a user to additionally search by the feature you added.
* Make sure each state can only appear once as a badge. If the badge is already created, it shouldn't appear in the dropdown. _HINT: you may want to create an array called `selectedStates =[]`_
* Add a clear all button on the page that clears all the badges on the page.

**Spicy**

* Add an x button to each badge that removes the badge. Be sure that this option now reappears in the dropdown when it is searched for.
* Add a "See All" checkbox on the page that allows you to see any remaining _Capital, State_ badges that haven't been selected. The styling of these badges should be slightly different than the ones that have been selected. When you uncheck the checkbox, these unselected badges should disappear again.
* Add a bold font to the search results. If a user searches for "son", then the results in the drop-down should bold all `son`s.

<figure><img src="../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption><p>Typeahead Example</p></figcaption></figure>

### Wrap-Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

* What are some websites and examples where you have used typeahead search?
* What is made easy with a typeahead search? When would it make sense to **not** have typeahead on a website?
* What was the biggest challenge you faced in this lesson?
