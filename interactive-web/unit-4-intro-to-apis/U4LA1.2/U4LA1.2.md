---
description: What structures can I use to store and manipulate larger and more nuanced data?
---

# U4LA1.2: Javascript Arrays, Iteration, and Objects

### Teacher Notes & Overview

In this lesson, students will have the opportunity to apply the idea of API requests and responses to a prebuilt website. The walkthrough can be done as a code along or can be an independent challenge that is reviewed. There are plenty of hints and answers throughout the walkthrough that students can use to check that they are on the right track. Then, before the extensions, you can review the answers with students that need it, or offer the exemplar solutions.

As in the first lesson of the unit, there are plenty of extensions here to stretch this out into 2 days if needed. Multiple API calls are not needed until the Spicy extensions, but if students can get passed the Mild extensions, they will have been able to navigate the javascript code well enough to understand it in context.

### Objectives

Students will be able to:

* Use async-await functions to make API requests
* Iterate over JSON data structures
* Craft endpoints to access particular data from an API
* Populate a webpage based on API data.

### Suggested Duration

1-2 periods (~45-90 minutes)

### NYS Computing Standards

[Courtney to Edit]

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Open API** - An application programming interface is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
* **Request** - An API request is a message sent to a server asking an API to provide a service or information.
* **Endpoint** - a point at which an API -- the code that allows two software programs to communicate with each other -- connects with the software program
* **Response** - A response is defined by its HTTP status code and the data returned in the response body and/or headers
* **JSON** - (JavaScript Object Notation) is purely a string with a specified data format — it contains only properties, no methods.
* **fetch** - the retrieval of data by a software program, script, or hardware device

### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :----------------: | :------------------: | :--------------: |
| _Allow students an opportunity to search through the list of available categories in the "categories" endpoint. They can do this straight in the browser. Once students are in the extensions, give them the liberty to incorporate which ever categories appeal to them. _ | _This being a game, consider finding time to allow students to share the results of their code with a partner or full group to engage in the game. You can even allude to this conclusion while they are searching for categories they enjoy._  | _Assessments_ |

### Suggestions for Differentiation

Consider making a reference sheet to basic async await function that uses a simple rendition of the fetch response syntax. 

### Resources

* **[Repl.it](https://replit.com/\~)**- online IDE
* **[W3 Schools**](https://www.w3schools.com/html/)** - readable documentation
* **[MDN](https://developer.mozilla.org/en-US/)** - a robust but sometimes less student-friendly documentation
* **[Practice: "Javascript Arrays, Iteration, and Objects"](/unit-3-advanced-dom/U3LA1/U3LA1-Exemplar/index.html)**

### Assessments

**Formative:**

- **Walkthrough Code or Extensions** can be collected and assessed as needed

- **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

- Unit 4, Open API Lab 1 (Upcoming Lab)

- Unit 4 Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Have students run the starter code. The site is a Jeopardy questions teaser made for aspiring contestants to test their skills. Right now, each card has its default data instead of real Jeopardy data. In the starter `script.js`, the code is done for the most part. Show students that `sampleData` is an array of clues that have been hard coded in `sampleData.js`. **For Each** of these clues, the `script.js` is printing out a card using the `jeopardy` object.

Have students open up the starter `script.js`. Their task is to change the values in the `jeopardy` object to be the corresponding values from the clues object. Give them about 3 minutes and ask them to change the values one at a time to ensure that the values are being properly populated on the site. NOTE: you may want to show them an example with the first property.

After the allotted time, showcase a student's answers or review the answers below. Using sample data is a very common practice when isolating the incorporation of JSON data in the website from retrieving it through requests.
```js
const jeopardy = {
    category: clue.category.title,
    question: clue.question,
    answer: clue.answer,
  };
```

In the lesson walkthrough, students will get a chance to see how data transfers from an API all the way to the UI. The extensions will consist of more ways to enhance the site offering more opportunities to practice making requests and navigating JSON data.

### Lesson Walkthrough: From API to UI (~25 min)

**Accessing the Random Endpoint**

Remember, the data right now is not coming from an API call, but instead the `sampleData.js`.Instead of this, lets add the `getRandom()` function at the bottom of `utilities.js`, and call it in a new _async_ function in `script.js`. _NOTE: typically all API get functions are saved away in a separate file like we're doing here._

1. In the `sampleData.js`, finish the function `getRandom()` so it returns an array of 5 random clues. Use the [JService documentation](https://jservice.io/) if needed.
    ```js
    const getRandom = async () => {
        let endpoint = `https://jservice.io/api/random?count=5`;
        let response = await fetch(endpoint);
        let data = await response.json();

        return await data;
    };
    ```
2. Now, in the `script.js`, create an async function `setRandomClues()` that calls `getRandom()` and iterates through the resulting array using the code from the Demo above.
    <details>
    <summary>This is what it should look like</summary>

    ```js
    // Get the questions div element
    const $questionDiv = document.querySelector("#questions");

    const setRandomClues = async () => {
        const data = await getRandom();

        data.forEach((clue) => {
            // --> Use the clue object to set these values
            const jeopardy = {
            category: clue.category.title,
            question: clue.question,
            answer: clue.answer,
            };

            $questionDiv.appendChild(questionCard(jeopardy));
        });
    };

    // Clear the questions div and add a card for each clue
    $questionDiv.innerHTML = "";
    setRandomClues();
    ```
    </details>

 
**Adding Point Values**

Let's show the point value of these questions on the card. Recall from Unit 3 that we can use the following functions to add an element to the page.
- `document.createElement()`
- `.appendChild()`

3. In the `script.js`, add a `value` key to the `jeopardy` object. Then, set the value to the right value in the clue object (you can use `sampleData` to find that).
    ```js
    const jeopardy = {
      category: clue.category.title,
      question: clue.question,
      answer: clue.answer,
      value: clue.value,    // Add this attribute
    };
    ```
4. In the `utilities.js`, do the following 3 things to insert the point values into the card.
    - Create and `h2` element using `createElement()` and save it in a variable `points`
    - Set the inner html to `jeopardy.value` plus the word _"pts"_ (Ex. 100 pts)
    - append this child to the `categoryDiv` variable.
    <details>
    <summary>This is the code you should add to questionCard()</summary>

    ```js
    const points = document.createElement("h2");
    points.innerHTML = jeopardy.value;

    categoryDiv.appendChild(points);
    ```
    </details>

**Add an eventListener for the input**

To make this come to life, add an event listener to the input field and for now, show the answer in the answer p element on change.

5. In the `questionCard()` function (in the `utilities.js`) add an eventListener to the input element. On change, it should do the following:
    - Add the answer in the `p` element's innerHTML
    - disable the input field (to prevent multiple answers)

    <details>
    <summary>Try it first before coming here for the answer</summary>

    ```js
    input.addEventListener('change', () => {
        p.innerHTML = jeopardy.answer;
        input.disabled = true;
    });
    ```
    </details>
    

### Extensions (~15 min)

**Mild**
- Use `toUpperCase()` to capitalize the category. You can do this in either file.
- Add a parameter to `getRandom(number)` so that it gets that many random questions. (e.g. `getRandom(7)` should get and put 7 random clue cards on the website.) _NOTE: make sure you call the function properly from the `script.js`. For now, just get any number of random questions._
- Add a parameter to `setRandomClues(number)` so that (similarly to `getRandom()`) you can call it with a number of clues and it will call getRandom with that same number. (e.g `setRandomClues(2)` will call `getRandom(2)` and print 2 clues cards) _NOTE: be sure to call the function properly. For now, just get any number of random questions._

**Medium**
- Activate the number input field at the top of the website to display the corresponding number of random questions.
    - First, in the `index.html`, take off the `disabled` attribute in the input element.
    - Then, in the `script.js` add an event listener for this input field and only when the value is changed, and is greater than 0, call `setRandomClues(number)` with the inputted number. _NOTE: the querySelector for this doesn't exist yet._

    Now you should be able to select how many random questions you'd like to see from the website.

- In the `utilities.js`, finish the event listener for the input fields on the cards so that it checks if the inputted answer is the same as the actual answer. It should then call the function `updateScore(isCorrect, points)` that can be found at the top of the file. _NOTE: the function requires 2 parameters: `isCorrect` is boolean for if the user got the answer correct, and `points` is the number value of the question._

**Spicy**
- In the `index.html`, add total points somewhere in the header and initialize it to 0. In the `utilities.js`, change `updateScore(isCorrect, points)` so that it updates this total instead of console logging it.
- Activate the category drop down!
    - In `utilities.js` create a function `get10Categories()` that requests 10 categories using the API.
    - Also, create a function `getClues(id, number)` that requests a certain "number" of clues that are of the same category based on the "id".
    - In the `script.js`, create an async function that calls `get10Categories()` and initialize the drop down to the categories.
    - Add an eventListener for the dropdown. On click, it should do an async function that saves the id for the chosen category and calls `getClues(id, number)`. Then iterate through the clues and print the cards for them. (For now just set the number to 5)
    - Finally, un-disable the dropdown in the `index.html`.
    
    _NOTE: You wont need to call `setRandomClues(number)` anymore._
- [Super Spicy] Have both inputs work simultaneously and have _"Random"_ as a category choice. For example, if a user selects 8 and "Photography", then 8 clues should appear under the category photography, and if a user selects 10 and "Random", then 10 random clues should appear as before.


### Wrap Up (\~5-10 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question or two to answer on an easily collectable paper or document:

1. Over time, what problems may arise from having code or a website making API requests? What would be necessary to have in place in your code because of this?
2. What did you struggle with? How did you get through it?