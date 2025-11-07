import app from './app.js';

const PORT = process.env.PORT || 3000;

const httpServer = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${PORT}`);
});

export default httpServer;
