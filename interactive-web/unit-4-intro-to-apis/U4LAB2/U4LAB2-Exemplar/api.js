const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/';
const THESAURUS_API_KEY = 'YOUR_API_KEY123';
const SPANISH_API_KEY = 'SPANISH_API_KEY456';

const getDef = async (word) => {
  const word_url = BASE_URL + word + '?key=' + THESAURUS_API_KEY;
  try {
    const response = await fetch(word_url);
    const res = await response.json();
    console.log(res);

    return res
  } catch (error) {
    console.error(error);
  }
}