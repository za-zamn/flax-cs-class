console.log(top200);

const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const songsGrid = document.querySelector("#songs-grid");

function displayBadge(rank) {
  song = top200[rank-1];
  console.log(song);
  songsGrid.innerHTML += (
    `<div class="card has-background-primary-light">
    <div class="card-content">
      <div class="content">
        <p><b>Song Name:</b> ${song.title}</p>
        <p><b>Artist Name:</b> ${song.artist}</p>
        <p><b>Streams:</b> ${song.streams.toLocaleString('en-US')}</p>
        <p style="text-align: right"><b>Rank:</b> ${song.rank}</p>
      </div>
    </div>
  </div>`
  );
  dropdown.classList.remove('is-active');
}

// setMatches function
const setMatches = (string) => {
  string = string.toLowerCase();
  dropdownContent.innerHTML = '';

  const matches = getMatches(string, top200);

  matches.forEach(match => (
    dropdownContent.innerHTML += `<a onclick="displayBadge(${match.rank})" class="dropdown-item">${match.title}, ${match.artist}</a>`
  ));
};


const updateDropdown = () => {
  const userInput = input.value;
  if(userInput.length > 0) {
    dropdown.classList.add('is-active');
    setMatches(userInput);
  }
  else {
    dropdown.classList.remove('is-active');
  }
};
input.addEventListener('input', updateDropdown);