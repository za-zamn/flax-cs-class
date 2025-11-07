console.log("Script Running");

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;
const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
// (1)
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
const winnerText = document.querySelector("#winner"); // (4)


// OnClick Functions Here
const advanceBlue = (e) => {
  console.log("clicked");
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
  blueHorse.alt = `blue horse at position ${blue_position} out of 5`;
};
// (3)
const advancePink = (e) => {
  console.log("clicked");
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink"); // (4)
  pinkHorse.alt = `pink horse at position ${pink_position} out of 5`;
};
const advanceBrown = (e) => {
  console.log("clicked");
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown"); // (4)
  brownHorse.alt = `brown horse at position ${brown_position} out of 5`;
};


// Check for a winner (4) - If position = 5, innerHTML "color is the winner!"
const checkWinner = (position, color) => {
  if (position === 5) {
    winnerText.innerHTML = color + " is the Winner!";
  }
};

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
// (2)
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);


// Disable Button
// (Spicy)(5) Add a restart button on the pages that clears the innerHTML and 
// sets the positions of the horses to 1.
// (6) use e.target.value to access the horse color, and use 1 "advance" function 
// instead of 3, use an object where the key is the color and the value is the position. 
// Then add another horse. "rainbow.png" (use yellow for the button)
