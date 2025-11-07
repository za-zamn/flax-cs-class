---
description: What can real-time client/server communication add to the web?
---

# U5LA2: Intro to WebSockets

## Preface && Context

### Teacher Notes && Overview

In this lesson, you'll discuss what WebSockets are, work with some examples, lead an I do/we do/you do with an app, and have students reflect on what they can do with WebSockets. The app responds to WebSocket requests with randomized real-time data that can be displayed on a web page. The lesson is intentionally light on theory and designed to get students directly engaged with the core concepts of sockets immediately.

The biggest takeaways students should have are:

* WebSockets are used for real-time messages
* WebSocket communication is one-way (vs. request/response from HTTP)
* Unlike HTTP, socket requests can be made by the server

> NOTE: One-way here means communication is sent from `client to server` or from `server to client`. WebSockets are bi-directional; messages can be sent (POSTed) from both sides. However, you can not GET from either side.

The lesson uses plain WebSockets for simplicity. Later lessons and activities will use [socket.io](https://socket.io/), which uses all of the same ideas and syntax but adds a lot of useful features.

The second half of the lesson uses a simple exercise called Postra. Students will need to be comfortable attaching event listeners to buttons and updating DOM elements, but there are no other major skills required. There are only 3 steps to the basic exercise, and being confident with them radically simplifies learning things like rooms and broadcasting later on.

Watch out:

* Note that despite using a similar name, WebSockets are unrelated to Unix Sockets.
* You can't mix and match WebSocket and socket.io clients and servers. While identical in purpose and similar in function, they do not use compatible protocols.
* Be careful about the real-time sites you select. WebSockets aren't the only way to do real-time communication, and many sites will use something like long-polling or service workers to accomplish this, and any site's implementations can change over time. Inspect how a site works in the browser's network inspector before you show it to the class.
* It's probably not useful to go into socket servers, TCP, transports, fallbacks, or much detail on how sockets are implemented yet. Much of this will be covered in the conceptual review lesson.

### Objectives

**Students will be able to:**

* Differentiate between HTTP and socket-based requests
* Describe the benefits and limitations of using sockets
* Connect web pages to WebSocket servers

### Suggested Duration

1 period (\~45 minutes)

### NYS Standards

### Vocabulary

* **API**: Application Programming Interface, a set of rules defining how to interact with an application
* **Protocol:** A format for sending and receiving messages
* **HTTP:** HyperText Transfer Protocol, a format for sending and receiving messages over the web
* **DOM:** The browser's API for interacting with what's rendering on the page
* **DOM Event:** How the browser represents an interaction with the page. JavaScript can listen for events and respond to them with handlers.
* **WebSocket:** A browser API for sending and receiving 1-way messages with a compatible server

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| This contains an Express app that serves static HTML/CSS and runs a socket server. Most of the work is done already, but make sure you can run this server and work through the steps first. | [Postra](./U5LA1-Starter) |
| You'll need to find some relevant examples of sites that use WebSockets. As of 2023, there's a working example at [javascript.info](https://javascript.info/websocket#chat-example). Check social media, news feeds, chat sites, traffic and weather sites, stock tickers, and browser-based multiplayer games. Check the dev tools to make sure that the site still uses sockets. The network tab should show a `101 Switching Protocols` response. | |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| Exercise instructions can be read or dictated. Discussions can take place with voice or in print.  Lesson begins with priming, which is immediately activated through critical problem solving. | Students end the lesson by reflecting on how they could personally use this technology, examples are shown from a variety of sources, students discuss as a community, students work individually implementing the skill. Feedback is real-time through a realistic example. | Students listen, discuss, write, draw, and use. |

### Suggestions for Differentiation

* There's a lot of flexibility in which examples you choose to show real-time communication. You can target different interests and demographics based on the examples you demonstrate. Just make sure the example you're showing is actually using sockets rather than Service Worker or another strategy!
* Postra is a social media example, but the code can be easily modified to be collectible cards, sports scores, stocks, or other things that might stream real-time data and display the data in a card. Also, the picture used in Postra can be changed.
* You can add additional message handlers to Postra if you'd like to show sending messages too.
* Instead or in addition to having the students draw pictures, you can draw them or otherwise provide them ahead of time
* Students can drive the computer during your demonstration
* Students can work in either small groups or solo
* Students can also write out the steps they would take to accomplish the tasks
* You can have students review the MDN guides to sockets as either advance reading, as a break during the lesson, as a high-value task if they finish early, or as an after-lesson review
* You can provide a pre-recorded video of the demonstration
* If you can get the whole class in a chat room that uses WebSockets, you can have them inspect each others messages as they come through the socket using dev tools.

### Resources

* [**MDN: WebSockets API**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) - MDN's guide to the WebSocket API

### Assessments

**Formative:**

Questions:

* Q: What are WebSockets?
    A: A browser API for sending and receiving 1-way messages with a compatible server
* Q: What are two examples of how WebSockets are used?
    A: Real-time interaction, online multiplier games, chat, server notifications

Student work on Postra can be collected, as can the reflection question.

**Summative:**

Unit 5, Lab 2

Socket Final Project

## Lesson

### Do Now/Warm Up (\~5 minutes)

**Students should:**

Research: How many options can you find for real-time communication on the web?

### Real-Time Communication (\~10 - 15 minutes)

Start by reviewing HTTP, putting special attention on the request/response cycle. Ask the students how you would handle a situation that needed to be updated in real-time, like a traffic report or a weather map. Discuss the limitations and trade-offs of these approaches. This can be done as a class, solo, or in groups. Ideas you might lead them to:

* Automatically refreshing the page using something like `setInterval`
* Making an API call on an interval
  * Service Worker (Advanced): Doing this in a Service Worker and passing messages to the client
* Opening up a data stream and sending messages as packets with empty packets in between
* Long-Polling: Client makes an HTTP request, Server intentionally waits to respond until it has a message. If the client's request times out or is answered, a new one is made. This way, the server always has a way to initiate a message to the client.

Introduce the idea of WebSockets; a way for clients and servers to send each other messages over a persistent connection. Pull up some examples of WebSockets on the web. Open up your browser and examine the socket messages using the Network tab and filtering for WebSockets connections. Successful connections will have return a `101 Switching Protocols` response code. You can examine messages being sent over that socket in a nested pane (note that the `ws` protocol sometimes sends binary buffers rather than strings). You can do this as a class and/or have students do it on their own.

### I Do (\~5 - 10 minutes)

Using the [starter code](./U5LA1-Starter), demonstrate how to create a WebSocket connection, listen for messages, and use data from them.

Start by writing out all of the steps you'll follow:

1. Get the DOM element for the `.likes` element
  * `const element = document.querySelector(".likes")`
2. Create a new WebSocket that connects to the embedded socket server
  * `const ws = new WebSocket(`wss://${location.host}/socket-server`)`
3. Attach a `message` event listener to the WebSocket
  * `ws.addEventListener("message", (message) => { })`
4. In its event handler, update the DOM element
  * `element.textContent = message.data`

Demonstrate implementing these steps in the [client/script.js](./U5LA1-Starter/client/script.js), discussing what's happening at each step. Your finished code should look something like this:

```js
// client/script.js
const element = document.querySelector(".likes")
const ws = new WebSocket(`wss://${location.host}/socket-server`)

ws.addEventListener("message", (message) => {
  element.textContent = message.data
})
```

This is a great time to pause and collect questions. Have the students draw a sequence diagram or other picture representing the browser connecting to the socket, receiving messages on it, and updating the DOM. It's OK if they reference the written steps for this.

### We Do (\~5 minutes)

Clear the code you wrote in `client/script.js`, rollback your commit, or make a copy of the code to start over. Have students guide you through the same process without referencing the written steps. This can be either done by round-robin, volunteer, or submitting written responses. If they fly through this, it's OK to do it a few times. More advanced WebSockets topics will be much easier to understand if the pattern of making a connection and listening for messages is solid.

As a reminder, these steps are:

1. Get the DOM element for the `.likes` element
  * `const element = document.querySelector(".likes")`
2. Create a new WebSocket that connects to the embedded socket server
  * `const ws = new WebSocket(`wss://${location.host}/socket-server`)`
3. Attach a `message` event listener to the WebSocket
  * `ws.addEventListener("message", (message) => { })`
4. In its event handler, update the DOM element
  * `element.textContent = message.data`

Your finished code should look something like this:

```js
const element = document.querySelector(".likes")
const ws = new WebSocket(`wss://${location.host}/socket-server`)

ws.addEventListener("message", (message) => {
  element.textContent = message.data
})
```

### You Do (\~5 - 10 minutes)

Have students complete the Postra app themselves:

1. Get the DOM element for the `.likes` element
2. Create a new WebSocket that connects to the embedded socket server
3. Attach a `message` event listener to the WebSocket
4. In its event handler, update the DOM element

Be prepared to debug:

* Bad selectors
* Incorrect template strings
* Listener syntax
* Handler function syntax
* Listening for the `"message"` string
* Regular DOM manipulation issues

If they move quickly, encourage them to attempt the stretch challenge.

### Wrap Up (\~7 minutes)

Everybody Writes (3 minutes): "What would you build with sockets?"

Sample a few students and briefly discuss.

You can tease the lab by mentioning that there are tools that make it simple to broadcast messages to other connected clients and even have things like shared channels. You can also mention that they'll be building a chatroom.

### Extensions

**For students who move through this quickly:**

From the `script.js`, If you send the message `"all"` to the socket server, you'll upgrade the feed from the socket server from one count to an array of counts. 

1. Copy the existing HTML to create four `.card` divs. Use any name, image, and message you like. In the same file, give each `<span>` an `id` of `"A"`, `"B"`, `"C"`, and `"D"` respectively. Read the response to get the data schema.
2. The socket (in `app.js`) is already configured to send you 4 data points when you send it the string “all” using `ws.send(“all”)`. However, if you try and send “all” before the socket connection opens, you will get an error. Try to find a solution on your own before coming here for 1 way to do it. HINT: use `ws.send()` in both files to communicate back and forth between files.
    <details>
    <summary>See Answer</summary>

    - in `app.js`, use `ws.send("connected")` in the `on.("connection")` function. 
    - in `client/script.js` listen for "connected", `ws.addEventListener("connected")` before sending "all" back to the `app.js`.
    </details>
    <br>

3. Use `.forEach()` to iterate through the data and update each of the 4 cards.
4. Display the cards in a 2x2 grid by styling it in the `client/index.css`

---

Follow the exercise instructions with tasks instead of steps:

Using `client/script.js`:

1. Connect to the WebSocket server at `/socket-server`. Hint: You must set the full URL (including the WebSocket protocol and host) which you can get with `` `wss://${window.location.host}/socket-server` ``
2. Every 2 seconds, the socket will receive a message with an updated like count. Add an event listener for it.
3. In its event handler, update the content of the `.likes` span with the message data.
