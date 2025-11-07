/* eslint-disable camelcase */

const $_chatPage = document.querySelector('#chat-page');
const $_joinPage = document.querySelector('#join-page');
const $_joinForm = document.querySelector('#join-form');
const $_screenNameInput = $_joinForm.querySelector('input');
const $_newMessageForm = document.querySelector('#new-message-form');
const $_newMessageInput = $_newMessageForm.querySelector('textarea');

// eslint-disable-next-line no-unused-expressions
!(function initializeNavigation() {
  $_joinPage.classList.add('active');
  $_screenNameInput.focus();
}());

// Handle sign in
$_joinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  $_joinPage.classList.remove('active');
  $_chatPage.classList.add('active');

  $_newMessageInput.focus();
});

// Auto-size textarea
$_newMessageInput.addEventListener('input', (event) => {
  event.target.style.height = '';
  event.target.style.height = `${event.target.scrollHeight}px`;
});

// Listen for submit-on-enter and shift-enter
$_newMessageInput.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key === 'Enter') {
    return false;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    $_newMessageForm.requestSubmit();
  }
  return true;
});

// Keep the form from submitting
$_newMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
