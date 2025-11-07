---
description: How can I adjust my HTML to create websites that are accessible for all?
---

# U1LA5.1: Creating Accessible Websites

### Teacher Notes && Overview

In this lesson, students will learn how they can leverage the HTML they know as well as the purposeful use of some new tags to create webpages that are as accessible as possible to everyone using them. They will begin by thinking about visuals on the screen before moving into the challenges presented by screen readers and how they can alleviate some of those problems with semantic HTML and tabindex.  We heavily use MDN Web Docs for their excellent accessibility guides and recommend you and your students explore them to even further your web accessibility skills!

Finally, students will be introduced to form building with a focus on making forms, which can often be an accessibilty nightmare, as accessible as possible.

### Objectives

Students will be able to:

* Understand the common challenges websites have to being accessible
* Utilize semantic HTML to build accessible websites
* Create basic pages with tab indexes and alt text when semantic HTML needs support
* Build HTML forms with accessibility in mind

### Suggested Duration

\~2-3 periods (90 - 135 minutes)

### NYS Standards

**9-12.IC.1** Evaluate the impact of computing technologies on equity, access, and influence in a global society.

**9-12.IC.5** Describe ways that complex computer systems can be designed for inclusivity and to mitigate unintended consequences.

**9-12.IC.6** Create accessible computational artifacts that meet standard compliance requirements or otherwise meet the needs of users with disabilities.

### Vocabulary

* **Accessibility:** being easy to use or obtain. In this case, it involves making sure websites can be used and access by _everyone_ who may want or need to use them.
* **Semantic HTML:** an HTML element that clearly describes its meaning to both the browser and the developer. Ex: `<form>` is semantic, while `<div>` is not because it does not reveal anything about its context.
* **tabindex:** a global HTML attribute that defines navigation order and sets elements as 'focusable' in a screen reader
* **fieldset:** an HTML tag used to group related elements of a form
* **legend:** an HTML tag used to assign names for elements of a form or other items on a page
* **ARIA:** accessible rich internet applications, a set of roles and attributes that define ways to make web content and applications more accessible

### Planning Notes && Materials

|                                                                   Planning Notes                                                                   | Materials Needed |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------: |
| Students may want to get the full experience of utilizing a screen reader; make sure you know how to access this on the devices of your classroom. |    Headphones    |

### Suggestions for UDL

_Coming Soon_

### Suggestions for Differentiation

_Coming Soon_

### Resources

* [Screen Reader Demo for Digital Access](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DdEbl5jvLKGQ\&sa=D\&source=docs\&ust=1679412444889428\&usg=AOvVaw3v2iFv8oeGPVAIIukMvTan) (Video)
* [Emulating Vision Deficiencies in Dev Tools](https://addyosmani.com/blog/emulate-vision-deficiencies-devtools/) (Instructions/Resource)
* [HTML: A Good Basis for Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#building\_keyboard\_accessibility\_back\_in) (Extra Learning Resource)
* [How to Structure an Accessible Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How\_to\_structure\_a\_web\_form) (Extra Learning Resource)

### Assessments

**Formative:**

* Do Now
* Semantic HTML Page
* Accessible Form

**Summative:**

* U1LA5 Lab: What Do You Hear? Make it Accessible (Upcoming)
* Unit 1 Final Project (Upcoming)

### Do Now/ Warm Up (\~3-5 min)

Ask students to think about the websites they've created so far, and also the websites they use regularly. What makes these websites difficult, or maybe even just less than ideal, for them to use? What do you think other people may find difficult about using these websites?

### Viewing Websites Differently (\~5 - 10 minutes)

Allow students time to respond to the Do Now in small groups and/or whole class. Encourage them to think about anything that may be less than ideal - colors, small font, etc. Some students may pick up on ways in which people with vision impairments or who are not sighted may struggle with websites, or they may not.

Explain to students that today's objective is to learn how they can build better websites that are accessible - meaning easy to use - for _everyone_. This includes themselves and anyone else who may need or want to use the site, within reason. (_Ex: If you're creating a site about precalculus, you do not need to design it to appeal to kindergarteners - but anyone who has a desire to engage with precalculus concepts should be able to use your website to do so._)

To begin, students are going to think about some very basic ways that their websites may be inaccessible by thinking through how different sighted people may be seeing their websites. To do this, have students open a website of your choosing (the more colorful the better) in Chrome. They will then right click and hit 'Inspect' to open up the dev tools.

Next to where it says 'Console' (generally at the bottom of the dev tools) you will see three dots. Click on those!

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-21 at 10.52.37 AM.png" alt=""><figcaption><p>Three dots next to the world Console in the Chrome Dev Tools</p></figcaption></figure>

Next, select the 'Rendering' option, which will open a new st of tools next to Console.

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-21 at 10.53.37 AM.png" alt=""><figcaption><p>Open panel of options with Rendering highlighted in blue.</p></figcaption></figure>

This panel gives a variety of options that will change the appearance of the page. The one we want is near the bottom, where it says **Emulate vision deficiencies:** _Forces vision deficiency emulation._ By default, it should say 'No emulation.' If we click the drop down, we will see a list of possible vision conditions. Blurred vision is fairly self explanatory, and many of the others are different forms of color blindness or color processing.

Give students time to play with each and visit different websites. You may ask every student to try every option, or select groups of students to focus on specific ones and share with the rest of the group. Things may look quite a bit different, so rather than asking students about which pages look 'good,' focus on asking them which pages are still _accessible_ and what makes them more or less accessible, or what changes could be made to make them better or worse.

Once students have had time to experiment, come together to discuss their findings.

### Webpages Unseen and Semantic HTML (\~10 - 15 minutes)

Not all web users are going to be able to _see_ your page. Some people are reliant on screen readers to interact with the web, and those screen readers are programmed to read very particular parts of the page. They also rely on using the tab key to move through parts of a webpage, which requires special consideration.

Take a moment to pause and watch the [Screen Reader Demo for Digital Access](https://www.youtube.com/watch?v=dEbl5jvLKGQ) video. After, ask students what surprised them or what they learned from watching the video.

Explain to students that there are some easy things they can do to make sure their websites are accessible: namely, they can make sure they use tags as they are intended to be used. If they're writing a heading, use an `<h1>` tag for example instead of styling something else to look like a heading. If they're making a button, make sure they code it it as a `<button>` instead of using a div and styling it to look and act like a button.

This is called _**semantic HTML**._ It's a fancy way to say you're using tags the way they are intended to be used. Let's start by looking at [a bad example from MDN Web Docs](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html). If right click and select 'view page source' we can see that a lot of strange things are happening on this page - they're using line breaks instead of paragraphs, the headings are styled with `<span>` instead of utillizing header tags. These can both be a nightmare for screen readers.

If you'd like to experiment, you can turn on the screenreader on a Mac by pressing **command + f5** and then holding **control + option** (referred to as VO keys) and the **arrows** to navigate through the page. You can [view a guide](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts) if you'd like to familiarize yourself with other commands. While the mac reader does its best to compensate, it is not as descriptive as a good example would be.

If you're on a chromebook, you would hit **ctrl + alt + z** to turn ChromeVox on. To navigate, you would press **search +** the key you need to navigate -[ navigation instructions](https://support.google.com/chromebook/answer/7031755?hl=en#zippy=%2Cchoose-text-with-your-cursor%2Cmove-to-different-tabs-and-windows%2Cmove-through-a-page-with-keyboard-shortcuts) can be found on the Google Help website.

Let's make a better version! With your students, open a new repl.it (or any other editor/IDE you are using) and recreate this example from MDN Web Docs (swapping the text itself for whatever is interesting to your kids at the moment):

```html
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document.
  I'd love people to be able to find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content,
  which I think is more interesting than the last one.
</p>
```

If we pop this out into a browser window and run the screen reader again, it should now tell us about the different sections instead of just reading the text. This would be much more helpful if we were unable to visually interact with the screen!

Now, a note: up until this point, we've been doing a lot of work with `<div>`s, which are useful in organizing, styling, and arranging our page. This is still all true, and we will continue to use them, but a `<div>` is not a _focusable_ element for a screen reader. That being said, the contents _inside_ a `<div>` are. This is why it's important we are putting headers or paragraphs inside of our `<div>`s, and not just raw text, and that we are not using them for something that has a semantic option - like `<button>`.

### Tabindex (\~10 - 15 minutes)

But what if we absolutely have no choice - we must have a `<div>`, or some other typically un-focusable element, as focusable? For that, we have something called `tabindex`. This is an attribute we can add to our HTML tags, a bit like a class or ID name.

`tabindex` takes an integer value and uses that to determine the order in which something should be focused on by a screen reader. If we simply say `tabindex = "0"`, it will be focused in order of the page. Consider these examples (you may want to display or build with students, depending on what you feel would best help them learn):

```html
<h1>My Page Is So Cool!</h1>

<p>Here is my first paragraph.</p>

<div>This extra text isn't focusable</p>

<div tabindex="0">This would focus after the first paragraph.</div>

<div tabindex="0">This would focus after the first paragraph and previous div.</div>
```

We can also use `tabindex` to set order more intentionally; any positive numbers are read in order.  That is, `tabindex="4"` is focused before `tabindex="5"` and `tabindex="0"`, but after `tabindex="3"`. If something has `tabindex="-1"` it is not available when navigating in sequential order.

`tabindex` shouldn't be an excuse to ignore semantic HTML, but we can consider it our second line of defense when creating pages that we want everyone to be able to use!

### Creating Forms that Are Accessible (\~20 - 30 minutes)

In this activity, students will build a simple form. You can have them add on to the previous semantic HTML example page, or you can ask them to create a new project that will only house their sample form. This is all best done as a code along, adding LOTS of code comments along the way so students have this as a reference!

Some parts of form creation may be new to students - and that's okay! We are going over them in detail here to ensure that students not only know how to use the HTML tags related to forms, but that they also have all the accessibility requirements baked in.&#x20;

In this example, let's pretend we are making a form for a pizza store that will collect customer profile information and save it for a later date. Right now, your form won't actually be interactive, but that will change once you start learning some of the behind the scenes JavaScript!

To start, let's make sure it's clear we are building a `<form>` so our screen readers are aware. In that form, we will begin by making a text input and giving a label. That will look like this:

```html
<form>
    <label for="customerName">Enter Your Full Name:</label>
    <input type="text" name="customerName" id="customerName">
</form>
```

A few things to note: we have matched the `for` and `id` values from the `<label>` and `<input>`. This is important, as it makes sure the two are 'attached' on the page and that the screen reader will read them together. Now, there are a few other things you can set in a text input. For example, you could add a `placeholder` attribute which will display default text in the input - adding `placeholder="Full Name"` to the input tag would do this for you.

Another important attribute is the **autocomplete.** You may notice that your devices and browsers will store some of your personal information, and may offer to fill it in to a form for you. This is an important addition for common information as it can assist not just those who don't want to type the same informaiton repeatedly, but also those with cognitive disabilities. Common fields for autocomplete are **name, address, birthday, etc.** If we add autocomplete, our final text input would look like:

```html
<form>
    <label for="customerName">Enter Your Full Name:</label>
    <input type="text" name="customerName" id="customerName" placeholder="Full Name" autocomplete="name">
</form>
```

**NB:** _We aren't going to discuss making questions required, but you can view the accessibility options for that as an extension on the_ [_webaim tutorial_](https://webaim.org/techniques/forms/controls#requiredfields)_._

Let's add another question to our form to practice labels again. This time, let's get information about where they are most likely to order pizza to. Instead of typing, we will have them make a selection. We can add it to our form like so:

```html
<form>
    <label for="customerName">Enter Your Full Name:</label>
    <input type="text" name="customerName" id="customerName" placeholder="Full Name" autocomplete="name">
    
    <label for="orderPreference">Where do you order pizza to the most?</label>
    <select name="orderPreference" id="orderPreference">
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="school">School</option>
        <option value="other">Other</option>
    </select>
</form>
```

Now, we should notice a few things. First, our `<select>` tag has elements _inside_ of it - this is similar to the list items inside an ordered or unordered list. They all go together, and they all have the label applied. Each option has a value, which is what will eventually be recorded when we submit our form. The label works the same way as our text input - it uses the `for` attribute to connect to the `id` and `name`.&#x20;

If we run our code, we may notice that our form is all smushed together in one line, which is not how we are used to looking at forms:

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-28 at 10.51.23 AM.png" alt=""><figcaption><p>Form with two questions next to each other instead of stacked vertically</p></figcaption></figure>

We have a few options to remedy this. As the questions are focusable, we could put each in a `<div>` so that we can arrange them on the page later. We could also have them both marked as their own `<p>`, which would create the line breaks. Both would be acceptable and common ways to structure and style a form. Keep in mind inputs, labels, etc can also all be styled using CSS! Let's adjust our code to make some improvements:

```html
<form>
  <h1>Customer Information</h1>

  <div>
    <label for="customerName">Enter Your Full Name:</label>
    <input type="text" name="customerName" id="customerName" placeholder="Full Name" autocomplete="name">
  </div>

  <div>
    <label for="orderPreference">Where do you order pizza to the most?</label>
    <select name="orderPreference" id="orderPreference">
      <option value="home">Home</option>
      <option value="work">Work</option>
      <option value="school">School</option>
      <option value="other">Other</option>
    </select>
  </div>
  
</form>
```

It should be looking much better on our page! We now just need two more types of inputs and some buttons. Our next two buttons - radio and checkbox - have a lot of elements together, but they do not nest inside a bigger tag like we saw with `<select>`. Because of this, we can no longer use `<label>` for them.

Instead, we use two tags - `<fieldset>` and `<legend>`, which will work to group elements together and give the group a label, respectively.

Because this is several lines of code, we are still adding ahead of our `</form>` tag, but we will just be displaying just the new additions.

Let's start with our checkbox:

<pre class="language-html"><code class="lang-html">&#x3C;div>
  &#x3C;fieldset>
    &#x3C;legend>Select your favorite pizza toppings:&#x3C;/legend>
				
    &#x3C;input id="ham" type="checkbox" name="toppings" value="ham">
<strong>    &#x3C;label for="ham">Ham&#x3C;/label>&#x3C;br>
</strong>				
    &#x3C;input id="pepperoni" type="checkbox" name="toppings" value="pepperoni">
    &#x3C;label for="pepperoni">Pepperoni&#x3C;/label>&#x3C;br>
				
<strong>    &#x3C;input id="mushrooms" type="checkbox" name="toppings" value="mushrooms">
</strong>    &#x3C;label for="mushrooms">Mushrooms&#x3C;/label>&#x3C;br>
				
    &#x3C;input id="olives" type="checkbox" name="toppings" value="olives">
    &#x3C;label for="olives">Olives&#x3C;/label>
  &#x3C;/fieldset>
&#x3C;/div>
</code></pre>

`<fieldset>` holds every checkbox input related to that question. `<legend>` at the top seres as the label for that field. Each checkbox is it's own `<input>` and get's a label, as we saw before. Note that these inputs require values, which again is how the data will be reported on the back end!

Now, onto our last question. This will use a **radio button**, which will look like a multiple choice, single select question. We can build one out like so, again adding to our form:

<pre class="language-html"><code class="lang-html">&#x3C;div>
  &#x3C;fieldset>
<strong>    &#x3C;legend>Preferred Contact Method:&#x3C;/legend>
</strong>				
<strong>    &#x3C;input id="text" type="radio" name="contact" value="text">
</strong>    &#x3C;label for="text">Text&#x3C;/label>&#x3C;br>
				
    &#x3C;input id="call" type="radio" name="contact" value="call">
    &#x3C;label for="call">Call&#x3C;/label>&#x3C;br>

    &#x3C;input id="email" type="radio" name="contact" value="email">
    &#x3C;label for="email">Email&#x3C;/label>
  &#x3C;/fieldset>
&#x3C;/div>
</code></pre>

Notice that in both of these examples, we've kept all the 'name' fields the same - this groups them together as all being about contact information, but with different values.

You should also notice that this example uses `<br>` to break lines. That's acceptable in this instance!

Finally, we are at a place where we can add buttons to submit our form. There are a few ways to add buttons, but we will keep it simple:

```html
<button type="submit">Submit Form</button>
```

**NB:** _Not all buttons will have a type, but submit is used so often that it does! Some buttons may also have a `value` attribute, but the screen reader will announce all text nested in the `<button>` tag._

And there you go - you just made your first accessible form!

### Student Practice (10 - 15 minutes)

Ask students to add one more of each question type to their form, keeping all accessibility practices in mind as they do so. They may need a moment to brainstorm what else would be useful for this company to ask of customers before beginning!

### Wrap-Up (3-5 minutes)

Ask students to share their final forms, and then have them reflect on one or more of the following questions as an exit slip. (You can ask for submissions in any way you see fit, from a quick post-it check-in to a digital submission):

1. What did you learn about accessibility and accessible websites today?
2. Why is it so important to be mindful of accessibility?
3. What questions do you still have about creating accessible pages?

### Extensions

There is _so much_ to learn about accessibility - we have really just scratched the tip of the iceberg in this lesson. For students looking to learn more, advise the to explore the MDN Web Docs about accessibility and try to incorporate more accessible access tags into their code. They can also look into ARIA, which has accessibility attributes for many tags.

For students looking for a forms challenge, consider having them make a long and nonsensical form about anything - they can research other form attributes such as _required_ to get even more specific!
