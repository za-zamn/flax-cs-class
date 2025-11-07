const $cards = document.querySelector("#cards");

/** gets the definition from the api and simplifies the object */
const getSimpInfo = async (word) => {
  response = await getDef(word);
  finalData = {
    word,
    partSpeech: 'PART_OF_SPEECH',
    def: 'DEFINITION',
  };
  return finalData;
};

/** Uses the Simplified object to display a definition card */
const makeCard = (finalData) => {
  return `<div id="definition-card">
    <p id="word">${finalData.word}</p>: 
    <span id="part-speech">PART_OF_SPEECH</span>
    <p id="definition">DEFINITION</p>
  </div>`;
};

/** Listen for input and display a card */
const $userInput = document.querySelector("#user-input");
$userInput.addEventListener("change", async (e) => {
  const word = e.target.value;
  // get word info
  // display card
});
