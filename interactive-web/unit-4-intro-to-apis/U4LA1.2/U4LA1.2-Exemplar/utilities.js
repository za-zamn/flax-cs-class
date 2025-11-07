const updateScore = (isCorrect, points) => {
  let awardedPoints = points;
  if (!isCorrect) {
    awardedPoints *= -1;
  }

  console.log(awardedPoints);
};

/** This function creates a single card based on the jeopardy object that is passed*/
const questionCard = (jeopardy) => {
  const card = document.createElement("div");
  const categoryDiv = document.createElement("div");
  const category = document.createElement("h2");
  const question = document.createElement("h3");
  const input = document.createElement("input");
  const p = document.createElement("p");

  card.classList.add("card");
  categoryDiv.classList.add("card-title");
  input.type = "text";
  input.classList.add("user-input");

  category.innerHTML = jeopardy.category;
  question.innerHTML = jeopardy.question;

  card.appendChild(categoryDiv);
  card.appendChild(question);
  card.appendChild(input);
  card.appendChild(p);
  categoryDiv.appendChild(category);

  // Add point values
  const points = document.createElement("h2");
  points.innerHTML = jeopardy.value + " pts";

  categoryDiv.appendChild(points);

  // Add event listener to input
  input.addEventListener("change", () => {
    p.innerHTML = jeopardy.answer;
    input.disabled = true;
  });

  return card;
};

const getRandom = async () => {
  let endpoint = `https://jservice.io/api/random?count=5`;
  let response = await fetch(endpoint);
  let data = await response.json();

  return await data;
};
