---
description: >-
  How can I make it easier for someone using a screen reader to interact through
  a webpage?
---

# U2LA2.2: Accessible Shopping Cart

### Teacher Notes & Overview

The goal of this lesson is to give students exposure to using a screen reader having them empathize with people that have visual deficiencies. For a majority of the lesson, students will be navigating websites with a screen reader making observations on how various elements of the page are or are not accessible.

Most computers have a screen reader in their original software: Mac has `VoiceOver`, Chromebooks have `ChromeVox`, etc. There are free Chrome extensions like [ScreenReader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) you can use to unify your class, but if possible, we recommend using either of the other 2. [Here's a video tutorial on ChromeVox](https://www.youtube.com/watch?v=NyuuK7tB9fM). Which ever you choose, be sure to learn the basic controls in preparation for this lesson. This lesson was written with `ChromeVox` in mind.

As this lesson is more of an exploration, students will have an opportunity to reflect by writing on their observations toward the end of the lesson. Feel empowered to extend this "explore and reflect" section further than what's written.

### Objectives

Students will be able to:

* Use a screen reader, _ChromeVox_, to navigate a webpage similar to how someone with visual deficiencies would.
* Recognize opportunities in HTML code to use semantic element tags and other attributes like ARIA to make a website more accessible
* Use `keydown` events in javascript code to manually trigger images to behave like buttons.
* Empathize with the visually impaired and consider their perspectives when creating websites.

### Suggested Duration

1-2 periods (\~45-90 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.8** Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.
* **9-12.CT.9** Systematically test and refine programs using a range of test cases, based on anticipating common errors and user behavior.
* **9-12.IC.5** Describe ways that complex computer systems can be designed for inclusivity and to mitigate unintended consequences.
* **9-12.IC.3** Debate issues of ethics related to real world computing technologies.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Screen Reader:** provides access to information on a computer for people who are blind or visually impaired and converts important information from the computer screen into speech, braille or magnified form.
* **Semantic Element Tag:** tags that define the meaning of the content they contain. For example, tags like `<header>`, `<article>`, and `<footer>` are semantic HTML tags.
* **ARIA:** Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities.
* **Keydown Event:** The key-events happen whenever a user interacts with keyboard. There are mainly three key event types − keydown, keypress and keyup.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |                                                                 Materials                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | Students will need headphones while navigating websites using screen readers. They will also need a computer and access to the internet. |

### Suggestions for UDL

|                                                                          Multiple Means of Representation                                                                          |                                                                             Multiple Means of Engagement                                                                            |                                                            Multiple Means of Expression                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| As written in the [Warm Up](untitled.md#do-nowwarm-up-10-min), have students cover their screen and try navigating a website with a screen reader to create empathy and awareness. | Depending on the level of your students, have a pre-written or half completed starter code so students can spend more time listening and understanding, and less time coding along. | Students' will demonstrate higher order thinking through reflection and the writing activity. Both items can be collected as a form of assessment. |

### Suggestions for Differentiation

This lesson is designed as an exploration of websites using a screen reader. There is also, a code along portion in the middle. Consider having a documented sheet of controls that students can type when using a screen reader. We encourage that students sit in pairs. Consider offering opportunities for them to communicate with each other about their observations and curiosities.

### Resources

* **Lesson Starter Code** ([repl.it ](https://replit.com/@qrtnycs4all/U2LA22-Lesson-Starter-Code)| [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA2.2/U2LA2.2-Starter))
* **Lesson Exemplar** ([repl.it](https://replit.com/@qrtnycs4all/U2LA22-Exemplar) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LA2.2/U2LA2.2-Exemplar))
* [**Replit.com**](https://replit.com/)
* [**W3 Schools: DOM Essentials**](https://www.w3schools.com/js/js\_htmldom\_document.asp) - functions used to read and update the DOM
* [**MDN: Accessibility Best Practices**](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS\_and\_JavaScript) - an article on how CSS and Javascript are accessible.

### Assessments

**Formative:**

**Activity Code Along** and **Writing Activity** can be collected and assessed as needed

**Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

Unit 2, HTML Lab 2 (Upcoming Lab)

JavaScript DOM Manipulation Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

For the warmup, students will have an opportunity to play with a screen reader to simulate an experience that a blind person might go through. Students will spend a few minutes using a screen reader with a paper (or similar) covering their screen. Then, they will uncover their screen and continue using a screen reader for a few more minutes before discussing their observations as a group.

> NOTE: the screen readers are very yappy. It is recommended that you have students use their own headphones and do this warm up independently. Alternatively, in pairs you can have one student listen and navigate while the other student peaks at the screen. This can also be done without headphones on mute (the text is displayed at the top of the screen), but will result in a less impactful lesson.

Have students run up the main webpage of the starter code, and ask them to immediately cover their screen and plug in their headphones. Guide them on how to turn the screen reader on and how to navigate by heading and using arrow keys, and ask them to challenge themselves to navigate through the webpage as a blind person would.

To activate a screen reader on the Chromebook (_ChromeVox_) click `CTRL+ALT+Z`. Use the `SearchBar + H` to navigate the page by headings, and use the `SearchBar + →` and other arrows to navigate more granularly. Once the students play with these controls while the screen is covered, have them remove the cover and incorporate `SHIFT` and `CTRL` in combinations with `H` and the `arrow keys` to discover other controls.

Use the last couple of minutes to reflect and mainly talk about what flaws there are on this website. Use the following points to guide your discussion:

* The _Mango_ button doesn't read as a button
* The _Mango_ button doesn't add "Mango" to the cart
* It's hard to know what is in your cart & what the total cost is.
* The _"Empty Your Cart"_ button is inaccessible & un-clickable without a mouse.
* The _Apple_ and _Banana_ button work great!

### Mini Lesson: Fixing Accessibility Issues (\~20 min)

**Fixing the Mango Button**

1. First, have students look in the `index.html` and give you a prediction as to why the mango button is different than the other 2 buttons. _The mango button is a `<div>` element, and the other 2 are `<button>` elements._
2. Have students change the element type with you, demo the change via the screen reader, and stress the importance of using element tags (as stressed in Unit 1 Lesson 1) especially for someone with visual deficiencies.

**Announcing Cart Updates**

3. Next, it would be useful if the cart total was announced every time a button was pressed. [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) (Accessible Rich Internet Applications) is a set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities.
4.  We can include ARIA attributes right in our `index.html` as follows.

    ```html
    <h4 aria-live="polite">Your total: ...
    ```

    The `aria-live` attribute allows us to tell the screen reader to make an announcement anytime changes are made to the contents of this element. "polite" is used when we want to wait for the screen reader to stop talking to make the announcement, and assertive interrupts the screen reader. [Learn more here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live).
5. Take a moment to demo this change with the screen reader.

**The "Empty Your Cart" Button**

6. Lastly, we should make sure this empty cart button is fully accessible. As you saw with the _"Mango"_ button, using the proper semantic element tag makes being accessible easy, and this should always be prioritized. However, what if you have an image that you need to behave like a button? The CSS and Javascript has been mostly coded to have this act like a button, but the screen reader has not.
7.  We're going to use the following 3 attributes so that the button has a label, and so that we can get to it using a screen reader. We'll include these attributes in the `div id="clear-button"`:

    * use `tabindex="0"` to ensure that the `div` can be accessed by a screen reader,
    * use `role="button"` to indicate to the screen reader and user that it is a button, and
    * use `aria-label="Empty your cart"` to tell the user what the button does.

    ```html
    <div id="clear-button" tabindex="0" role="button" aria-label="Empty your cart">
    ```

    Demo these changes using the screen reader before moving on to javascript functionality.
8. Notice that once we land on the button with the screen reader, there is nothing that can be pressed to "click" the button without using the mouse, but with the other 3 buttons, you can click the `SpaceBar` or the `ENTER` button.
9.  In the `script.js` there already is an event listener for the a **"click"** on the `div`, but we're going to add a new event listener for key strokes (**"keydown"**) as well. When a key is pressed while hovering over this div, we want to check that the key is the `SpaceBar` or the `ENTER` button.

    ```js
    clearButton.addEventListener("keydown", checkKey)
    ```
10. Now that we have the event listener, let's create the `checkKey` function. When ever a key is pressed, that triggers a keydown "event". The code for that event will tell us what type of key was pressed. Finally, once we check the key, we can manually trigger a "click" event that has already been written.

    ```js
    const checkKey = (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
            clearButton.click();
        }
    }
    clearButton.addEventListener("keydown", checkKey)
    ```

### Exploration Writing Activity (\~10 minutes)

* Go to 1 or 2 of your favorite websites and try to navigate them with a screen reader
* Find 3 things that are clear and work well when using the screen reader. Copy the link and describe how what they are and how they made the website accessible.
* Find 3 things that don't feel right making the website feel hard to navigate through. Copy the link and describe what happened and what made them hard to use.
* Brainstorm with your partner how you might imagine fixing those inaccessible parts of the website

### Wrap Up (\~5 minutes)

If you'd like time to collect their written work or code along, this would be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit any links as well as any reflection questions.

Before students leave, ask them to select a question to answer on a post-it or other easily collectable paper:

1. What is something you learned about website accessibility that you did not know before?
2. What challenges might people with visual deficiencies face when trying to interact with a website?
3. Do you have any lingering questions you need answered?
