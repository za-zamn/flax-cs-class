/* DOM ELEMENT FOR "INPUT" */
const button = document.querySelector("button");
const personalityGrid = document.querySelector("#personality-grid")
const resultText = document.querySelector("#results");

const letterDescriptions = {
  E:{
    title: "Extrovert",
    description: "I like getting my energy from active involvement in events and having a lot of different activities.",
  },
  I:{
    title: "Introvert",
    description: "I like getting my energy from dealing with the ideas, pictures, memories, and reactions that are inside my head, in my inner world.",
  },
  S:{
    title: "Sensor",
    description: "Paying attention to physical reality, what I see, hear, touch, taste, and smell.",
  },
  N:{
    title: "iNtuitive",
    description: "Paying the most attention to impressions or the meaning and patterns of the information I get.",
  },
  T:{
    title: "Thinker",
    description: "When I make a decision, I like to find the basic truth or principle to be applied, regardless of the specific situation involved.",
  },
  F:{
    title: "Feeler",
    description: "I believe I can make the best decisions by weighing what people care about and the points-of-view of persons involved in a situation.",
  },
  J:{
    title: "Judger",
    description: "I use my decision-making (Judging) preference (whether it is Thinking or Feeling) in my outer life.",
  },
  P:{
    title: "Perceiver",
    description: "I use my perceiving function (whether it is Sensing or Intuition) in my outer life.",
  },
}

/* RESULTS VARIABLE */

/* FIX THIS FUNCTION */
const displayBadges = () => {
  personalityGrid.innerHTML = '';

  // For each letter (ex. ESTJ)...
  Object.values(results).forEach(letter => {
    personalityGrid.innerHTML += (
    `<div class="card has-background-warning-light">
      <div class="card-content">
        <div class="content">
          <h1 style="text-align: center">${letter}</h1>
          <p><b>LETTER TITLE HERE</b></p>
          <p><b>Description:</b>LETTER DESCRIPTION HERE</p>
        </div>
      </div>
    </div>`)
  })
};

/* EVENT LISTENERS FOR EACH INPUT RADIO BUTTON */

button.addEventListener('click', (e) => {
  e.preventDefault(); // stops the page from reloading
  displayBadges();
  resultText.innerHTML = Object.values(results).join('');
});

