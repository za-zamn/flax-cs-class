---
description: How can I build a website using HTML?
---

# U1LA1.1: Building with HTML

### Teacher Notes & Overview

In this lesson, students will begin by working with basic HTML tags and reading documentation. The focus will not be on making something pretty, but on making pages that allow them to practice writing HTML tags and using their resources in a meaningful way.

If you did not complete a Unit 0, please allow extra time in the lesson to make sure students are set up on repl.it. Students who completed the pre-requisite ICM course likely have accounts but may need to ensure they can still get logged in. If you have a vision for student organization, you may also want to take time to help them set up folders in the 'My Repls' section.

### Objectives

Students will be able to:

* Utilize documentation to guide their project creation
* Place header and paragraph elements on a page&#x20;
* Create anchor links with `href` attributes&#x20;
* Use IMG tags (from a local source, and from a source on the web)&#x20;
* Create ordered and unordered lists&#x20;
* Explain the difference between elements that have opening and closing tags (most of them) and elements that do not (images, horizontal rules, css links, etc.)

### Suggested Duration

2 periods (\~90 minutes)

### NYS Computing Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **HTML:** 'HyperText Markup Language,' the skeleton of websites that provides structure to text on a page.
* **Documentation:** code explained as plainly as possible, often with examples, to help you figure out how and when to use different code language or library elements.
* **Tag:** In HTML, tags define HTML elements and are determined by triangle brackets, like this: `<h1> Everything here is in the h1 tag </h1>`. Many tags have an opening and closing, denoted by a / before the tag name. Today, students will see `<h1>`, `<p>`, `<img>`, `<a>`, and more.
* **Self-closing tags:** Self closing tags do not have the \</tag name> close at the end. They often still have the / that comes at the end of the opening and only tag. Image tags are a great example, and end up looking like this: `<img src="myphoto.jpg"/>`

### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |                                                     Materials                                                    |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required, but as it's the first day, make sure computers are charged and ready to go!_ |

### Suggestions for UDL

|                             Multiple Means of Representation                            |                                       Multiple Means of Engagement                                       |                                    Multiple Means of Expression                                    |
| :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| _How are you going to present your content so that it meets the needs of ALL students?_ | _How are you going to provide multiple pathways for students to actually learn the material presented?_  | _How will students demonstrate what they have learned?  How will you assess progress and mastery?_ |

### Suggestions for Differentiation

_Didn't forget, just coming to do all of this absolutely last._

### Resources

* [**Repl.it** ](https://replit.com/\~)- online IDE
* [**W3 Schools**](https://www.w3schools.com/html/) - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) **-** a robust but sometimes less student-friendly documentation
* [**What is HTML, CSS, JavaScript?** ](https://youtu.be/gT0Lh1eYk78)(Youtube Video)
* **Practice: Recreating Template** ([repl.it](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA11-Recreation-Website-Template#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA1.1/Starter%20Code))

### Assessments

**Formative:**

During **mini-lesson:** spot check to ensure students are adding HTML tags to their code, ask quick check-for-understanding questions and ask students to provide code when possible.

**Activity Code** can be collected and assessed as needed

**Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

Unit 1, HTML Lab 1 (Upcoming Lab)

HTML FInal Project (End of Unit Project)

### Do Now/Warm Up (\~5 min)

Ask students to head to [repl.it](https://repl.it) and either login or make an account:

{% embed url="https://replit.com/signup" %}
Link to sign up on repl.it
{% endembed %}

While many students may have used repl.it in their first programming course, there is a strong chance that some used the p5 editor instead, so this might be their first experience with repl.it.

**Students should:**

Make an account

Navigate to 'My Repls' on the side of the page:

<figure><img src="../.gitbook/assets/Screen Shot 2022-09-15 at 10.06.38 AM.png" alt=""><figcaption><p>Screen capture of the repl.it login page displaying the sidebar navigation with 'My Repls'</p></figcaption></figure>

Within 'My Repls', create a new folder and name it **Unit 1: HTML && CSS**.

<figure><img src="../.gitbook/assets/Screen Shot 2022-09-15 at 10.08.43 AM.png" alt=""><figcaption><p><em>Close up screen shot of the 'New folder' button on the My Repls page.</em></p></figcaption></figure>

_**When you're done, clamshell your computer.**_

### Mini Lesson: How are webpages built? && Your First HTML (\~10 - 12 min)

You can begin by asking students if they have any background knowledge on how web pages are built. Take a few answers, and then show [this brief video](https://youtu.be/gT0Lh1eYk78). Explain to students that this year, they will be using HTML, CSS, _and_ JavaScript, whereas, in Introduction to Computational Media (their pre-requisite course), they were primarily just focused on JavaScript on a canvas.

Students will also be starting from the ground up, which means that today's focus is just going to be on making websites with HTML. Remind students that HTML is like the bones of the site: they give structure, but they don't necessarily make things look pretty. And that's okay! They will get to CSS in a few short lessons.

Ask students to open their laptops. Before they begin to code, let's take a look at proof that all these things build the internet - ask students to open a new tab and navigate to any simple website (if you're in the DOE, the Schools page will do fine, other wise ai to pick something that will be minimally distracting). Explain that they can look at the building blocks of the web whenever they want. Ask everyone to right-click (or command-click/two-finger click on a Mac) and select 'Inspect.' Tahdah! This is everything building this page! Students can poke around a bit, but then it'll be time to code their own.

Head back to repl.it. Make sure they are in the correct folder, and then click the + in the top corner for 'Create a Repl.' It will likely pop up, but students want the **HTML, CSS, JS** template.

Once they all have a repl open, give them a few moments to look it over then briefly review what they are seeing in index.html:

* On line one, there is a tag that declares that this document is written in HTML.
* Beneath that, we see another tag that says `<html>` - if we scroll to the bottom, we see `</html>`. Explain to students that this is an _opening_ and _closing_ tag, and that is how we make things happen in HTML. Everything between that tag is affected by that tag!
* Students will see a similar structure for `<head>`. The `<head>` tag is information about our page, or things our page needs to know. We'll talk more about that later.
* Now let's go on down to `<body>` - everything we want to show up on our page goes here. Right now, it's kind of boring, but we should see something interesting between the `<script>` tags that are linking in some (also presently boring) HTML - that's a code comment!
* Students saw comments last year in JS with //. Remind them that all languages have comments, they just look different. They can create comments by highlighting things and pressing command+/ or ctrl+/ (Mac/PC dependent). Practice, and then hit run!

Right now, all the page does is say **Hello world**. Let's change that so the **Hello world** is much bigger, like the title of our page. How do we find out what we can do HTML? Let's look at [some documentation](https://www.w3schools.com/tags/tag\_hn.asp)!

On W3 Schools, look at the page for \<h1> - \<h6>. Read through it as a class and look at the examples before going back to your code and recreating:

```
<h1>Hello world</h1>
```

Spot check with students to make sure everyone now has a large title displaying on their screen, and review again the idea of a starting and ending tag. Then ask students to change the text between the tags to something else.

Next, allow \~2 minutes for students to add in a subtitle and their name. These should both be coded on a new line and in different sizes of h tags.

And just like that - they've done their first lines of HTML code!

### Exploring Other Tags (\~12 - 20 min)

If we were to continue building a website, it would be a little hard to read if _everything_ was in a header tag, bolded and different sizes. So let's figure out how to add paragraphs!

If we try just typing something outside of the tag, it looks alright - but if we hit enter to try to break to a new line, we will notice that the computer doesn't quite listen when we hit run. That's because HTML has no concept of our formatting unless we tell it through tags. So let's make a few paragraphs together! Once again, use the [W3 Schools reference ](https://www.w3schools.com/tags/tag\_p.asp)to start training students into using documentation, then proceed with:

```
<p>Everything on this line will be my first paragraph.</p>

<p>And this line will be my second paragraph!</p>
```

Hit run so students can see the example. Then give them \~2 minutes to create two more paragraphs while you circulate and assist with any challenges or misconceptions.

Then, **brainstorm:** _if we went on building this website, what are things we may want to add? (Try to focus on structure instead of style!)_

Students will likely come up with ideas like links and images, and these are great since they are certainly things that we will cover today! We are also going to be talking about lists, which are endlessly valuable. But there are _hundreds_ of possible HTML tags - make sure students understand they aren't expected to memorize any, but should use documentation when they need to find ones beyond what we are covering.

Let's practice adding a link to a new paragraph. We'll start with the paragraph:

```html
<p>Click here to learn about links!</p>
```

Now, let's link it to the [W3 page on anchor tags](https://www.w3schools.com/tags/tag\_a.asp), which we know as links. Notice that the anchor tag has another new component - href is the destination the tag points towards, in this case, another webpage. So let's build it:

```html
<p><a href="https://www.w3schools.com/tags/tag_a.asp">Click here</a> to learn about links!</p>
```

Notice that we are now using a _tag inside of a tag_. This is called 'nesting tags' and it happens often in HTML. It can also be really confusing to look at, and if it helps, we can space our tags out a little:

```html
<p>
    <a href="https://www.w3schools.com/tags/tag_a.asp">Click here</a> to learn about links!
</p>
```

This should have the exact same result, but is now a little easier to look at. Speaking of nested tags - sometimes nesting tags is a required part of common components, like lists!

Lists come in two flavors: _ordered (numbers)_ and _unordered (bullet points)._ The structure looks similar, but the starting tag for an _ordered_ list is `<ol>` while for an _unordered_ list it's `<ul>.` (No one said HTML was super original in its naming!) Let's try making one:

```html
<!-- Pick something your students will enjoy to make a list of -->
<ul>
    Popcorn
    Gummy Worms
    Reeses
</ul>
```

This won't show up as anticipated - and that's because while we told the page we wanted to make an unordered list, we haven't given it any _list items_ yet. Let's change that with some tags:

```html
<!-- Pick something your students will enjoy to make a list of -->
<ul>
    <li>Popcorn</li>
    <li>Gummy Worms</li>
    <li>Reeses</li>
</ul>
```

Try changing the `<ul>` to an `<ol>` and see what happens. Then, let's add one more thing to our page: an image!

Images can be added two ways: either by their URL, or locally, when they are saved into our program. Adding images locally is a best practice because it ensures you always know where the image lives, and it's not at risk of one day disappearing, among other things, so let's look at that to start.

First, we should make a folder to house all of the images we want to use. Let's call it 'assets.' We can do that by clicking the little folder with a + button the left side of our repl:

<figure><img src="../.gitbook/assets/Screen Shot 2022-09-15 at 11.36.32 AM.png" alt=""><figcaption><p>Close up screen shot of the 'Add folder' button in a repl</p></figcaption></figure>

Now, let's go find an image. When we get one we like, we will right-click (or control-click/two-finger click if we're working on a Mac) and save it somewhere we can find on our computer. Let's make sure we give it an easy-to-read name without spaces!

**NB:** _Students should have practiced saving files in ICM, but just be mindful that students **rarely have to locally save in the era of cloud computing.** Some may need reminders of how, or how to find their files._

We can add an image into our folder by clicking the folder, then the three dots next to add folder and selecting 'upload file.' Select the file and it should appear indented slightly under the folder. Now, let's get it on the page!

If we check the [documentation](https://www.w3schools.com/tags/tag\_img.asp), we will notice that the `<img>` tag looks a little different - like `<a>`, it needs extra information, in this case, a source, or src. It also doesn't have a closing tag! That's because it is _self-closing_, which we may see in the future. So let's try getting our image in there:

```html
<img src="assets/myImage.jpeg">

<!--NOTE: Because it's in a folder, we need to include the whole file path.
First the folder, a slash, then the exact name of the image.-->
```

And now we have an image! But we have some things we need to clean up here - is our image the size we want? And what if, for whatever reason, our image doesn't load or the person viewing our site can't see it? Let's add two things:

* We can adjust the size by adding `width` and `height` to our tag, as shown below. (Just adding width will auto-adjust the height proportionally!)
* We can add alt text with `alt` - this will display if an image can't load, or will be used by screen readers.

```html
img src="assets/myImage.jpeg" alt="The alt text should describe your image" width="500">
```

And just like that - we have an image!

Now, take \~5 minutes and try doing this all again - add your own image, another link, and one more list. If time permits, you can even look through W3 Schools to find tags we haven't covered that you want to learn about and try on this tester webpage.

### Challenge Activity: Recreate a Page (\~15 - 20 min)

**NB:** _Likely, this will be the start of the second period in this lesson - feel free to wrap the end of day above as you see fit, possibly with a brief student reflection on a post-it or index card that you can easily collect. Today can begin with students getting ready to start a challenge!_

In this activity, students will pair-program to work with a partner and try to replicate a basic website. Ask students to select one computer to use as their primary, and they will both take turns adding one tag at a time to try to make their plain site look like the example below. At the end of the activity, ask students to share the link and 'fork' the project to make a copy in their account. They'll see forking again (as well as how to organize forked projects) in the next lesson!

<figure><img src="../.gitbook/assets/Screen Shot 2022-09-15 at 1.11.11 PM.png" alt=""><figcaption><p>Sample Website to Duplicate</p></figcaption></figure>

Students will begin by opening the **Practice: Recreating Template** ([repl.it](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA11-Recreation-Website-Template#index.html) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA1.1/Starter%20Code)) starter code that does not have any extra HTML in the body and will try to get as close to [the example](https://interactive-web-u1la11-recreation-website.qrtnycs4all.repl.co/) as possible. It's okay for them to go out and find similar, but not identical, images to what's contained in the project!

If students finish early, ask them to make sure they each have a project copy, and then explore W3 schools to try and add some other HTML elements to improve upon the example page. They may need to Google for some extra Internet Facts!

### Wrap Up (\~10 minutes)

Students just did a big thing - they finished their first website! Make sure you give time for a few groups (2-3) to share. Since they were all replicating the same thing, the focus should be more so on process, and less so on output (although displaying the output and walking through code is always helpful).

If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit their link as well as any reflection questions.

Before students leave, ask them to select a question to answer on a post-it or other easily collectable paper:

1. What is something you learned about HTML you did not know before?
2. What is something you are proud of?
3. What is something you struggled with?
4. Do you have any lingering questions you need answered?

### Extensions

**For students who move through this quickly:**

Have them take a look at more websites without CSS, to get a sense of exactly how important these building blocks are. An easy way to do this is to remove the `<head>` tag from the site, which is where the link to the CSS lives (for most sites).

Ask students to open a webpage, right-click and select 'Inspect', then click 'Console'. In the console (there will be a > by the line they can type on) paste the following and hit enter:

```javascript
document.head.parentNode.removeChild(document.head);javasc
```

Voilá! You have removed the head tag and the CSS from a website! Allow students to explore a few sites and then, if they are real speed racers, try to recreate one in a new Repl.
