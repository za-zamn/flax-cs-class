let small = document.querySelector("#small");
let large = document.querySelector("#large");
let veganButton = document.querySelector("#isVegan");
let gfButton = document.querySelector("#isGF");
let toppings = document.querySelectorAll(".card");
let quantityInput = document.querySelector("#quantity");

let pizza = 20;
let multiplier = 1;

const sizeMultiplier = () => {
  if( small.checked ) {
    multiplier /= 1.5;
  } else {
    multiplier *= 1.5;
  }
  console.log(multiplier);
  displayTotal();
};
const changeMultiplier = (e) => {
  if (e.target.checked) {
    multiplier *= e.target.value;
  } else {
    multiplier /= e.target.value;
  }
  console.log(multiplier);
  displayTotal();
};

const addToSum = (e) => {
  let target = e.target;
  if(!target.classList.contains('card')){
    target = target.closest('.card');
  }
  target.classList.toggle("selected");
  let value = parseFloat(target.getAttribute('value'))
  const alert = document.querySelector('#' + target.id + '-alert');

  if (target.classList.contains("selected")) {
    pizza += value;
    target.setAttribute('aria-pressed', true);
    alert.innerHTML = target.id + " chosen";
  } else {
    pizza -= value;
    target.setAttribute('aria-pressed', false);
    alert.innerHTML = target.id + " unchosen";
  }

  displayTotal();
  console.log(pizza);
};

const displayTotal = (e) => {
  let finalPrice = (pizza * multiplier * quantityInput.value).toFixed(2);
  document.querySelector("#price").innerHTML = '$' + finalPrice;
};

small.addEventListener('change', sizeMultiplier);
large.addEventListener('change', sizeMultiplier);
veganButton.addEventListener('change', changeMultiplier);
gfButton.addEventListener('change', changeMultiplier);
quantityInput.addEventListener('change', displayTotal);

toppings.forEach(card => card.addEventListener('click', addToSum));
toppings.forEach(card => card.addEventListener('keydown', (event) => {
  console.log(event.code);
  if( event.code === "Enter" || event.code === "Space") {
    card.click();
  }
}));