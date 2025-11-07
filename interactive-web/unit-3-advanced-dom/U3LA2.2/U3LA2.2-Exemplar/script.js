const fiftyStates = [
  { state: "Alabama", capital: "Montgomery" },
  { state: "Alaska", capital: "Juneau" },
  { state: "Arizona", capital: "Phoenix" },
  { state: "Arkansas", capital: "Little Rock" },
  { state: "California", capital: "Sacramento" },
  { state: "Colorado", capital: "Denver " },
  { state: "Connecticut", capital: "Hartford" },
  { state: "Delaware", capital: "Dover" },
  { state: "Florida", capital: "Tallahassee " },
  { state: "Georgia", capital: "Atlanta" },
  { state: "Hawaii", capital: "Honolulu" },
  { state: "Idaho", capital: "Boise" },
  { state: "Illinois", capital: "Springfield" },
  { state: "Indiana", capital: "Indianapolis" },
  { state: "Iowa", capital: "Des Moines" },
  { state: "Kansas", capital: "Topeka" },
  { state: "Kentucky", capital: "Frankfort" },
  { state: "Louisiana", capital: "Baton Rouge" },
  { state: "Maine", capital: "Augusta" },
  { state: "Maryland", capital: "Annapolis" },
  { state: "Massachusetts", capital: "Boston" },
  { state: "Michigan", capital: "Lansing" },
  { state: "Minnesota", capital: "Saint Paul" },
  { state: "Mississippi", capital: "Jackson" },
  { state: "Missouri", capital: "Jefferson City" },
  { state: "Montana", capital: "Helena" },
  { state: "Nebraska", capital: "Lincoln" },
  { state: "Nevada", capital: "Carson City" },
  { state: "New Hampshire", capital: "Concord " },
  { state: "New Jersey", capital: "Trenton" },
  { state: "New Mexico", capital: "Santa Fe" },
  { state: "New York", capital: "Albany" },
  { state: "North Carolina", capital: "Raleigh" },
  { state: "North Dakota", capital: "Bismarck" },
  { state: "Ohio", capital: "Columbus" },
  { state: "Oklahoma", capital: "Oklahoma City" },
  { state: "Oregon", capital: "Salem" },
  { state: "Pennsylvania", capital: "Harrisburg" },
  { state: "Rhode Island", capital: "Providence" },
  { state: "South Carolina", capital: "Columbia" },
  { state: "South Dakota", capital: "Pierre" },
  { state: "Tennessee", capital: "Nashville" },
  { state: "Texas", capital: "Austin" },
  { state: "Utah", capital: "Salt Lake City" },
  { state: "Vermont", capital: "Montpelier" },
  { state: "Virginia", capital: "Richmond" },
  { state: "Washington", capital: "Olympia" },
  { state: "West Virginia", capital: "Charleston" },
  { state: "Wisconsin", capital: "Madison" },
  { state: "Wyoming", capital: "Cheyenne" },
];



const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const statesGrid = document.querySelector("#states-grid");

function displayBadge(element) {
  console.log(element.innerHTML);
  statesGrid.innerHTML += (
    `<div class="card has-background-danger-light">
      <header class="card-header">
        <p class="card-header-title">${element.innerHTML}</p>
      </header>
    </div>`
  );
  dropdown.classList.remove('is-active');
}

const setMatches = (string) => {
  string = string.toLowerCase();
  dropdownContent.innerHTML = '';

  for(const stateObj of fiftyStates) {
    const state = stateObj.state;
    const capital = stateObj.capital;

    if(state.toLowerCase().includes(string) || capital.toLowerCase().includes(string)) {
      dropdownContent.innerHTML += `<a onclick="displayBadge(this)" class="dropdown-item">${capital}, ${state}</a>`;
    }
  }
};

const updateDropdown = () => {
  const userInput = input.value;

  if(userInput.length > 0) {
    //set to active
    dropdown.classList.add('is-active');
    //set drop down list to options
    setMatches(userInput);
  }
  else {
    dropdown.classList.remove('is-active');
  }
};

input.addEventListener('input', updateDropdown);