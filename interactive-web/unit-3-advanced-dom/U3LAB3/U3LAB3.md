---
description: How can you use advanced data structures and functional computing with DOM elements and user interaction?
---

# Card Organizer

### Teacher Notes

Students will be using the concepts from the previous lessons to create a card organizing webpage. Small `divs` in the shapes of playing cards will be moved from one parent `div` to another. The medium and spicy extensions introduce new events that javascript can listen for such as: mouseenter, mouseleave, and dblclick.

As students get stuck trying to navigate the DOM tree in search for the right element, continue to encourage them to refer to the actual HTML code both in the `index.html` and in the devtools on the webpage, and encourage them to constantly use `console.log`. 

> Note: This site is not a good example of accessibility, but has been purposely structured for instructional purposes. 

### Prompt

The holding zone on the website starts with just a couple of playing cards. Can you make it so that the cards can be moved from the holding zone to their matching boxes? 

**Directions**: Write the code for the `script.js` so that a user can click on a card and click on a box to move the card.

1. This can be broken down into 2 steps: create an event listener for all the cards on the page, and create one for all the boxes on the page. First, we'll create an event listener for the cards highlighting which has been selected and saving it in a variable. Then, we'll add an event listener to all the boxes that will, on click, "steal" the selected card from the previous box and move it there.

2. Retrieve all the cards and boxes uses querySelectorAll(), and set up an event listener for each card and for each box. Also, include a variable called `selectedCard` and set it to `null` for now. Go try this with your partner before continuing here. 
    ```js
    const cards = document.querySelectorAll('button');
    const boxes = document.querySelectorAll('.box');

    let selectedCard = null;

    cards.forEach( card => card.addEventListener('click', () => {
        //
    }));

    boxes.forEach( box => box.addEventListener('click', () => {
        //
    }));
    ```

3. When a card is clicked on, it should "glow" and be saved as the `selectedCard`. If it is already selected, and is therefore glowing, when it is clicked on, it should stop glowing and the `selectedCard` variable should be set to `null` again. The CSS class "is-selected" is already created for you. Try writing this tricky logic on your own before seeing one way to do it below. Here's what it looks like in pseudocode:
    - If the card is selected (already)
        - remove the `is-selected` class from the card and...
        - clear the `selectedCard` variable setting it to `null`
    - Otherwise (if the card is not already selected)
        - First, Check if there's already a selected card. If there is,
            - remove the `is-selected` class from that card.
        - Then, add the `is-selected` class to this new card.
        - Finally, make this card the selected card by setting the `selectedCard` variable to this card

4. Once you've tried this on your own, this is one way to code it:
    ```js
    cards.forEach( card => card.addEventListener('click', () => {
        if (card === selectedCard) {
            card.classList.remove('is-selected');
            selectedCard = null;
        } else {
            //NOTE: an if statement can be used instead of this ternary
            selectedCard ? selectedCard.classList.remove('is-selected') : {};
            card.classList.add('is-selected');
            selectedCard = card;
        }
    }));
    ```
    See that this feature works on the website. You should now be able to click and un-click cards. Add a console.log(selectedCard) if you'd also like to see that that variable is tracking properly.

5. Now, set up the boxes. First, we only want a click event to happen if there is a selected card and if the box we click is a different box then the one the card is coming from. Use `parentElement` to find the box that belongs to the clicked card. Then set up the if statement as follows:
    ```js
    boxes.forEach( box => box.addEventListener('click', () => {
        if(selectedCard && box !== selectedCard.parentElement.parentElement) {
            console.log("available box");
        }
    }));
    ```

6. When an available box is clicked, we want to do 4 things:
    - Remove the card from the box it came from
    - Add the card to this box
    - Remove the `is-selected` class from the card
    - Clear the current selectedCard
    *See how far you can get with these on your own before reading on.

7. To remove the selected card from the box it came from, use `parentElement` to get the element it's currently in and `removeChild()` to remove it.
    ```js
    boxes.forEach( box => box.addEventListener('click', () => {
        if(selectedCard && box !== selectedCard.parentElement.parentElement) {
            // Remove the card from the box it came from
            selectedCard.parentElement.removeChild(selectedCard);
        }
    }));
    ```
8. We're going to use `appendChild()` to the box, but first we need to find the right element. For now, log the `box.childNodes` and check the console. This will output an array of all the child nodes that belong to the box. Index the element _"div.cards"_, and append the `selectedCard` to it.
    ```js
    boxes.forEach( box => box.addEventListener('click', () => {
        if(selectedCard && box !== selectedCard.parentElement.parentElement) {
            // Remove the card from the box it came from
            selectedCard.parentElement.removeChild(selectedCard);
            // Add the card to this box
            box.childNodes[3].appendChild(selectedCard);
        }
    }));
    ```

9. Last, remove the `is-selected` class from the card and clear the current `selectedCard`.
    ```js
    boxes.forEach( box => box.addEventListener('click', () => {
        if(selectedCard && box !== selectedCard.parentElement.parentElement) {
            // Remove the card from the box it came from
            selectedCard.parentElement.removeChild(selectedCard);
            // Add the card to this box
            box.childNodes[3].appendChild(selectedCard);
            // Remove the `is-selected` class from the card
            selectedCard.classList.remove('is-selected');
            // Clear the current selectedCard
            selectedCard = null;
        }
    }));
    ```

### Exemplar

Take a look at this [finished example](./U3LAB3-Exemplar/index.html) for the finished version of the site.

### Culturally Responsive Best Practice

Students may be color blind, or may not have any experience with playing cards and their suits. This lab doesn't require prior experience with a deck of cards, and the suits' shapes are distinct enough to distinguish regardless of visual deficiencies. However, consider having students play a couple of matching games with a deck of cards to become more familiar and comfortable with the idea. 

### Extra Help?

- Check out these other events that can be listened to: [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event), [mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event), and [dblclick](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event).
- Another resource for [createElement()](https://www.w3schools.com/jsref/met_document_createelement.asp) which is used to create customized HTML before adding it to the page.
- Not understanding DOM traversal (parent, child, grandparent nodes)? Check out [this video resource](https://youtu.be/v7rSSy8CaYE?t=470) on some more examples.
- Need a video resource on adding and removing elements, attributes, and classes? Check the timestamps for [this video resource](https://www.youtube.com/watch?v=y17RuWkWdn8).

### Extensions

**Mild**
- Add 2 more cards of your choice. Ensure that the all the functionality still works.
- Add a 5th suit. Use which ever symbol you'd like. Add a card with that same suit and be sure that you can move the card to that new box.

**Medium**
- Create a `checkBoxes()` function that checks if all the cards are sorted properly. The function should be called after every card is moved. If everything is sorted, display a message or an alert saying so.
- Go to `randomCards.js` and notice that there is a function that returns an array of random cards from a array of all possible cards called `getRandomCards()`. Change the code so that these random cards are the cards that first appear on the screen in the holding zone.
- Highlight an available box when the mouse hovers over it. Add a `mouseenter` and `mouseleave` event listener to the boxes. The `is-selected` class should be added when a `mouseenter` happens, and it should be remove when the `mouseleave` happens or when a box is selected. _NOTE: this effect should only happen if a card is selected, and if the hovered box is not the box of the selected card._

**Spicy**
- Change the code so that multiple cards can be selected at once before moving them to a new box. 
- Add an on "double click" event (`dblclick`) to the holding zone box so that when a user double clicks that box, a new card appears.
- Use local storage to save the last state of the card organizer upon refresh of the page. Check out [this resource on local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to lear more.

**Reflection Questions:**

- What are you most proud of? What did you struggle the most with?
- With more time what would you have liked to add to the page?
- What's one thing you liked about having a partner for this lab?
