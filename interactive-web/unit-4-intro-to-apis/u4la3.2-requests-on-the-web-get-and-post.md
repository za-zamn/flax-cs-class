---
description: What do API calls look like on other websites?
---

# U4LA3.2: Requests on the Web - GET & POST

### Teacher Notes & Overview

This lesson is a guided exploration through websites and how they make POST and GET requests. **It doesn't require any coding on the students part**, but instead learning to use and observe new tools on the browser: the URL and tabs in the dev tools.

As students head toward their final projects, the tools here will put them in a better place to choose their depth of learning with APIs. APIs vary greatly in how they're used and how the syntax should be written to use each of them. Instead of showing another example of an API that is perhaps more challenging or requires say a `timeout` function. We chose to remain conceptual and allow for a more self-regulated exploration.

### Objectives

Students will be able to:

* See URLs as endpoints with parameters.
* Explain the benefits and drawbacks of using GET vs POST.
* Use the Network tab in Dev Tools to track requests and responses.

### Suggested Duration

1 period (\~45 minutes)

### NYS Computing Standards

* **9-12.CT.4** Implement a program using a combination of student-defined and third-party functions to organize the computation.
* **9-12.CT.7** Design or remix a program that utilizes a data structure to maintain changes to related pieces of data.
* **9-12.NSD.4** Describe the components and design characteristics that allow data and information to be moved, stored, and referenced over the Internet.
* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Request** - An API request is a message sent to a server asking an API to provide a service or information.
* **Endpoint** - a point at which an API -- the code that allows two software programs to communicate with each other -- connects with the software program
* **Response** - A response is defined by its HTTP status code and the data returned in the response body and/or headers
* **JSON** - (JavaScript Object Notation) is purely a string with a specified data format — it contains only properties, no methods.
* **GET request** - GET is used to request data from a specified resource.
* **POST request** - POST is used to send data to a server to create/update a resource.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |              Materials              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required_ |

### Suggestions for UDL

|                                                                                                                                   Multiple Means of Representation                                                                                                                                   |                                                                                                              Multiple Means of Engagement                                                                                                              |                                                                                                            Multiple Means of Expression                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| As you prep the lesson, consider using websites that students are more familiar with. Be sure to check that theses sites have POST and GET requests, and an intuitive url. Alternatively, give students time to play with these concepts by looking for similar concepts in their favorite websites. | The activities in this lesson are filled with opportunities where students can explore. Be sure to check in with the rationale for the lesson, and allow students to communicate their observations and questions either as a group or with a partner. | Students will be navigating websites and conversing with partners or groups which can both be informally assessed by walking around the classroom. Additionally you can have students articulate their ideas and observations through the wrap up. |

### Suggestions for Differentiation

Some students learn better by watching rather than coding or typing along. For these students, consider creating a slide deck of the main ideas, or a large post-it or space on the board with key takeaways.

This lesson works best if students are working in pairs. They can then hold each other accountable and help each other stay on pace with your teaching.

As you walk around helping some students find and understand things like the Network tab in the dev tools or the parameters in the URL, consider having the other students find 2-3 other examples in other websites.

### Resources

* **Lesson Exemplar Code** ([repl.it](https://replit.com/@qrtnycs4all/U4LA32-EXEMPLAR) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-4-intro-to-apis/U4LA3.2/U4LA3.2-Exemplar))
* [**Repl.it**](https://replit.com/\~)- online IDE
* [**W3 Schools\*\***](https://www.w3schools.com/html/) - readable documentation
* [**MDN**](https://developer.mozilla.org/en-US/) - a robust but sometimes less student-friendly documentation
* [**Practice: "Javascript Arrays, Iteration, and Objects"**](../unit-3-advanced-dom/U3LA1/U3LA1-Exemplar/index.html)

### Assessments

**Formative:**

* Informally walk around observing and listening in on conversations about students' observations, predictions, and understandings.
* **Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

* Unit 4 Final Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

1. Open up a new tab in "incognito mode" (or not signed in to an account) and head over to Google.com. Instruct students that they may do this along with you if they'd like
2. Demo for students a search for say a celebrity like Beyonce. Then, point out the URL or endpoint we are hitting. It should look as follows:

```
https://www.google.com/search?q=beyonce&oq=beyonce&aqs=chrome.0.69i59l2j0i271l2j69i60l2j69i61.967j0j1&sourceid=firefox&ie=UTF-8 
```

3. Ask students in pairs to see if they can find the parameter in the URL that is specifying a search for `beyonce`. Then, give them a couple of minutes to play:
   * Search for someone else and confirm that this part of the URL has changed as expected
   * Get rid of everything else in the URL and see what happens to it. How short can you make it?
   * Can you make a search for another celebrity by only changing the URL?
   * How does this relate or differ from APIs as we've learned it thus far?
4. After a couple of minutes discuss and share the answer for these keeping the following points in mind:
   * The shortest URL that still works is `https://www.google.com/search?q=beyonce` where it's assumed that q stands for query.
   * You can search for something with spaces using the `+` symbol. ie. `https://www.google.com/search?q=ariana+grande`
   * This works the same as an API! The website is an endpoint, that can take a search query, and the response is an entire website instead of just a JSON object.

> DISTINCTION: though this works similar to an API, it is **not** an API. It's a _server_ which, if there's time, will be explored in detail in Unit 5. What is likely happening is that the website is accessing the true API behind the scenes, and converting the JSON response into a nice front end site for our enjoyment purposes. This is what students will be doing in the Final Project and in part what they did with the previous labs.

### Lesson Demo (\~25-30 min)

**Post vs GET**

1. Let's look at another website. Head over to the [Github Login page](https://github.com/login). Log in with your real (or fake) username and password, and ask students why we don't see the username or password up in the URL as a parameter like we saw the search results in Google.
   * It's true, in the background an API is still being used to check that the credentials are correct,
   * However, it won't be safe to put username and password information in the URL for all to see.
2. There is a safer way to send the form inputs as part of the fetch to check that the user has valid login credentials. Using POST as opposed to GET.
3. \[Optional] Open the exemplar script and show students what a GET request vs a POST request might look like.
4. Ask students to brainstorm when a POST request might be used.
   * Signing up for a new account (POST the new information)
   * Completing a test or form of some kind (POSTing the answers)
   * Deleting an account! There are other actions besides POST and GET like DELETE, but surprisingly, some APIs use POST to delete information from the database. Think of it as a request to delete.

**POST and GET in the Network Tab**

5.  Head back to Google and this time before making a search, open the Network tab in the Devtools. Be sure you have the column titled Method. It should show a couple of GET requests as shown below.&#x20;

    <figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>
6. Now have students do the same search they did before one letter at a time, and give them a few minutes to explore the following:
   * What do you notice?
   * When you complete the search what happens? Are we GETting or POSTing? Why?
   * Can you find the response and headers?
7. Go through the process with them, and discuss the questions with the following points in mind:
   * Each letter triggers a GET request; Google uses an API to get suggestions for their typeahead search dropdown.
   * On, the new page, there are many GETs and POSTs that happen right away. The site is probably getting all the images and links needed for the search word, and the site is probably POSTing our search history and the ID for this search result.
   * If you click on the Name of any of the requests, you should see a window that displays the headers and response for the request. See #8.
8.  Spend some time showing the students the Header and Response tab, and ask them to explore that with you. Pay special attention to the URL, Method, and see if you can parse through the response JSON.&#x20;

    <figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
9. API's are truly used in almost every modern website. Now students have all the resources they need to continue their exploration.

### Wrap-Up (\~5-10 minutes)

Before students leave, ask them to select a question or two to answer on an easily collectible paper or document:

1. What are the benefits and drawbacks of using GET over POST? ... POST over GET?
2. Most of the "Name"s in the Dev tools aren't straightforward. Why do you think this is? For example, instead of "log?slf\_rd=1", "LogInUser" or "GetAdForPage" would be much better descriptors.
3. What are some examples of websites that you would imagine using Get requests? ... Post requests.
