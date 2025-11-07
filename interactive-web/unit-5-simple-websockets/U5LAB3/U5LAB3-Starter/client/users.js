export const users = ['Ashley', 'Bo', 'Caitlin']
  .map((username) => ({
    username,
    socket: io({
      forceNew: true,
    }),
    channels: new Set(),
    users: new Set(),
    chatMessages: [],
    socketMessages: [],
  }));

let currentUser = users[0];

export function setCurrentUser(username) {
  currentUser = users.find((user) => user.username === username);
}

export function getCurrentUser() {
  return currentUser;
}
