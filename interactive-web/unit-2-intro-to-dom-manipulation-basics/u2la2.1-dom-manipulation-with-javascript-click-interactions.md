---
description: How can JavaScript help me make my websites interactive?
---

# U2LA2.1: DOM Manipulation with JavaScript Click Interactions

### Teacher Notes && Overview

In this lesson, students will apply the JavaScript they've been reviewing and strengthening in the start of Unit 2 to the context of a webpage. This is an essential first step in delivering on the promise made in the title of this course - The Interactive Web.

As written, this lesson occurs entirely in JavaScript - the starting and ending HTML and CSS files are identical. This is intentional, to both focus students on one single file, and illustrate the potential JavaScript has to make a webpage come to life. However, if your students need support reviewing any of the earlier content, feel free to modify the starter code and add in some review questions or activities focused on the HTML and CSS files.

### Objectives

**Students will be able to:**

* Add `'click'` event listeners to elements. Use control flow / conditionals to respond to specific user inputs.
* Use string interpolation and the `.innerHTML` property to dynamically append elements to the DOM.
* Explain why DOM Manipulation script tags must be included _below_ the elements they will be manipulating, or include the `defer` attribute.
* Store HTML elements in JS variables using `document.querySelector()`.
* Use named ES6 (arrow) functions as callback functions for event listeners.
* Use `console.log()` and the developer console to debug code.

### Suggested Duration

1 - 2 Periods (\~45 - 90 min)

### NYS Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.8** Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **DOM:** The Document Object Model is a codified way of thinking about (more technically an interface for) web documents. It considers each web page to be a document, and each element on that page to be an object.
* **Object:** In JavaScript, an object is a collection of properties and methods.
* **Property:** A property in JavaScript associates a key with a value. If you were to create a student profile as a JavaScript object, it might include the property `age: 18` in which `age` is the key, and `18` is the value.
* **Method:** A method in JavaScript is an action associated to a specific object. The `.toUpperCase()` method can be used on any String to create an uppercase version of that string.

### Planning Notes && Materials

|                                                                                                           Planning Notes                                                                                                           |                                                   Materials                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| Be sure to think through whether the default starting point is right for your students. They may need more review of earlier concepts, so you may choose to spiral in some HTML and CSS review before writing any JavaScript here. | Computer with access to the HTML, CSS, JS development environment of your choice. Replit.com is recommended. |

### Suggestions for UDL

|                                                                          Multiple Means of Representation                                                                          |                                                                                                                                              Multiple Means of Engagement                                                                                                                                              |                                                                                                                                    Multiple Means of Expression                                                                                                                                    |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Notice that the sample template uses fruits - you are encouraged to think about whether you could tailor the nature of the store to your students' shared interests or experience. | As written, the lesson will encourage you to model one working button and then encourage students to replicate that behavior. Consider whether your students would benefit from pair work, more chunked practice, or a written follow-along guide as an alternative to pattern matching your work from the code-along. | This lesson assumes a familiar cash register output will be most useful, but any structure where students can successfully wire up a button to be clickable and have some manipulating effect on the rendered HTML document should be considered a demonstration of the mastery of these concepts. |

### Suggestions for Differentiation

This lesson is written with minimal mathematical operations, as it is not meant to be focused exclusively on algorithms or number sense.

For students who struggle: Students can still be considered to have mastered this content if they do not successfully display the "total" value - the emphasis here is on getting a button to create change on a webpage based on a user's clicks. A student can also be considered to have mastered this content if they only independently wire up a single button - the final button is just for additional practice, but not strictly necessary.

For students who excel: Consider challenging your most advanced students to implement some common-sense mathematical stretch activities. For example, consider challenging them to calculate tax on the total or to offer a bulk discount if a customer buys 6 or more of a single object.

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U2LA21-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA2.1/U2LA2.1-Starter))
* [**Lesson Exemplar Code**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA2.1/U2LA2.1-Exemplar)
* [**Replit.com**](https://replit.com/)
* [**W3 Schools: What is the DOM**](https://www.w3schools.com/js/js\_htmldom.asp) - explains in brief what the Document Object Model is.
* [**MDN: Document.querySelector()**](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - Explains how the `.querySelector()` method works, including how it can replicate any CSS selector.

### Assessments

**Formative:**

During the lesson, either have students share their Replit links with you, or walk around the classroom to ensure that they are following along. Consider having a student's code projected and work with them as a driver-navigator pair to enable you to circulate the classroom while also teaching.

Final Replit link should be shared with you to assess progress & spot anyone who is struggling.

Wrap up questions can be written and collected as a formative assessment.

**Summative:**

Unit 2, Lab 2 (Upcoming Lab)

JavaScript DOM Manipulation Final Project (End of Unit Project)

### Do Now/Warm Up (\~3 - 5 min)

Share out the **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U2LA21-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA2.1/U2LA2.1-Starter)) and ask students what they think should happen when you press any of the three buttons currently shown on screen. Additionally, ask them to study the source code and identify each of the following:

* What is the ID of the apple button?
* What is the ID of the banana button?
* What is the ID of the mango button?
* What is the ID of the green box?
* What is the ID of the part of the code where your total amount due will appear?

_Consider mocking up a small diagram of the webpage on a whiteboard and labeling each box with its ID, so you and your students can refer back to these IDs without needing to switch over into the HTML code every time._

### Lesson & Demo: Click Inputs and HTML Outputs (\~15 - 25 min)

1. Students will have noticed that only one of the buttons works at all, and even that one doesn't work as intended. Open the `script.js` and see if a student can tell you why the wrong button is triggering the event.
2. Explain that the left hand side of `const appleButton` is the same as the `const` and `let` declarations we've seen before. This is establishing a variable. The right hand side is new, but we can break it down.
   * `document` refers to the HTML document. It tells us we're looking over at whatever HTML file loaded up this JavaScript `script.js` file.
   * `.querySelector()` tells us we're trying to select a single element out of the HTML document to store in this variable.
   * `"#banana"` is actually just a CSS selector. As in CSS, the `#` means it's looking at IDs, and so this whole statement will result in capturing the first HTML element with an ID of "banana".
     * Note that `first` in this case should be superfluous! IDs shouldn't be repeated on a page.
3. Open the preview in a new browser tab, and then open the console. Demonstrate how when we `console.log(appleButton)`, not only is the HTML visible in the console, but it also appears to highlight the corresponding element on the page - this appears to be a live link to the real thing. We didn't just capture a string or a number in this variable - we captured an entire **DOM element**!
   * Important note: while Replit has a console built into the interface, it is significantly less robust than the consoles built into Chrome, Firefox, and Safari. You are strongly encouraged to model opening the preview and native console in a new tab, and to ensure that 100% of your students do likewise, so that they have the full power of the native console at their disposal.
4. Go back to the `script.js` file and correct the error by changing the `"#banana"` to `"#apple"`. We should see that the correct button now triggers this effect.
5. Before moving on, ask students to try to parse what `appleButton.addEventListener("click", addApple);` does. Together with your students, you should be able to come up with something like _"This takes the apple button and adds an event listener to it. The event listener waits (or 'listens') for you to click on the apple button, and whenever that happens, it runs the addApple function."_ Consider illustrating this by commenting out this line of code and demonstrating that the button no longer fires.
6. Discuss the desired effect of pressing a button with your students and come up with a list of things that should happen when a button is clicked. Ensure that this list includes "add the item to your cart" and "adds the cost of the item to your total."
7. Notice that in order for us to add to the shopping cart, we will also need to be able to access the shopping cart in JavaScript - we're going to need another `querySelector`. Select it and then log it to the console to ensure you selected the right element.

```js
const shoppingCart = document.querySelector("#shopping-cart");
console.log(shoppingCart);
```

8. With all that prep done, we're ready to fix the `addApple` function. Comment out or delete the `alert()` currently contained in the `addApple` function. Revise it as follows:

```js
const addApple = () => {
  shoppingCart.innerHTML = `<p>Apple</p>`;
};
```

9. Ask students what should happen when you click the apple button twice? Notice that the button currently only seems to work the first time you press it. That's because we're using the `=` assignment operator instead of the `+=` increment operator. Change the operator to `+=` and demonstrate that we are now able to buy more than one apple.

\[Mini-challenge] Give students about 7-10 minutes to complete a few or all of the following:

* Wire up the banana button to add bananas to your shopping cart.
* Wire up the mango button to add mangos to your shopping cart.

_Note: These challenges can also be delayed until after the total functionality has also been added. This is potentially a nice moment for a break or even a nice breakpoint if you plan to split this lesson over multiple periods._

10. It's time to start keeping track of our money. Before we start, let's demonstrate one of the most frustrating parts of JavaScript. Open your console and enter `0.1 + 0.2` and point out the imprecision. Explain that this imprecision is unavoidable in the way JavaScript stores numerical data, and for that reason, most JavaScript developers choose to keep anything related to currency stored as whole numbers of cents, rather than the more familiar dollar amounts. That's why if we want to keep track of a growing total, we're going to use the variable `totalInCents` instead of a more basic `total`. Add this line to the top of your JavaScript code.

```js
let totalInCents = 0;
```

\*Consider asking students why we're using `let` here instead of `const` like we did for our buttons. Consider also asking them why we start the total at 0.

11. Now that we have our total, we need to start incrementing it each time the user adds something to their cart. We'll start by refactoring the `addApple` function.

```js
const addApple = () => {
  shoppingCart.innerHTML += `<p>Apple</p>`;
  totalInCents += 75;
};
```

12. It probably seems like our function isn't working, but in fact, the total is being updated each time an apple is added. Enter `totalInCents` directly into the console and notice that after you have pressed the button, it is no longer zero. So our variable is accurate - it's just our user interface that is not. Ask students to identify the part of our webpage where we want to display the total, and to remind you what the ID of that element is.
13. Select the element that will contain our output, store it in a variable called `totalSpan`, and log it to the console.

```js
const totalSpan = document.querySelector("#total-span");
console.log(totalSpan);
```

14. While we could update the total as part of our `addApple` function, it really seems like that's a separate operation from adding an apple - and it's something we will have to do for each of our three fruits, so it makes sense to create a separate function. Be sure to do this **above** the `addApple` function.

```js
const updateTotal = () => {
  totalSpan.innerHTML = totalInCents / 100;
};
```

_Consider asking students why we're dividing the total by 100 here, or leaving out that line of code and asking them to explain what still needs to be done when it's time to test the function._

15. Now that we have an `updateTotal` function, we need to make sure it is executed whenever the total changes, so let's call it as part of the `addApple` function.

```js
const addApple = () => {
  shoppingCart.innerHTML += `<p>Apple</p>`;
  totalInCents += 75;
  updateTotal();
};
```

**\[Mini-challenge]** Give students about 3-5 minutes to complete a few or all of the following:

* Adjust the banana button to also increment the total.
* Adjust the mango button to also increment the total.

_If students have extra time or need extra practice, share the extensions listed below with them and ask them to work at whichever level puts them in their learning zone._

### Wrap Up (\~5 min)

You may also want to ask one or all of the following - either for a brief discussion or to collect as a post-it note check-in/exit slip:

1. On a scale from 1-5 ⭐️, what's your confidence level with the `document.querySelector()` method?
2. On a scale from 1-5 ⭐️, what's your confidence level with the `.addEventListener()` method?
3. On a scale from 1-5 ⭐️, what's your confidence level with the `.innerHTML` property?
4. What else would you like to be able to figure out how to do when a user clicks on something?
5. Even though this is our first time using a "click" event listener, it's not the first time we've created a clickable element on screen. What other elements are clickable? What can the "click" event listener do that those other elements cannot?

### Extensions

**Mild Activities**

* Add a fourth column and button in the HTML for a fourth button.
* Style that button for the appropriate fruit in the CSS.
* Add all the necessary JavaScript to make sure that button works as intended.

**Medium Activities**

* Create a variable to keep track of each fruit on offer, and use it to keep track of how many of each fruit the user has added to their cart. Using that as a jumping off point, come up with a way to display a receipt that aggregates quantity instead of just listing them, i.e. "Apple x3" instead of "Apple Apple Apple".
* Add a reset or "clear cart" button to the screen. When clicked, it should empty your cart and reset your total.

**Spicy Activities**

* Find a way to add a small clickable "x" or other similar button next to each item in your shopping cart. When clicked, it should remove the item and update the total accordingly.
