---
description: What can one do to make a website more easily accessible?
---

# What do you hear? - Make it Accessible.

### Teacher Notes

From a student's perspective, knowing if you're applying _accessibility_ correctly is tricky. From a teacher's  perspective, grading it is too, tricky. Students won't be adding any code in this lab. They will instead be making modifications to the HTML and CSS in order to make the website more accessible. For the students, links to the HTML accessibility tools have been provided, but we believe accessibility is best understood with some type of a screen reader validating the adjustments being made. For teachers, an outline of the answer key is provided in the `U1LAB5.2-Exemplar` folder. This answer key makes it easier to scan through a student's code without having to use a screen reader to check their work.

### Prompt

Beautiful websites can be fun and satisfying for both the creator and the navigator, but what if, as the navigator, you can't see the website. According to [the National Federation of the Blind](https://nfb.org/resources/blindness-statistics), the NFB, roughly 7.7 million Americans are blind as of 2016. And, about 90% of people use a screen reader because of their disability, according to a small survey done by [WebAIM](https://webaim.org/projects/screenreadersurvey7/). WebAIM, Web Accessibility In Mind, is a non-profit organization that focusses on providing web accessibility solutions for those with disabilities. Most of the linked resources attached below will bring you to either their webpage or [w3schools](https://www.w3schools.com/). 

**Directions**: Today, your task is to modify the websites given to you so that they are _"accessible"_. The steps below will guide you in using the right element tags, and adding descriptive alt text to make for a more accessible page. 

1. The names you use for your element tags are very important and useful for someone using a screen reader. Skim through the `level_one.html` and modify any `div` that can be a more specific element. For example:
    ```html
    <div class="h2">Introduction</div>
    <!-- Can be switched to... -->
    <h2>Introduction</h2>
    ```

    Then, in the `level_one.css` change the `.h2` class selector into an `h2` element selector. You'll need to double check and potentially do the same with any other changes you make in the `level_one.html`.

2. Next, notice the descriptive `alt` text written for the first 2 images: _"Calm hippo standing in swampland"_ and _"Roaring male lion lying on low cut grass"_. Skim through the code again, this time looking for and nondescriptive `alt` text. Change it so that it describes the corresponding image with enough detail that a blind person can get the idea.

3. At the bottom of the page, there are 3 links provided for further reading. The first link is accompanied by text that describes what the reader will find when clicking to that webpage: _"hippos' and lions' strengths and weaknesses"_. The other links may be enticing, but they poorly describe what the reader will see if they were to click. In the `level_one.html`, change the text so that it is more descriptive. Check out this website for more [help on creating descriptive links](https://www.w3schools.com/accessibility/accessibility_link_text.php).

4. On to level 2! Notice on the webpage that there are 3 questions to _"The Quickest Personality Quiz"_. Then, there's a slot for your name and email, and a button to submit the quiz. Input fields, especially ones in a quiz format like this, can be hard to navigate through using a screen reader if done incorrectly. The goal will be using proper element tags and other techniques to connect titles, questions, and labels to their input fields. 

5. In the `level_two.html`, the first question `<fieldset class="question" id="q1">` is done properly. It uses `<fieldset>` to wrap the entire question instead of a `div`, and `<legend>` for the question itself instead of `<p>`. Change the 2nd and 3rd questions so that they fit the same structure. Checkout [this resource on fieldset](https://webaim.org/techniques/forms/controls#checkbox) for more examples.

6. In the third question, there is an image that correlates to each radio button. This correlation or connection should be made explicitly in the HTML. Notice that the first selection, the cabin in the snow, is done already. The `<label>` has an attribute `for="cabin"`, and the corresponding radio `<input>` above it has an `id="cabin"`:
    ```html
    <div class="q3-item">
        <input type="radio" id="cabin" name="getaway" value="cabin" />
        <label for="cabin">
            <img src="img/cabin.jpg" alt="A cold snowy mountain with a small cabin in the distance." />
        </label>
    </div>
    ```

    Add the `for` attribute to the other 3 `<label>` elements in this question matching them to the right ID. Use this [resource on text inputs](https://webaim.org/techniques/forms/controls#input) if you need more guidance.

7. The `<label>` for the email's text input field also needs a `for` attribute to reference the field.

8. For both the Name and Email text inputs, use the [placeholder and autocomplete](https://webaim.org/techniques/forms/advanced#placeholder) attributes. 

9. For the submit button, change the text to say "Submit Quiz" and make the button accessible using [this example on buttons](https://webaim.org/techniques/forms/controls#button) on the WebAIM page.

### Culturally Responsive Best Practice

Consider having students try to navigate a website of their choice with the brightness turned off or with a paper or folder covering their screen. This can be attempted with and/or without the use of a screen reader. Then, discuss what was hard or frustrating about it.

Consider brainstorming with the students things that are hard to do and the tools made to help with those tasks. Examples include: walking with an injured foot & crutches, complex mathematics & a calculator, or pulling a hot pan from the oven & an oven mit. Have students discuss and come up with a few of their own ideas in pairs before sharing with the class. 

In both examples, the goal is to give students an intrinsic sense of why we should consider coding with others in mind; namely those with visual deficiencies.

### Extra Help?

Many of the resources needed to complete the lab are attached as links in the section they are referenced. The main 2 links you can use as a resource is [w3schools for semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp) and **WEBAIM** for best practices ([here's one example](https://webaim.org/techniques/forms/controls)).

Here's a [video resource](https://youtu.be/z8xUCzToff8?t=624) from an employee at Google talking about accessibility. The link starts at 10:24 which is where he starts to mentions the power and importance of using semantic elements to make for a more accessible website.

### Extensions

**Mild**
- Level 3 continues the thread of accessibility through tables, image buttons, and more. Start by including the following in the `level_three.html`:
    - For the "Submit Option" section, add a `for` attribute for the `label` element. 
    - Then, for the "Submit Button" section, add an `alt` attribute and give it a descriptive alt text that would help someone understand the purpose of the image.

**Medium**
- Name, Birthday, and Email are the 3 text inputs on the page:
    - Name should have autocomplete; include the `autocomplete` attribute in the `<input>` element.
    - Birthday should be a required input. Check out this [resource on the required attribute](https://www.w3schools.com/tags/att_input_required.asp) for an example.
    - Email should both have an autocomplete and required attribute.

**Spicy**
- Finally, Use this [documentation on creating accessible tables](https://webaim.org/techniques/tables/data#th) to fix the structure of the first question in the `level_three.html`. HINT: the `<fieldset>` and `<legend>` have been done already. You will start with replacing `<div class="full-table">` with `<table>`.

**Reflection Questions:**

- What does it mean for a website to be accessible? What are some examples of changes that can be made to get it that way?
- Can you imagine a situation where a company would not want to make their site accessible? What would be the repercussions?
- In what situations might a website need to legally be accessible? 