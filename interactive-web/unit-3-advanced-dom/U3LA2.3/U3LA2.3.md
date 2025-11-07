---
description: How do you think critically to solve a not-so-straight-forward problem
---

# U3LA2.3: Fuzzy Matching: Autocorrect

### Teacher Notes & Overview

This lesson is sort of a cross between a lab and a lesson. The goal is give students the liberty and encouragement they need to solve an open ended problem in what ever way makes sense to them. "Fuzzy" in the title implies that the solution, as in most real-life situations, is not so clear. The goal is to have students think critically to come up with a viable solution and a reasonable approach that they feel confident about executing.

The data used in this lab is the Billboard top 200 songs as of December 31, 2021. Feel empowered to change this to meet the needs more closely of your specific students. We highly recommend, for example, you survey your students and ask them to give you their favorite 5-10 songs. Then, replace the `top200.js` file with a similar array of objects. _NOTE: The artist "Kodak Black" is used as an example. You will need a different example if you do this._

In the extensions, you can give students the chance to implement their own fuzzy matching algorithm. If you choose to do this, consider giving them an extra day or two to work this out with their partner.

### Objectives

Students will be able to:

* Connect DOM elements by referencing HTML code.
* Iterate through an array of objects
* Control the flow of execution using conditional statements
* Add and remove class names from a class list


### Suggested Duration

1-3 period (~45-135 minutes)

### NYS Computing Standards

[Courtney to Edit]

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Typeahead Search**: a method for progressively searching for and filtering through text. It is also sometimes known as autocomplete.
* **querySelectorAll**: returns a static NodeList representing a list of the document's elements that match the specified group of selectors
* **iterative methods**: a method that repeats a block of code in a specified order, often until a specific result occurs. Algorithms use iterations to run a program repeatedly until it meets certain conditions or until the algorithm repeats a set number of times
* **conditional statements**: they instruct the computer on the decision to make when given some comparison.
* **arrow function**: a “chunk” of code that you can use over and over again, rather than writing it out multiple times.


### Planning Notes && Materials

| Planning Notes | Materials |
| :------------: | :-------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :----------------: | :------------------: | :--------------: |
| In the last lesson, students picked sites that give suggestions while searching. Have the students that were absent do this, and have the other students go back to those sites and see how they handle misspellings. Again, ask them to predict what may be happening behind the scenes. | Print a reference sheet or form a slide deck on required Javascript syntax that students can reference while completing the challenges. This lab focusses on problem solving and creating a plan more so than syntax. Consider forcing some students to take some time to sketch ideas on pencil and paper before coding. | Students have an opportunity to self assess at the close of this lesson. The activity can also be used as a formal assessment. |

### Suggestions for Differentiation

This lesson is already designed to have students engaged for a majority of the time. Students, at there own pace, will be identifying and defining functions and methods throughout the warm up, and they will be choosing their own level of difficulty for the practice activities that come after the lesson demo.

For the practice activity, scope out the difficulty that students will be getting themselves into. Students should be aware that their goal is mild, medium, or spicy, for example. If it's too hard, help them breakdown the task into chunks, or encourage them to tackle something easier first. If the task is "too easy" that is okay. They will finish quickly and try something harder. If the task is too hard, however, they may not finish it leaving them feeling discouraged. 

### Resources

* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* [**Practice: "NYC Boroughs"**](/unit-2-intro-to-dom-manipulation-basics/U2LA3/U2LA3-Starter/index.html) 

### Assessments

**Formative:**

- **Warm Up** writing activity can be collected and serve as a formative assessment.
- Overlook **students' code** and overhear their **conversations** for an informal formative assessment.
- **Practice Activities** and **Wrap Up** reflection questions can serve as formative assessments.

**Summative:**

- Unit 3, Lab 2 (Upcoming Lab)

- Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

Have the students open up the starter code and find the total number of functions and methods being used. As you find them, describe what they do in 1 sentence. They are allowed and encouraged to look things up when applicable. _It is more important that students are able to recognize and explain what a function/ method is and what it is used for. It is less important that students find all of them. The functions that should be prioritized when reviewing are starred (*) below_:
- **Methods**
    - `querySelector()` - selects DOM element by ID or Class Name
    - `toLocaleString()` - turns big number into string with commas
    - `toLowerCase()` - turns string to all lowercase values
    - `forEach()` - array iterator with no return value
    - `add()`/`remove()` - adds or removes class name from DOM element
    - `split()` - splits a string into an array
    - *`includes()` - checks if string is in another string
    - `addEventListener()` - attaches an action to a DOM element when triggered 
    - `push()` - adds an element to the end of a list
- **Functions**
    - `console.log()` - prints values to the console in DevTools window
    - *`displayBadge()` - adds a summary badge of song
    - *`setMatches()` - uses _getMatches()_ populates results to dropdown on search
    - *`getMatches()` - filters the matching songs from the array.
    - *`updateDropdown()` - uses _setMatches()_ to display or hide dropdown on search.
    - [Stretch] `isAnyLetter()` - (not yet used) returns true if the character given is a letter.

After a few minutes, if a majority of students haven't noticed all 3 script files, point their attention to how `script.js` calls `getMatches()` which is defined in `getMatches.js`, and give them more time to explore and define before going over the above function and method definitions.

### Lesson & Demo: Approaching Problems (~20 min)

> This lesson is sort of a cross between a lab and a lesson. The goal is give students the liberty and encouragement they need to solve an open ended problem in what ever way makes sense to them. This section will guide students through 1 approach that they hopefully dislike enough to try and come up with a better one.   

0. Tell students that this lab is done, but with the way the search engine currently works, it doesn't account for misspellings or if one word is accurate and the other is not. For example, if I search for the artist "Codak Black", completely believing that it is spelled with a 'C' and not a 'K', I get **no** results. However, most search engines will be more helpful to users in some way. There are many ways to handle this problem. The following is a walk through through 1 way. After, the students will work in pairs to try different, more efficient ways.

1. Open the `getMatches.js` and show students that the function `getMatches()` is filtering the results for the search. We're going to change it so that the function splits the input into its words, and checks for matches for each split word.

2. Type the following code and ask students to predict what will be console logged when you search "Codak Black". Then, add a space character between the quotes and ask them for a prediction again.  
    ```js
    const getMatches = (string, top200) =>{

        const stringWords = string.split('');
        console.log("string words", stringWords);

        //...
    ```
    _The `.split('')` will turn each character into an array element, and `.split(' ')` will turn each word into an array element._

3. Now, we need to filter the top200 array and return the filtered array. Set up a filter as follows:
    ```js
    const getMatches = (string, top200) =>{

        const stringWords = string.split(' ');
        console.log("string words", stringWords);

        return top200.filter( song => {

            let isMatch = false;

            // Check for each string word

            return isMatch;
        });
    }
    ```
    The variable isMatch is going to represent whether the current song is a match or not. We assume at first that it is not, then we check if we need to change this assumption. Finally, we return it to the filter so it can include or omit it.

4. Lastly, for each split word, we'll use the same condition as before to check that the song title or artist includes it. If so, we can call this song a match.
    ```js
    return top200.filter( song => {

        let isMatch = false;

        for(const word of stringWords) {
             if(song.title.toLowerCase().includes(word) || song.artist.toLowerCase().includes(word)) {
                isMatch = true;
             };
        };

        return isMatch;
    });
    ```
    _After, show students that "Codak Black" will now show results for "Codak" (none) and "Black"._

5. Have the students "think pair share" with their partner another way this code could have been written and better ways this search engine could have been improved. 
    - A `forEach()` method could have been used instead of the `for..of` loop.
    - A `for..of` loop could have been used instead of the `filter()` method.
    - You could have done a search by character (but is this really helpful?)
    - You could allow 1 or 2 letters to be wrong in the search.

    Encourage students' creative suggestions and give them time to brainstorm some ideas they can get excited behind before allowing them to explore coding these solutions in the practice activities.


**Practice Activities**

> Below are recommended fixes to try, but if students think of something more creative or clever, allow them to explore those ideas instead. The goal is for them to practice piecing together computer science concepts to solve an abstract problem.

- [mild] - Wait for 3 characters to be typed before giving any results
- [medium] - Only show the first 10 results, if there's less than 10, think about how you can open it up to recommend other relevant results. (For example, use first letter of the input to make up for missing results, or just fill them with the most popular songs. Be creative here.)
- [spicy] - Allow for misspellings: try allowing 1 letter to be wrong, then 2!

### Wrap Up (\~5 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

- With more time, what are some other additions you would make to this autocorrect search?
- When was a time in the lesson you got stuck? What did you do to get "unstuck"?
- What is something you're most proud of? What is something you'd like to get better at?