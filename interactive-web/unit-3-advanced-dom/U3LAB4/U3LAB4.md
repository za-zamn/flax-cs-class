---
description: How can you use local storage to better the experience of a website?
---

# Twenty in Ten Game

### Teacher Notes

Students will be adding functionality to, and improving, a prebuilt website. The pre-written javascript code for the game is located in `gameScript.js` and the lab will be worked on only in `localStorageScript.js` (not including a spicy extension). 

The main section of the lab has students walk through adding `localStorage.setItem()` and `localStorage.getItem()` to save and upload an entire object into local storage. The first extension has students turn this into an array of objects for multiple users.

It is recommended that you continue to walk students through the first mild extension for those that need extra support. An array of objects can be tricky for students however is essential as we go into Unit 4 APIs. 

### Prompt

Robert has made a quick online game called "Twenty in Ten". He's asking you to add the game data in local storage so that users can eventually log in and continue from where they left off.

**Directions**: All the code you'll be writing will be in `localStorageScript.js`. Before you start, get familiar with the code through the following steps. Complete and discuss with a partner if possible:
- Play the game a couple of times and look for ways it can be improved, or notice what you really like.
- Try refreshing at random times throughout the game and see if that adds to your observations
- Look at the `localStorageScript.js`, and predict what `saveStats()` and `uploadStats()` should be doing.

You may have noticed that there is a lot of room for improvement. Regardless, go through the following check list (with guided answers) before attempting the extensions.

> Note: There are many ways to approach the solutions to these challenges. If you're feeling confident, try going through these steps without peeking at the answers. Otherwise, use the answers to see if you're on the right track.

1. **Save the user's stats in local storage.** The method `saveStats()` is already connected to the game. Finish the method so that the "playerStats" are saved in local storage. Check the _Application_ tab in the _Dev Tools_ to see that the data is being updated after each level is completed. _HINT: Use `localStorage.setItem()` to store the object, and `JSON.stringify(object)` to turn an object into a string._
    <details>
    <summary>One solution to #1</summary>

    ```js
    const saveStats = (playerStats) => {
        localStorage.setItem("playerStats", JSON.stringify(playerStats));
    }
    ```
    > NOTE: You can also add them one at a time using `forEach()`. If you did it that way, good stuff! However, it will be more difficult later on to maintain.
    </details>

2. The function `uploadStats()` is already complete. The first thing it does is call `getUser()`. Finish `getUser()` to **return the user's object if it exist under their name in local storage. Otherwise, return null.** _HINT: You can retrieve data from local storage using `localStorage.getItem()` and you can change a string back to an object using using `JSON.parse(string)`._
    <details>
    <summary>One solution to #2</summary>

    ```js
    const getUser = ( userIDInput ) => {
        const player = JSON.parse(localStorage.getItem("playerStats"))

        if(player && player.userID === userIDInput){
            return player;
        } else {
            return null;
        }
    }
    ```
    </details>

3. The next thing `uploadStats()` does is return the player if they exist in local storage. Otherwise, it creates a new user by calling `createNewUser()`. Finish `createNewUser()` so that it returns an object with the same keys and values as `starterStats` except the new userIDInput is saved as the userID. _HINT: you don't even need to use local storage here!_
    <details>
    <summary>One solution to #3</summary>

    ```js
    const createNewUser = ( userIDInput ) => {
        return {
            userID: userIDInput,
            plays:0,
            currentLevel:START_LEVEL,
            highestLevel:START_LEVEL,
        };
    }
    ```
    > Optional Bonus! Check out the spread operator for an extra challenge on doing this in one line.
    </details>


### Exemplar

Take a look at this [finished example](./U3LAB4-Exemplar/index.html) for the finished version of the site.

### Culturally Responsive Best Practice

[Courtney to add]

### Extra Help?

- JSON.stringify() and JSON.parse()
- The spread operator
- Local Storage vs Session Storage vs Cookies

### Extensions

**Mild**
- `JSON.stringify()` and `JSON.parse()` work for arrays too! Refactor your program so that you **save an array of `playerStats` objects**. Don't remove or add any functions, just change them so that they work for an array of users. _Ex. When a returning user logs in, find them in the array and upload their stats. If it's a new user, add their object to the array._
- Add a stat in **bold** font called **`World Record: `**. This variable should be the highest level reached out of all users that have ever played.
    - Add it as a separate value in local storage, and for now set it to the current player's highest level.
    - Add it in the `index.html`.
    - Every time stats are saved (in `saveStats()`) check to see if World Record should be updated. Then update the local storage value and display it properly on the game site. 

**Medium**
- **Create a "Sign Out" button** so login prompts don't pop up at the beginning of every game. Here's a step-by-step guide for 1 way to do this if you feel you need it:
    1. Add a button below the stats in the `index.html` that says "Sign Out".
    2. Create a variable at the top of the `localStorageScript.js` called "isSignedIn" and set it to false.
    3. Change `userIDInput` to a **global variable** (one outside a function), and only prompt for it and change it's value in `uploadStats()` if `isSignedIn` is false. Then, change `isSignedIn` to true. If it's already true, call `getUser()` normally.
    4. Last, add a click event to the "Sign Out" button that changes `isSignedIn` to false. (If done right, this should automatically queue the prompt to sign in again.)

- **Add a delete account button.** You may have noticed that your local storage doesn't go away on its own. If you exit the page and open a new tab, look at the _Dev Tools_ and see that your local storage is still there! You can manual delete this, but lets add a way to delete this on the game site. 
    - In the `index.html`, add a button below the stats that says "Delete Account".
    - In the `localStorageScript.js`, add an event listener for the button, and delete the current user from the array in local storage.
    - Set `isSignedIn` to false.

**Spicy**
- **Add a Leader Board** for all the users that are in your local storage array. In the `index.html`, find a good place to include a list of users and their highest level reached. In the localStorageScript.js, iterate over the local storage array of users, and display them in order of the highest level reached. _BONUS: Include shortest time as a tie breaker! You'll have to go into `gameScript.js` to do this._ 
- Dive into the `gameScript.js` and **disable multiple clicks on a single button**. HINT: look for the function `handleClick()`.


**Reflection Questions:**

- Account information usually isn't saved in local storage like this. Why do you think that is?
- If you had more time, what improvements would you have liked to make to this game site?
- What other ways might someone use local storage? What kind of other websites could you see local storage being used?
- What was your favorite and least favorite part of the lab?
