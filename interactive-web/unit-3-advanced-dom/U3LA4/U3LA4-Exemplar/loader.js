const $loader = document.querySelector("#loader");   // DOM element for loading wheel
let timerID;                                         // id of current timer

// function spins loader for 2 seconds
const spinLoader = () => {
  $loader.classList.add("is-loading");
  timerID && clearTimeout(timerID);
  timerID = setTimeout( ()=>{
    $loader.classList.remove("is-loading");
  }, 2000);
};