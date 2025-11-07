import { GiphyFetch } from "@giphy/js-fetch-api"
const $gif = document.querySelector("#gif")


// Your API key here instead of this one
// Create a new instance of the SDK with your API key
const gf = new GiphyFetch("4VKguYeR2btOeGHQK13652HEZK0AdO2Y")

const app = async() => {
	// Await a query to the SDK
	const result = await gf.search("cats")
	// Attach a URL from the response to the $gif DOM element
	$gif.src = result.data[0].images.original.url
}

app()
