---
description: How are files delivered on the web?
---

# U5LA1: Servers and Express

### Teacher Notes && Overview

This lesson is a conceptual overview of servers, Node, and Express. It connects the web development they've already done with server development by exploring how the HTML/CSS/JS files get to the browser. It also isolates setting up an Express HTTP app from attaching a socket server to it.

Note that the syntax for Node modules is in transition. All of these lessons use the (finalized but technically experimental) ESM `import`/`export` syntax that's used in front-end JavaScript, which Node historically has used the CommonJS `require`/`module.exports` syntax. They are very syntactically similar and serve the same purpose, but ESM modules are statically linked and CommonJS modules are imported at runtime. The bigger issue is that both in very common usage in learning resources across the web, so anticipate some confusion about this.

The included starter code is already configured for ESM and includes Express. If you need to build an ESM project from scratch, you need to add `"type": "module"` to the top level of `package.json`.

### Objectives

**Students will be able to:**

* Describe client-server communication
* Describe the relationship between JavaScript, Node, and Express

### Suggested Duration

\~1-2 Period (\~45-90 min)

If your students are already confident with client-server concepts, you can probably get this done in one lesson, otherwise, plan on two.

### NYS Standards

### Vocabulary

* **Client:** A computer that makes requests to a server
* **Server:** A computer that responds to requests from a client
* **Node.js:** A runtime that executes JavaScript outside of a browser
* **HTTP:** HyperText Transfer Protocol, a format for sending and receiving messages over the web
* **Express:** A framework that simplifies writing HTTP-based servers
* **Static:** Something that doesn't change
* **File Server:** A type of server that responds to requests for files

### Planning Notes && Materials

|                                        Planning Notes                                        |                                                                                                                           Materials                                                                                                                          |
| :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       Write out the steps for the diagramming exercise ahead of time (rewritten below).      | There is a sample Express app in U5LA2-Exemplar that you can use to reference or demo with. Make sure the dependencies have been installed with `npm install`, then run the app with `npm start`. By default, the server listens on `http://localhost:3000`. |
| Make sure you are confident drawing and talking through the diagram in the diagramming step. |                                                                                                                                                                                                                                                              |

1. Browser makes HTTP GET request to `http://website.com/about.html`
2. Express receives the request
3. Express reads `about.html`
4. Express sends contents to browser
5. Browser renders file contents

### Suggestions for UDL

|                                                                         Multiple Means of Representation                                                                         |                                                                          Multiple Means of Engagement                                                                          |              Multiple Means of Expression             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------: |
| Exercise instructions can be read or dictated. Discussions can take place with voice or in print. Lesson begins with priming, which is immediately activated through discussion. | Students can relate to this topic via their previous work in this course and are encouraged to come up with their own examples of how the technologies introduced can be used. | Students read, listen, discuss, write, draw, and use. |

### Suggestions for Differentiation

* Print the steps for the client/server communication ahead of time and distribute them
* Print the diagram ahead of time and distribute it
* The discussion can also be done async
* You can have a student drive during the Node demo
* Instead of a diagram, you can have students build a physical model of client/server communication
* The wrap-up can be written or async instead

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U5LA1-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LA1/U5LA1-Starter))
* **Lesson Exemplar Code** ([repl.it ](https://replit.com/@qrtnycs4all/U5LA1-EXEMPLAR)| [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LA1/U5LA1-Exemplar))
* [**Express**](https://expressjs.com/)
* [**W3Schools: Node.js Introduction**](https://www.w3schools.com/nodejs/nodejs\_intro.asp)
* [**FreeCodeCamp: What Exactly is Node.js? Explained for Beginners**](https://www.freecodecamp.org/news/what-is-node-js/)

### Assessments

**Formative:**

**Questions**:

* Q: What is the relationship between clients and servers?&#x20;
  * A: Clients make requests, servers provide responses to requests
* Q: What is Node?&#x20;
  * A: Node is a JavaScript runtime. It is a way to run JavaScript outside of the browser.
* Q: Explain the relationship between JavaScript, Browsers, Node.js, and Express&#x20;
  * A: JavaScript is a programming language that can on browsers or on Node.js, a runtime. Express is a JavaScript framework that runs on Node.js and responds to requests from Browsers.
* Q: Explain what serving a static file means?&#x20;
  * A: Serving a static file means an HTTP server has responded to an HTTP request by reading a file's contents and sending them in an HTTP response.

Student work in the lesson can be collected, as can the reflection question.

**Summative:**

Unit 5, Lab 1

Socket Final Project

## Lesson

### Do Now/Warm Up (\~5 - 15 min)

Read [MDN's introduction to Node and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express\_Nodejs/Introduction) through the end of "HelloWorld Express." You do not need to run the code in the examples. Consider these questions:

* What is Node?
* What are some benefits of Node?

If doing this over multiple days, a second read-through on this is excellent reinforcement.

### Discussion (\~10 - 15 min)

Have students discuss the reading and their answers to the prompts in pairs (3-5 minutes).

Then lead a large group discussion on their takeaways (7-10 minutes). The major things to make sure they've taken away:

* Node is a runtime, not a language. The language is still JavaScript.
* Node allows you to use JavaScript outside of a browser

### Hands-On With Node (\~5 - 10 minutes+)

Demonstrate making a Hello World with Node and invite students to follow along:

1. Make a file named `index.js`
2. Inside it, write `console.log("Hello, world!")`
3. Run the program with `node index.js`

> _**If you're running from Replit:**_
>
> * Create a new Replit with the language set to Node.js
> * package.json already exists as a file. Show hidden files to copy and paste into package-lock.json
> * index.js is already made. You can run the above commands through the “Shell” tab and see results in the “Console” tab. However, the Run button is already configured to run “node index.js” by default.

Optionally, challenge them to implement a simple algorithm such as reversing a string and print the output. If you'd like to have them accept input, CLI arguments can be accessed with the built-in array `process.argv`. `process.argv[0]` is a string of all arguments, individual arguments can be accessed starting at index 1. For Example:

```js
// index.js

function reverse(string){
  let reversedString = ""
  for (let index = string.length; index >= 0; index--){
    reversedString += string[index]
  }
  return reversedString
}
```

### Demonstration (\~10 min)

Next, shift to talking about Express. In client/index.html of the **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U5LA1-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LA1/U5LA1-Starter)), write a simple HTML file:

```html
<!-- client/index.html -->

<!doctype html>
<html lang="en-us">
  <head>
    <title>Hello, world! </title>
    <meta charset="utf8" />
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

Note that it needs to be in a separate folder from the app itself.

Back in index.js, write a basic static server:

```js
// index.js
import express from "express"

const app = express()
app.use(express.static("/client"))

app.listen(3000)
```

Run the server with `npm start`. Then, go to `http://localhost:3000` in a browser and see the displayed on the page. If you're running on a public network, invite students to access the page too. This is a good time to pause and collect questions.

> _**If you're running from Replit simply press the run button. It may take a while to run upon the first try.**_
>
> Instead of `http://localhost:3000`, you will see Replit's normal URL. Something like: `http://FILE-NAME.USER-NAME.repl.co`. However, in the code, continue to use port 3000.

### Diagramming (\~20 - 30 min)

Explain how a browser makes an HTTP request to a server, which is processed by Express, then receives an HTTP response. Here's one way to do this:

Write down these steps where students can reference them:

1. Browser makes HTTP GET request to `http://website.com/about.html`
2. Express receives the request
3. Express reads `about.html`
4. Express sends contents to browser
5. Browser renders file contents

Then draw a diagram of each step.

1. Start by drawing two large labeled boxes for the client and server.
2. Draw a large box inside the server box and label it "Express." Reinforce that the browser is a client and the server is a computer running an Express app with Node.
3. Next, draw 3 small labeled boxes inside the "Express" box but inside the server box for "pages/index.html", "pages/about.html", and "pages/products.html". Explain that these 3 files are on the same computer as the Express server.
4. Write the address (`http://website.com`) above the server box. Explain that this is where the server is on the internet.
5. Draw an arrow from the "Client" box to the "Server" box and label it with `GET http://website.com/about.html`
6. Draw another arrow connecting the previous arrow with the "Express" box. Explain the request goes to Express because it's listening for it.
7. Draw an arrow from "Express" to "pages/about.html" and another going from "pages/about.html" back to "Express" again, indicating that Express is reading the contents of this file.
8. Draw an arrow going from "Express" to the edge of the "Server" box, explaining that Express has generated an HTTP response and is ready to send it back to the browser.
9. Draw an arrow going from "Server" to the "Client", explaining that the HTTP response is being sent across the internet back to the browser.
10. Finally, draw a short loop from the browser back to itself, indicating that the browser is rendering the contents of the file.

Review the written steps, reinforcing how they relate to the diagram you drew. This is a good point to pause and solicit questions.

Ask the class what they think you'd get if you didn't specify a file. Guide them to the default, `index.html`. You may wish to highlight that this convention is from when the web was primarily for sharing research papers. If you didn't request a specific page from the server, it would show you an "index" that listed all pages.

Explain that this pattern--a server that delivers files on request--is called a **static file server**. Prompt the students to think about what's "static" about it (you can hint that it's the opposite of "dynamic"). Contrast file servers with things like email servers, game servers, and APIs.

Leave the written instructions up, but erase or hide the diagram. Ask the students to attempt to recreate the diagram just based on the written instructions. Use their work to identify specific misunderstandings and assess readiness to move on. You can repeat these sections as needed to build confidence in the concept of static file serving.

### Wrap-Up (\~10 min)

Facilitate a group discussion on the different roles played by clients and servers. You probably don't want to use all of these (and feel free to substitute your own), but here are some example prompts:

* What are servers for?
* What can you do without a server?
* What can you only do with a server?
* Is there any kind of data would you only store on the server? Why?
* Is there any data that you might want to keep on the client and not share with the server?
* What are the limitations of HTTP-based communication? (This primes for getting back to Sockets?)

### Extensions

Have them try to follow the official [Getting Started guide for Express](https://expressjs.com/en/starter/installing.html).

Add additional HTTP routes to the Express server. Use the documentation in [Express Routing](https://expressjs.com/en/guide/routing.html) to get create routes that respond to browser requests with \`app.get(/path-name-here) with JSON responses. Create a web page that fetches the data from your server and displays it on your page.
