---
description: How do you change a webpage based on clicked buttons?
---

# 🗃 U2LA2 Mini Project: The National Horse Race

### Teacher Notes

In this lab, students will be using `addEventListener` and `innerHTML` to activate buttons. When the button is clicked, it should move the corresponding horse up one step. When a horse reaches the end of the "road" a message will appear saying that that color has won. The blue horse is already done as it should be as an example for students.

In the second half of the lab, students will use ARIA and alt text to make the webpage accessible. Resources have been provided but be sure to have some examples ready for extra support.

**Students should utilize the Starter Code (**[**repl.it**](https://replit.com/@qrtnycs4all/U2LA2-Mini-Project-Starter-Code) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LAB2/U2LAB2-Starter)**) for this project.**

### Prompt

It's the national horse race again! Three horses line up to race for the finish line. Which one will win? Click the "Run!" button to activate a horse. (Try the blue one, it works!) When it gets to the end of the screen, a text should appear announcing that horse the winner.

**Directions**: Your task is to **finish the website** **(**[**repl.it**](https://replit.com/@qrtnycs4all/U2LA2-Mini-Project-Starter-Code) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LAB2/U2LAB2-Starter)**)** so that the pink and brown horse also work the same as the blue horse. You'll have to use `querySelector`, `addEventListener`, and _arrow functions_ to do so. For the extensions, you'll have a chance to add a fourth horse, a reset button, and more.

1. If you haven't already, check out the website and notice that when you click the "Run!" button next to the blue horse, the blue horse moves forward a bit. First thing we're going to work on is getting the other horses to do the same. This will be done in 3 parts: 1st, you'll need `querySelectors` to listen to the button and move the horse image, 2nd, you'll need to create `addEventListeners` for each button, and 3rd, you'll need to create a function that advances the horse once the button is clicked.
2.  First, go to the [`script.js`](https://github.com/nycdoe-cs4all/interactive-web/blob/manny-edits/unit-2-intro-to-dom-manipulation-basics/U2LAB2/U2LAB2-Starter/script.js) and notice that there are 2 `querySelctors`: one for the `blueButton`, and one for the `blueHorse`. We need the first to listen to when the "Run!" button is clicked, and we need the second to move the image of the horse. Do the same for the pink horse and the brown horse. If you're stuck look below for the code for the pink horse:

    ```js
    const pinkButton = document.querySelector("#pink-button");
    const pinkHorse = document.querySelector("#pink-horse");
    ```
3. Second, scroll to the bottom, and notice that there is an `addEventListener` for the `blueButton` that calls a function _"advanceBlue"_. Create 2 more `addEventListeners`, one for the `pinkButton` and one for the `brownButton`. When these buttons are clicked, they should call a function called _"advancePink"_ and _"advanceBrown"_ respectively. Use the blue button's event listener for reference.
4. Third, find the section on the page where the OnClick functions are declared. Notice that the `advanceBlue()` arrow function is already made, and the `advancePink()` function is set up, but not completed. Complete the advancePink function so that it increments the `pink_position` variable by 1, then it should adjust the image of the horse using the function `changePosition` that takes in 2 variables as parameters: the `querySelector` for the horse, and the new position. Use the `advanceBlue` function for reference.
5. Great! Now head over to the website and check that all 3 of your buttons are working.
6. Now, when a horse gets to the end of the race, you'll have to announce that that horse is the winner. Edit the `checkWinner()` function so that it writes a winner to the screen based on the position of the horse:
   * First, up with all the other query selectors, write a new `querySelector` for the `div` with an `id="winner"`
   * Then, in the `checkWinner()` function, write an if statement: If the horse's position is equal to 5, change the `innerHTML` of the winner `div` to, for example, "Blue is the Winner!". Use the `position` argument and the `color` to help.
   * NOTE: use `console.log()` where needed to check that your code is doing what it should.
7.  After the function is set up, you'll need to call it in each of the _`advanceColor()`_ functions. For example, here's what the `advanceBlue()` function should look like:

    ```js
    const advanceBlue = (e) => {
        blue_position += 1;
        changePosition(blueHorse, blue_position);
        checkWinner(blue_position, "Blue");
    };
    ```
8. **Make it accessible**: When you turn on the screen reader, what do you notice that could be improved?
   * Notice that neither the buttons nor the horses have a descriptive enough alt text. The screen reader just announces _"Run! Button"_ for the button and "Blue Horse", for example, for the horses.
   * When the buttons are clicked, nothing is said by the screen reader.
   * Lastly, when a horse reaches the end, there is no way for someone who is blind to know that the race is over.
9. For the buttons, use the `aria-label` property to give it a good descriptive text that will be read when hovered over by a screen reader. In the `index.html` add `aria-label="Advance blue horse"` in the blue button element. Do the same for the other 2 buttons. Here's a [resource on aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).
10. The image of the horse already has alt text, but change it so that it includes the position of the horse in the track. The horses all start at position 1 out of 5: `alt="blue horse at position 1 out of 5"`. Do the same for the other 2 horse images in the `index.html`.
11. In the `script.js`, when a button is clicked, also change the alt text so that it contains the new position. At the end of the `advanceBlue` function, use `.alt` to set alt text. Here's [a resource with examples](https://www.w3schools.com/jsref/prop\_img\_alt.asp). Again, make sure you do this for all three horses.
12. Now that the text is available, descriptive, and updating with every button click, the last step will be to make sure that the screen reader announces those updates. Add the following 2 attributes to each of the image elements: `aria-live="polite"` and `aria-atomic="true"`. In the div where the winner text is displayed, use these two as well but make the `aria-live="assertive"`. For example:

    ```html
    <div id="winner" aria-live="assertive" aria-atomic="true"></div>
    ```

    Check out this [resource on aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) and this one on [aria-atomic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic).

### Exemplar

Take a look at this **finished example** ([repl.it](https://replit.com/@qrtnycs4all/U2LA2-Mini-Project-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-2-intro-to-dom-manipulation-basics/U2LAB2/U2LAB2-Exemplar)) before you start to get an idea of what your horse race might look like.

### Culturally Responsive Best Practice

When thinking of the rationale behind using OnClick and ensuring it's accessibility on a website, consider having students recall a time that they clicked something on a website not including links. You may even encourage them to explore websites with their partners looking for examples. In this way, students will find a rationale that they can personally identify with.

### Extra Help?

For accessibility, the resources linked above are your best bet when you get stuck. Check them out to see an example on how they should be used.

Use the following resources to see some other examples that may help throughout the lab:

* [addEventListener "onClick"](https://www.w3schools.com/jsref/met\_element\_addeventlistener.asp)
* [innerHTML](https://www.w3schools.com/jsref/prop\_html\_innerhtml.asp)

### Extensions

**Mild**

* Once the game is over, notice that the other buttons still work. In fact, if the blue horse wins, you can get another horse to the finish line overwriting who the winner is. Use `blueButton.disabled = true;` to disable all three of the buttons once a winner is declared. You'll want to put the statements in the `if` statement of your `checkWinner` function. Use [the documentation for disabling buttons](https://www.w3schools.com/jsref/prop\_pushbutton\_disabled.asp) for more information.
* Using everything you've learned up until now, add a restart button to the page that starts the game over. Use a basic `<button>` element tag and give it the label "Restart Game". Disable it while the game is in progress, and reenable it once the game is over and there's a winner. The restart button should do 3 things:
  * set the horses position to 1, back to the starting position,
  * reenable the buttons,
  * clear the `innerHTML` of the `div` with `id="winner"`, and

**Medium**

*   Change the restart button so that it appears and disappears instead of being enabled and disabled. Be sure your button has an `ID` so you can use `querySelector` to access it. Then, change the _display_ to `"none"` to hide it or `"block"` to show it. Use this [resource for some help](https://www.w3schools.com/jsref/prop\_style\_display.asp).

    ```js
    myButton.style.display = "none";
    ```
*   Add another button between the title and the horses named "Steps". Then, immediately after, add a `div id="steps"` that will hold the output of that button. The "Steps" button when clicked should output a random number either 0, 1, or 2 in the innerHTML of the `div`. Use the following code to generate the random number. Here is a [resource if you'd like to learn more](https://www.w3schools.com/js/js\_random.asp).

    ```js
    let randomNumber = Math.floor(Math.random() * 3);
    ```

    Once the button generates random numbers, use it to tell you how far to move each horse. _For example, starting with the blue horse, let's say you click the "Steps" button, and it outputs 1. That means we will click the "Run!" button for the blue horse 1 time. Then, click the "Steps" button again for the pink horse; let's say it says 0. Then, we skip over the pink horse's "Run! button", and so on until a horse wins._

**Spicy**

*   Create a duplicate of the "Steps" button as done above, but call it "Color". In the `index.html`, there should now be 2 buttons and 2 `divs` for the button's outputs. The first should be `div id="steps"` and this second should be `div id="chosen-horse"`. In the `script.js`, create another event listener function so that when the "Color" button is clicked, it changes the innerHTML of the new `div id="chosen-horse"` to...

    * _"Blue"_ if the random number is 0,
    * _"Pink"_ if it is 1, and
    * _"Brown"_ if it is 2.

    Now, before advancing any horse, click both the "Steps" button and the "Color" button. _If the outputs are "2" and "Brown", for example, then advance the brown horse 2 steps, and so on until a horse wins._
* There's currently quite a bit of redundancy in the code; there's repetition where there doesn't need to be. For this extension, you'll change the `advanceBlue()`, `advancePink()`, and `advanceBrown()` functions into 1 function called `advance()`:
  *   First, head to the top of code and change all the variables so that they are in 1 object. You will have to eventually delete `blue_position`, `pink_position`, `brown_position`, and all the query selectors. The new object should be called `horses` and have 3 keys: "blue", "pink", and "brown". Each of the values should be another object with 3 keys as follows:

      ```js
      let horses = {
          "blue" : {
              "position" : 1,
              "button" : document.querySelector("#blue-button"),
              "horse" : document.querySelector("#blue-horse")
          },
          "pink" : //etc...
      };
      ```

      When you've done this for all 3 colors, test that it is working by printing the pink position with `console.log(horses["pink"].position)`.
  *   Next, in the `advance()` functions, they should each have a parameter `e` which points to all the attributes associated with the button that calls it. Print `e.target` and notice that the entire element is printed. Then, print `e.target.value` to the console in one of the functions to see what value is given. The blue button should print "blue", the pink button "pink", and so on. You'll use these values to help access the right information from the object you created.

      ```js
      const advanceBlue = (e) => {
          console.log(e.target)
          console.log(e.target.value);
          //...
      }
      ```
  *   Now, create a new `advance()` function that will replace the 3 current advance functions. This new function should do the same as the others, but instead of writing and reading from a specific variable, write and read to and from the object based on the `e.target.value`. Here's the partial code:

      ```js
      const advance = (e) => {
          color = e.target.value;
          horses[color].position += 1
          // etc...
      }
      ```
  *   Finally, change the `addEventListeners` at the bottom of the code to run the `advance()` function, and test that everything still works.

      ```js
      horses["blue"].button.addEventListener("click", advance);
      //etc...
      ```
  *   NOTE: if you implemented a restart button, and included disables everywhere, you'll need to change those as well

      ```js
      horses["blue"].button.disabled = false;
      //etc...
      ```

**Reflection Questions:**

* What was the most challenging part of the lab? What was the part you're most proud of?
* With more time, what would you add to this website to make it a better experience? How might you think about doing that?
* Is it important for website like this to be accessible to people with visual deficiencies? Why or why not?
