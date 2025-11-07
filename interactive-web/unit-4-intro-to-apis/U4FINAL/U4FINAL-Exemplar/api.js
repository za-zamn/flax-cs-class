//Higher Lower
/** Requests data from API and sends it via functions */
const BASE_URL = "https://deckofcardsapi.com/api/deck";

// creates new shuffled deck - returns deck_id
const getNewDeck = async () => {
  const endpoint = `${BASE_URL}/new/shuffle/`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.deck_id;
};

//deals out how ever many cards you need
const dealCards = async (deckID, count) => {
  const endpoint = `${BASE_URL}/${deckID}/draw/?count=${count}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.cards;
};

// creates new pile with added cards or adds to existing pile (no return)
const addToPile = async (deckID, pileName, cardsArray) => {
  const endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/add/?cards=${cardsArray.join()}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data.success ? "Added cards to pile" : "Failed to add cards");

  return data.piles[pileName].remaining;
};

const listCount = async (deckID, pileName) => {
  const endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/list`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.piles[pileName].remaining;
}

//returns count of cards in pile
const pileCount = async (deckID, pileName) => {
  const endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/list/`;
  const response = await fetch(endpoint);
  const data = response.json();

  return data.piles[pileName].remaining;
};

// shuffles pile and clears/draws cards from pile
const shuffleClearPile = async (deckID, pileName, numOfCards) => {
  let endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/shuffle`;
  let response = await fetch(endpoint);
  let data = await response.json();

  if (data.success) {
    endpoint = `${BASE_URL}/${deckID}/pile/${pileName}/draw/?count=${numOfCards}`;
    response = await fetch(endpoint);
    data = await response.json();

    console.log("shuffle and redraw successful",  pileName, data)
    return data.cards;
  } else {
    console.log("Failed to shuffle cards");
    return null;
  }
};


