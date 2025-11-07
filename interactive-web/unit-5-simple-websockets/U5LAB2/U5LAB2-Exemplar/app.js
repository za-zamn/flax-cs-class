import { Server } from 'socket.io';
import { createServer } from 'http';
import express from 'express';

export const app = express();
app.use(express.static('./client'));
const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
	socket.on('join', (screenName) => {
		socket.screenName = screenName;
		socket.broadcast.emit('join', screenName);
	});
	socket.on('chat', ({ screenName, message }) => {
		io.emit('chat', { screenName, message });
	});
	socket.on('disconnecting', () => {
		if (socket.screenName) {
			socket.broadcast.emit('leave', socket.screenName);
		}
	});
});

export default server;
