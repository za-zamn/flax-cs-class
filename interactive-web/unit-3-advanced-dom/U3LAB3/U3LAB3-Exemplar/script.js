const cards = document.querySelectorAll('button');
const boxes = document.querySelectorAll('.box');

let selectedCard = null;

const cardClick = (e) => {
    thisCard = e.target;

    if (thisCard === selectedCard) {
        thisCard.classList.remove('is-selected');
        selectedCard = null;
    } else {
        selectedCard ? selectedCard.classList.remove('is-selected') : {}; //error if no selected card yet
        thisCard.classList.add('is-selected');
        selectedCard = thisCard;
    }
}

cards.forEach( card => card.addEventListener('click', cardClick));

boxes.forEach( box => box.addEventListener('click', (e) => {
    if(selectedCard && box !== selectedCard.parentElement.parentElement) {
        selectedCard.parentElement.removeChild(selectedCard);
        box.childNodes[3].appendChild(selectedCard);
        selectedCard.classList.remove('is-selected');
        selectedCard = null; 
    }

    //Extension
    box.classList.remove('is-selected');
}));

// Extensions
//1
const holdingZone = document.querySelector('.cards');
holdingZone.innerHTML = '';

getRandomCards().forEach(card => {
    const button = document.createElement('button');
    button.classList.add('card', 'py-4');
    button.innerHTML = card;
    button.addEventListener('click', cardClick);
    holdingZone.appendChild(button);
})
//2
boxes.forEach( box => box.addEventListener('mouseenter', (e) => {
    if(selectedCard && box !== selectedCard.parentElement.parentElement) {
        console.log("in a box!");
        box.classList.add('is-selected');
    }
} ) );
boxes.forEach( box => box.addEventListener('mouseleave', (e) => {
    if(selectedCard && box !== selectedCard.parentElement.parentElement) {
        console.log("left");
        box.classList.remove('is-selected');
    }
} ) );