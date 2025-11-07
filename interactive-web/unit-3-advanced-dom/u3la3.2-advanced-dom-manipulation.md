---
description: >-
  What is a DOM element and how can we use it to navigate and manipulate the DOM
  tree.
---

# U3LA3.2: Advanced DOM Manipulation

### Teacher Notes & Overview

With advanced DOM manipulation, students will be able to visualize the DOM tree, and learn to add elements via Javascript. Students will use methods such as `createElement()`, `appendChild()`, `classList.add()`, `.innerHTML()`, and more to construct HTML code. By the end, they will have a glimpse into the power of of combining Javascript's advanced data structures, conditional flow, and iteration with these methods.

Despite the demo, students typically have a hard time seeing why these methods are used as opposed to copying and pasting HTML and setting it to the innerHTML of the parent. The truth is `createElement()` is faster, as browsers are not required to parse the HTML string and then **build a node tree out of it**; it also doesn't have to **attach event listeners** as innerHTML does. Using innerHTML will cause browsers to re-parse and recreate all DOM nodes inside the element whose innerHTML is modified. In other words, event listeners are difficult to add on to innerHTML strings. Be ready to patiently explain such questions when they come.

### Objectives

Students will be able to:

* Access parent and child elements given a DOM element.
* Create new DOM elements using DOM methods in javascript.
* Add and remove child elements to other DOM elements.

### Suggested Duration

1 period (\~45 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **DOM Element**: It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
* **Instance Property**: Instance properties are properties that are declared within a class. E.g. in `node.parentElement` parentElement is a property of the node instance that returns the node's parent element.
* **Instance Methods**: Instance methods belong to the class prototype, which is inherited by all instances of the class. As such, they act on class instances and can be called on them. E.g. in `node.appendChild()` appendChild() is a method that is called off the node instance to add a new node as one of it's children.
* **Parent Element**: The element whose opening and closing tags are wrapped around another element.
* **Child Element**: Any element found within the opening and closing tags of another element

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                       Multiple Means of Representation                                                                       |                                                     Multiple Means of Engagement                                                     |                                                  Multiple Means of Expression                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Have students find websites they've visited that they can **interact** with. Use this as an anchor site that students can identify with to rationalize back-end programming. | Print a reference sheet or form a slide deck on basic Javascript syntax that students can reference while completing the challenges. | Students have an opportunity to self assess at the close of this lesson. The activity can also be used as a formal assessment. |

### Suggestions for Differentiation

Allow time for students to copy code with you during the code along. You may consider having more or less pre-written code depending on the proficiency of your specific students. Some students may require the completed version of the code along as a supplemental material based on an IEP or similar.

There are roughly 3 independent sections during this lesson: the warm up, #2 in the lesson demo, and the practice activities at the end. They are each designed with differentiation in mind. Each of these activities have a small bonus or an similar opportunity for the quicker students to be challenged.

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA32-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA3.2/U3LA3.2-Starter))
* **Lesson Exemplar Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA32-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA3.2/U3LA3.2-Exemplar))
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation

### Assessments

**Formative:**

* Overlook **students' code** during the warm-up and during the practice activities as an informal formative assessment.
* **Wrap Up** reflection questions can serve as formative assessments.

**Summative:**

* Unit 3, Lab 3 (Upcoming Lab)
* Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Have the students open up the **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U3LA32-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-3-advanced-dom/U3LA3.2/U3LA3.2-Starter)) `script.js`. Take a moment to walk them through the code and the checkbox on the website that it is connected to. There is already a DOM element for the checkbox called `darkMode`, and the event listener is set up to listen when the checkbox is checked. Their challenge is to search and use a method that will get the "parent element" to make the background of the window dark, then use the method to finish the code. Demo this functionality with the exemplar code.

Part of the challenge is that they cannot create a new DOM element alias using `document.querySelector()`. In fact, for an extra challenge refrain from looking at the `index.html` at all!

After several minutes, share a solution a student came up with, or show the following code.

```js
const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () => {
    // fix this
    const greatGrandParentDiv = darkMode.parentElement.parentElement.parentElement;

    greatGrandParentDiv.style.background = darkMode.checked ? '#242424' : 'white';

});
```

The idea is that students start to think of a DOM element as something that has functionality allowing us to navigate through and manipulate the DOM tree.

### Lesson & Demo: Approaching Problems (\~35 min)

1. Tell students that to finish the website we need to input the two input fields and have the button display a badge in the accomplishments section. Again, demo this using the exemplar code so students have a clear visual understanding of what the goal is. We can break this into to main steps: A. Save both inputs on the button click B. Use the inputs to display a badge or "Add Accomplishment"
2.  Give students another \~5 minutes with their partner to add an event listener to the button. On click, the button should console log the inputs. Extra challenge, only log the inputs **if both inputs were filled in**. After the allotted time, go over the solution using the following code:

    ```js
    const addButton = document.querySelector('button');

    addButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.input');
        const title = inputs[0].value;
        const date = inputs[1].value;

        if (title && date) {
            console.log(title, date);
        }
    });
    ```
3.  The first step is done! To set up the next step, we need to retrieve the DOM element for the accomplishments board and create a new function that we can call from the button's event listener. The new function, `addAccomplishments()`, should create an accomplishment badge (with html, classnames, etc.) and append it to the list of other accomplishments on the board. Set this step up for students as follows:

    ```js
    const addButton = document.querySelector('button');
    //1st addition
    const accomplishments = document.querySelector('#accomplishments-grid'); 

    // 2nd addition
    const addAccomplishment = (title, date) => {
        //
    };

    addButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.input');
        const title = inputs[0].value;
        const date = inputs[1].value;

        if (title && date) {
            console.log(title, date);
            //3rd addition
            addAccomplishment(title, date);
        }
    });
    ```
4.  Tell students that up until this point, they have learned to add HTML to a page only by creating formatted strings that they add to a parent's `innerHTML`. However, this avoids using the full power of DOM elements and the functionality they bring. The function `addAccomplishment` is going to create the HTML block below from scratch. Cut and paste it out of the `index.html` and into the `script.js` to use as a reference for the code.

    ```html
    <!-- Accomplishment cards here -->
    <div class="card has-background-warning-light">
        <header class="card-header">
            <p class="card-header-title is-size-7">
                Honor Roll!
            </p>
            <p class="card-header-title is-size-7 is-justify-content-flex-end">
                01/01/1992
            </p>
            <button class="card-header-icon">
                <span class="icon has-text-danger">
                    <i class="fas fas-ban">x</i>
                </span>
            </button>
        </header>
    </div>
    ```
5.  For each element tag, we need to first create a DOM element variable. Code the following declarations in the `script.js` in the `addAccomplishments()` function, and show students how they match up to each element in the HTML example. _NOTE: use the `console.log(div)` throughout so students can see an example of what they are creating._

    ```js
    const addAccomplishment = (title, date) => {
        const div = document.createElement('div');
        const header = document.createElement('header');
        const pTitle = document.createElement('p'); 
        const pDate = document.createElement('p'); 
        const xButton = document.createElement('button');
        const span = document.createElement('span');
        const i = document.createElement('i');

        console.log(div);
    }    
    ```
6. Explain to students that these variables are holding a DOM element. It's the same thing that's held when we say `document.querySelector()`, and all the same methods, as we'll soon see, apply. The difference is that `createElement()` allows us to create an element in javascript without adding it to the HTML just yet. This way we can construct it and customize it fully before ultimately adding it to the `index.html`. [See more on createElement() here.](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
7.  Next, let's add the class names to all the elements. We can do that using `classList.add()` as we've seen in previous lessons (recall `add`, `remove`, and `toggle`). _NOTE: After doing the first one, consider allowing students to do the other elements on their own if they can pick up the pattern._

    ```js
        //...
        const i = document.createElement('i');

        div.classList.add('card', 'has-background-warning-light');
        header.classList.add('card-header');
        pTitle.classList.add('card-header-title', 'is-size-7');
        pDate.classList.add('card-header-title', 'is-size-7', 'is-justify-content-flex-end');
        xButton.classList.add('card-header-icon');
        span.classList.add('icon', 'has-text-danger');
        i.classList.add('fas', 'fas-ban');

        console.log(div);
    }
    ```
8.  Now, we need to embed DOM elements within each other. For example, the `header` element is the child of the `div` element, so we can use a method called `appendChild()` to tell the DOM tree that this is so. [See more on appendChild() here.](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) Code up the following:

    ```js
        //...
        i.classList.add('fas', 'fas-ban');

        div.appendChild(header);
        // Notice header has 3 children!
        header.appendChild(pTitle);
        header.appendChild(pDate);
        header.appendChild(xButton);
        xButton.appendChild(span);
        span.appendChild(i);

        console.log(div);
    }
    ```

    _NOTE: Notice that when you look at the console log, you should now see all the nested elements._
9.  If we look at the `innerHTML` of the the paragraph (`p`) elements and the icon (`i`) element, they require some text. We can use `innerHTML` to insert that text. The icon will always be an 'x' and the other 2 will be dependent on the `title` and `date` variables passed as parameters.

    ```js
        //...
        span.appendChild(i);

        pTitle.innerHTML = title;
        pDate.innerHTML = date;
        i.innerHTML = 'x';
        
        console.log(div);
    }
    ```
10. Finally, we can add this completed html block that represents the accomplishment badge in the accomplishments grid that we querySelected earlier as `accomplishments`. We can again use `appendChild()`. The `appendChild()` function will always append to the end of the "array" of children nodes of its corresponding parent. Demo this by adding a few accomplishments on the site.

    ```js
        //...
        console.log(div);

        accomplishments.appendChild(div);
    }
    ```
11. Almost forgot! There is an 'x' button on each accomplishment so that it can be eliminated from the board. We can easily add an event listener to that button. The action will be to remove the whole `div` from it's parent's child array using `.removeChild()`. We already have the parent's name, `accomplishments`, so we can code it before we add it as follows:

    ```js
        console.log(div);

        xButton.addEventListener('click', () => accomplishments.removeChild(div));

        accomplishments.appendChild(div);
    }
    ```

> The order in which things are done don't really matter. However, organization should be kept in mind, and when conditional execution is implemented, the order will matter. The order seen here was chosen strictly for instructional purposes. See the exemplar for a slightly different layout.

**Practice Activities**

**Mild**

* If an input field is missing add the `is-danger` class to that input. When the input field is then filled out, make sure the `is-danger` class is removed.
* Once a badge is created, clear the input fields.

**Medium**

* Create a special badge! When the date inputted is today's date, change the background color to `has-background-danger` instead of `has-background-warning-light`.

**Spicy**

* Add an alert message "Missing Fields" when one or more input fields are missing. The message should go away when the input fields are filled. You may need some of the following methods to help.
  * [createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  * [parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
  * [insertBefore()](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

### Wrap-Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

* You now know 2 ways to add HTML code to a website. Which way do you prefer? Why?
* Why might it be more helpful as a developer to manually create DOM element variables over typing out the HTML code as a string?
