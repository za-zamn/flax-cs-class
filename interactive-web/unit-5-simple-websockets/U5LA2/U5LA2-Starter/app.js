import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import express from 'express';

import { formatCount, addNoise } from './utilities.js';

export const app = express();
app.use(express.static('./client'));
const server = createServer(app);

const wss = new WebSocketServer({ server, path: '/socket-server' });

let count = 12; // Initial seed value
setInterval(() => {
  count += Math.floor(Math.random() * 10) * 1713; // Random number to increment by
}, 2000);

/** When a connections is made... */
wss.on('connection', (ws) => {

  /** Send Likes every 2 seconds */
  const singleInterval = setInterval(() => {
    const formattedCount = formatCount(count);
    ws.send(formattedCount);        // This part sends the likes
  }, 2000);
  wss.on('close', () => {
    clearInterval(singleInterval);
  });

  /** Listen for a message from client */
  ws.on('message', (buffer) => {
    const message = buffer.toString();
    if (message !== 'all') return;

    // NOTE: This stuff vv only happens if message is "all"
    clearInterval(singleInterval);

    /** Send 4 different random like counts every 2 seconds */
    const multipleInterval = setInterval(() => {
      // This part sends the data as an object
      ws.send(JSON.stringify({
        data: ['A', 'B', 'C', 'D'].map((id) => ({
          id,
          count: addNoise(count),
        })),
      }));
    }, 2000);

    wss.on('close', () => {
      clearInterval(multipleInterval);
    });
  });
});

export default server;
