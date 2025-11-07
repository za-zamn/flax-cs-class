let paused = false;
const BASELINE_SPEED = 5000;
let speed = BASELINE_SPEED / 5;

function getPausedIcon() {
  return paused
    ? '<i class="fa fa-play"></i>'
    : '<i class="fa fa-pause"></i>';
}

export function isPaused() {
  return paused;
}

function togglePause() {
  paused = !paused;
}

export function getSpeed() {
  return speed;
}

export function setSpeed(factor) {
  speed = BASELINE_SPEED / factor;
}

export function initializeRuntime() {
  const $pause = document.querySelector('#pause');
  $pause.innerHTML = getPausedIcon();

  $pause.addEventListener('click', (event) => {
    if (event.currentTarget.tagName.toLowerCase() === 'button') {
      togglePause();
      event.currentTarget.innerHTML = getPausedIcon();
    }
  });

  initializeSpeed();
}

function initializeSpeed() {
  const $speed = document.querySelector('#speed');
  const INITIAL_SPEED_FACTOR = 5;
  $speed.value = INITIAL_SPEED_FACTOR;

  $speed.addEventListener('input', (event) => {
    setSpeed(+event.target.value);
  });
}
