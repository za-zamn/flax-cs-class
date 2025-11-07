const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let jersey = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against boroughs.
  if (currentAnswer === "Manhattan") {
    outputBox.innerHTML += `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`;
    score += 1;
  } else if (currentAnswer === "Brooklyn") {
    outputBox.innerHTML += `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`;
    score += 1;
  } else if (currentAnswer === "Bronx" || currentAnswer === "The Bronx") {
    outputBox.innerHTML += `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`;
    score += 1;
  } else if (currentAnswer === "Queens") {
    outputBox.innerHTML += `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`;
    score += 1;
  } else if (currentAnswer === "Staten Island") {
    outputBox.innerHTML += `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`;
    score += 1;
  } else if (currentAnswer === "Jersey City") {
    outputBox.innerHTML += `<h3>Jersey City</h3><p>You found the sixth Borough!</p>`;
    jersey = true;
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a NYC Borough.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

const checkScore = () => {
  if (score === 5) {
    statusBox.innerHTML = "Congratulations, you found all five boroughs!";
  }
  if (score === 5 && jersey) {
    statusBox.innerHTML =
      "A true New Yorker! All five Boroughs and our neighbors in Jersey City.";
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer);
