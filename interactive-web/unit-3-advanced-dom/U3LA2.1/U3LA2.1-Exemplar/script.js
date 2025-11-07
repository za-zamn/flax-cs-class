console.log("script running");

const fruitButtons = document.querySelectorAll("button.fruit-button");
const resultsSpan = document.querySelector("#results");

console.log('fruit button elements', fruitButtons);

fruitButtons.forEach( (button) =>

  button.addEventListener("click", () => {
    // Make the button green when selected
    button.classList.toggle("is-selected");
    console.log('classes in button', button.classList);

    // Update the results text "Enjoy your..."
    updateResults();
  })

);

const updateResults = () => {
  // array of all buttons that have `is-selected` class name
  let selectedFruits = document.querySelectorAll(".is-selected");
  console.log("selected fruits elements", selectedFruits);

  // array of the `innerHTML` ingredient names
  let description = [];

  selectedFruits.forEach( (fruitButton) => {
    description.push(fruitButton.innerHTML.trim());
  });
  console.log("description array", description);

  // conditional statements to display the list of ingredients properly
  if (description.length > 1) {
    description[description.length - 1] =
      "and " + description[description.length - 1];
    if (description.length === 2) {
      description = description.join(" ");
    } else {
      description = description.join(", ");
    }
  }
  resultsSpan.innerHTML = description + " ";

};
