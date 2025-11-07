const START_LEVEL = 3;          // Starting number of buttons

const starterStats = {
    userID:'',
    plays:0,                    //# of times user played game
    currentLevel:START_LEVEL,   //# of level user is currently on
    highestLevel:START_LEVEL,   //highest level user has completed
}

// Save the user's stats in local storage
const saveStats = (playerStats) => {
    localStorage.setItem("playerStats", JSON.stringify(playerStats));
}

const getUser = ( userIDInput ) => {
    const player = JSON.parse(localStorage.getItem("playerStats"))

    if(player && player.userID === userIDInput){
        return player;
    } else {
        return null;
    }
}

const createNewUser = ( userIDInput ) => {
    return {...starterStats, userID:userIDInput};
}

// Return user stats from local storage
const uploadStats = () => {
    const userIDInput = prompt("Please enter a user name:", "defaultUser123");
    const user = getUser( userIDInput );

    return user || createNewUser(userIDInput);
};