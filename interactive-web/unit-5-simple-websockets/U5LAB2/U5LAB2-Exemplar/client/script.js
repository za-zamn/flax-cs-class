const $messages = document.querySelector('#messages');
const $joinForm = document.querySelector('#join-form');
const $newMessageForm = document.querySelector('#new-message-form');

const socket = io();

$joinForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);
	const screenName = formData.get('screen-name');

	registerUser(screenName);

	socket.emit('join', screenName);
});

$newMessageForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);
	const message = formData.get('message');

	resetNewMessageForm();

	const { screenName } = getUser();
	socket.emit('chat', { screenName, message });
});

socket.on('join', (screenName) => {
	const $joinNotice = createMessage(
		'join-notice',
		`${screenName || 'Unknown user'} joined the chat`,
	);
	$messages.append($joinNotice);
});

socket.on('chat', ({ screenName, message }) => {
	const { colorClass } = getUser(screenName);
	const formattedMessage = message.trim();
	const $chatMessage = createMessage(
		'chat-message',
		`<address class="${colorClass}">
      ${screenName || 'Unknown user'}
    </address> <pre>${formattedMessage}</pre>`,
	);
	$messages.append($chatMessage);

	$messages.scrollTo({ top: $messages.scrollHeight, behavior: 'smooth' });
});

socket.on('leave', (screenName) => {
	const $disconnectNotice = createMessage(
		'leave-notice',
		`${screenName || 'Unknown user'} has left the chat`,
	);
	$messages.append($disconnectNotice);
});
