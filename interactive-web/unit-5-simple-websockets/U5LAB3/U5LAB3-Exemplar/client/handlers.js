export default function attachHandlers(user) {
  const { socket } = user;

  socket.on('joined', ({ existingChannels, existingUsers }) => {
    existingChannels.forEach((existingChannel) => user.channels.add(existingChannel));
    existingUsers.forEach((existingUser) => user.users.add(existingUser));
  });

  socket.on('sign in', (username) => {
    user.chatMessages.push({ type: 'user-sign-in', payload: username });
    user.users.add(username);
  });

  socket.on('sign out', (username) => {
    user.chatMessages.push({ type: 'user-sign-out', payload: username });
    user.users.delete(username);
  });

  socket.on('dm', (message) => {
    user.chatMessages.push({ type: 'dm', payload: message });
  });

  socket.on('chat', (chatMessage) => {
    user.chatMessages.push({ type: 'chat-message', payload: chatMessage });
  });

  socket.on('new channel', (newChannelRequest) => {
    user.chatMessages.push({ type: 'channel-notice', payload: newChannelRequest });
    user.channels.add(newChannelRequest.channel);
  });

  socket.on('join', (joinRequest) => {
    user.chatMessages.push({ type: 'join-notice', payload: joinRequest });
  });

  socket.on('leave', (leaveRequest) => {
    user.chatMessages.push({ type: 'leave-notice', payload: leaveRequest });
  });

  socket.on('disconnect', () => {
    user.channels.clear();
    user.users.clear();
  });

  socket.onAny((event, message) => {
    user.socketMessages.push({ type: 'socket-message', payload: { event, message } });
  });
}
