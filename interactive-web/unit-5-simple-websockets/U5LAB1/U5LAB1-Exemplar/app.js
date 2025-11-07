import express from "express"

const app = express()

app.use(express.static("client"))

export default app
