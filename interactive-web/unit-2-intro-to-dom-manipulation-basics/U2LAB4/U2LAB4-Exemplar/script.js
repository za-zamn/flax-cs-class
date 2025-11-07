// YOUR CODE HERE
console.log("Script Running.");

let sumOfLights = 0

const srStatus = document.querySelector("#status");

const switchLightbulb = (id) => {
  const light = document.querySelector(id).classList;
  light.toggle("active");
  let stat = '';
  if (light.contains("active")) {
    stat = ' is on. ';
    sumOfLights += 1;
  } else {
    stat = ' is off. ';
    sumOfLights -= 1;
  }
  return 'Light bulb ' + id[id.length - 1] + stat
};

const checkSuccess = (message) => {
  if(sumOfLights === 9) {
    message += "Success! All lights are on."
  }
  srStatus.innerHTML = message;
}

const change38 = () => {
  message = '';
  message += switchLightbulb("#lightbulb3");
  message += switchLightbulb("#lightbulb8");
  checkSuccess(message);
};
const change17 = () => {
  message = '';
  message += switchLightbulb("#lightbulb1");
  message += switchLightbulb("#lightbulb7");
  checkSuccess(message);
};
const change468 = () => {
  message = '';
  message += switchLightbulb("#lightbulb4");
  message += switchLightbulb("#lightbulb6");
  message += switchLightbulb("#lightbulb8");
  checkSuccess(message);
};
const change29 = () => {
  message = '';
  message += switchLightbulb("#lightbulb2");
  message += switchLightbulb("#lightbulb9");
  checkSuccess(message);
};
const change5 = () => {
  message = '';
  message += switchLightbulb("#lightbulb5");
  checkSuccess(message);
}
const change14 = () => {
  message = '';
  message += switchLightbulb("#lightbulb1");
  message += switchLightbulb("#lightbulb4");
  checkSuccess(message);
};
const change23 = () => {
  message = '';
  message += switchLightbulb("#lightbulb2");
  message += switchLightbulb("#lightbulb3");
  checkSuccess(message);
};
const change59 = () => {
  message = '';
  message += switchLightbulb("#lightbulb5");
  message += switchLightbulb("#lightbulb9");
  checkSuccess(message);
};
const change67 = () => {
  message = '';
  message += switchLightbulb("#lightbulb6");
  message += switchLightbulb("#lightbulb7");
  checkSuccess(message);
};


document.querySelector("#switch1").addEventListener("change", change38);
document.querySelector("#switch2").addEventListener("change", change17);
document.querySelector("#switch3").addEventListener("change", change468);
document.querySelector("#switch4").addEventListener("change", change29);
document.querySelector("#switch5").addEventListener("change", change5);
document.querySelector("#switch6").addEventListener("change", change14);
document.querySelector("#switch7").addEventListener("change", change23);
document.querySelector("#switch8").addEventListener("change", change59);
document.querySelector("#switch9").addEventListener("change", change67);


// Solution: turn on lights: 2, 3, 7, and 8... OR all other lights but these (1, 4, 5, 6, and 9)

document.querySelector("#sr-audio").addEventListener("click", () => {
  srStatus.innerHTML = '';
  checkSuccess(sumOfLights + ' lights are on! ');
})