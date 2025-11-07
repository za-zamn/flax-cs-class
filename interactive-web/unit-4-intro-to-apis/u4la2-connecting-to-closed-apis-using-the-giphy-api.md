---
description: How do you work with APIs that require authentication?
---

# U4LA2: Connecting to Closed APIs using the Giphy API

### Teacher Notes && Overview

In this lesson, students will integrate the Giphy API into a web app. You should familiarize yourself with the API through the exemplar and the API documentation. Pay special attention to the API key sign-up process, which is likely to evolve over time and trip up students. This lesson is paired with the lesson on SDKs and is intended to highlight the differences between APIs and SDKs by mirroring the lesson structure.

You have the option of putting the API key directly in the code for simplicity or using environment variables to demonstrate keeping the key out of the code. Either way, make sure you highlight the importance of keeping sensitive data like keys out of source code. Discuss the dangers of a key being leaked.

There is a natural splitting point in the lesson to teach it over 2 days. The first half covers closed APIs and is meant to walk students through signing up with the Giphy API to get a feel for that process. The second half goes over the try/catch block and has students experiment with errors and error handling.

### Objectives

Students will be able to:

* Explain the concept of connecting to closed APIs
* Use the Giphy API to retrieve and display GIFs in their applications
* Handle errors using `try`/`catch`

### Suggested Duration

\~2 Periods (\~45 - 90 min)

### NYS Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.7** Design or remix a program that utilizes a data structure to maintain changes to related pieces of data.
* **9-12.NSD.4** Describe the components and design characteristics that allow data and information to be moved, stored and referenced over the Internet.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Query Parameter**: Data added to the end of a URL. Separated from the rest of the URL with `?`, key value pairs matched with `=` and separated by `&`.
* **HTTP:** HyperText Transfer Protocol; A format for sending and receiving messages over the internet
* **API:** Application Programming Interface; A set of rules and protocols that allow different software applications to communicate and interact with each other
* **API Key:** A string that securely identifies you to an API

### Planning Notes && Materials

|                                                           Planning Notes                                                          |            Materials            |
| :-------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------: |
| Familiarize yourself with the Giphy API documentation (https://developers.giphy.com/docs/api/#quick-start-guide) and sample code. |                                 |
|                                                        Review the exemplar                                                        | _No special materials required_ |
|                          Practice signing up for an API key so you'll be able to walk students through it                         |                                 |

### Suggestions for UDL

|                                                                       Multiple Means of Representation                                                                       |                                                                                                       Multiple Means of Engagement                                                                                                      |                                             Multiple Means of Expression                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| Students may need additional examples for understanding what a GIF is. In particular, pay attention to how they're commonly used as an expressive way to communicate online. | Students may have trouble with the abstract concept of an API. It may help to find ways to make it more concrete, such as mailing a letter asking for something or playing a game sending each other instructions in a specific format. | The discussions can be done async or virtual, the hands-on parts can be done individually, in groups, or as a class |

### Suggestions for Differentiation

* You have some flexibility in how much this lesson is independent research vs. following along directly with you.
* Likewise, you can flex how much of the lesson is spent discussing the concepts vs. playing with different API features
* You can try having students incorporate what they know about forms to build a like app with the API, such as passing on a search term and displaying the top 10 results

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA2-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA2/U4LA2-Starter))
* **Lesson Exemplar Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA2-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA2/U4LA2-Exemplar))
* [Giphy API docs](https://developers.giphy.com/docs/api/#quick-start-guide)
* [Fetch Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch\_API)
* [Try/Catch Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Assessments

**Formative:**

* Observe students' engagement and participation during class discussions and hands-on activities
* Evaluate the completeness and functionality of the web pages created by each group
* Evaluate students' understanding through a short quiz or written reflection on the concepts covered during the lesson

**Summative:**

API Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

Have students research online and find a public web API they think sounds interesting. They can look through the [Public API List](https://github.com/public-apis/public-apis) or use their own resources.

* Discuss the APIs the students found. As a group, pick one of them and come up with a list of potential applications that could be built with them.
* Explain the concept of HTTP APIs and how they allow developers to access and use certain functionality or data provided by a service
* Introduce the Giphy API as an example of a closed API that provides a vast collection of GIFs. You may wish to explain what a GIF is or ask students to share some of their favorites.

### Closed APIs and API Keys (\~10 min)

Open APIs can be accessed by anyone, closed APIs require getting a token or other means of access. Ask the students to write a list of reasons why someone who provides data through a public API would want to limit access by requiring a key. You can have them share these out, as well as submit them for review. You may wish to use some technique for hearing and documenting shared and unique entries. Make sure you highlight the following:

* selling access
* selling additional usage
* throttling usage to stop from overwhelming the server
* limiting malicious access.

### Making an API Request (\~15 min)

A client (like a browser) makes a request to a server (like an API server). The server then decides what to send back as a response. We've already seen a couple of basic API requests, but this is what one of the endpoints looks like for the Giphy API. It gets a trending Gif.

```js
// NOTE: This is just an example. 'await' should live in an async function.
const API_KEY = "INSERT API KEY"
const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
const { data } = await response.json()
```

* Show the Giphy API documentation and briefly explain its structure, including some examples of API endpoints, request parameters, and response formats.
* Discuss the concept of API keys and how they are used to authenticate API requests.
* Notice how the API key is a query parameter like we saw in the Jeopardy lab.

### Obtain an API Key (\~10 min)

* Direct students to the [Giphy Developers website](https://developers.giphy.com/) and guide them through the process of creating an account and obtaining an API key.
* Emphasize the importance of keeping the API key secure and not sharing it publicly. Mention that someone who has your API key can impersonate you, steal your data, run up huge bills, or worse.

### Displaying GIFs (\~15 min)

Using the **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA2-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA2/U4LA2-Starter)), complete the following steps to demonstrate to students how to integrate the retrieved GIF data into their applications.

In `script.js`:

1. Set the API key
2. Make a fetch request to `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
3. Parse the response and set its `data[0].images.original.url` to `$gif.src`

<details>

<summary>Solution</summary>

```js

const $gif = document.querySelector("#gif")
const $error = document.querySelector("#error")

// Your API key here instead of this one
const API_KEY = "4VKguYeR2btOeGHQK13652HEZK0AdO2Y"

const app = async () => {
	try {
		// Request a list of trending gifs
		const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)

		// Await parsing the response
		const { data } = await response.json()

		// Attach a URL from the response to the $gif DOM element
		$gif.src = data[0].images.original.url
	} catch (error) {
		// Display any errors
		$error.textContent = `Request failed: ${error.message}`
	}
}

app()
```

</details>

\
Consider encouraging creativity by designing the user interface, and manipulating the CSS to showcase the GIFs effectively.

### Try/Catch and Error Handling (\~25 min)

*   In the try/catch workflow, flow control goes to the `try` block. If anything in it throws an error, control goes to the `catch` block. The `catch` block has access to an `error` object containing details about what errored.

    ```javascript
    try {
    	// Something that might error
    } catch (error) {
    	// How the error should be handled
    }
    ```
* Ask students to predict what kinds of things can error when making API calls. Follow up with their ideas of how to handle them gracefully. For example, if the response HTTP code is 404, that means that you requested something that doesn't exist. Rather than have logic that expects a result to be present, you can gracefully display an error message and redirect the user to try something else.
* Some examples of errors include syntax, invalid endpoint, invalid query, 404, or accessing an attribute in the response that doesn't exist.
*   Present this code block to students:

    ```javascript
    const $message = document.querySelector(".message")

    try {
    	const response = await fetch("http://example-api.com/some-endpoint")
    	const data = await response.json()
    	$message.textContent = `Successfully fetched ${data.message}`
    } catch (error) {
    	$message.textContent = `Request failed: ${error.message}`
    }
    ```

    In this example, the following happens:

    * `$message` is saved.
    * In the `try` block, the browser attempts to get an HTTP response from that URL and save the response in `response`. If it fails, control will go to the `catch` block.
    * Then, the browser will attempt to parse the response and save it in `data`. If it fails, control will go to the `catch` block.
    * Finally, the browser will set the `$message`'s text to the parsed data's message.

    If any of the processes errored, the `$message`'s text will display the error message.
*   In the example above, we can see that the endpoint doesn't exist when we try to run it. In this simpler example, we try to access an element of the array that doesn't exist. `try`/`catch` blocks can also be used for other purposes, like debugging!

    ```js
    const numbers = [1, 2, 3, 4];

    try {
    	console.log(numbers[9]);
    } catch (err) {
    	console.log("Error caught", err);
    }
    ```
* Have students spend some time purposely creating bugs in a try/catch block and see how many different kinds of errors they can get. Spend some time sharing some of these errors in a demo with the whole class.

### Wrap-Up (\~5 min)

* Have students share their applications or experiences with connecting to the Giphy API.
* Discuss the importance and practical applications of connecting to closed APIs in real-world scenarios. For example, talk about how the most powerful APIs will always require some kind of token so they can handle paid access limits.
* Optionally, have students write their reflections and turn them in.
* Encourage students to continue exploring and experimenting with APIs to expand their programming skills.

### Extensions

#### Mild

Use the [Random Endpoint](https://developers.giphy.com/docs/api/endpoint/#random) in your app instead of trending.

#### Medium

Incorporate the [Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search) into your app. Build a form to capture user input for the search.

#### Spicy

Combine the output from the [Random Endpoint](https://developers.giphy.com/docs/api/endpoint/#random) and the [Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search) to create a new feature.
