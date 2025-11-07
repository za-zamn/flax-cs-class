console.log("client/index.js loaded")

const socket = io();

socket.on("connect", () => {
  socket.emit("chat", "Hello, world!")
})

socket.on("chat", (message) => {
  console.log(`You got a message from the server: ${message}`)
})
