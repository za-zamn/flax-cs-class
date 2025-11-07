---
description: How can I change the classes an element has as I interact with the page?
---

# U2LA4: Add, Remove, and Toggle

### Teacher Notes & Overview

Students will be using add, remove, and toggle in various applications. Brushing up on CSS is useful but not required, other than the concept of a _class_, to get through the lesson . This lab is focussed on getting practice creating DOM elements using `querySelector` and adding and removing classes from the element's class list.

### Objectives

Students will be able to:

* use methods `classList.add()`, `.remove()`, and `.toggle()` to manipulate the list of classes an element contains. 
* determine which method makes the most sense based on context.
* refer to documentation for examples on the aforementioned

### Suggested Duration

2 periods (\~90 minutes)

### NYS Computing Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **DOM**: The Document Object Model (DOM) defines the logical structure of documents and the way a document is accessed and manipulated.
* **class list**: a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
* **event listener**: a procedure or function in a computer program that waits for an event to occur.
* **query Selector**: The `querySelector()` is a method used for searching and returning the very first element within the document that matches the given selector.
* **conditional statement**: statements that are created by the programmer which evaluates actions in the program and evaluates if it's true or false. If-then-else statement allows conditional execution based on the evaluation of an expression.
* **toggle**: a function that removes a class from the classList of an element if it exists or adds it if it does not yet exist.

### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :----------------: | :------------------: | :--------------: |
| Have students find a site where that they often go to that contains an on/off switch or checkbox of some kind. Use these sites that they personally identify with as an anchor for the rationale behind this lesson. | Create a reference sheet or slide deck for vocabulary; include add, remove, and toggle with examples of each. As there is a lot going on in the `script.js`, this can be useful to narrow students' focus. | Mild, medium, and spicy activities act as a formal assessment of skills while the "Wrap Up" writing activity offers reflection and higher order thinking; an informal assessment. |

### Suggestions for Differentiation

To differentiate across different levels, we recommend keeping instruction short and having students work in pairs when getting practice. The Lesson & Demo section is written with this in mind.

The activities below are in an order that progresses in difficulty. The advanced students will work quickly through the first couple of challenges giving you time to support the struggling students. Once they get a grasp on things, you can support the more advanced students who by that time are probably stuck on the more advanced challenges. 

Be sure to stop early enough that everyone has reached but not necessarily started the extensions. It is okay if most students don't complete any or all extensions. They exist mainly for differentiation and an engaging challenge. 

### Resources

* **[Repl.it](https://replit.com/\~)**- online IDE
* **[W3 Schools**](https://www.w3schools.com/html/)** - readable documentation
* **[(OPTIONAL) MDN](https://developer.mozilla.org/en-US/)** - a robust but sometimes less student-friendly documentation
* **[Practice: "Email Inbox"](/unit-2-intro-to-dom-manipulation-basics/U2LA4/U2LA4-Starter/index.html)**

### Assessments

**Formative:**

- During **group work:** spot check to ensure students are using accessing DOM variables well, using `.add()`, `.remove()`, and `.toggle()` properly, and ask informal check-for-understanding questions. This lesson in particular is a good chance to have students (who feel comfortable) show their properly completed code to help other students catch on.

- **Activity Code** can be collected and assessed as needed

- **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

- Unit 2, "The Cross-Wired Lightbulbs Puzzle" Lab 4 (Upcoming Lab)

- "Input-Output Helper Site" Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Ask students to open the starter code to the lesson and find at least 5 things that can be accessed with a `querySelector`. They may look at both the webpage page and the `index.html`. They may also work in pairs to find things. Students should ultimately share their answers with a buddy. (This should take 3-4 minutes)

At the end of the 4 minutes, ask for about three volunteers to describe one thing they found. Reward all answers, but if someone mentions "Your Inbox" especially shout them out for finding that intentionally discrete one. If no one mentions "Your Inbox" include that at the end. (1-2 minutes)

### Lesson & Demo: How to add and remove class names with javascript (~30 min)

1. Demonstrate to the students how you can make the "Your Inbox" text _clickable_ changing its color. Open up the `script.js` and offer students the opportunity to code along with you. The three steps to creating an on click event are illustrated below. Read on for a procedure on how to guide students through this code along:
    ```js
    // 2. Access a DOM element using the querySelector()
    const heading = document.querySelector("#heading");

    // 3/5. 
    const changeFontColor = () => {
        heading.classList.add("blue-text");
    };

    // 4. Listen for a click, and call the function
    heading.addEventListener("click", changeFontColor);

    ```

2. Using the Development (inspect) window, show students how to find the `ID` of the "Your Inbox" text. Then, use that ID to access the DOM element. 

3. Create the function `changeFontColor`, but leave it empty for now. Explain to students that this function will be called to change the font color of the text, and we will fill it out in just a moment.

4. Create the event listener. The first parameter is what you're listening for ("click"), and the second is what function/ action you will do in response ("changeFontColor").

5. Finally, in the function, add the class "blue-text" as illustrated above, and show the students the class in the `style.css`.

7. As a coded comment, show students there's a method to remove a class as well, `.remove('CLASS_NAME')`. You may also want to use this opportunity to supply a website resource like [this one](https://www.w3schools.com/jsref/prop_element_classlist.asp) that they can use for the independent work.

8. **NOTE**: Tell students for the second _Mild_ activity, they will need 2 `querySelectors`, and that they should check in with you after they get it to check that they are moving on the right track.

**Mild Activities**

1. Find the `ID` for it and change the subheading "Today is September 1st" so that when it is clicked, it turns blue as well.
2. There's currently a reply section with the `ID` `#reply-message` that has the class `hidden`. When the "Reply" button is clicked, remove this class name from the `#reply-message` div.
3. Now that the reply section is open, the "Send Message" and "Cancel" button should both hide the section when clicked. In other words, when they're clicked, the hidden class should be added to the `#reply-message` div again.

**Medium Activities**

4. The "Open" button should do 3 things:
    - add the class `is-read` to the entire inbox with ID `#inbox`
    - remove the `hidden` class from the ID `#inbox-message`
    - remove the `hidden` class (un-hide) the "Mark as Unread" button. (See if you can find the ID for this button in the `index.html`)

5. Find the ID for the X button at the top right of the inbox message. when clicked it should make the inbox message disappear again. 

**Spicy Activities**

6. Code the "Mark as Unread" button to hide the inbox message and turn the message background white again. The button itself should also disappear.

7. Let's redo the "Today is September 1st" subtitle. Create your own class with different attributes in it. When the subtitle is clicked, change something somewhere else on the page by adding your newly created class. Here's the tricky part! If the class is already added, remove it, if it's not already added, add it. You may need to check out [this link](https://www.w3schools.com/jsref/met_domtokenlist_contains.asp) on `contains()`.

### Day 2: Using "toggle" to add and remove.  (~30 min)

**NB:** _Likely, this will be the start of the second period in this lesson - feel free to wrap the end of day above as you see fit, possibly with a brief student reflection on a post-it or index card that you can easily collect. Today will start with a reworking of the "Your Inbox" text color change._

1. Briefly explain the several steps done in Day 1 to add the `blue-text` class to the title. Then, change the code so that the title "toggles" between blue and black text using the `toggle()` function to add and remove the `blue-text` class appropriately. Your code should look as follows:
    ```js
    // No change from before
    const heading = document.querySelector("#heading");

    // Switch add() to toggle()
    const changeFontColor = () => {
        heading.classList.toggle("blue-text");
    };

    // No change from before
    heading.addEventListener("click", changeFontColor);

    ```

2. Take a moment to demonstrate the results in the webpage before having students continue with the activities below.

**Mild Activities**

1. Change the code for the "Today is September 1st" subtitle text to toggle between blue and black text like done in the example with the title.

2. Find the ID for the Checkbox on the left of the message and make sure it...
    - Adds the `is-selected` class to the inbox
    - Un-hides the div with ID `action-buttons`

    When the checkbox is clicked again, the opposite should happen create a toggle effect.

**Medium Activities**

3. Code the "Delete Message(s)" button to:
    - Hide the entire inbox
    - use `innerHTML` to change the text of the button from "Delete Message(s)" to "Undo Deletion"
    
    When "Undo Deletion" is clicked, inbox should reappear and the text should change back to "Delete Message(s)".

4. Code the "Mark as Read" to do the following:
    - Un-hide the "Mark as Unread" button
    - Unselect the message (get rid of blue background)
    - Turn the inbox background grey
    - Uncheck the the checkbox (Checkout [this resource](https://www.w3schools.com/jsref/prop_checkbox_checked.asp) for help on this)

**Spicy Activities**

5. There's one more button that needs to be programmed; the "Dark Mode" button at the top left of the page! For this, you'll need to create your own CSS classes and general design for what _dark mode_ will look like on this page. If you're stuck, look for images of Google's dark mode on Gmail for some inspiration. 

### Wrap Up (\~10 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question to answer on a post-it or other easily collectable paper:

1. What is something you struggled with?
2. Do you have any lingering questions you need answered?
3. What are a few other parts of other websites where you can image toggle being used? What about specifically add or remove?