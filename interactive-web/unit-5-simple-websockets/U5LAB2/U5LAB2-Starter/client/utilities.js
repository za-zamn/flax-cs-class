/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

// Screen name / color class dictionary
const screenNames = {
};
let currentUserScreenName = '';

function registerUser(screenName) {
  if (!screenName) {
    throw new Error('registerUser() must be given a screen name as its first argument');
  }

  currentUserScreenName = screenName;
  screenNames[screenName] = 'color-1';
}

function getUser(screenName) {
  if (!screenNames[screenName]) {
    screenNames[screenName] = generateColorClass();
  }

  return {
    screenName: screenName || currentUserScreenName,
    colorClass: screenNames[screenName],
  };
}

// Clears the values, resets the input height, and refocuses the form
function resetNewMessageForm() {
  const $_newMessageForm = document.querySelector('#new-message-form');
  const $_newMessageInput = $_newMessageForm.querySelector('textarea');

  $_newMessageForm.reset();
  resetTextareaHeight($_newMessageForm);
  $_newMessageInput.focus();
}

// Textareas that had a lot of content get "stretched out" and won't snap back on their own
function resetTextareaHeight(form) {
  const $textarea = form.querySelector('textarea');
  $textarea.style.height = 'unset';
  $textarea.style.height = 'fit-content';
}

// Generate a color class string between 2 and 6
function generateColorClass() {
  const colorIndex = Math.ceil(Math.random() * 5) + 1;
  return `color-${colorIndex}`;
}

const validTypes = ['join-notice', 'chat-message', 'disconnect-notice'];
function createMessage(type, messageHTML) {
  if (!validTypes.includes(type)) {
    throw new Error(`createMessage() must be given a valid type as its first argument: ${validTypes.join(', ')}`);
  }
  if (!messageHTML) {
    throw new Error('createMessage() must be given an HTML string as its second argument');
  }

  const $li = document.createElement('li');
  $li.classList.add(type);
  $li.innerHTML = messageHTML;
  return $li;
}
