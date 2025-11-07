---
description: >-
  How can a CSS Framework help me to quickly build organized, well-designed
  websites?
---

# U1LA6.1: Working with CSS Frameworks - Bulma

### Teacher Notes && Overview

Students will dive into working with their first CSS Framework, Bulma. This lesson will span roughly 2 days, though classes moving at a slower pace may take 3. In the first day, students will explore the basics of getting started with Bulma and how the grid/column system works. There is so much to explore in the documentation that we recommend giving students exploration time to review the content.

In the second half, students will focus on reading documentation with teacher assistance to add components and layout styles to their pages.

**NB:** _Bulma has the option of working with fractions instead of numbers out of 12 when sizing columns. We have decided that the numbers out of 12 would be easier for most students, but please use your discretion in deciding what to teach them._

### Objectives

Students will be able to:

* Understand the purpose of CSS frameworks
* Build a website with columns and rows using Bulma
* Utilize components from a CSS Framework, such as cards

### Suggested Duration

2-3 Periods (\~90 - 135 minutes)

### NYS Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **CSS Framework -** a prepped and ready-to-use CSS library, often created by someone else and available for other developers to use. It eliminates the need of styling basics from scratch and makes some processes easier.
* **Bulma -** A specific CSS framework that we will be using in this lesson. It contains a CSS library of CSS classes that can be used to style HTML code.
* **Components -** within a CSS framework, these are frequently used, pre-coded structures for you to use and personalize to fit the needs of your website. They include things like cards, navbars, dropdowns, etc.

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |                                                       Materials Needed                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| This lesson leans heavily on the CSS Framework, Bulma, and requires reading its documentation. Make sure you have done this in advance to help guide your class! | Bulma uses columns to create grid patterns. Access to graph paper may help students process what they are trying to create. |

### Suggestions for UDL

_Coming Soon_

### Suggestions for Differentiation

_Coming Soon_

### Resources

* [Bulma CSS Framework](https://bulma.io/) (Includes instructions for getting started and documentation)
* Building with Bulma Starter Code ([repl.it](https://replit.com/@qrtnycs4all/U1LA61-Bulma-Columns-Starter-Code#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA6.1/Starter%20Code))

### Assessments

**Formative:**

* Do Now
* Build with Bulma Grid Page
* Component Additions

**Summative:**

* U1LA6 Lab: CheeseBook Computers with Bulma (Upcoming Lab)
* Unit 1 Final Project: My Travel Page (Upcoming Final Project)

### Do Now/Warm-Up (\~3-5 min)

Based on your experience so far, what are things that you have found yourself frequently doing to style an HTML page, or otherwise make it look nice? What might make this process easier?

### Introducing CSS Frameworks (10 - 15 minutes)

After students have had a chance to respond to the Do Now, ask them to share their answers either with partners or in a whole group discussion (or leverage both, one after the other). Many students will note that they spend time styling the elements of their page, and for several lessons, have also focused on the grid structure of the page itself.

Students may or may not be in a place where they find some of these tasks annoying and/or repetitive yet; if they're not, bring up that there are professionals who have to do these tasks _all the time_ because the entiriety of their job is to make and design websites.

Because this can get repetitive and annoying, developers have created things called **CSS Frameworks.** These frameworks serve as a library of CSS classes and other pre-coded goodies that users can link into their websites and begin using so that it's easier and faster to create well-designed pages without having to code from scratch each time. There are _a lot_ of CSS Frameworks out there (Bootstrap, Bulma, Materialize, etc) but today we will just be focusing on one: Bulma.

**NB:** _For the curious students, they've actually already used a framework when they were using Flexbox, and many of the more robust frameworks - including Bulma - will build off of this. It's important to note that many frameworks work in a similar fashion with slight differences based on the preferences of whoever created them. Once they've learned to use one framework, they can experiment with using others if they see fit!_

Direct students to the [Bulma Website](https://bulma.io/). They should immediately see that there is a 'getting started' button - click on that and they'll be brought to a documentation page. Stress to students that this page is SO IMPORTANT for them to have open in a tab somewhere as it contains everything they need to know about Bulma - mostly, the names of the CSS classes and examples of how they are used.

If students click '[Overview](https://bulma.io/documentation/overview/)', they'll be brought to a page that has a bunch of notes about Bulma and links to learn more in the side nav. Explain that Bulma not only has ways for us to keep our pages organized and styled, but it is also built to be mobile-first, meaning that the responsiveness is baked in (but can also be overridden as students deem necessary).

Go ahead and click '[Start](https://bulma.io/documentation/overview/start/)' on the side nav. This will give a page of several options on how to start using Bulma on your page. Option 1 says **Use a CDN** - this stand for **C**_ontent_ **D**_elivery_ **N**_etwork,_ and it's what we want to use! You'll notice there are two tabs, `CSS @import` and `HTML<link>`. Click over to the HTML option to see something like this:

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-30 at 9.36.29 AM.png" alt=""><figcaption><p>Option 1: Use a CDN with HTML link on the Bulma 'Start' webpage</p></figcaption></figure>

This should look really familiar as we have linked CSS style sheets to our webpages before! If we wanted to connect Bulma to a project we are working on, we would copy this link and paste it into the `<head>` tag of our page. It's important to note that a page can reference _several_ CSS files and that's okay - even if you're using a robust CSS Framework, there will likely be things that you want to specifically style or adjust from the default. The Bulma framework will be linked, but you will not have access to edit it directly as it's being used by hundreds and hundreds of other developers!

At this point, you may want to code along with students putting the Bulma link into a new project in repl.it or the IDE/editor of your choice. However, for the purposes of today, students will be utilizing some starter code so that we can focus on how Bulma works instead of building from scratch.

### Exploring Organization with Bulma (15 - 20 minutes)

Share students on the Building with Bulma Starter Code ([repl.it](https://replit.com/@qrtnycs4all/U1LA61-Bulma-Columns-Starter-Code#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA6.1/Starter%20Code)). Begin by giving students a chance to look through the HTML and CSS, and then point out a few key points:

* We've connected Bulma on line 11 to our project, which allows us to use the entirety of the Bulma CSS library.
* If we look at the CSS, you'll notice that the `<h1>` and `<div>` tags have been styled. After the `font-size` in `h1`, you'll see that it says `!important`. This is to prevent Bulma styling from overriding our preferred styling.
* In our HTML, we've created several rows that each have their own set of columns. Note the structure of this for students: there is a `div` with a class `columns`, and inside of that `div` are more `divs` with the class `column` (not plural). We will be using A LOT of classes to style our page!

If we run our code, and hopefully pop it out into its own tab, we should notice that the emojis from each div are spaced out in an interesting way even though we did not define any div spacing. The column divs will auto space to take up equal space if we do not step in. We should also notice that as we resize our window - making it really small and really large - our window automatically puts in the responsiveness we want.

Let's make it a little easier to see what's happening with our divs. Bulma has some colors built in - these are likely not the colors you'll use on every page, but they are available as classes to style your page and help you lay things out as you get started. We can [view colors in the Bulma Documentation](https://bulma.io/documentation/helpers/color-helpers/).&#x20;

Look over all the options and then focus in on the **Background Color** section. We want to be able to see exactly how much room our divs take up! So pick any class for something that has a background color (other than white to start) and copy the class name. Then, return to your code and add it to one of the classes of the columns:

```html
<div class="column has-background-danger-dark">
    😵‍💫
</div>
```

Notice that we can have multiple classes per HTML element, but they need to be separated by spaces (this is why class names do not have spaces in them). If we run our code, we should see our fancy new background on our div!

Give students a few minutes to go through and add colors to every div. Avoid giving the same color to divs that are next to and/or on top of or below each other so it's easy to see the space each div is taking up.

With the color in, we should notice that our divs go all the way to the edges of our page. This is often a poor practice as it can make reading material uncomfortable. Luckily, Bulma has another class called `.container` that will automatically - and responsively - center the content on the page. Before our `<div class="columns">`, let's add another div that will contain _all of our columns_:

```html
<div class="container">
```

_You'll end this div after your last columns div ends!_

Now, if we refresh, we should see that all of our columns are a set distance away from the edge, and if we resize the page, this is all once again responsive without us needed to do any extra work. Explain to students that there may be somethings that we _want_ to go edge to edge - like perhaps a footer, or a navbar - but often the main contents of the page we like to have a small margin around.

Once that's done, it's time to talk about sizes of our divs. Bulma, like many CSS frameworks, divides the page into 12 possible columns. We can set the size of each column by a class `is-#` with the # replaced by a value. Note that each row cannot exceed 12, but it can be _less_ than 12 - rows without a size can autofill! (And there are also ways to offset columns to get white space on either side - ambitious teachers/classes/students can [explore more in the documentation](https://bulma.io/documentation/columns/sizes/#offset).)

In our first row, let's try to make the first div take up 2 spaces, the next to take up 3, then 6, then 1. Our code will look something like this, with the addition of whatever color class you added for each:

```html
<div class="columns">
	<div class="column is-2">
		😵‍💫
	</div>

	<div class="column is-3">
		😳
	</div>

	<div class="column is-6">
		🥺
	</div>

	<div class="column is-1">
		🥰
	</div>
</div>
```

Upon refresh, students should see each column taking up a different amount of space! Give them time to explore adding sizing to their other rows, and if time permits, ask them to add a new row of columns with color and spacing. This will likely close out the first day of Bulma!

### Bulma Components (15 - 30 minutes)

In addition to the column system, Bulma has several built in [Components](https://bulma.io/documentation/components) and helpful pieces of layout that we should be aware of. There are _way too many_ to talk about all of them, but we should touch on a few!

The first we will look at is a [**card**](https://bulma.io/documentation/components/card/)**.** With your students, pull up the documentation for cards and read throught he core components, then look at the example. The example may bring up memories of an embedded Tweet or Instagram post, and that's because those, too, are using their own version of a card element!

In either a new project with Bulma linked or the grid project, ask students to copy all of the code associated with their card and put it into a project. From there, work with a partner to try to modify this card by customizing the code (including putting in their own image) and adding/remove anything they think would improve upon it. After they've had time to work, invite students to share the results and consider going over one as a class.

Once students have one working card, look over the rest of the card documentation to see examples that use individual parts of a cart, separately or reconfigured, to make something unique. Explain to students that they do not have to use cards for everything, but it can be a helpful way to organize or highlight information on their page, and while they still may need to modify, it being more or less premade can speed up the time it takes them to make a professional and polished site.

Another thing that can speed up creation time is adding a premade [navbar](https://bulma.io/documentation/components/navbar/). Repeat the process with students of looking at documentation together and discussing all of the components before asking them to add one - the most robust one - to their page and then working to customize it. When they're done, review again and look at other ways a navbar could be configured and when it may come in useful.

Next, look at some classes that can help with our layout. These components are mostly styled to have different amounts of padding to make page layout a breeze.

An important one is the [**hero**](https://bulma.io/documentation/layout/hero/) class. This is a class that assumes it will have nested components with a `title` and `subtitle` class; this will style it to look like a title or heading of a page automatically. Once again, allow students to review, add, play, and ask questions before moving on.

[**Sections**](https://bulma.io/documentation/layout/section/) are similar to heros in that they can have titles and subtitles. The biggest difference is that sections come in sizes, with various amounts of padding, to help separate the website into, well, _sections._ Repeat the process of looking through documentation and testing an example in code with your students.

Finally, [**footers**](https://bulma.io/documentation/layout/footer/)**:** these come at the very bottom of the page, so this layout option has a lot of padding at the bottom to keep text from being flush against the bottom edge of the page, which may be uncomfortable to read. Footers on webpages often contain information about the page itself and/or links to important 'behind the scenes'-ish pages. Follow the process above one last time to add a footer to your webpage and allow students time to play and adjust.

### Student Exploration (10 - 15 minutes)

Allow students time to look around the Bulma website. They may choose to practice adding more of what you have already looked at together, or they may want to explore different things that Bulma has to offer. Let them go wild for a bit before they get into the lab work!

### Wrap-Up (5 minutes)

Ask students to share something they figured out or experimented with, or consider doing a gallery walk to end class. Students will be doing more with Bulma in future projects!

### Extensions

This lesson is self-extending as there is _so much_ to look at in Bulma! Encourage students moving quickly to explore on their own and try to start putting things into a sensible order. You can also ask them to explore other CSS frameworks (Bootstrap is a classic) and decide which one they like best.

This website is not particularly accessible as it was built to test Bulma features. Encourage students who are racing ahead to consider how they can use what they know about accessibility with what they've learned Bulma can do.

