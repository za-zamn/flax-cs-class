export function createButton(text) {
  const $button = document.createElement('button');
  $button.textContent = text;
  return $button;
}

export function attachListenerToButton($button, handler) {
  $button.addEventListener('click', (event) => {
    handler(event.target.textContent.trim());
  });
  return $button;
}

export function createListItem(content, className = '') {
  const $message = document.createElement('li');
  $message.classList.add(className);
  if (typeof content === 'string') {
    $message.innerHTML = content;
  } else if (content instanceof Element) {
    $message.append(content);
  }
  return $message;
}

export function renderTo(element) {
  return (item) => {
    element.append(item);
  };
}

export function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
