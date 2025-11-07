const START_LEVEL = 3;          // Starting number of buttons

const starterStats = {
    userID:'',
    plays:0,                    //# of times user played game
    currentLevel:START_LEVEL,   //# of level user is currently on
    highestLevel:START_LEVEL,   //highest level user has completed
}

// Save the user's stats in local storage
const saveStats = (playerStats) => {
    Object.keys(playerStats).forEach(stat => {
        localStorage.setItem(stat, playerStats[stat]);
    })
}

const doesUserExist = ( userIDInput ) => {
    return localStorage.getItem("userID") === userIDInput;
}

const createNewUser = ( userIDInput ) => {
    localStorage.setItem("userID", userIDInput);
    starterStats.userID = userIDInput;
    return starterStats;
}

const getExistingUser = ( userIDInput ) => {
    const stats = {};
    Object.keys(starterStats).forEach(stat => {
        if(stat === 'userID'){
            stats[stat] = localStorage.getItem(userIDInput);
        } else {
            stats[stat] = Number(localStorage.getItem(stat));
        }
    })
    return stats;
}

// Return user stats from local storage
const uploadStats = () => {
    const userIDInput = prompt("Please enter a user name:", "defaultUser123");
    const userExists = doesUserExist( userIDInput );
    let userStats = {};
    if(userExists) {
        userStats = getExistingUser(userIDInput);
    } else {
        userStats = createNewUser(userIDInput);
    }
    return userStats;
};



// 1. save stats in local storage
// 2. upload existing stats
// 3. create an array of user stat objects and save it in local storage;
//  when a user logs in upload their stats, if its a new user add their object to the array.
// 4. create a sign out button so alerts don't pop up every restart -- 
// - create boolean variable called signedIn.
// - sign out should set to false and prompt user for sign in information.
// - once userID is entered, set boolean to true and upload stats.
// Disable multiple clicks on 1 circle