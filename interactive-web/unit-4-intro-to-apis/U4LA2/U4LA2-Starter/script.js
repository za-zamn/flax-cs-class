async function app() {
	const $gif = document.querySelector("#gif")
	const $error = document.querySelector("#error")

	// YOUR CODE STARTS HERE

	// Put your API key here
	const API_KEY = ""

	try {
		// Fetch a list of gifs from the trending API (https://api.giphy.com/v1/gifs/trending)
		// adding your key to the `api_key` query parameter

		// Await parsing the response

		// Attach a URL from the response to the $gif DOM element. A suitable URL can be found
		// at `data[0].images.original.url`. What other URLs can you find?
		$gif.src = ""
	} catch (error) {
		// Attach an error message to the $error element
	}

	// YOUR CODE STOPS HERE
}

app()
