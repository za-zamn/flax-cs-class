let deckId;
const drawButton = document.querySelector("#draw-button");

const startGame = async () => {
  // create a new deck and save the deck ID
  deckId = await getNewDeck();
  console.log(deckId);

  drawCard();
};
const drawCard = async () => {
  // draw a card from deck
  let card = await getNextCard(deckId);
  console.log(card);

  const drawPile = document.querySelector("#draw-pile");
  drawPile.innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}"></img>`;
};

startGame();
drawButton.addEventListener("click", drawCard);
