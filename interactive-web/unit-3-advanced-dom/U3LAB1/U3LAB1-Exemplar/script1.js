// Arrays

/******** Part 1 ********/
//// Use the fav_foods array when writing the code for the following challenges


fav_foods = ["Cheeseburger", "Ramen", "Tamales", "Bulgogi", "Donuts"];

// 1. Console log the 2nd favorite food (Ramen) from the array
console.log(fav_foods[1]);

// 2. Add "Tres Leches" to the array
fav_foods.push("Tres Leches");

// 3. Change "Cheeseburger" to "Hamburger"
fav_foods[0] = "Hamburger"

// 4. Remove Donuts from the array
fav_foods.splice(4, 1)


console.log(fav_foods);



/******** Part 2 ********/

// 5. Create an array fav_songs OR fav_bands OR fav_artists and fill it with your top 5
//// Don't forget to console.log the array to see the results
let fav_artist = [
    "Beyonce",
    "Ed Sheeran",
    "Adele",
    "Ariana Grande",
    "Nicki Minaj"
]

console.log("Favorite Artists before:", fav_artist);

// 6. Console log your number 1 choice
console.log(fav_artist[0]);

// 7. Change your third choice to your partner's third choice
//// NOTE: its okay if your partner picked a different category
fav_artist[2] = "Jonas Brothers";

// 8. Add your partner's number 1 choice to your list
fav_artist.push("Rihanna");

// 9. Remove your number 4 choice.
fav_artist.splice(3, 1);

console.log("Favorite Artists after:", fav_artist);



/******** Part 3 ********/
//// Use these arrays when writing the code for the following challenges

let class1 = ["Dahlia", "Perry", "Ruby", "Danika", "Johnathan", "Renae", "Devon", "Bradly", "Lindsey", "Marley", "Yousef", "Siera", "Kailee", "Lauren", "Santana"]
let class2 = ["Emery", "Ramiro", "Randy", "Shea", "Max", "Rashad", "Anna", "Elaina", "Yesica", "Sarah", "Moira", "Tyrell", "Acacia", "Jania", "Jair", "Marisol", "Christianna", "Lizette"]

// 10. Use a method to SORT the 2 arrays alphabetically
class1.sort();
class2.sort();

// 11. Use a method to REVERSE the 2 arrays
class1.reverse();
class2.reverse();

// 12. Print the length of the 2 arrays
console.log("Period 1 length:", class1.length);
console.log("Period 2 length:", class2.length);

// 13. Use a method to combine the 2 arrays into one called allStudents
let allStudents = class1.concat(class2);

// 14. Use a method to insert a your name in the front spot of allStudents
allStudents.unshift("Manny");

// 15. Sort allStudents and find and use a method to remove the middle item and save it in it's own variable "median"
allStudents.sort();
let midIndex = (allStudents.length)/2;
let median = allStudents.splice(midIndex, 1);


console.log("Period 1 class:", class1);
console.log("Period 2 class:", class2);
console.log("All students", allStudents);
console.log("Median", median)



/******** Part 4 [Spicy] ********/

let sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood";

// 16. Use a method to SPLIT this string into an array of its words. Save it as sentenceArray
let sentenceArray = sentence.split(' ');
console.log("sentence as an array", sentenceArray);

// 17. Use a method to find the first time "woodchuck" appears in the array
let idxWoodchuck = sentenceArray.indexOf("woodchuck");
console.log( "Index of 1st woodchuck", idxWoodchuck );

// 18. Reference documentation -- What will the line below do?
/// Then, uncomment it and run it.

console.log(sentenceArray.find((food) => food.includes("d")));

// Find/return the first element with the letter 'd' in it.