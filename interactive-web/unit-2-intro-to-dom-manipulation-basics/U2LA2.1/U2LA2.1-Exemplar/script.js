console.log("script running");

let totalInCents = 0;

const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

console.log(appleButton, bananaButton, mangoButton, shoppingCart, totalSpan);

const updateTotal = () => {
  totalSpan.innerHTML = totalInCents / 100;
};

const addApple = () => {
  shoppingCart.innerHTML += `<p>Apple</p>`;
  totalInCents += 75;
  updateTotal();
};
appleButton.addEventListener("click", addApple);

const addBanana = () => {
  shoppingCart.innerHTML += `<p>Banana</p>`;
  totalInCents += 30;
  updateTotal();
};
bananaButton.addEventListener("click", addBanana);

const addMango = () => {
  shoppingCart.innerHTML += `<p>Mango</p>`;
  totalInCents += 125;
  updateTotal();
};
mangoButton.addEventListener("click", addMango);
