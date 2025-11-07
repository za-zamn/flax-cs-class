// On click "Your Inbox" (add .blue-text) <instructional>
const heading = document.querySelector("#heading");

const changeFontColor = (e) => {
  e.target.classList.add("blue-text")
};

heading.addEventListener("click", changeFontColor);


// Reply button shows text box (remove hidden)
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const openReplyMessage = (e) => {
  replyMessage.classList.remove("hidden")
};

replyButton.addEventListener("click", openReplyMessage);


// Send and Cancel button hide text box (add hidden)
const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");

const closeReplyMessage = (e) => {
  replyMessage.classList.add("hidden")
};

sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click", closeReplyMessage);


// Open change color to grey (add is-read and "mark as unread" button)
const openButton = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");

const inboxMessage = document.querySelector("#inbox-message");
const markButton = document.querySelector("#mark-button");

const close = document.querySelector("#close");

const openInboxMessage = (e) => {
  inbox.classList.add("is-read");
  inboxMessage.classList.remove("hidden");
  markButton.classList.remove("hidden");
};

const closeInboxMessage = (e) => {
  inboxMessage.classList.add("hidden");
};

openButton.addEventListener("click", openInboxMessage);
close.addEventListener("click", closeInboxMessage);

// Mark as unread (remove is-read and self)
const markUnread = (e) => {
  inbox.classList.remove("is-read");
  e.target.classList.add("hidden");
};

markButton.addEventListener("click", markUnread)

// Change "Your Inbox" to (toggle) text color <instructional>

/****************** 
// UNCOMMENT THIS SECTION & COMMENT OTHER "heading" EVENT LISTENER

const changeFontColor2 = (e) => {
  console.log(e.target.classList);

  if(e.target.classList.contains("blue-text")) {
    e.target.classList.remove("blue-text");
  } else {
    e.target.classList.add("blue-text");
  }

};

const changeFontColor3 = (e) => {
  e.target.classList.toggle("blue-text");
};

heading.addEventListener("click", changeFontColor2);
********************/

// checkbox - (toggle is-selected, and hidden for #action-buttons )

const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const messageSelection = (e) => {
  console.log("clicked!");

  inbox.classList.toggle("is-selected");
  actionButtons.classList.toggle("hidden");
}

checkbox.addEventListener("click", messageSelection)


// Spicy - Program Dark Mode!

