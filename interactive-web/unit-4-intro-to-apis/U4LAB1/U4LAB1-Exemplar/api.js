//Higher Lower
/** Requests data from API and sends it via functions */
const BASE_URL = "https://deckofcardsapi.com/api/deck";

// creates new shuffled deck - returns deckId
const getNewDeck = async () => {
  const endpoint = `${BASE_URL}/new/shuffle/`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.deck_id;
};

//deals out how ever many cards you need
const getNextCard = async (deckId) => {
  const endpoint = `${BASE_URL}/${deckId}/draw/`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data.cards[0];
};
