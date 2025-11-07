---
description: How can I add style to my HTML page using cascading style sheets?
---

# U1LA2.1: Styling your page with CSS

### Teacher Notes && Overview

In this lesson, students will begin working with CSS to style their pages. They will begin by working on a pre-made page of starter code and will have free time to experiment with their CSS. The goal of this code is to make an 'ugly' webpage - this allows students the freedom to play with any CSS properties that strike them as interesting without attempting to adhere to good design principles or trying to make something 'pretty.'

### Objectives

**Students will be able to:**

* Style different portions of their page by selecting HTML tags in CSS
* Style different portions of their page by selecting classes/IDs in their CSS
* Use HEX code colors within their CSS
* Adjust margins/padding/borders
* Center and enlarge images in CSS
* Change fonts on their webpage

### Suggested Duration

2-3 Periods (\~90 - 135 minutes)

_Please note that there are several optional learning activities that you may choose to use with students - these can easily extend the amount of initial time you spend learning CSS. Use your best judgment as to the needs of your students, and please remember that you can always come back to the extras later if you realize that remediation is needed._

### NYS Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **CSS: C**ascading **S**tyle **S**heets, this is a style sheet language that describes how an HTML page can look. The CSS can change HTML elements based on their tag (h1, p, div, etc) or by their class or id.
* **Selector -** identifier for part of page to be styled with CSS
* **Property/Value -** the property you wish to change of a page element and value you wish to change it to
* **Declaration** - the property/values being changed by CSS

### Planning Notes && Materials

|                                                          Planning Notes                                                          |             Materials            |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------: |
| While there are no specific planning notes, this requiers a lot of Googling and looking at documentation, so please be prepared! | _No additional materials needed_ |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
|           _Coming Soon_          |         _Coming Soon_        |         _Coming Soon_        |

### Suggestions for Differentiation

_Coming Soon_

### Resources

* Website Starter Code ([repl.it](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA21-Styling-with-CSS-Starter-Code#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA2.1/Starter%20Code))
* [W3Schools Demo Page ](https://www.w3schools.com/w3css/tryw3css\_templates\_start\_page.htm)(Resource)
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php)[/Documentation](https://www.w3schools.com/cssref/index.php) (Resource)
* [Google Fonts](https://fonts.google.com/) (Resource)
* [View and Change CSS with Chrome Dev Tools ](https://developer.chrome.com/docs/devtools/css/)(Extra Learning Resource)
* [CSS Selectors Diner](https://flukeout.github.io/) (Extra Learning Resource)
* [CSS Battle](https://cssbattle.dev/) (Extra Learning Resource)
* [Google Font Pairings](https://femmebot.github.io/google-type/) (Extra Resource)
* [Adobe Color Picker](https://color.adobe.com/create/color-wheel) (Extra Resource)

### Assessments

**Formative:**

* Ugliest Website Creation

**Summative:**

* Upcoming CSS Mini Project

### **Do Now/Warm Up (\~5 minutes)**

What do you think makes a website _well-designed_**,** or good-looking\_?\_ What makes a website _badly-designed_, or ugly-looking?

Time permitting, grab a computer and find as many examples as you can of pretty and ugly websites.

### Introducing: CSS (7 - 12 minutes)

Remember in the last lesson we said we had done things behind the scenes to make our divs appear with color? That behind-the-scenes magic was CSS, or **C**ascading **S**tyle **S**heets. This is a sheet-style language that allows us to format the appearance of our HTML pages!

There are several ways to work with CSS: in-line, when it is added directly to HTML tags, internal, where you type the CSS inside a `<style>` tag in your page's `<head>`, or external, where the CSS lives in a separate, linked file. For the purpose of this class, we will focus on external style sheets as they are also a common professional practice.

Before we get into using CSS in our own work, let's take a look at it in the wild. We are going to use this [W3 Schools CSS Demo Page](https://www.w3schools.com/w3css/tryw3css\_templates\_start\_page.htm) - share the link with students. Once they have it open in Google Chrome (that's important!), ask them to right-click anywhere on the top red area and scroll down to 'Inspect.'

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.04.55 PM.png" alt=""><figcaption><p>Right clicking a page to inspect must be done in Google Chrome.</p></figcaption></figure>

This will open up the Developer Tools (fondly referred to as 'dev tools') on the right side bar of the page, though they can be dragged around to different locations. At the top, they'll see the HTML for the page. Below, they'll see the CSS that applies to the element they select. In this case, they selected a div that contains many other elements and classes, so they will see CSS for those as well!

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.07.51 PM.png" alt=""><figcaption><p>Sample screenshot of elements in dev tools showing HTML with CSS beneath</p></figcaption></figure>

If we scroll through the CSS, we will see familiar HTML tags (body, head, etc) as well as things with a dot in front - those are our _classes_ that we spoke about in the last lesson and that we will speak more about later in this lesson. We can also see the basic structure of CSS:

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-01 at 12.55.33 PM.png" alt=""><figcaption><p>CSS syntax showcasing selector, property, value, and declaration</p></figcaption></figure>

Our CSS starts with a selector which is how we identify the part of our HTML that we will be styling. We then select a property, followed by a colon, and a value followed by a semi-colon. This `property:value;` pair creates a declaration, and each selector can have as many declarations as you'd like.

In the dev tools, we can even go so far as changing elements of the CSS to see how it would show up on the screen. For example, if we take this bit:

```css
.w3-red, .w3-hover-red:hover {
    color: #fff!important;
    background-color: #f44336!important;
}
```

We can adjust the `background-color` to a different color. It is currently using Hex Codes, which we can find if we search 'color picker' on Google. For now, we could use `#FF00FF` and get a magenta background. HTML also supports some named colors (among other things) and [W3 Schools has a list](https://www.w3schools.com/colors/colors\_names.asp) if you should choose to use them.

At this point, if you would like to use the [View and Change CSS](https://developer.chrome.com/docs/devtools/css/) Extra Learning Resource please feel free, but it is considered optional!

### Styling Your Page (10 - 15 minutes)

Share the **Ugliest Website Starter Code (**[**repl.it**](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA21-Styling-with-CSS-Starter-Code#index.html) **|** [**github**](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA2.1/Starter%20Code)**)** with students. Explain that we want to feel free to try anything as we make our CSS pages and they should not feel concerned about making something beautiful or cohesive right off the bat - in fact, their goal is to make this website quite ugly.

Before they begin, they will need a CSS file. To do this, they can click the 'New File' button the repl.it sidebar and make a file titled `style.css`. While CSS files can have _any_ name (as long as they end in `.css`), `style.css` is a typical name for their stylesheet. Once we have the sheet made, we need to link it in our HTML page. So let's go to our `index.html` and then find our `<head>` tag. Inside that tag on approximately line 9, we will add the following:

```html
<link href="style.css" rel="stylesheet" type="text/css" />
```

This links our style sheet from the reference of the file name, sets it up as a stylesheet, and prepares the browser to read our page to understand that it is a text/CSS file. Now to ensure it's linked, let's add some CSS!

Back in the `style.css` page, let's add some style to the body of our page. We will use `body` as our selector and `background-color` as our property.

What if we didn't know that we could use `background-color` as a property? There is so much to CSS that this is a _great_ time to demo to students how to Google for what they want - no one should be expected to know everything when they have the internet to help them - and to use documentation such as the [CSS Reference on W3 Schools](https://www.w3schools.com/cssref/index.php).

Once we've established how and what to change, we are ready to code. Remember that all the colons and semi-colons are VERY IMPORTANT!

```css
body {
    background-color: thistle;
}
```

We should now see that the background is light purple! It is recommended to give students a few minutes to adjust the background to different colors using both HTML color names and HEX codes (which will give them a wider range of choices).

Once students have had fun with the background, let's figure out how to change the font color. We can once again google, or we can search on W3 Schools, or we can do a mix of both by googling 'CSS font color w3 Schools.' Either way, we should come to something like this:

```css
body {
    background-color: thistle;
    color: #0000FF;
}
```

This will make our text all a bright blue! But what if we wanted titles to be a different color? Well, we could use another selector:

```css
body {
    background-color: thistle;
    color: #0000FF;
}

h2{
    color: #FFFFFF;
}
```

As it's written, this would make anything within an `<h2>` tag turn white. If for some reason you notice this isn't happening, you can adjust the declaration to add: `color: #FFFFFF !important` which will override whatever the `<h2>` tag would _inherit_ from the body tag. It's important to note - and this will become more prevalent the more students work with CSS - that HTML is built of parent/child elements (things nested in other things) and CSS will use this structure to apply changes broadly and specifically.

Now, we can add one more thing which may be especially useful with our titles - we can center them! Doing so would look something like this:

```css
body {
    background-color: thistle;
    color: #0000FF;
}

h2{
    color: #FFFFFF;
    text-align: center;
}
```

**NB:** _There are usually lots of possible values for each property, just as there are lots of properties you can change! Often editors such as repl.it will assist by auto-filling or giving you a list of options. This can be a great tool, and when in doubt, remember to keep Googling and modeling using your resources so that students form similar habits._

### Styling with Classes and IDs (10 - 15 minutes)

One thing we should notice is that so far, when we change something, it changes any and everything that has that tag. Sometimes we want this - we might want all of our text to be the same color, for example - but sometimes we want to be able to differentiate for whatever reason.

That's where we can use the classes and IDs that we saw in our last lesson! This starter code does not have any classes or IDs added yet, but we can add them in and then utilize them in our CSS file.

Let's head to our page title div on line 17 in `index.html`. This div contains the page title, which we may want to have a different style than anything else on the page. In this instance, we may want to use an ID because we will not be repeating this style again elsewhere. If we wanted to use a style we created on multiple elements, we would want to use a class.

So let's update our HTML first:

```html
<!-- 	page title -->
	<div id="pagetitle">
		<h1>The Ugliest Webpage in the World</h1>
		<h4>A place to let loose with styling!</h4>
	</div>
```

And then let's go to our CSS and add the following:

```css
#pagetitle {
    background-color: tomato;
}
```

Notice the #? That's what tells the computer we are selecting by ID! If we had been using a class called page title, we would've written `.pagetitle` **-** the . denotes that we are calling a class. Let's keep exploring our page title - we can of course make it centered by adding `text-align: center;` in our CSS. We can also start working on styling our div! Divs, those empty boxes we put content into, have some useful attributes that we can use to style our page. Each div has:

* [**Padding**](https://www.w3schools.com/css/css\_padding.asp)**:** the space between the content and the edge of the div
* [**Borders**](https://www.w3schools.com/css/css\_border.asp)**:** the (currently invisible) lines around the div, which can be styled with color/pattern in addition to be thinner and thicker
* [**Margins**](https://www.w3schools.com/css/css\_margin.asp)**:** the space between the div and the content around the outside of it.

Now, each of these we can set individually based on sides (top, bottom, left, right) or we can set it all at once by just using the property `padding` or `border` or `margin`. Again, if you want to do things more specific or learn exactly what can or can't be done with each, this is a great thing to google or use documentation to review!

One thing we can try is to add some padding to our div so it takes up more space:

```css
#pagetitle {
    background-color: tomato;
    text-align: center;
    padding: 50px;
}
```

Take a few moments to experiment with margins and borders and see if you can get the page title to look like a banner!

Once you've had a chance to play, there is one more relevant thing we can take away from this: we learned how to center text, but what about images? We can use a class to help us!

If we want to center our image from line 24, we could add a class called 'center':

```html
<img src="assets/uglycomp1.jpeg" alt="an ugly computer in space" class="center">
```

And then in our CSS, we could do the following:

```css
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
```

This will change how the browser sees the image and will automatically 'balance' the margins on either side. And tah-dah! Just like that, a centered image!

**NB:** _If you feel like your students may benefit from extra practice using CSS selectors, you could utilize the_ [_CSS Selector Diner Extra Learning Resource_](https://flukeout.github.io/)_. This is a 15 - 30 minute activity (but can really be start/stopped as you see fit) that explores other ways CSS selectors can be used in a fun way._

### Using Different Fonts (10 - 12 minutes)

One last thing to show you before you go off to make the Ugliest Webpage in the World: getting different fonts. Fonts can be tricky because they are not the same on all computing systems/browsers, although it has become _much_ more standardized over the years.

We have two main ways to work with fonts: we can find free ones and download them and add the downloads into the asset folder of our project, or we can use fonts that already exist for us online. For the purpose of this class, we are going to focus on using fonts from Google Fonts, but you are welcome to look up tutorials for downloading other fonts.

To begin, let's head to [Google Fonts](https://fonts.google.com/). On Google Fonts, we will notice that we have several ways to sort - we can search names, or we can select categories. Feel free to explore these with your students - we will talk about them more specifically in later design lessons! For now, let's pick a few fonts we think we may want to use. I'm choosing from the main page.

When we click a font name, if we scroll down we should see the option to 'add' it to the fonts we want to use. (We also have the option to see it used with different sample text and at different sizes)

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-02 at 11.13.07 AM.png" alt=""><figcaption><p>Sample font with button to select</p></figcaption></figure>

Once we've selected fonts we want to use, we can use the top right corner icon with three squares and a plus to view our selected font families. This will show us code that we can use in our HTML page to link the fonts to our page, as well as how to use this in our CSS.

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-02 at 11.14.32 AM.png" alt=""><figcaption><p>Icon with three squares and a plus used to view selected families of fonts</p></figcaption></figure>

Let's take all of the HTML `<link rel...>` tags and paste them in the `<head>` of our HTML around where we linked our CSS. We can even denote what these are with a comment!

Then, we can use the CSS rules to change our fonts, like so:

```css
body {
    background-color: thistle;
    color: #0000FF;
    font-family: 'Roboto', sans-serif;
}
```

And there you have it - now you can add fonts!

### Creating the Ugliest Website in the World (15 - 30 minutes)

You have learned the very, very basics of CSS. The truth is, there are actually _a lot_ of properties you can adjust with CSS; some you'll use frequently, others you won't. It's your students' job now to explore, and in that exploration, try to create the ugliest website the world has ever known.

Want to use multiple images as backgrounds for different divs? SURE. Want to make the color scheme look WILD? Go nuts! Use the [CSS Reference page on W3 Schools](https://www.w3schools.com/cssref/index.php) to identify parts of the page you wish to change. We recommend:

* Use classes and IDs to style your divs or other repeated components of your page
* Explore using margin/padding/borders
  * Styling borders is fun and can be a great way to make things pop OR look hideous, depending!
* Experiment with styling images, such as creating an image with a rounded border.
* Find something new to explore!

Let the students free and see what crazy things they make!

### Wrap-Up (5 - 10 minutes)

Consider having students complete a gallery walk and leave post-its on their peers' computers with any feedback they'd like to leave.

Alternatively, you can have a few students do rapid fire shares of one thing they are most proud of.

### Extensions

This is really a self-extending lesson as students can explore as little or as much into CSS a they want! [CSS Battle](https://cssbattle.dev/) can be a great sponge activity website for students who are feeling passionate about CSS and can do a little research on their own.
