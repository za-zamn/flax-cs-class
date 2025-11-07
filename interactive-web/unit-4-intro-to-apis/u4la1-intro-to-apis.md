---
description: What is an API?
---

# U4LA1: Intro to APIs

### Teacher Notes & Overview

Most of this lesson will take place in the browser. The goal is to get students comfortable with accessing different end points by editing URLs and navigating JSON responses right in the browser. The lesson is split in 2 mini lessons. Mini-lesson 1 goes through accessing endpoints straight from the browser, and mini-lesson 2 goes through coding requests using "async await".

Open APIs with multiple endpoints are hard to come by, but if you find one that is more appropriate for your students, feel empowered to choose that one instead. The activities below should work with any open API with at least 3 endpoints.

This activity works best with the chrome extension [JSONView](https://chrome.google.com/webstore/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd?hl=en) or a similar extension that allows for formatted JSON response. We recommend downloading one and having your students do this as well before beginning the lesson. However, this can also be effective with a free online JSON viewer like [CodeBeautify.Org](https://codebeautify.org/jsonviewer) or something similar.

Lastly, there are plenty of student extensions to do this lesson over 2 or 3 days if needed. However, this is meant to be an introduction to APIs and should not overwhelm students. Most of the extensions (Medium and Spicy) are for the students who will immediately click with the idea of requests and responses. Students are only required to feel comfortable with the Mild in both extension sections. In the next lesson (Unit 4 lesson 1.2) students will have more of an opportunity to dive into code.

### Objectives

Students will be able to:

* Read the documentation for the JService open API.
* Access endpoints on the browser.
* Read and interpret JSON data in the browser.
* Use a basic fetch command.

### Suggested Duration

1-2 periods (\~45-90 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.7** Design or remix a program that utilizes a data structure to maintain changes to related pieces of data.
* **9-12.NSD.4** Describe the components and design characteristics that allow data and information to be moved, stored, and referenced over the Internet.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Open API** - An application programming interface is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
* **Request** - An API request is a message sent to a server asking an API to provide a service or information.
* **Endpoint** - a point at which an API -- the code that allows two software programs to communicate with each other -- connects with the software program
* **Response** - A response is defined by its HTTP status code and the data returned in the response body and/or headers
* **JSON** - (JavaScript Object Notation) is purely a string with a specified data format — it contains only properties, no methods.
* **fetch** - the retrieval of data by a software program, script, or hardware device

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                                                         Multiple Means of Representation                                                                                                        |                                                               Multiple Means of Engagement                                                               |                                                                                                                               Multiple Means of Expression                                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Consider having students research and discuss websites they've used that contain large amounts of data. Have them discuss whether they needed to see all of it at one time, and the predicted pros and cons of such a requirement on a website. | This lesson involves a lot of new vocabulary. It may be wise to have a resource or reference to these definitions that is easily accessible to students. | Students will be exploring and documenting endpoints and programming a bit of requests. Consider giving them an opportunity to communicate their understanding with each other and write their explanations on paper to practice the use of vocabulary and solidify their understanding. |

### Suggestions for Differentiation

If students have a hard time starting the extensions consider spending more time going through more examples of API calls from the browser as this is the critical endpoint for them to be able to move forward. The _"Mini Lesson 1 Activity: Scavenger Hunt"_ has questions that fall in this category.

Furthermore, if students need more time to digest the first mini-activity, allow them to stay on that while others move on to the second mini-activity section.

### Resources

* **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA1-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA1.1/U4LA1.1-Starter))
* **Lesson Exemplar Code and Mini Lesson Answers** ([repl.it](https://replit.com/@qrtnycs4all/U4LA11-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA1.1/U4LA1.1-Exemplar))
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* Beware the error `ERR_FAILED 429 (Too Many Requests)` this means that you are making too many requests consecutively.
  * For a temporary fix, just wait a full minute before trying again and add some console.logs at the beginning of every iteration.
  * For a long term fix, you may be running into an endless loop. Double check your logic.

### Assessments

**Formative:**

* **"Mini Lesson Activity"s Code** can be collected and assessed as needed
* **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

* Unit 4, Open API Lab 1 (Upcoming Lab)
* Unit 4 Final Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Go to, and have the students go to, `https://jservice.io/api/random`. Tell students that this website doesn't have any front end but instead gives us _an array with 1 object in it_.

Ask students, to explain to their partner what they think each property means. Bonus points if they can guess what old-time game show this is.

> Note: they should all have a different question on the screen. Tell them to refresh and notice the changes.

Make some of the following observations with the students. Consider asking them as predictions before revealing the solution:

* `category_id` is the same value as `category.id`
* `value` is the number of points this question is worth
* The category this question belongs to is under `category.title`
* `category` is an object within an object!
* The game show is _"Jeopardy"_

**Conclusion**

This is not a website. This is actually an _API endpoint_. An **API**, an application programming interface, is a way in which your computer can access specific parts of a database without having to download the entire database. The specific URL that allows you to access the data in a specific way is called an **endpoint**. The endpoint we've been using in this warm-up is `https://jservice.io/api/random`.

### Mini Lesson 1: API endpoints from the browser (\~10 min)

Have students get rid of the `api/random` part of the url and go to `https://jservice.io/`. This is where you'll find the documentation for the API and all of its endpoints. With this website, we'll learn to craft an endpoint and find the data we're looking for.

1.  For example, type the following endpoint in the address bar and ask students to predict what you will get when you press enter:

    `https://jservice.io/api/categories`

    It responds with a single category - its ID, title, and number of clues that exist in that category. Pretty neat!

> **Vocabulary**! - When ever we make a http **request** using an API endpoint, we can expect a **response**. In the case of a successful request, our response is the data.

2.  What if we want more options than just one category? We can add a parameter "count" as follows:

    `https://jservice.io/api/categories?count=5`

    Notice the question mark. This API is set up so that any options or filtering can be done so after the question mark. Here we say, "give me 5 categories".
3. In the main documentation page, `https://jservice.io/`, click on "clues". Predict with your partner what we've said with this endpoint, and what the options are doing.
   * The "clues" endpoint gives us a list of the first 100 clues in the database.
   * The "value" option filters it to questions that are 100 points only
   * The "min\_date" option filters it to questions that are beyond the certain date.

**Mini Lesson 1 Activity: Scavenger Hunt (\~10 min)**

Scavenger Hunt! Try and find the following information by accessing the right endpoint.

**Mild**

* Any 3 Random questions
* Any 10 categories and their IDs

**Medium**

* The category title for category ID 49
* The number of clues for category ID 181

**Spicy**

* The answer for the only 400 point level question that came out in the year 2022 with a category ID of 60.
* The 101st category ID.

> **Note for Teachers**: Answers in the **Lesson Exemplar Code and Mini Lesson Answers** ([repl.it](https://replit.com/@qrtnycs4all/U4LA11-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA1.1/U4LA1.1-Exemplar))

### Mini Lesson 2: Requests in Javascript (\~10 min)

Now open the **Lesson Starter Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA1-Lesson-Starter-Code) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA1.1/U4LA1.1-Starter)) and have students do the same. If only there was a way to access this data that's in data structures that we're familiar with (arrays, objects etc.) in Javascript. In javascript, we can make these requests and access the data straight from our code.

1. In the browser, type the link `https://jservice.io/api/categories?count=5` to reiterate that this endpoint accesses the first 5 categories in the database.
2.  In the `script.js`, in the function `get5Categories()` point to the link saved under `endpoint`, and add the following piece of code to the function:

    ```js
    const get5Categories = () => {
        // The endpoint (url) that we want to get data from
        let endpoint = "https://jservice.io/api/categories?count=5";

        // The function that gets the data
        let response = fetch(endpoint);

        // Print the data?
        console.log(response);
    }

    get5Categories();
    ```

    In the code above, the `endpoint` variable holds the URL we are trying to get data from. The function `fetch()` should get that data (JSON) for us and save it in the response `variable`.
3. Run the code, and show students that what we expect to see is not coming out. Instead, we get a _"Promise"_. That's because it's quicker for our program to run than it is for the JSON data to load. Instead of getting nothing while we wait for the data, we get this Promise ensuring that the data will be replaced in this variable once it loads.
4.  In order for our program to wait for the data to load, we must tell it to wait. This whole process should happen independently of (or asynchronously from) the rest of the program. Make the following adjustments to your code to illustrate this.

    ```js
    //Notice the async function
    const get5Categories = async () => {
        let endpoint = "https://jservice.io/api/categories?count=5";

        //await the fetching of data
        let response = await fetch(endpoint);

        console.log(response);
    }

    get5Categories();
    ```

    Again, we don't quite get what we're looking for, but this time if we open the response that was logged, we can see a _200 status code_ and a `statusText` of _"OK"_ meaning everything was sent with success. If you open the `[[Prototype]] : Response` attribute, you will see the .json() function we can call to finally get the data.
5.  The last step is to call the `.json()` function off the response to see the data. NOTE: if you don't await this, you will get a Promise again.

    ```js
        //await the fetching of data
        let response = await fetch(endpoint);
        //extract the json data
        let data = await response.json();

        console.log(data);
    }
    ```

**Mini Lesson 2 Activity: Async Functions**

For each of the following activities, refer to the Mini-Lesson 1 answers or the [JService documentation](http://jservice.io/).

**Mild**

* Create a function called `getClues500()` that gets and prints clues that are worth 500 points.
* Create a function called `getQuestions10()` that gets 10 random questions. Use `.forEach()` to print only the questions for each one.

**Medium**

* Create a function called getFinals(count) that takes in a number and prints that many final jeopardy questions.
*   Create a function that looks up 1 random question, and prints all the questions with that same category. Note: you will have to make a function within a function. Use the following template

    ```js
    const getRandomCategory = async () => {
        const getRandomID = async () => {
            //API call to random
            
            //return categoryID
            return await id;
        }

        const id = await getRandomID();

        //API call to category by ID

        //Console log all questions
    }
    ```

**Spicy**

* In Jeopardy, there are 5 questions for each category each with unique values. Copy and change the previous function (call it `getCategory5()`) so that it prints the first 5 questions from a random category that has at least 5 questions. Try these hints 1 at a time until you get them working individually:
  * HINT: Use a _while loop_ to get a random category ID that has at least 5 questions.
  * HINT: Use `.slice()` to print a subset of an array (to only get the first 5 questions).
*   A full jeopardy board contains 5 categories (of 5 questions each). Create an async function `getBoard()` that uses the function that you created in the previous challenge, `getCategory5()`, 5 times. Lastly, It should check that the point values are 100-500 (not 200-1000) and save it and print it from an object `finalBoard`:

    ```js
    finalBoard = {
        category1: [{…}, {…}, {…}, {…}, {…}],
        category2: [{…}, {…}, {…}, {…}, {…}],
        ...
    }
    ```

    * HINT: you'll need another while loop to check that the first question's value is 100
    * NOTE: Beware the error `ERR_FAILED 429 (Too Many Requests)` this means that you are making too many requests consecutively. See [Resources](u4la1-intro-to-apis.md#resources).

### Wrap-Up (\~5-10 minutes)

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question or two to answer on an easily collectible paper or document:

1. In your own words, what's the difference between an API endpoint url and a regular URL like http://google.com?
2. What kind of websites could you imagine needing to use APIs to access large amounts of data? Which kind of websites probably won't need to use APIs?
3. What did you have the most difficulty with? How did you get through it?
