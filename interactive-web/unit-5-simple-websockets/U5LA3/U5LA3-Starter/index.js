import express from 'express';

const app = express();
app.use(express.static('client'));

const port = process.env.PORT || 3000;
app.listen(port);
