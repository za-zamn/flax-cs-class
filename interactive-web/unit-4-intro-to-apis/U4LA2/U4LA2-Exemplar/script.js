const $gif = document.querySelector("#gif");
const $error = document.querySelector("#error");

// Your API key here instead of this one
const API_KEY = "4VKguYeR2btOeGHQK13652HEZK0AdO2Y";

const app = async () => {
  try {
    // Request a list of trending gifs
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
    );

    // Await parsing the response
    const { data } = await response.json();

    // Attach a URL from the response to the $gif DOM element
    $gif.src = data[0].images.original.url;
  } catch (error) {
    // Display any errors
    $error.textContent = `Request failed: ${error.message}`;
  }
}

app();
