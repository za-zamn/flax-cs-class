---
description: How do you integrate other people's software into yours?
---

# U4LA3: APIs vs. SDKs

## Preface && Context

### Teacher Notes && Overview

In this lesson, students will integrate the Giphy SDK into a web app. You should familiarize yourself with the SDK through the exemplar and the documentation. Pay special attention to the API key sign-up process, which is likely to evolve over time and trip up students. If you've already done the closed API lesson, you can either reuse the key for simplicity or have them create an additional key to demonstrate keeping keys for different apps separate.

Note that the sample code is _not_ raw HTML/CSS/JS, but needs to be bundled with Parcel to run. All of this is already scripted; the `npm start` command will bundle and host the app automatically, as well as live-reload on changes. The need for Parcel (and the unusual code in the `index.html` file) comes from the Giphy SDK being delivered as a Node module. It's not important to the lesson to understand how this works, so feel free to skim over it with the students. _Note: Replit should automatically run `npm install` upon the first Run to install the dependencies, but if you're running the repo independently you'll need to do that first._

You have the option of putting the API key directly in the code for simplicity or using environment variables to demonstrate keeping the key out of the code. Either way, make sure you highlight the importance of keeping sensitive data like keys out of source code. Discuss the dangers of a key being leaked.

### Objectives

Students will be able to:

* Define APIs and SDKs
* Identify the benefits of using APIs and SDKs
* Use the Giphy Web SDK to retrieve and display GIFs on a web page

### Suggested Duration

\~1 Period (\~45 min)

### NYS Standards

### Vocabulary

* **API:** Application Programming Interface; A set of rules and protocols that allow different software applications to communicate and interact with each other
* **API Key:** A string that securely identifies you to an API
* **SDK:** Software Development Kit; a collection of software tools, libraries, and documentation that simplifies the process of building software applications for a specific platform or service

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| Familiarize yourself with the Giphy Web SDK documentation (https://developers.giphy.com/docs/sdk) and sample code. | [Starter Code](./U4LA3-Starter) |
| Review the exemplar | [Exemplar Code](./U4LA3-Exemplar) |
| Practice signing up for an API key so you'll be able to walk students through it | |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| Students may need additional examples for understanding what a GIF is. In particular, pay attention to how they're commonly used as an expressive way to communicate online. | Students may have trouble with the abstract concept of an API. It may help to find ways to make it more concrete, such as mailing a letter asking for something or playing a game sending each other instructions in a specific format. | The discussions can be done async or virtual, the hands-on parts can be done individually, in groups, or as a class |

### Suggestions for Differentiation

* You have some flexibility in how much this lesson is independent research vs. following along directly with you.
* Likewise, you can flex how much of the lesson is spent discussing the concepts vs. playing with different SDK features
* You can try having students incorporate what they know about forms to build a like app with the SDK, such as passing on a search term and displaying the top 10 results

### Resources

* [Giphy SDK docs](https://developers.giphy.com/docs/sdk/#web)

### Assessments

**Formative:**

* Observe student engagement and participation during the hands-on activity
* Evaluate the completeness and functionality of the web pages created by each group
* Encourage students to ask questions and participate in group discussions

**Summative:**

API Final Project (End of Unit Project)

## Lesson

### Do Now/Warm Up (\~5 min)

In the previous two labs, we had an `api.js`. Pull up the exemplar `api.js` for either _LAB 1_ or _LAB 2_, and ask students the following questions:
- Why do you think it's a good idea to have this stuff separated from the `script.js`?
- What might cause this file to grow or shrink in size?

The `api.js` consists of all the functions being used to communicate with the API. When programming in this file, the focus is having of the proper endpoint, parameters, and try catch blocks. In the main `script.js`, the focus is everything else. These methods are called but expected to operate as designed.

If the API is more complicated or if there are more unique calls that need to be made, the `api.js` will grow. As it grows, programmers consider another less tedious way to access data through the API.

### Understanding SDKs (\~15 min)

* An SDK (Software Development Kit) is a collection of software tools, libraries, and documentation that simplifies the process of building software applications for a specific platform or service. Some examples of popular SDKs include the Facebook SDK, the Amazon Web Services SDK, or the Giphy Web SDK.
    ```js
    // Example of API

    // Save API key once
    const apiKey = 'YOUR_API_KEY';

    // Create a custom made function every time you need to request.
    const getSetImage = async () => {
        const response = await fetch(`https://someapi.com/image?size=large&api_key={apiKey}`);
        const data = await response.json();

        return `<img src={data}/>`
    }
    ```
    ```js
    // Example of SDK

    // Put this line in the index.html
    ```<script src="https://someapi.com/js?key=YOUR_API_KEY&callback=init"></script>```
    
    // Call special function to make requests
    const imgLink = new someapi.ImgLink({size:"large"});
    ```
* In the first example, we can see all the steps to directly request the API. In the second, the steps are hidden, and we only have to write 1 line in the `index.html`! Ask students what might be the pros and cons of these two methods.
    - SDKs have less code, but more "magic" or behind the scenes logic.
    - APIs allow us to personalize and customize more.
    - APIs are usually more flexible and follow more customizable patterns than SDKs. SDKs usually require less code to work with. You may compare this to using a standard `for` loop vs using a `forEach()` loop.

### Exploring the Giphy Web SDK (\~15 minutes)

- The Giphy Web SDK is a tool that enables developers to integrate the Giphy service into their web applications. Gifs! You can search for GIFs, display trending GIFs, or create custom GIF stickers.
- Show the students some of the Gifs and the Giphy Web SDK documentation and highlight the available methods and parameters. Provide a brief overview of the code provided in the exemplar to illustrate some examples of use. There is also an example below:

```js
// script.js

// Your API key here instead of this one
const gf = new GiphyFetch("4VKguYeR2btOeGHQK13652HEZK0AdO2Y")
// Search the SDK for the term "cats". Note that the SDK makes the request over a network, meaning it's asynchronous and must be awaited
const result = await gf.search("cats")
// This path contains a URL to the first matching Gif
$gif.src = result.data[0].images.original.url
```

- Have student work along side you to obtain an API key from the Giphy Developer Portal. 

### Hands-on Activity: Integrating Giphy Web SDK (\~20 minutes)

* Have students open the `script.js` in the starter code, and have them try to:
    - Connect to the API
    - Display 5 images from the API.
    - Make adjustments to the HTML and CSS and pretty up your display of Gifs. [Stretch]

* Have one or more groups present their web page and demonstrate code for the integration of the Giphy Web SDK.
* Discuss the challenges faced by students during the activity and how they overcame them.
* Ask students if they like SDKs over APIs? Why or why not? Lead a brief discussion on the advantages and limitations of using SDKs. _The primary benefit is simplicity, the primary limitations are non-standard interfaces and not as flexible._

### Wrap Up (\~5 min)

* Having worked with APIs and SDKs, which did you prefer? Are there things that you think one is better suited for over the other?
* Encourage students to explore other APIs and SDKs in their future projects or areas of interest.
* Discuss how SDKs are often provided by companies or developers to allow others to integrate their services more easily. You may wish to lead a discussion on what kinds of motivations companies could have to provide SDKS, such as broadening their reach and increasing their functionality for free.
* Explain that SDKs often include pre-built functions, code samples, and other resources to assist developers in incorporating specific functionalities into their applications.

### Extensions

#### Mild

Incorporate additional features from the Giphy Web SDK, such as stickers or GIF reactions. Start by incorporating the [Search feature](https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md).

#### Medium

Explore other popular SDKs, such as the [GitHub SDK](https://github.com/octokit/app.js/#readme) and discuss their use cases and benefits.

#### Spicy

Do a brief research project on the history and evolution of APIs and SDKs in software development.
