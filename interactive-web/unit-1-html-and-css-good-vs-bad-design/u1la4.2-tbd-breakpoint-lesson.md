---
description: How can I use media queries to create responsive layouts?
---

# U1LA4.2: Breakpoint Lesson

### Teacher Notes && Overview

This lesson builds on previous lessons on grid and flex layouts and focusing on using media queries to make responsive layouts. Students will learn about how media queries work and will practice writing media queries to change grid and flex layouts as screen size changes. Students have the opportunity to stretch their skills with enrichment projects.

### Objectives

Students will be able to:

* Use `@media` and `min-width` to create a responsive webpage
* Use `@media` and `min-width` to redefine the shape of a grid.
* Use `@media` and `min-width` to redefine how a flex parent renders its child components.

### Suggested Duration

\~1 Period (45 minutes)

### NYS Standards

**9-12.DL.1** Type proficiently on a keyboard.

**9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.

**9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **responsive design**: using flexible images and layouts to build sites that adjust to any screen size
* **viewport**: the framed area in which a user views a device’s display; examples: a browser window/ tab; tablet or cell phone display.
* **media query**: includes a media type (like “screen”) and specifications (like “min-width”) and computes to true or false. If the media query returns false, nothing happens. If it returns true, the CSS within the media query will be applied.
* **breakpoints:** CSS breakpoints are points indicated by `min-width` or `max-width` where the layout/styling changes accoring to media query styling

### Planning Notes && Materials

|       Planning Notes       |       Materials Needed       |
| :------------------------: | :--------------------------: |
| No specific planning notes | No specific materials needed |

### Suggestions for UDL

| Multiple Means of Representation                           | Multiple Means of Engagement                       | Multiple Means of Expression                                                                                                                              |
| ---------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Starter code, visual depictions, articles, video tutorials | Code along, pair programming, independent practice | <p>Verbally explaining code (pair programming and code along); writing code; option to sketch intended output (visually planning on paper)</p><p><br></p> |

### Suggestions for Differentiation

Some students might benefit from more detailed guidance within the starter code and pair programming support, so they can talk through the code and have a thought partner as they write queries.

### Resources

* Starter Code for code-along ([repl.it](https://replit.com/@KELLYJOHNSTON4/Media-QueriesCode-Along#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA4.2/Starter%20Code))
* [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
* [Mobile First Vs Responsive Web Design](https://ugem.design/blog/mobile-first-or-responsive-web-design)
* [Learn CSS Media Query in 7 Minutes](https://www.youtube.com/watch?v=yU7jJ3NbPdA)

### Assessments

**Formative:**

* Code along and independent practice using media queries

**Summative:**

* Upcoming CSS Breakpoints lab

### Do Now/Warm-Up (\~5 min)

_**Why do we need to make responsive designs?**_

[Visit this website](https://dequeuniversity.com/library/responsive/1-non-responsive) to view an example of a non-responsive design. Once you are on the website, right click and choose inspect from the menu to view the source code. Once you see the source code, click on the icon you see circled in the image below. This will open a new window that allows you to view the website in various screen dimensions.

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-09 at 11.54.03 AM.png" alt=""><figcaption><p>Screen capture of the inspect screen and button explore different console sizes</p></figcaption></figure>

After clicking on the icon, your screen should look something like this:

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-09 at 11.55.13 AM.png" alt=""><figcaption><p>Screen capture of dequeUniversity page</p></figcaption></figure>

Click on the Dimensions Responsive carrot to view the menu. Click around different viewport sizes and take note of how the content on the site responds (or doesn’t respond) when the screen size changes.

How does the user experience (UX) compare from one screen to another? What changes might you make if you were designing this website, so the content fits on any screen?

### Introduction & Code Along (10 - 15 min)

Presumably, students will have noticed in the Do Now activity that the non-responsive website is one that does not change its layout when the screen size changes, resulting more than not in a poor user experience for those viewing the site on a screen size it was not designed for. Highlight this for students and let them know that in this lesson they will be learning about how they can use media queries to make websites responsive.&#x20;

\
What are media queries and how can we use them to make websites responsive? When we make a media query in our CSS, we are looking for information about how the user is interacting with the content that is being displayed on the website. The different types of media queries are: print, screen, and speech. Media queries are used to style our content differently for various media. For example, we can display content differently for different screen sizes OR make changes in formatting when the user chooses to print the content on a page.

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-09 at 11.56.41 AM.png" alt=""><figcaption><p>Media query example with labels from <a href="https://css-tricks.com/a-complete-guide-to-css-media-queries/">SOURCE</a></p></figcaption></figure>

In the context of CSS media queries and responsive design, breakpoints refer to specific screen sizes at which the layout of a web page changes to better fit the screen dimensions. In the above example of a media query, the breakpoints are indicated by the min-width and max-width media features. Once the screen is larger than 768px, the display will shift to the style indicated for larger screens.&#x20;

In this lesson, we will focus only on making media queries that look for viewport size, that is, the min-width and max-width of the screen. We will make two or more media queries to change the styling of our page for common devices: laptop, tablet, and smartphone. If you are interested in experimenting with making media queries with a variety of other features, [check out this resource for examples of numerous features](https://css-tricks.com/a-complete-guide-to-css-media-queries/#aa-viewport-page-characteristics).&#x20;

Open up and fork the starter code for the code along. Take note of the HTML that has been pre-loaded. We have a parent div with the class name `.container` and six children divs all witht he classname `.box`. Notice there is some styling already applied to the `.container` and `.box` divs.

Before we start adding our media queries, it’s important to know that our CSS file is read from top to bottom and whatever styling is added last will override what is written above. Therefore, it is important to place our media queries at the end of our CSS file.&#x20;

Model the first media query (prompt included in starter code starting on line 20) and highlight for students that they can abbreviate the syntax to `@media` (min-width: 768px) { enter styling here } because the default is for `@media` to apply to all media (print, screen, speech).&#x20;

Once students have gone through the first media query and are ready to practice, transition into the independent practice outlined below. You might want to bring students back for another short code along to provide guided instruction for using media queries with flexbox.

### Student Activity (\~20 - 25 min)

Practice writing a media query using the directions provided in the starter code. Once you have finished styling using the media query for screens that have a min-width of 390, stretch your skills by checking out[ this article that explains how to use media queries with `grid-template-areas`](https://replit.com/@jolson615/grid-queries-demo#style.css). You can write these stretch media queries in the same program or start a new repl.

Once you have finished experimenting with media queries and grid layouts, open your Flex Your Swag code from our previous lesson and use media queries to redefine how the flex container renders its child components. Spoiler alert! This is most commonly done by changing the `flex-direction` from `row` to `column.`

### Wrap-Up (5 min)

Now that you have had some experience using media queries to make a layout responsive, consider these two design paradigms: mobile-first and responsive design. The mobile-first approach designs websites for mobiles first and then scales up for larger devices; in mobile-first design, you begin with the most important elements/ content. In contrast, responsive web design uses flexible images and layouts and prioritizes desktop layouts first. ([Check out this article](https://ugem.design/blog/mobile-first-or-responsive-web-design) for more information about how these design approaches compare)

What might be the advantages of each approach? Why might an organization choose one design approach over the other? Which approach do you think uses media queries? Explain your reasoning.
