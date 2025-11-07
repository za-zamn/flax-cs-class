import { users } from './users.js';

const [ashley, bo, caitlin] = users;

const actions = [{
  event: 'sign in',
  payload: 'Ashley',
  user: ashley,
}, {
  event: 'sign in',
  payload: 'Bo',
  user: bo,
}, {
  event: 'sign in',
  payload: 'Caitlin',
  user: caitlin,
}, {
  event: 'dm',
  payload: {
    from: 'Ashley',
    to: 'Bo',
    message: 'Hey, good to see you!',
  },
  user: ashley,
}, {
  event: 'dm',
  payload: {
    from: 'Bo',
    to: 'Ashley',
    message: 'You too!',
  },
  user: bo,
}, {
  event: 'dm',
  payload: {
    from: 'Ashley',
    to: 'Caitlin',
    message: "Oh wow, you're here too? Let's start a room",
  },
  user: ashley,
}, {
  event: 'dm',
  payload: {
    from: 'Caitlin',
    to: 'Ashley',
    message: 'Consider it done.',
  },
  user: caitlin,
}, {
  event: 'new channel',
  payload: {
    username: 'Caitlin',
    channel: '#general',
  },
  user: caitlin,
}, {
  event: 'join',
  payload: {
    username: 'Caitlin',
    channel: '#general',
  },
  user: caitlin,
}, {
  event: 'join',
  payload: {
    username: 'Ashley',
    channel: '#general',
  },
  user: ashley,
}, {
  event: 'dm',
  payload: {
    from: 'Caitlin',
    to: 'Bo',
    message: 'You coming?',
  },
  user: caitlin,
}, {
  event: 'dm',
  payload: {
    from: 'Bo',
    to: 'Caitlin',
    message: 'Oops, sorry on my way!',
  },
  user: bo,
}, {
  event: 'join',
  payload: {
    username: 'Bo',
    channel: '#general',
  },
  user: bo,
}, {
  event: 'chat',
  payload: {
    from: 'Caitlin',
    channel: '#general',
    message: 'Do you all want to get together tonight?',
  },
  user: caitlin,
}, {
  event: 'chat',
  payload: {
    from: 'Bo',
    channel: '#general',
    message: "I'd love to!",
  },
  user: bo,
}, {
  event: 'chat',
  payload: {
    from: 'Ashley',
    channel: '#general',
    message: 'Why are we still here? See you soon!',
  },
  user: ashley,
}, {
  event: 'leave',
  payload: {
    username: 'Ashley',
    channel: '#general',
  },
  user: ashley,
}, {
  event: 'sign out',
  payload: 'Ashley',
  user: ashley,
}, {
  event: 'chat',
  payload: {
    from: 'Bo',
    channel: '#general',
    message: 'Heading over too, bye!',
  },
  user: bo,
}, {
  event: 'leave',
  payload: {
    username: 'Bo',
    channel: '#general',
  },
  user: bo,
}, {
  event: 'sign out',
  payload: 'Bo',
  user: bo,
}, {
  event: 'leave',
  payload: {
    username: 'Caitlin',
    channel: '#general',
  },
  user: caitlin,
}, {
  event: 'sign out',
  payload: 'Caitlin',
  user: caitlin,
}];

function executeAction({ event, payload, user }) {
  switch (event) {
    case 'chat':
      user.chatMessages.push({ type: 'chat-message', payload });
      break;
    case 'dm':
      user.chatMessages.push({ type: 'dm', payload });
      break;
    default:
      break;
  }

  user.socket.emit(event, payload);
}

export default function* getActions() {
  let currentIndex = 0;
  while (currentIndex < actions.length) {
    yield (() => executeAction(actions[currentIndex]));
    currentIndex += 1;
  }
}
