---
description: How can I add specific styles such as color, spacing, and font to my web page?
---

# 🗃 U1LA2 Lab: My Fan Page Part 2

### Teacher Notes

_This lab is designed to be built off of a template website, "Frida Kahlo's Fan Page." If students have a completed the first lab that they feel proud of, encourage them to build off of what they already have from lab 1 instead of the provided starter code. Otherwise, this lab's stater code (_[_github_](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LAB2/U1LAB2-Starter) _|_ [_repl.it_](https://replit.com/@qrtnycs4all/U1LA2-Lab-My-Fan-Page-Part-2)_) is best to have them effectively get some experience with CSS._

_There's a lot of fun things to add to your website with CSS. After having students go through the steps below, give students the documentation and the liberty to explore as many additional things beyond this personalizing their page to satisfaction._

### Prompt

We've seen the limitations HTML has when trying to build a beautiful website. It's time to take a Fan Page to the next level. By adding spacing, colors, and other styling via CSS, we can really make these websites even more special.

#### Directions:

Your task is to add styling to this website. You will access elements of the page by ID, class name, and semantic element tag. Part 1 focuses on background color, font color, margin, and padding, and part 2 gets trickier focussing on border, shadow, centering, and more. The `style.css` has already been linked to the `index.html`. You're ready to go!

**Part 1**

1. Head to the `style.css` page and notice that there is already styling for the image elements on the page `max-width: 80%;`. This means the image will take up at most 80 percent of the page. This is good if our image is too big, but if the image is too small, then it will not be consistent with the other images. Change that to say `width: 300px;`, and notice what happens. All the images are forced to be exactly 300 pixels wide; no more, no less.
2.  There are 3 ways to access specific parts of an HTML file in order to style them. We can select the element tag (as we did with `img` above), the ID name, or the class name. First, style the font color of all the `h2` elements to the custom color `#e63946`. Add the following ruleset to the `style.css` and notice what changes.

    ```css
    h2 {
        color: #e63946;
    }
    ```
3.  Head over to the `index.html` page and notice that there are 4 sections to the page each wrapped in `div` elements with different ID names: `id="header"`, `id="about"`, `id="achievements"`, and `id="other"`. Let's add some color to the header's background. We'll reference it by ID, and set a custom color to the background. In the `style.css` add the following ruleset to change the background color:

    ```css
    #header {
        background-color: #f1faee;
    }
    ```
4.  Now, let's add a different color `#a8dadc` to the about and the achievements sections. Instead of writing these color changes individually, notice in the `index.html` how the two `divs` and no others have a class name `class="section"`. We can access the sections by class name using the following declaration:

    ```css
    .section {
        background-color: #a8dadc;
    }
    ```
5. Use this same technique of accessing multiple `divs` by class name to add the following properties to each of Frida Kahlo's (or your own page's) achievements. You'll need to locate the 4 `divs` and give them each the same class name: `class="feature"`.
   * Change the `background-color` to `#457b9d`
   * Change the font `color` to `#f1faee`
6. Great! Now, this webpage is desperately needing some spacing in the form of margin and padding. As a reminder, margin is the spacing around a section while padding is the spacing between the border of the section and all the contents inside. First, add margin in the following places. Be sure to check out the results after each change.
   * Give the `body` a 30px margin,
   * give each `div` a 20px margin at the bottom,
   * give each `li` a 10px margin at the bottom,
   * and give the quote a 20px margin to the left. You'll need to add an ID name to the quote to access it and style it directly.
7. That feels halfway there. Notice that the words and other content on the page is flush with the edges or border of the `divs`. Spacing there can be created with padding. Give every `div` a 15px padding, and see what changes. NOTE: this is the second declaration we're giving to `div`. Use the same selector ruleset from before to add this instead of redundantly creating another `div` ruleset.

**Part 2**

1. For this next section, we'll look at _A.)_ adding a border and shadow to our features, _B.)_ centering and enlarging the main image, and _C.)_ using "colorPicker" to change the color scheme all throughout the page. Challenge yourself add these three elements to your page before reading on for a more guided walk through. Use [w3schools](https://www.w3schools.com/css) to look up examples.
2. Now that you've given it a try, we'll start with walking through [this w3schools documentation to add border](https://www.w3schools.com/css/css\_border.asp) to our features. There are three properties you should add to the feature rule:
   * `border-style: solid;` to create a border
   * `border-width: 2px;` to change the thickness of the border
   * and `border-color: black;` to change the border color. Notice that we're using a CSS friendly color "black" instead of a custom color. [You can find more of those colors here](https://www.w3schools.com/cssref/css\_colors.asp).
3. Now to add ["box shadow"](https://www.w3schools.com/css/css3\_shadows\_box.asp). This we we can do in one line. Try adding `box-shadow: 8px 8px 5px grey;` to the feature ruleset - The first 2 pixels are to designate the size of the shadow, the 3rd pixel size creates a blur effect, and the color grey is the color of the shadow.
4. Great! The features have a nice pop to them now. Let's move on to centering and enlarging the main image.
5.  We don't yet have a selector to access the main image without affecting the other images on the page. In the `index.html`, find the `img` that's tied to the main image at the top of the page and give it a special ID name like `id="main-image"`. Then, in the `style.css`, create a new ruleset that increases the image size to 400px. If you did this right, the first main image of Frida should be bigger than all the others. The code should look as follows:

    ```css
    #main-image {
        width: 400px;
    }
    ```
6.  Now that we have access to just this image, let's [center](https://www.w3schools.com/howto/howto\_css\_image\_center.asp) it. You can add three declarations, `display: block;`, `margin-left: auto;`, and `margin-right: auto;`, or, since they have the same value ("auto") you can just add two as shown below:

    ```css
    #main-image {
        width: 400px;

        display: block;
        margin: auto;
    }
    ```
7. Awesome! This last part is up to you. Use this [color palette picker](https://coolors.co/palettes/trending) to pick a palette and customize this website's colors ina different way. Make sure you change all the colors so that they are from the same palette.

### Exemplar

Take a look at this [finished example](U1LAB2/U1LAB2-Exemplar/index.html) before you start to get an idea of what your fan page might look like.

### Culturally Responsive Best Practice

Remember that this project can be a continuation of My Fan Page Part 1: you are not required to make every student use the same Frida Kahlo fan page. Additionally, students should feel free to adjust the suggested colors/margins/padding etc to best fit their preferences. While they should complete each challenge, they can modify to make their page uniquely their own.

_**Allowing for student choice in this project is one of the best ways to be culturally responsive!**_ (_Please recall that communities and culture can refer to a lot of things, including just the culture of being a teen, a Minecraft player, or a KPop fan - be mindful that you are allowing students to explore choice in their creations in a way that is authentic to them!)_

### Extra Help?

**I can't get my images to center!** Always look up your questions on w3schools.com before asking your teacher, but this one in particular is tricky. Check out the [w3schools tutorial](https://www.w3schools.com/howto/howto\_css\_image\_center.asp) to see an example on how to do it.

**How can I custom create some cool, unique colors?** Check out [Google's Color Picker](https://hexcolorspicker.com/google-color-picker/). Simply search "Color Picker" on Google, select an exact color, and copy and paste the hex number. Check out [this CSS example](https://www.w3schools.com/cssref/tryit.asp?filename=trycss\_text\_background) in w3schools on how to apply it in your `style.css` code.

### Extensions

**Directions**:

* Take a moment to change some of the styles we've already added. Keep in mind the audience that will see this page and adjust accordingly. Maybe the images are too small or big for your taste. Maybe the margin and padding feels a bit off with the new colors you picked. Maybe you want the main image to have some shadow as well. Do what feels right to match your creative vision.
* [Checkout this page](https://www.w3schools.com/css/css\_font\_google.asp) and see if you can implement some uniquely customized fonts onto the fan page.
* We already added some shadow to the features on the page, but use [this resource for "on hover" effects](https://www.w3schools.com/csSref/sel\_hover.asp) so that the shadow only appears when the mouse hovers over the feature. ( HINT: you will have to create a separate ruleset with the selector `.feature:hover`). Once you do, carry this concept over and see if you can use the same resource to customize the links at the bottom of the fan page as well.
* Spicy! Do a search for "css animation" and see if you can have the features slide into the page as you scroll.

**Reflection Questions:**

* Do a search for some examples of some good looking and not so good looking websites. What's the difference? Name at least 5 observable characteristics of a bad looking website, and name what CSS you would try to use to make the website look better.
* You may have noticed that there are a couple of different ways to use a color. You can use RGB, RGBA, Hexadecimal, and just a color name like 'red'. Try using all of these. When might it make more sense to use one over another? Which is your favorite to use, and why?
