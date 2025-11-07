let deckId = null;  // Id of main deck

const drawButton = document.querySelector("#draw");         // Draw button
const continueButton = document.querySelector("#continue"); // Continue button

/** Global variable - object of all data on 2 players */
const players = {
  player1: {
    drawnCard: null,
    cards: [],
    discardCount: 0,
    deckCount: document.querySelector(`#player1DeckCount`),
    cardImage: document.querySelector("#player1CardImage"),
  },
  player2: {
    drawnCard: null,
    cards: [],
    discardCount: 0,
    deckCount: document.querySelector(`#player2DeckCount`),
    cardImage: document.querySelector("#player2CardImage"),
  },
};

/** Initializes start of game; new deck and deal to 2 players */
const startGame = async () => {
  //get a new shuffled deck
  deckId = await getNewDeck();

  // deal 26 cards to each player from main deck
  Object.values(players).forEach(async (player) => {
    player.cards = await dealCards(deckId, 26);
    player.deckCount.innerHTML = 26;
  });

  console.log(deckId, players);
};

/** Converts face value with actual numerical value */
const convertValue = (value) => {
  const faceCardValue = {
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14,
  };
  if (Object.keys(faceCardValue).includes(value)) {
    return faceCardValue[value];
  } else {
    return Number(value);
  }
};

/** Hide revealed cards, remove glow on winner, and update scores */
continueButton.addEventListener("click", () => {
  continueButton.disabled = true;

  
  Object.values(players).forEach((player) => {
    // Hide cards
    player.cardImage.innerHTML =
      `<img src="https://deckofcardsapi.com/static/img/back.png" alt="Back of card deck">`;
    // remove glow
    player.cardImage.classList.remove("winner");
    // update scores
    player.deckCount.innerHTML = player.cards.length + player.discardCount;
  });

  drawButton.disabled = false;
});

/** Draw a card, determine winner, and collect cards to corresponding discard */
drawButton.addEventListener("click", async () => {
  drawButton.disabled = true;

  // draw a card for each player
  let thesePlayers = Object.keys(players);
  for(const player of thesePlayers){
    const playerObj = players[player]
    let card = playerObj.cards.shift();
    if (!card) {
      let numberInDiscard = await listCount(deckId, player);
      if (numberInDiscard === 0) {
        alert(`Game Over! ${player} lost`);
        return 0;
      } else {
        //shuffle discard, and draw
        playerObj.cards = await shuffleClearPile(
          deckId,
          player,
          numberInDiscard,
        );
        card = playerObj.cards.shift();
        playerObj.discardCount = 0;
      }
    }
    playerObj.drawnCard = card;
    playerObj.deckCount.innerHTML =
      Number(playerObj.deckCount.innerHTML) - 1;
      playerObj.cardImage.innerHTML = 
      `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
  }

  // Determine the winner of the round
  let roundWinner = null;

  let player1Value = convertValue(players.player1.drawnCard.value);
  let player2Value = convertValue(players.player2.drawnCard.value);

  if (player1Value > player2Value) {
    roundWinner = "player1";
  } else if (player2Value > player1Value) {
    roundWinner = "player2";
  }

  // put cards in correct discard
  if (roundWinner) {
    //Glow winning card
    players[roundWinner].cardImage.classList.add("winner");

    // add both cards to winner's pile
    players[roundWinner].discardCount += 2;
    _ = await addToPile(deckId, roundWinner, [
      players.player1.drawnCard.code,
      players.player2.drawnCard.code,
    ]);
    console.log("After add to pile", `${roundWinner} has ${_} cards`);

    const lCount = await listCount(deckId, roundWinner);
    console.log("Variable List count", `${roundWinner} has ${lCount} cards`);

    console.log("Imbedded List count", `${roundWinner} has ${await listCount(deckId, roundWinner)} cards`);

  } else {
    // Tie!
    console.log("Tie!");
  }

  continueButton.disabled = false;
  console.log("player1", players.player1.discardCount);
  console.log("player2", players.player2.discardCount);
});

startGame();