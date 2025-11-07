/** Game constants */
const TIME = 10;                // Seconds per round

/** Variables */
let playerStats = {
    userID: '',
    plays:0,                    //# of times user played game
    currentLevel:START_LEVEL,   //# of level user is currently on
    highestLevel:START_LEVEL,   //highest level user has completed
}
let currentNumber = 1;          //current number that should be clicked
let roundTimer,                 //ID of timer currently being run
    seconds;                    //seconds left in round

/** Checks for last level before advancing to next. Updates highest level as well */
const goToNextLevel = () => {
    playerStats.highestLevel = Math.max(playerStats.currentLevel, playerStats.highestLevel);
    playerStats.currentLevel += 1;
    saveStats(playerStats);

    if(playerStats.currentLevel > 20) {
        endGame('win');
    } else {
        playCurrentLevel();
    }
}

/** Populates updated stat values on page -- i.e. plays, current level, and highest level */
const populateStats = () => {
    
    let value = (playerStats.userID ? `${playerStats.userID}'s` : "Your") + " stats:";

    Object.keys(playerStats).forEach(stat => {
        if(stat !== "userID") value = playerStats[stat];
        document.querySelector(`#${stat}`).innerHTML = value;
    })
}

/** Terminates game as win or loss alert, updates stats, and starts over. */
const endGame = (status='win') => {
    const message = (status !== 'win') ? `${status} You lose!` : `You won! You did 20 buttons in ${TIME} seconds!`;
    
    playerStats.currentLevel = START_LEVEL;
    playerStats.plays += 1;
    saveStats(playerStats);

    setTimeout(() => {
        alert(message);
        playCurrentLevel();
    }, 200);
}

/** Adds color to buttons when clicked, ends game when wrong click, and goes to next level when done. */
const handleClick = (e) => {
    thisNum = Number(e.target.innerHTML);

    if (thisNum === currentNumber) {
        e.target.classList.add('is-right');
        currentNumber += 1;
        if(currentNumber > playerStats.currentLevel)
            goToNextLevel();
    } else {
        e.target.classList.add('is-wrong');
        endGame(`Wrong number! You hit ${thisNum} instead of ${currentNumber}`);
    }
}

/** Starts the level (n) as indicated by "playerStats.currentLevel" & maintains timer */
const playCurrentLevel = () => {
    // If its a returning user, keep them where they left off
    if(playerStats.currentLevel === START_LEVEL) playerStats = {...playerStats, ...uploadStats()};

    // Populate stats on website & kill old timer
    populateStats();
    clearInterval(roundTimer);

    const numbers = shuffledArray(playerStats.currentLevel);    // get shuffled array of n elements
    const $buttonGroup = document.querySelector(".section");    // area on page to insert buttons
    const $secondsSpan = document.querySelector("#timer");      // area on page to display timer

    // Clear button group, reset timer, and reset currentNumber to be clicked
    currentNumber = 1;
    seconds=TIME;
    $buttonGroup.innerHTML = '';
    $secondsSpan.innerHTML = seconds;

    // generates n buttons for level
    for(let i=0; i<playerStats.currentLevel; i++){
        let newButton = document.createElement("button");

        newButton.classList.add("button-number");
        newButton.innerHTML = numbers[i];
        newButton.addEventListener('click', handleClick);

        $buttonGroup.appendChild(newButton);
    }
    
    // starts round second timer
    roundTimer = setInterval(()=>{
        seconds--;
        document.querySelector("#timer").innerHTML = seconds;
        if(seconds === 0) {
            // If out of time, end game and kill timer
            endGame('Out of time!');
            clearInterval(roundTimer);
        }
    }, 1000);
}

/** Start the first game */
playCurrentLevel();