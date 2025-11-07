console.log("script running");

const banana = document.querySelector("#banana");
const resultsSpan = document.querySelector("#results");

console.log(banana);

banana.addEventListener("click", () => {
    banana.classList.toggle("is-selected");

    let description = "Enjoy your Smoothie!";
    if( banana.classList.contains("is-selected")){
      description = "Enjoy your Banana Smoothie!";
    }
    resultsSpan.innerHTML = description;
    
  });