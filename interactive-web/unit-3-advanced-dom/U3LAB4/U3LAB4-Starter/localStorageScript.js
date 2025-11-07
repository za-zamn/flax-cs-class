const START_LEVEL = 3;          // Starting number of buttons

const starterStats = {
    userID:'',                  // string userName inputted at beginning of game
    plays:0,                    // # of times user played game
    currentLevel:START_LEVEL,   // # of level user is currently on
    highestLevel:START_LEVEL,   // # of highest level user has completed
}


const saveStats = (playerStats) => {
    console.log("Saving stats...")
    // 1. Save the user's stats in local storage
}

const getUser = ( userIDInput ) => {
    // 2. Return the user's object if if exist under their name in local storage. Otherwise, return null.
    return null;
}

const createNewUser = ( userIDInput ) => {
    // 3. Return object (similar to starterStats) REMEMBER: save new userID
    return starterStats;
}

/** Return user stats from local storage */
const uploadStats = () => {
    const userIDInput = prompt("Please enter a user name:", "defaultUser123");
    const user = getUser( userIDInput );

    return user || createNewUser(userIDInput);
};
