const $cards = document.querySelector("#cards");

const getSimpInfo = async (word) => {
  response = await getDef(word);
  final_data = {
    word,
    partSpeech: response[0].fl,
    def: response[0].shortdef[0],
    syns: response[0].meta.syns[0], //added
  };
  return final_data;
};

const makeCard = (wordInfo) => {
  return `<div id="definition-card">
    <p id="word">${wordInfo.word}</p>: 
    <span id="part-speech">${wordInfo.partSpeech}</span>
    <p id="definition">${wordInfo.def}</p>
    <p id="synonyms">Synonyms: ${wordInfo.syns.join(', ')}</p>
  </div>`; // synonyms are added
};

const $userInput = document.querySelector("#user-input");
$userInput.addEventListener("change", async (e) => {
  console.log(e.target.value, "submitted");
  const word = e.target.value;
  const wordInfo = await getSimpInfo(word);
  console.log(wordInfo);

  $cards.innerHTML = makeCard(wordInfo);
});
