import { Server } from 'socket.io';
import server from './http-server.js';

const io = new Server(server);

const users = new Set();
const channels = new Set();

io.on('connection', (socket) => {
  socket.on('sign in', (username) => {
    socket.join(username);
    socket.emit('joined', {
      existingChannels: [...channels],
      existingUsers: [...users],
    });
    socket.broadcast.emit('sign in', username);
    users.add(username);
  });
  socket.on('sign out', (username) => {
    socket.broadcast.emit('sign out', username);
    users.delete(username);
    socket.disconnect();
  });
  socket.on('dm', (message) => {
    socket.to(message.to).emit('dm', message);
  });
  socket.on('chat', (chatMessage) => {
    socket.to(chatMessage.channel).emit('chat', chatMessage);
  });
  socket.on('join', (joinRequest) => {
    socket.broadcast.emit('join', joinRequest);
    socket.join(joinRequest.channel);
  });
  socket.on('leave', (leaveRequest) => {
    socket.broadcast.emit('leave', leaveRequest);
    socket.leave(leaveRequest.channel);
  });
  socket.on('new channel', (newChannelRequest) => {
    io.emit('new channel', newChannelRequest);
    channels.add(newChannelRequest.channel);
  });
});
