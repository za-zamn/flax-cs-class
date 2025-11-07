// Get the questions div element
const $questionDiv = document.querySelector("#questions");

const setRandomClues = async () => {
  const data = await getRandom();

  data.forEach((clue) => {
    // --> Use the clue object to set these values
    const jeopardy = {
      category: clue.category.title,
      question: clue.question,
      answer: clue.answer,
      value: clue.value,
    };

    $questionDiv.appendChild(questionCard(jeopardy));
  });
};

// Clear the questions div and add a card for each clue
$questionDiv.innerHTML = "";
setRandomClues();
