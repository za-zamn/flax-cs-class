# 🗃 U5LA2 Mini Project: Simple Sockets Lab

## Teacher Notes

This lab has students wiring up sockets and some DOM handlers to an existing client and server in a chat room app.

Lab overview:

1. Connect to the socket server
2. Join the chat room
3. Send messages to the chat room
4. Show chat messages
5. (Extension) Add join and leave notices

This lab uses Socket.io instead of WebSockets. They're conceptually similar, but Socket.io offers a lot more features and is commonly used in production socket apps. Some differences:

* WebSockets are a built-in browser API that Node servers can communicate with
* Socket.io is a third-party library that adds some useful features. It's delivered as two separate client and server Node libraries that primarily communicate over WebSockets.

This is really all you or the students need to know about the distinction between WebSockets and Socket.io. If it's useful, these are some further distinctions:

* Socket.io is a richer, higher-level protocol than WebSockets, although it has similar syntax. This means that a Socket.io client is not compatible with pure `ws` Node server and a WebSocket client is not compatible with a Socket.io server.
* WebSockets don't have a built-in way to categorize messages, but Socket.io has namespaces, rooms, and custom events
* WebSockets don't have a built-in way to control broadcasting, but Socket.io has dedicated utilities for sending to one, all, or a group of sockets
* WebSockets always use pure TCP socket messages, but Socket.io attempts to do that but seamlessly falls back to long-polling HTTP as needed

**Students should utilize the Starter Code (**[**repl.it**](https://replit.com/@qrtnycs4all/U5LA2-Mini-Project-Starter-Code) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LAB2/U5LAB2-Starter)**) to begin this project.**

## Prompt

Are you ready to build a chat room? This app, MESG, works just like any other web-based chat tools you've used but needs your help. The interface and layout is already built, but you need to wire up the interface to the socket server.

This lab uses Socket.io, which is a library for making common real-time operations easier. It's built on top of `WebSocket` and uses similar syntax.

Note that in this lab, DOM elements are prefixed with a `$`. There's nothing special about this character, it's just an easy way to quickly distinguish variables that contain DOM elements. For example:

```javascript
const $input = document.querySelector("input#first-name")
const input = $input.value
```

The lab also contains several included functions in `client/utilities.js` of the **Starter Code (**[**repl.it**](https://replit.com/@qrtnycs4all/U5LA2-Mini-Project-Starter-Code) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LAB2/U5LAB2-Starter)**)**that you can use just by calling them. You won't need to modify these at all, but you can look at them if you're curious how they work.

## Directions

All of your code will be written in `client/script.js of the` **Starter Code (**[**repl.it**](https://replit.com/@qrtnycs4all/U5LA2-Mini-Project-Starter-Code) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LAB2/U5LAB2-Starter)**)**:

### Connect to the socket server

Socket.io is already available in the app as a function called `io`. **Call it to connect to the provided socket server and save the connection in a variable called `socket`**. It should look like this:

```javascript
const socket = io()
```

Check the network tab of the browser's developer tools to confirm that the connection was made before moving on. You should see 1 or more successful requests to `/socket.io` on your server.

### Join the chat room

You can send a message on the socket by calling `.emit()` on it. `.emit()` is called with a name for the event you're firing as the first argument and an optional data payload as the second. For example, to send a greeting over a socket you might call `socket.emit("greeting", "Aloha!")`. More complex data can be sent in an object:

```js
socket.emit("direct message", {
  to: "some-username",
  message: "Hello, world!"
})
```

The events can be named anything you want and represent a category of messages in your app.

**Add the following to `client/script.js`**:

1. Add an event listener to the `"submit"` event of `$joinForm`
2. Prevent the default browser behavior with `event.preventDefault()`
3. Get the user's screen name by retrieving `screen-name` from the form with `FormData`, `event.target["screen-name"]` or other method for extracting form data
4. Save the screen name to the app by passing it to `registerUser` (an included function)
5. Emit a `"join"` event on the socket with the screen name with something like `socket.emit("join", "some-name")`

<details>

<summary>Solution</summary>

```js
$joinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const screenName = formData.get('screen-name');

  registerUser(screenName);

  socket.emit('join', screenName);
});
```

</details>

### Send messages to the chat room

Sending chat messages works similarly to emitting `"join"` events:

```js
socket.emit("join", "some-name")
socket.emit("chat", {
  screenName: "some-name",
  message: "Hello, world!",
})
```

**Add the following to** [**`client/script.js`**](U5LAB1-Starter/client/script.js):

1. Add an event listener for the submit event on the `$newMessageForm` element
2. Prevent the default browser behavior
3. Get the chat message by retrieving `"message"` from the form with `event.target["message"].value` or other technique for extracting form data.
4. Reset the form by calling the included function `resetNewMessageForm()`
5. Get the user's screen name by calling the included `getUser()` function with no arguments and accessing the `screenName` property of the object it returns
6. Emit a `chat` event on the socket with an object containing the `screenName` and the `message` you got from the form

<details>

<summary>Solution</summary>

```js
$newMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const message = formData.get('message');

  resetNewMessageForm();

  const { screenName } = getUser();
  socket.emit('chat', { screenName, message });
});
```

</details>

Note that Socket.io clients can't actually send each other messages directly; they must go through a server they're both connected to. In this case, when this socket emits the `"chat"` event, the server (which is listening for it with its own `.on()` handler in `app.js`) emits its own `"chat"` event on every connected socket. It could have sent the message right back to that original socket, sent it to all connected sockets, sent it to some subset of them, sent a different message entirely, or done nothing at all.

### Show chat messages

Next, listen for new messages coming in and display them on the page as you get them.

To listen for an event on a socket, call the the `.on()` method of a socket with an event name and a handler, just like `.addEventListener()`:

```js
socket.on("some event", (someData) => {
  // Do something in response to the message
})
```

The handler will be called with whatever was sent in the matching `emit`. Note the slight syntax difference: DOM events use `element.addEventListener("some event", someHandler)`, while both WebSocket and socket.io events use `socket.on("some event", someHandler)`.

**Add the following to `client/script.js`**:

1. Add an event listener to the socket for the `chat` event
2. Extract the `screenName` and `message` values out of the object in the handler
3. Call the included `getUser` function with the screen name and extract the `colorClass` out of the returned user object (such as `const colorClass = user.colorClass`)
4. Save a formatted version of the message into a new variable after calling `.trim()` on it
5. Create a new chat message DOM element by calling the included `createMessage` function with `"chat-message"` as the first argument and this HTML string as the second:

```js
`<address class="${colorClass}">
  ${screenName || 'Unknown user'}
</address> <pre>${formattedMessage}</pre>`
```

6. Append the chat message DOM element you created to the `$message` element
7. Call the `scrollTo` method of the `$messages` object. Pass it an object with `top` set to `$messages.scrollHeight` and `behavior` set to `"smooth"`

Make sure your variables line up with the ones in the template and that you called `.on` on the socket instead of `.addEventListener()`.

<details>

<summary>Solution</summary>

```js
socket.on('chat', ({ screenName, message }) => {
  const { colorClass } = getUser(screenName);
  const formattedMessage = message.trim();
  const $chatMessage = createMessage(
    'chat-message',
    `<address class="${colorClass}">
      ${screenName || 'Unknown user'}
    </address> <pre>${formattedMessage}</pre>`,
  );
  $messages.append($chatMessage);

  $messages.scrollTo({ top: $messages.scrollHeight, behavior: 'smooth' });
});
```

</details>

## Exemplar

You can explore the **finished project (**[**repl.it**](https://replit.com/@qrtnycs4all/U5LA2-MINI-PROJECT-EXEMPLAR) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-5-simple-websockets/U5LAB2/U5LAB2-Exemplar)**)** for reference.

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>Two working socket clients sending messages</p></figcaption></figure>

## Culturally Responsive Best Practices

* If the students are unfamiliar with chat rooms, show them some examples relevant to them, such as Facebook Messenger, Discord, Slack, or even chatbots from commercial websites. You may want to show them historical examples, such as AOL instant messenger, ICQ, or IRC. You may wish to compare/contrast these tools with contemporary methods of online communication.
* You may wish to talk about the concept of online identities as being distinct from real identities, and how screen names have helped people from marginalized groups protect themselves while still establishing a consistent presence and engaging in a community. Conversely, discuss how people have used this kind of anonymity to hurt others without consequences. This app doesn't do anything to permanently register or protect screen names. You may want to lead a discussion on what the server would have to do to prevent someone from impersonating you, or how difficult it to tell whether the server is logging or sharing your messages with others.

## Extra Help

* [Socket.io](https://socket.io/)
* [Socket.io chat room tutorial](https://socket.io/get-started/chat)
* [How to initialize a Socket.io client](https://socket.io/docs/v4/client-initialization/)
* [Socket.io client usage guide](https://socket.io/docs/v4/client-socket-instance/)
* [Socket.io client API documentation](https://socket.io/docs/v4/client-api/)
* [Notes on broadcasting from the server](https://socket.io/docs/v4/broadcasting-events/) - Useful in the medium extension

## Extensions

### Mild

Notify the chat room when someone joins or leaves. The socket will emit `join` and `leave` events when this happens, each of which will send the screen name of the person joining or leaving. Use the screen name to build a message string, such as:

```js
`${screenName || 'Unknown user'} joined the chat`,
`${screenName || 'Unknown user'} has left the chat`
```

Create a new message object by calling `createMessage` with either `join-notice` or `leave-notice` as the first argument and your message string as the second. Append this message object to the provided `$messages` variable containing the messages list DOM element.

### Medium

Implement "optimistic rendering." Right now, when you send a message, it displays on your screen after it's sent back from the server as part of its `chat` event. You can improve the perceived performance of the chat room by add your own messages to the DOM immediately. This also requires the server to send the event to everyone except the original sender.

* You can reuse the `createMessage` function you're using in the `chat` handler
* You'll need to modify the server code in `app.js` to not repeat the `"chat"` event to its original sender. This is called "broadcasting", and the `"join"` and `"leave"` handlers already work this way. See if you can adapt the code in the `"chat"` handler to do this as well.

***

You can test sockets either by going to your app in multiple browser tabs or by connecting to someone else's server instead of yours. If `io` is given no arguments, it will attempt to connect to a socket on the same server that's hosting the web page. If you give it another address, such as `io(https://some-server.com/some-path)`, it will connect to that server instead. If you're working with a partner, try connecting to their server instead of yours!

### Spicy

Create a notice that a particular user is typing and display it under the chat window. Hints:

* You'll need to listen for the `input` event on the textarea element
* Add a container to the HTML in `client/index.html` for the notice
* This will require an additional event handler on the server, modify the code in `app.js` as needed
* You'll need a way of stopping the notice when the message is sent _or_ deleted

## Reflection Questions

* Compare and contrast socket event handlers with DOM event handlers.
* Come up with a scenario that would benefit from sockets and come up with names for 3 socket events you might see in it.
* On the server, Socket.io has a lot of tools for managing who messages are sent to. On the other hand, Socket.io clients can only make simple `.emit()` calls. Why is this?
