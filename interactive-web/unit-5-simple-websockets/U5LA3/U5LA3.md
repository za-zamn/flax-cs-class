---
description: What role do servers play in socket communication?
---

# U5LA3: Socket Servers

## Preface && Context

### Teacher Notes && Overview

This lesson is about server-side socket concepts. It assumes students can set up an Express server and understand client-side Socket concepts and reuses as many concepts as possible from the client-side Sockets lesson. This lesson has a bunch of different modalities and should be pretty active. The following lab goes into further depth with Socket patterns, so it's OK to limit this one to basic emitting and broadcasting. Conceptually, the most important thing students can take away is that the client only communicates with the server, not directly with other clients.

Note that a lot of the code will look similar to the client-side Socket code. Socket server code looks similar since both the client and the server can initiate communication, but the server is more complicated since it manages communication for all clients. You may want to compare and contrast this with students as well.

### Objectives

**Students will be able to:**

* Set up socket servers with Socket.IO
* Listen for socket client events
* Broadcast socket messages to clients

### Suggested Duration

\~1-2 Periods (\~45 - 90 min)

### NYS Standards

### Vocabulary

* **Socket.IO:** A client and server library that adds features to WebSocket communication
* **Socket Server:** A server that listens for WebSocket connections and relays messages between them in real-time
* **Emit:** Send a message
* **Broadcast:** Exclude the sender when emitting
* **Socket.IO Event:** A way to label socket messages
* **Event Handler:** A function that's called when a socket message is received

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| This might useful to print or otherwise have visible for students to reference during the lesson | Module Quick Reference, see resources |
| This might useful to print or otherwise have visible for students to reference during the lesson | Socket.IO Quick Reference, see resources |
| The diagramming exercise has long instructions that are worth printing or sending for students to reference | See diagramming exercise below |
| Code used in the class exercise | [Starter](./U5LA3-Starter) and [Exemplar](./U5LA3-Exemplar) |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| Exercise instructions can be read or dictated. Discussions can take place with voice or in print.  Lesson begins with priming, then gets hands-on, and has exploratory elements. | The lesson contains discussion, coding activities, and drawing. | Students listen, discuss, write, draw, analyze, and explore. |

### Suggestions for Differentiation

* Question submission for the Do Now can be done ahead of time.
* Students can drive for the rest of the class during the code along
* The parts where students connect to your server are optional
* The Socket.IO events discussion can go in as much depth as you'd like, this is a great opportunity to go deep
* You can also simulate having multiple clients connect to your server by using the example in the extension
* The "Explore" section can be directed, but it's a great opportunity to tap into prior learning from the client lesson and lab
* The diagramming is really about uncovering any misunderstanding regarding the ways socket clients and servers can send messages. It can also been done in written form, acted out, matched, or anything that helps identify broken mental models
* The code analysis questions can be done orally or matched, but it's worth being tough about precision in language on this

### Resources

* [**Express**](https://expressjs.com/)
* [**Socket.IO**](https://socket.io/)
* [**Socket.IO Guide**](https://socket.io/docs/v4/)
* [**Socket.IO Official Emit Cheatsheet**](https://socket.io/docs/v4/emit-cheatsheet/)
* [**Socket.IO Server API**](https://socket.io/docs/v4/server-api/)

#### Module Quick Reference

```javascript
import SomeLibraryDefaultExport from "some-library"
import { SomeLibraryNamedExport } from "some-library"

import SomeFileDefaultExport from "./some-file"
import { someFileNamedExport } from "./some-file"
```

#### Socket.IO Quick Reference

These send a message from the server to one or more connected clients:

| Method | Recipient |
| --- | --- |
| `socket.emit("some event", "Some value")` | Sender |
| `socket.to("some room").emit("some event", "Some value")` | Everyone in a room |
| `socket.broadcast.emit("sign on", "Some value")` | Everyone except sender |
| `io.emit("some event", "Some value")` | Everyone (note the `io`) |

These change something about the socket:

| Method | What it does |
| --- | --- |
| `socket.join("some room")` | Join a room |
| `socket.leave("some room")` | Leave a room |
| `socket.disconnect()` | Close a socket connection |

### Assessments

**Formative:**

Explain each line of these Socket.IO servers:

```javascript
const io = new Server(server)
io.on("connection", socket => {
  socket.on("some event", (payload) => {
    console.log(payload)
  })
})
```

---

```javascript
const io = new Server(server)
io.on("connection", socket => {
  socket.on("dm", (message) => {
    socket.broadcast.emit("dm", message)
  })
})
```

---

Draw 4 diagrams of how clients and servers communicate over sockets. Each diagram should include 1 server and 4 clients. The diagrams are simple boxes and arrows and can be done on paper, whiteboards, or any simple graphics tool.

1. **Emit To All**: 1 client emitting a message to every client
  * 1 message from a client to the server (clients can't communicate directly with each other)
  * 4 messages from the server every client (including the sender)
2. **Broadcasting**: 1 client broadcasting a message to the other 3
  * 1 message from a client to the server (clients can't communicate directly with each other)
  * 3 messages from the server to the other clients (not back to the original sender)
3. **Emit To Sender**: 1 client sending a message to the server and getting a response
  * 1 message from a client to the server
  * 1 message from the server to the same client
4. **DMing**: 1 client sending a message to 1 other client
  * 1 message from a client to the server
  * 1 message from the server to a different client

---

Additionally, the final student code from the exercise can be used as a formative assessment.

**Summative:**

Unit 5, Socket Lab 3

Socket Final Project (End of Unit Project)

## Lesson

### Do Now/Warm Up (\~5 - 15 min)

Ask students to look at the [final code for the server exercise](./U5LA3-Exemplar/index.js). Have them write a list of things they don't recognize or understand about the code and submit them to you. Spend some time extracting themes from the questions to discuss.

Explain that client-side sockets are comparatively simple; they can connect, listen, and send messages. Socket.IO servers can do those things as well as manage rooms and broadcast messages to a configurable subset of clients. They're simple to add to an Express server and can coexist with other Express routes and even other Socket.IO servers. You may also wish to review the difference between WebSockets and Socket.IO.

### Code Along (\~10 min)

Open the [starter code](./U5LA3-Exemplar) containing a basic Express app. The code for the server is in [`index.js`](./U5LA3-Exemplar/index.js), while the code for the client is in [`client/index.js`](./U5LA3-Exemplar/client/index.js). Explore the existing code individually and as a class.

Then, invite the class to follow along with you as you demonstrate.

1. Add an import for the `Server` class from `socket.io`:

```javascript
// index.js
import { Server } from "socket.io"
```

2. Change the listen function in `index.js` to return a value:

```javascript
// index.js
const server = app.listen(PORT)
```

3. Initialize a Socket.IO server:

```javascript
// index.js
const io = new Socket(server)
```

4. Listen for connections on the Socket.IO server:

```javascript
// index.js
io.on("connection", socket => {
})
```

5. Log every incoming connection:

```javascript
// index.js
console.log(`Socket ${socket.id} connected`)
```

The final file should look like this:

```javascript
// index.js
import express from "express";
import { Server } from "socket.io";

const app = express()
app.use(express.static("client"))

const port = process.env.PORT || 3000;
const server = app.listen(port);

const io = new Server(server)
io.on("connection", socket => {
  console.log(`Socket ${socket.id} connected`)
})
```

6. Run the server and load the client in the browser. Watch the connection get logged to the server console.

Next, give every student the public URL of your server and ask them to pass it to their `io` function in `client/index.js` to connect to it.

```javascript
// client/index.js
const socket = io("https://your-url-goes-here")
```

Show all of the different sockets connecting to your computer.

### Understanding Socket.IO Events (\~10 - 15 min)

Discuss the following:

Every time a client connects to the socket server, the `connection` event fires. The handler for that event is where response handlers for client events go:

```javascript
io.on("connection", (socket) => {
  socket.on("some event", (payload) => {
  })
  socket.on("another event", (payload) => {
  })
  socket.on("yet another event", (payload) => {
  })
})
```

`io` is the Socket.IO server. The connection event handler is called with `socket`, an instance of a single connected client.
Each socket event handler is called with `payload`, the optional contents of the socket event. Payloads can be any data type (including objects) and should be renamed to more accurately reflect the specific contents as needed.

Note the nested event handlers: The outer `"connection"` event handler wraps every inner custom socket event handler. Conceptually what's happening is when a client establishes a connection with the socket server, Socket.IO is registering all your custom events on the connection object it creates.

Also note that while socket event handlers are often used to send messages to clients, they can also do anything else on the server such as updating a database.

As a check for understanding, you can ask students to explain each line of a Socket.IO server:

```javascript
const io = new Server(server)
io.on("connection", socket => {
  socket.on("some event", (payload) => {
    console.log(payload)
  })
})
```

Answers:

```javascript
const io = new Server(server) // Create the Socket.IO server
io.on("connection", socket => { // When the server gets a socket connection from a client
  socket.on("some event", (payload) => { // Attach an event listener to the socket for the "some event" event
    console.log(payload) // Log its payload to the server console
  })
})
```

### Explore (\~10 min)

Have the students change the connection back to their own computer by deleting the argument:

```javascript
// client/index.js
const socket = io()
```

Ask them to apply what they know about client-side sockets to attempt to listen for events and emit responses on the server. You can give them this example as a reminder:

```javascript
socket.emit("some event", "some message")
socket.on("some event", message => {
  console.log(message)
})
```

Ask students to modify the server files in `index.js` and client files `client/index.js` to see if they can successfully log messages send over sockets. Afterward, review an example as a class:

```javascript
// index.js
io.on("connection", (socket) => {
  socket.on("chat", (message) => {
    console.log(message)
  })
})
```

```javascript
// client/index.js
const socket = io()
socket.on("connect", () => {
  socket.emit("chat", "Hello, world!")
})
```

### Broadcasting (\~5 min)

To broadcast a message to every other connected client, use `socket.broadcast.emit()`:

```javascript
io.on("connection", (socket) => { 					// When a client connects to this server
  socket.on("chat", (message) => { 					// Listen for "chat" events
    socket.broadcast.emit("chat", message) 	// When one occurs, send the "chat" event and the `message` that was sent with it to every client except this one
  })
})
```

This is a really common way for servers to send messages to clients. The original sender is left out because they likely already updated their local state before they sent the event. If there's data generated by the server that even the sender will need, call `emit` on `io` instead of `socket` and leave out `.broadcast`:

```javascript
io.on("connection", (socket) => { 								// When a client connects to this server
  socket.on("announce", (message) => { 						// Listen for "announce" events
    io.emit("announce-confirmation", message) 		// Send the "announce-confirmation" event and the message from the "announce" event to every connected client
  })
})
```

### Broadcasting Example (\~10 min)

So far, everything we've done has involved connecting to the same server that's hosting the website. To connect to someone else's server, pass the URL of the server into the `io()` call on the client. Get the URL from your Replit browser, which should look something like this: `https://repl-name.username.repl.run/`

Sent the students your URL and ask them to reconnect to your server by changing the URL in `client/index.js` again:

```javascript
// client/index.js
const socket = io("https://teachers-url-goes-here") // Connects the client to this server instead of yours
```

Have students send you messages by updating their `client/index.js`:

```javascript
// client/index.js
const socket = io("https://teachers-url-goes-here") // Connects the client to this server instead of yours
socket.on("connect", () => { 					// After it finishes connecting
  socket.emit("chat", "Some message") // Send this message
})
```

Log messages to your server to show them coming in real-time and rebroadcast them to the rest of the connected sockets:

```javascript
// index.js
io.on("connection", (socket) => { 					// When a student connects
  socket.on("chat", (message) => { 					// Listen for their "chat" messages
    console.log(message) 										// Log it to your console
    socket.broadcast.emit("chat", message) 	// Rebroadcast it to everyone except the sender
  })
})
```

This may take a while to get everyone through it. When it's set up correctly, both you and the students should start seeing each other's messages on their apps.

### Diagram communication (\~20 min)

Ask the students to draw 4 diagrams of how clients and servers communicate over sockets. Each diagram should include 1 server and 4 clients. The diagrams are simple boxes and arrows and can be done on paper, whiteboards, or any simple graphics tool.

1. **Emit To All**: 1 client emitting a message to every client
  * 1 message from a client to the server (clients can't communicate directly with each other)
  * 4 messages from the server every client (including the sender)
2. **Broadcasting**: 1 client broadcasting a message to the other 3
  * 1 message from a client to the server (clients can't communicate directly with each other)
  * 3 messages from the server to the other clients (not back to the original sender)
3. **Emit To Sender**: 1 client sending a message to the server and getting a response
  * 1 message from a client to the server
  * 1 message from the server to the same client
4. **DMing**: 1 client sending a message to 1 other client
  * 1 message from a client to the server
  * 1 message from the server to a different client

You can use this as a check for understanding. Review answers as a class and remediate as needed.

### Wrap Up (\~5 min)

Look at the following code:

```javascript
const io = new Server(server)
io.on("connection", socket => {
  socket.on("dm", (message) => {
    socket.broadcast.emit("dm", message)
  })
})
```

Ask students to write a description of what each of the first 4 lines are doing. Collect this as an exit ticket.

```javascript
const io = new Server(server) // Create the Socket.IO server
io.on("connection", socket => { // When the server gets a socket connection from a client
  socket.on("dm", (message) => { // Attach an event listener to the socket for the "dm" event
    socket.broadcast.emit("dm", message) // Send a "dm" event to every socket except this one
  })
})
```

### Extensions

In the `client/index.js` files, you can create additional Socket.IO clients like so:

```javascript
const socketA = io({ forceNew: true })
const socketB = io({ forceNew: true })

socketA.on("connect", () => {
  socketB.on("connect", () => {
    socketA.emit("chat", "Message sent from socket A")
    socketB.on("chat", (message) => {
      console.log(message) // Socket B logs any "chat" event's message sent from the server
    })
    // Any other socket handlers here
  });
});
```

Referring to the Socket.IO Quick Reference, write a simulated chat in your client and server. Have clients send each other messages, broadcast, and emit to all.
