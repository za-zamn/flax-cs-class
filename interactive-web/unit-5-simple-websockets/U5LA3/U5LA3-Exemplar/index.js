import express from "express";
import { Server } from "socket.io";

const app = express()
app.use(express.static("client"))

const port = process.env.PORT || 3000;
const server = app.listen(port);

const io = new Server(server)
io.on("connection", socket => {
  console.log(`Socket ${socket.id} connected`)
  socket.emit("chat", `Socket ${socket.id} connected`)

  socket.on("chat", (message) => {
    console.log(`Socket ${socket.id} sent ${message}`)
    socket.broadcast.emit("chat", message)
  })
})
