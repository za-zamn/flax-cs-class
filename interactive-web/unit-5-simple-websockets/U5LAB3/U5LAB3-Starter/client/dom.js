import { users, getCurrentUser, setCurrentUser } from './users.js';
import attachHandlers from './handlers.js';
import {
  renderTo, createButton, createListItem, attachListenerToButton,
} from './utilities.js';

users.forEach(attachHandlers);

const FORMATS = {
  channel: (channel) => channel,
  user: (user) => user,
  'socket-message': ({ event, message }) => `
    ${event}: ${JSON.stringify(message, null, 2)}
  `.trim(),
  'user-sign-in': (username) => `${username} signed in`,
  'user-sign-out': (username) => `${username} signed out`,
  'channel-notice': ({ username, channel }) => `${username} created ${channel}`,
  'join-notice': ({ username, channel }) => `
    ${username || 'Unknown user'} joined ${channel}
  `.trim(),
  'leave-notice': ({ username, channel }) => `
    ${username || 'Unknown user'} left ${channel}
  `.trim(),
  'chat-message': ({ from, channel, message }) => `
    <span class="channel-name">
      ${channel}
      <address>${from || 'Unknown user'}:</address>
    </span>
    <pre>${message.trim()}</pre>
  `,
  dm: ({ from, message }) => `
    <address>${from || 'Unknown user'}:</address>
    <pre>${message.trim()}</pre>
  `,
};

const $ = {
  logs: document.querySelectorAll('.log'),
  channels: document.querySelector('#channels ol'),
  users: document.querySelector('#user-list ol'),
  chatMessages: document.querySelector('#chat-messages ol'),
  socketMessages: document.querySelector('#socket-messages ol'),
};

function getUserState(user) {
  return [{
    list: [...user.channels].map((channel) => ({
      type: 'channel',
      payload: channel,
    })),
    element: $.channels,
    stateful: true,
  }, {
    list: [...user.users].map((existingUser) => ({
      type: 'user',
      payload: existingUser,
    })),
    element: $.users,
    stateful: true,
  }, {
    list: user.chatMessages,
    element: $.chatMessages,
  }, {
    list: user.socketMessages,
    element: $.socketMessages,
  }];
}

export function updateWindows(user) {
  clearLogs();

  getUserState(user).forEach(({ list, element, stateful }) => {
    if (stateful) element.innerHTML = '';

    list
      .map((item) => {
        const { type, payload } = item;
        const message = FORMATS[type](payload);
        return createListItem(message, type);
      }).forEach(renderTo(element));
  });
}

export function renderUserButtons() {
  const $users = document.querySelector('#users');

  users
    .map((user) => user.username)
    .map(createButton)
    .map(($button) => attachListenerToButton($button, updateUser))
    .map(($button) => createListItem($button, 'user'))
    .forEach(renderTo($users));

  const { username } = getCurrentUser();
  updateDisplayedUser(username);
}

export function updateUser(username) {
  setCurrentUser(username);
  updateDisplayedUser(username);

  const currentUser = getCurrentUser();
  updateWindows(currentUser);
}

function clearLogs() {
  $.logs.forEach((ol) => ol.innerHTML = '');
}

function updateDisplayedUser(username) {
  const $userButtons = document.querySelectorAll('.user button');

  $userButtons.forEach(($user) => {
    if ($user.textContent.trim() === username) {
      $user.classList.add('active');
    } else {
      $user.classList.remove('active');
    }
  });
}
