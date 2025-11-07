// Get the questions div element
const $questionDiv = document.querySelector("#questions");

// Clear the questions div and add a card for each clue
$questionDiv.innerHTML = "";
sampleData.forEach((clue) => {
  // --> Use the clue object to set these values
  const jeopardy = {
    category: "CATEGORY",
    question: "QUESTION?",
    answer: "ANSWER",
  };

  $questionDiv.appendChild(questionCard(jeopardy));
});
