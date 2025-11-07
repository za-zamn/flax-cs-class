// Array Iteration

/******** Part 1 ********/

const fav_foods = ["Cheeseburger", "Ramen", "Tamales", "Bulgogi", "Donuts"];


// 1. Console log the sentence "I like ______" 5 times, with a food filling the blank each time.
fav_foods.forEach(food => console.log(`I like ${food}`));

// 2. Produce this: ["⭐️CHEESEBURGER⭐️","⭐️RAMEN⭐️","⭐️TAMALES⭐️","⭐️BULGOGI⭐️","⭐️DONUTS⭐️"]
const starredFoods = fav_foods.map(food => `⭐️${food}⭐️`)
console.log("Starred Foods:", starredFoods);

// 3. Produce a shortened list of just the words with the letter "e" in them.
const eFoods = fav_foods.filter(food => food.includes('e'));
console.log("Foods with letter e:", eFoods);

// 4. Produce the total number of letters in all five strings combined.
let sum = fav_foods.reduce( (total, food) => total + food.length, 0);
console.log( "Sum of lengths:", sum )

//method 2
sum = 0;
for(let food of fav_foods){
  sum += food.length;
}
//print sum


// 5. Produce a shorter list of all the words at least 7 letters long.
const longWords = fav_foods.filter(food => food.length >= 7);
console.log("Words 7 chars or more:", longWords);

// 6. [Spicy] Produce this: ["C","R","T","B","D"]
const initials = fav_foods.map(food => food[0]);
console.log("Initials:", initials)




/******** Part 2 ********/

const people = [
  {
    name: "Yhadira",
    nickname: "Deary",
    age: 18,
    animal: "Cat",
    born: "Queens",
  },
  {
    name: "Kadiatou",
    nickname: "Kadi-B",
    age: 17,
    animal: "Ferret",
    born: "The Bronx",
  },
  {
    name: "Isiah",
    nickname: "Izzy",
    age: 16,
    animal: "Dog",
    born: "Manhattan",
  },
  {
    name: "Yadelin",
    nickname: "Loki",
    age: 19,
    animal: "Sloth",
    born: "The Bronx",
  },
  {
    name: "Darius",
    nickname: "Yaddy",
    age: 17,
    animal: "Zebra",
    born: "Brooklyn",
  },
  {
    name: "Jocelyn",
    nickname: "JayJay",
    age: 15,
    animal: "Fennec Fox",
    born: "Staten Island",
  },
];

// 7. Find the average age.
/// Multiple ways to do this!
const avgAge = people.reduce((total, person) => total + person.age/people.length, 0);
console.log("Average age:", avgAge);

// 8. Create a smaller list of just the people who are at least 18.
const legalPpl = people.filter(person => person.age >= 18);
console.log("People at least 18", legalPpl);

// 9. Produce this: ['Yhadira', 'Kadiatou', 'Isiah', 'Yadelin', 'Darius', 'Jocelyn']
const firstNames = people.map((person) => person.name);
console.log("First Names", firstNames);

// 10. Produce this:
// ['<p>A Cat for Yhadira!</p>', '<p>A Ferret for Kadiatou!</p>', '<p>A Dog for Isiah!</p>', '<p>A Sloth for Yadelin!</p>', '<p>A Zebra for Darius!</p>', '<p>A Fennec Fox for Jocelyn!</p>']
const nameMap = people.map(
  (person) => `<p>A ${person.animal} for ${person.name}!</p>`
);
console.log("People's Bio", nameMap);

// 11. Create a smaller list of just the people from The Bronx or Brooklyn.
const bronxBrook = people.filter( person => (person.born === "The Bronx" || person.born === "Brooklyn"));
console.log( "Brooklyn or Bronx People:", bronxBrook);



/******** Stretch ********/

// 12. [Spicy] With this starting object, count the number of occurrences of each vowel in the people's names and nicknames combined.
const vowelCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

people.forEach(person => {
  [person.name, person.nickname].forEach( word => {
    word.split('').forEach(letter => {
      if (letter.toLowerCase() in vowelCount) {
        vowelCount[letter.toLowerCase()] += 1;
      }
    })
  } )
})

console.log("vowelCount", vowelCount);

// 13. [Super Spicy] Count the occurrences of all 26 letters of the alphabet in the people's names and nicknames combined.
const letterCount = {};

const alphabetList = "abcdefghijklmnopqrstuvwxyz".split('');
alphabetList.forEach( letter => letterCount[letter] = 0);

people.forEach(person => {
  [person.name, person.nickname].forEach( word => {
    word.split('').forEach(letter => {
      if (letter.toLowerCase() in letterCount) {
        letterCount[letter.toLowerCase()] += 1;
      }
    })
  } )
})

console.log("All letters", letterCount);