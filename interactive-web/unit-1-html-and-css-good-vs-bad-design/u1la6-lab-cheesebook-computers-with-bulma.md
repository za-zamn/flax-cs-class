---
description: How Bulma make styling webpages easier?
---

# 🗃 U1LA6 Lab: CheeseBook Computers with Bulma

### Teacher Notes

The biggest difficulty that students face when using Bulma is generally putting things in the wrong place. This includes putting class names under the wrong `div` (captured mainly in Part 1) and copying and pasting pre-written components or other layouts in the wrong sections (mainly covered in Part 2). Comments have been written throughout the `index.html` and referenced in the directions below to help prevent such errors, but be sure to have students undo their changes until they get to a working version of their code when necessary to spot hard-to-spot errors.

The Bulma documentation is well written, and it provides comprehensive definitions and examples for everything used below. For every newly introduced class or component, a link is provided linking to the corresponding page. As students progress through the lab, they will feel more comfortable using Bulma as well as reading through the documentation, but know that this, just like any documentation, can be overwhelming at first glance.

**Students should utilize the Starter Code (**[**repl.it** ](https://replit.com/@qrtnycs4all/U1LA6-Mini-Project-Starter-Code#index.html)**|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LAB6/U1LAB6-Starter)**) for this project.**

### Prompt

You've already seen how to style a website using CSS. Now, there are a whole bunch of different packages online (known as _frameworks_) that consist of pre-written CSS rulesets for classes that we can import and use to quickly style different portions of our websites. Today we bring to life the _"CheeseBook"_ website using the _Bulma framework_.

**Directions**: For the entirety of this lab, use [the Bulma documentation](https://bulma.io/documentation/) as you walk through these steps that will guide you in adding Bulma to the website.

#### Part 1

1.  First, before using Bulma, you need to import the framework by linking it at the top of the `index.html`. Uncomment the following line in the head of the file under the link for the `style.css`:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
    ```
2. If you do this correctly, you should already see some changes being done to the web page. There is a good amount of pre-written HTML with Bulma classes already included within.
3.  Now add the `section` class to the first `div` written in the body. The `section` class will add margin around everything within the `div`. Check out [the documentation for "section"](https://bulma.io/documentation/layout/section/) for more information. The code should look as follows:

    ```html
    <!-- Add HERO right below this line -->

    <div class="section">
      <!-- Add CARDS right below this line -->
      ...
    ```
4. The computers are meant to be in a row, all the same size. In the `index.html`, notice that the outermost `div` has a class of `columns` (plural) and some of the inner `div`s have a class of `column` (singular). There are two `div`s without the class `column`. Add the `column` class to the two `div`s and see the changes made. Check out [the documentation for "columns"](https://bulma.io/documentation/columns/basics/) for more information.
5. In the last of those `div`s, there is an empty class in the button element. Add the `button` class to the last button, and notice what changes were made. Check out [the documentation for "buttons"](https://bulma.io/documentation/elements/button/) for more information.
6.  The next section in the `index.html` is labeled as _"Picture Ad 1"_. The wrapper div already contains the class `columns`; add the class `column` to the 2 "card" `div`s inside. Then, for the `div` with the `class= "content"`, include the helper `has-text-centered` to center the text. This is what some of the code should look like.

    ```html
    <!-- Picture Ad 1 -->
      <div class="columns is-centered mt-5">
        <div class="column card is-three-fifths">
          <div class="card-content">
            <div class="content has-text-centered">
              <h1>
                "We love...
    ```
7. Now that you have some practice with `columns` and `column`, properly add the class names to `Picture Ad 2` which should have 3 columns inside.
8.  For the same `Picture Ad 2`, notice that all three section on the webpage are the same size. They each take up _one-third_ of the space horizontally. Find the two `div`s that contain the left and right image, and add the class name `is-one-quarter` to them both. Their outermost `div` is of `class="card"` Check out [the documentation for "column sizes"](https://bulma.io/documentation/columns/sizes/) for more information. Some of the code should look as follows:

    ```html
    <!-- Picture Ad 2 -->
      <div class="columns mt-5">
        <div class="card column is-one-quarter">
    ```
9. Finally for Part 1, use part 3 to put everything we've done so far together.
   * Use `columns` and `column` to display the 2 _image_ and _text_ `div`s horizontally,
   * Add the `has-text-centered` class name to the div with the text, and
   * Add the `is-two-fifths` class to the div with the image so that it only takes up _two-fifths_ of the page horizontally instead of _one-half_.
10. Congrats! Take a step back and notice how much you've done by simply adding class names but not writing any CSS.

#### Part 2

1. In part 1, the HTML was already written for you, and you added pre-written CSS class names to change the webpage. For this next section, you will be copying and pasting pre-written HTML from the Bulma website using their _layouts_ and _components_ such as a `Hero`, `Navbar`, `Footer`, and `Cards`.
2.  Check out [the documentation for Hero](https://bulma.io/documentation/layout/hero/). Copy and paste the the first example for `Hero` into the `index.html` where the comment indicates. Then, delete the `p` element of `class="subtitle"`. Try this yourself before looking at the code below to check your work. The code should look as follows:

    ```html
    <section class="hero">
        <div class="hero-body">
            <p class="title">
                Hero title
            </p>
        </div>
    </section>
    ```
3. Now, make the following changes and additions to the Hero. Notice the changes on the website after each addition:
   * Change the title text to _"Welcome to CheeseBook"_
   * Add the class `is-fullheight` to the outermost `section` with `class="hero"`.
   * Add the following classes to the paragraph element with the new title. Click on any of them to see the documentation for more information:
     * [has-text-white](https://bulma.io/documentation/helpers/color-helpers/#text-color) - makes the font color white,
     * [is-size-1](https://bulma.io/documentation/helpers/typography-helpers/#size) - increases the font size,
     * [has-background-link](https://bulma.io/documentation/helpers/color-helpers/#background-color) - changes the background color around the font to "link", and
     * [px-3](https://bulma.io/documentation/helpers/typography-helpers/#size) - adds 3 units of padding to the left and right (x-axis).
4.  Finally for the `Hero`, add the class name `blue-image` to the outermost `section` with `class="hero is-fullheight"`. This is a class ruleset that has been written in the `style.css`. Check it out to see how it's styled. Then, see what happens on the webpage as a result. Your final hero section should look as follows:

    ```html
    <!-- Add HERO right below this line -->
    <section class="hero is-fullheight blue-image">
      <div class="hero-body">
        <p class="title has-text-white is-size-1 has-background-link px-3">
          Welcome to CheeseBook
        </p>
      </div>
    </section>
    ```
5.  For the `Navbar`, [checkout the documentation](https://bulma.io/documentation/components/navbar/) and copy and paste the large first example under the comment in the HTML for it. Refresh the website and scroll to the top. You should now see a beautiful little navbar. Incase you're stuck, the first couple of lines in your `index.html` should look as follows:

    ```html
    <body>
        <!-- Add NAVBAR right below this line -->
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img
                    ...
    ```
6. Notice that there are three sections to this navbar. In other words, there are three `divs` within the main outer `nav` element with the following first class names: `navbar-brand`, `navbar-menu`, and `navbar-end`. Take a moment to see how each of these are represented on the website.
7. Now, make the following changes to the navbar:
   * Change the `bulma-logo.png` to the `computer.webp` in your image folder, and change the `width` from _"112"_ to _"80"_.
   * Change the `navbar-item` text _Documentation_ to _Computers_
   * Back in the `Hero` section, change the class `is-fullheight` to `is-fullheight-with-navbar` so that the height adjusts for the navbar.
8. Great! At this point you've put together an entire top section of a webpage with some help from Bulma. Next, we'll include a nice looking _footer_ at the bottom of the page, and a group of _cards_ in the middle.
9.  Check out [the documentation for Footer](https://bulma.io/documentation/layout/footer/), and copy and paste the example at the bottom of the `index.html` right underneath the comment that says:

    ```html
    <!-- Add FOOTER right below this line-->
    ```
10. In the `Footer`, change the text in the `paragraph` element to something else.
11. Finally, check out [the documentation for Cards](https://bulma.io/documentation/components/card/), and copy and paste the first example higher in the code right under the comment that says:

    ```html
    <!-- Add CARDS right below this line-->
    ```
12. Change the card in the following ways:
    * Add a picture to your images folder (`img`), and use that image instead of the default grey one,
    * Change the name to your name or something made up, and change the _@johnsmith_ username to a role at the company _CheeseBook_ - something like _"Lead Engineer"_ or _"Junior Designer"_.
    * Change the bio _"Lorem ipsum..."_ to a small employee bio; something like _"I've been at this role for 2 months now, and I can honestly recommend this company for anyone new or experienced."_
    * Change the time and date to something more current.
13. Now, copy and paste this entire card 2 more times so that there is a total of 3 cards on the page. Wrap the three cards in a `div class="columns is-centered"` and add the `column` class and `m-3` class to each card. When you're done, you should have a row of 3 cards, centered, and evenly spaced.

### Exemplar

Take a look at this [finished example](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LAB6/U1LAB6-Exemplar) before you start to get an idea of what your fan page might look like.

### Culturally Responsive Best Practice

_Coming Soon_

### Extra Help?

...

### Extensions

**Directions**:

* There something called a "sticky navbar" or a navbar in a "fixed" position. Check out [the main Youtube page](https://www.youtube.com/), and notice how their navbar stays at the top of the page as you scroll down. Once you have an idea of what it should look like, check out [the documentation on a _"Fixed navbar"_](https://bulma.io/documentation/components/navbar/#fixed-navbar) on the Bulma website, and see if you can apply this to the navbar in the `index.html`.
*   Previously, we've looked at responsiveness, the idea of having your website adapt to different screen sizes. Go ahead and resize the website as it is currently, and notice anything that already "adapts" or is already responsive. Almost everything but the Hero is responsive! There are currently 2 breakpoints, one at `1024` and another at `769`. Check out [the documentation on "Column Responsiveness"](https://bulma.io/documentation/columns/responsiveness/) and add at least 3 customizations to the webpage. You can add it to any of, or a combination of, the following sections:

    * CARDS
    * Computers
    * Picture Ad 1, 2, or 3

    If you're stuck without an idea, change the computers so they switch to two rows of two, and change Ads 1 and 3 so that their text and image cards both take up _one-half_ of the screen.
* A navbar, a row of cards, or a row of anything can be customized using something called a `Level` in Bulma. Check out [the documentation for Level](https://bulma.io/documentation/layout/level/), find an example you like most, and add it to the webpage where you see fit. If you're stuck, copy the code for the [centered level](https://bulma.io/documentation/layout/level/#centered-level) and change the stats to something like: _"Computers sold"_, _"Happy employees"_, _"Subscribers"_, and _"Countries reached"_.
* You have the opportunity to add something special to this website. Explore the following sections of the Bulma documentation and incorporate it into the site.
  * [Colors](https://bulma.io/documentation/helpers/color-helpers/) - change the background and font colors where ever you see fit. Try to stick to a theme.
  * [Form](u1la6-lab-cheesebook-computers-with-bulma.md) - Add a form at the bottom of the page before or inside the footer. It can be a _"Subscribe"_ form, a _"Fill out this quick survey"_ form, or something similar. Explore the different `Form` categories in the sidebar as you go: _Input_, _Textarea_, _Select_, etc.

**Reflection Questions:**

* In what ways did Bulma make styling a web page easier?
* What were some challenges you ran into? How did you overcome them?
* Why do you think web designers would use a framework like Bulma? Why might they not want to use such a framework?
