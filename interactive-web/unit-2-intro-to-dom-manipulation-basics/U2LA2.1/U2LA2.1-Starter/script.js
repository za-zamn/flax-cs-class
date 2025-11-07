console.log("script running");

const appleButton = document.querySelector("#banana");

console.log(appleButton);

const addApple = () => {
  alert("apple button under construction");
};
appleButton.addEventListener("click", addApple);
