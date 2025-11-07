// Mini Lesson 2 Walkthrough

const get5Categories = async () => {
  let endpoint = "https://jservice.io/api/categories?count=5";

  let response = await fetch(endpoint);
  let data = await response.json();

  console.log(data);
};

get5Categories();



/** Mini Lesson 2 Activities */


// Mild 1
const getClues500 = async () => {
  let endpoint = "https://jservice.io/api/clues?value=500";

  let response = await fetch(endpoint);
  let data = await response.json();

  console.log(data);
};

getClues500();

// Mild 2
const getQuestions10 = async () => {
  let endpoint = "https://jservice.io/api/random?count=10";

  let response = await fetch(endpoint);
  let data = await response.json();

  data.forEach((item) => console.log(item.question));
};

getQuestions10();



// Medium 1
const getFinals = async (count) => {
  let endpoint = `https://jservice.io/api/final?count=${count}`;

  let response = await fetch(endpoint);
  let data = await response.json();

  console.log(data);
};

getFinals(2);

// Medium 2
const getRandomCategory = async () => {
  const getRandomID = async () => {
    //API call to random
    let random_endpoint = `https://jservice.io/api/random`;
    let random_response = await fetch(random_endpoint);
    let random_data = await random_response.json();

    //return categoryID
    return await random_data[0].category_id;
  };

  const id = await getRandomID();

  //API call to category by ID
  let category_endpoint = `https://jservice.io/api/category?id=${id}`;
  let category_response = await fetch(category_endpoint);
  let category_data = await category_response.json();

  //Console log all questions
  console.log(category_data);
};

getRandomCategory();



// Spicy 1
const getCategory5 = async () => {
  const getRandomID = async () => {
    let length = 0;
    let id;
    while (length < 5) {
      //API call to random
      let random_endpoint = `https://jservice.io/api/random`;
      let random_response = await fetch(random_endpoint);
      let random_data = await random_response.json();
      id = random_data[0].category_id;
      length = await random_data[0].category.clues_count;
    }
    //return categoryID
    return await id;
  };

  const id = await getRandomID();

  //API call to category by ID
  let category_endpoint = `https://jservice.io/api/category?id=${id}`;
  let category_response = await fetch(category_endpoint);
  let category_data = await category_response.json();

  //Console log first 5 questions
  // console.log(category_data.clues.slice(0, 5)); // for Spicy 1
  return await category_data; // for Spicy 2
};

getCategory5();

// Spicy 2
const getBoard = async () => {
  finalBoard = {};

  for (let i = 0; i < 5; i++) {
    let isGood = false;
    console.log("Getting category ", i + 1);

    while (!isGood) {
      let data = await getCategory5();
      let potentialArray = await data.clues.slice(0, 5);

      if (potentialArray[0].value === 100) {
        isGood = true;
        finalBoard[data.title] = potentialArray;
      }
    }
  }

  console.log(finalBoard);
};

getBoard();
