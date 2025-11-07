---
description: What does the use of APIs look like in a website.
---

# 🎨 Unit 4 Final Project: API GUIs

### Teacher Notes

Students are creating a website that allows them to bring an API of their choosing to life. For some, this will feel like a great opportunity to connect all the skills they've learned up until this point. For others, they will want to make something simple to feel competent with this skill.

The prompt is purposely left open-ended so that students can identify with the API they and their partner are on board with. However, be prepared to have a default plan for the students that get stuck with indecision. We suggest picking an easy, medium, and hard API that they can choose from, or pushing an easy, flexible one like the DeckOfCardsAPI used in the exemplar.

Beware of students who have very high ambitions with their projects. So long as they have a plan, several MVPs they can aim to achieve along the way, and an estimate of how long each MVP might take, they should feel accomplished each step of the way and not defeated when they run out of time.

_**Students will be building their projects from scratch, so there is no starter code.**_

### Prompt

APIs carry a ton of data: pictures of animals, jeopardy questions, user data, etc. However, looking at a JSON response is not the best user experience. Make a website that showcases the beauty of your favorite API.

**Directions**: Do a bit of exploring for an API that interests you, and create a Graphical User Interface (GUI) for it.

For example:

* If it's an **Animals API**, pictures of animals, then make a site called "Animal of the Day" that shows a random animal image, or "Breed of the Day" that shows a grid of multiple animals in the same breed.
* If it's **Trivia Questions API**, like the jeopardy one, then create cards and filters that users can interact with like we did in Unit 4 Lesson 1.2, or push yourself to make a full-on jeopardy board or similar game.
* If it's a **User Data API**, for example, player stats or social media users, allow the user to filter by age height, or something related to the data in the API.

**Requirements**:

* **Use an API** - there are many more closed APIs available than open, but try to just find on that interests you.
* Include **at least 2 inputs** that allow the user to interact with the website. For example, a button to launch a random picture and a save button that allows the user to save their favorites in local storage.

### Exemplar

Take a look at this **finished example (**[**repl.it**](https://replit.com/@qrtnycs4all/Unit-4-Final-Project-EXEMPLAR) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4FINAL/U4FINAL-Exemplar)**)** or the finished version of the site.

### Culturally Responsive Best Practice

Some students will find it difficult to commit to an idea and will find it hard to think of one. Those same students tend to get most inspired when hearing other students' ideas. Consider giving students \~20 minutes to research and formulate 5-10 ideas amongst groups of 2-4 per. Share the ideas amongst the class as you rank their difficulty level. (This can be done easily via a Google Sheet or with sticky notes on the wall). Then, students can put their name next to their favorite 1-3 ideas, and pair themselves off this way.

### Extra Help?

* [7 Beginner-Friendly Projects Using APIs](https://plainenglish.io/blog/top-beginner-friendly-projects-using-apis-f43356aeac7f)

### Extensions

Consider adding more to your website in any of the following ways:

* **Add more CSS** - With your first MVP, you may want to hold back on using too much CSS so you can focus on getting your API up and running, but later on, enhance the user experience by refining the styles of you site.
* **Another API** - If your API only has one endpoint, there's only so much you can do. Consider incorporating a second compatible one. (For Example, if you're using a random dog picture API, can you find another API on dog features like breed, lifespan, etc.) -- If your API is already pretty complex, consider adding a second one that is much simpler.
* **Gamify your API** - Even a seemingly simple API, like _random dog images_, can be turned into a game. For example, _"The 'Which Dog is Cuter' Tournament"_, _"Which breed lives longer?"_, or _"Which picture was made using AI"_
* **Let the user filter** - Allow them to only see: "Questions with point values over 100", "Birds with wingspans smaller than 100mm", "Songs by a certain artist and from a certain year", etc.
* **Combine older topics** - Is your site _accessible_? Is there an opportunity to store user data in local storage? Do you have big chunks of HTML code in your Javascript file, or are you adding HTML using `createElement()` and `appendChild()` for example?

**Reflection Questions:**

* With more time, what else would you have added or changed?
* What are you most proud of? What did you struggle the most with?
* What's one thing you'd like to get better at in regards to APIs?
