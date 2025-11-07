// Dark Mode
const darkMode = document.querySelector('#dark-mode');

darkMode.addEventListener('click', () => {
  // fix this
  const greatGrandParentDiv = darkMode.parentElement.parentElement.parentElement;

  greatGrandParentDiv.style.background = darkMode.checked ? '#242424' : 'white';
  
});


// Add Accomplishments
const addButton = document.querySelector('button');
const accomplishments = document.querySelector('#accomplishments-grid');

const addAccomplishment = (title, date) => {
  
  const div = document.createElement('div');        // great grand parent
  const header = document.createElement('header');    // grand parent
  const pTitle = document.createElement('p');           // parent/sib 1
  const pDate = document.createElement('p');            // parent/sib 2
  const xButton = document.createElement('button');     // parent/sib 3
  const span = document.createElement('span');            // child (of 3)
  const i = document.createElement('i');                  // grand child (of 3)
  
  //div
  div.classList.add('card', 'has-background-warning-light');
  div.appendChild(header);

  // header
  header.classList.add('card-header');
  header.appendChild(pTitle);
  header.appendChild(pDate);
  header.appendChild(xButton);

  // title and date
  pTitle.classList.add('card-header-title', 'is-size-7');
  pTitle.innerHTML = title;

  pDate.classList.add('card-header-title', 'is-size-7', 'is-justify-content-flex-end');
  pDate.innerHTML = date;

  // x-button, span, and i
  xButton.classList.add('card-header-icon');
  xButton.appendChild(span);
  xButton.addEventListener('click', () => accomplishments.removeChild(div));

  span.classList.add('icon', 'has-text-danger');
  span.appendChild(i);

  i.classList.add('fas', 'fas-ban');
  i.innerHTML = 'x';
  
  accomplishments.appendChild(div);
}

addButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.input');
    const title = inputs[0].value;
    const date = inputs[1].value;

    if (title && date) {
        console.log(title, date);
        addAccomplishment(title, date);
    }
});