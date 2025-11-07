---
description: How can you use Javascript to create seamless interaction on a webpage?
---

# Input-Output Helper Site

### Teacher Notes

In this project, students will be coming up with unique ideas for how to create an accessible websites that require some type of user input and will generate some type of an output. The prompt is left vague enough that students can bring their own identities and motivations, but ideas and requirements are provided for a sense of direction and a clear rubric.

If you chose to minimize the scope of the project, be sure to keep the aforementioned in mind allowing room for students to personalize their project. If students are getting writers block, have a specific project idea in mind to recommend (we suggest an "order form" similar to the exemplar).

We suggest spending at least an entire period allowing the students with their partner to come up with a written plan for what they will create and what tools they will use to make it accessible.

As always, but especially with this project, we suggest ending with a show and tell of the students' unique designs. At this point they would show the site, answer the first reflection question below, and (if time allows) demonstrate how the website is accessible.

### Prompt

The magic of a website comes together when a user can interact with it. The website becomes more fun, human, and helpful. Interactivity can be explained as inputs and outputs. The user inputs some information and the website reacts by giving some output back to the user. 

**Directions**: Create a website with at least 3 inputs and at least 1 specific output that is based on the inputs. The website should be a toll that helps people in some way. If you can see yourself using it, you're on the right track. Here are some examples:

- A tip calculator, final grade calculator, or budget tracker
- A personality quiz, "which character are you" quiz, or practice quiz for another class
- An order form for your favorite cuisine (See exemplar),
- A calorie counter

All of these are just ideas. If they spark another idea with input and output that you are more passionate about, be sure to get it approved by your teacher. 

**Requirements**:
- Include at least **3 inputs**. They can be buttons, text, checkboxes, etc. Here are some [more input examples](https://www.w3schools.com/html/html_form_input_types.asp).
- Include at least **1 output**. This is typically implemented with `innerHTML`, but you can _"un-hide"_ certain `divs` as a way of displaying a result as well.
- **Style your page** using styling techniques you've learned so far. Using [Bulma](https://bulma.io/documentation/), Flexbox, Grid, and other CSS properties are all great ways to make your page look beautiful. Use which ever you see fit.


### Exemplar

Take a look at this [finished example](./U2FINAL-Exemplar/index.html) before you start to get an idea of what your fan page might look like.

### Culturally Responsive Best Practice

As aforementioned in the teacher notes, the topic is meant to be vague enough that students can bring their own identities to the table. Typically, students make an order form, calculator, or quiz of some kind. If your students need more direction, feel empowered to limit this project to a food order form, for example. However, be mindful that something like a calculator can exclude students that aren't strong in math.

### Extra Help?

Consider using [P5.js](https://p5js.org/get-started/) to make your website shine. Maybe you'll use it as part of a personality quiz. Or, maybe you'll use inputs that can generate a cool P5 visual.

If you're stuck on what [types of inputs](https://www.w3schools.com/html/html_form_input_types.asp) are available to you, check out this resources. You can go a long way with just buttons, text inputs, and number inputs. Let your mind wander.

Have you seen [Calculator.Net](https://www.calculator.net/) yet? If you're thinking of making a calculator, this site has just about every standard kind. Steal one of these or use them as inspiration for something new.

### Extensions

**Mild**
- Find 2 or 3 other sites similar to yours if you haven't already. Notice the inputs they use, the way they display the output, and the way everything is styled (colors, hover effects, transition speeds, etc). Incorporate at least 2 things you notice that you don't already have.

**Medium**
- Add a layer to your site. How can you take your helper to the next level? Can you change it so it helps multiple people at the same time? Can you add a feature that the user may not have realizes they needed? Here are some examples:
    - If you have a tip calculator, can you split the tip by multiple people? What if each person got to pick their own percentage?
    - If you have a quiz, is there an option to play again? Is there a long version and a short version? An optional bonus question?
    - If you're making a budget tracker or calorie counter, is there a conservative and liberal option? Is there a recommended default? 
    - If you're calculating a final grade, is there an option to synthesize multiple classes? Can you compare with the average grade according to state records? Can you compare your grades with a friend?

**Spicy**
- Functions are best used when there are multiple lines of code being identically repeated in different parts of of the program. Skim through your code. If you find any parts that are repeated, put them in a function and call the function instead. For example, if you have something like this:
    ```js
    let num = 0;

    // grouping appearing for the first time
    num += 1;
    console.log(num);

    num += 100;

    // same 2 instructions repeated
    num += 1;
    console.log(num);
    ```
    You may want to put it in a function like this:
    ```js
    let num = 0;
    const add1print = (variable) => {
        variable += 1;
        console.log(variable);   
    }

    add1print(num);
    num += 100;
    add1print(num);
    ```
- 

**Reflection Questions:**

- What's one thing your proud of and one thing you would have liked to do with more time?
- What did you do to plan for your the development of your website? How did it help? What could you have done different?
-  Did you get stuck at any point? What did you do to get unstuck?
- How accessible is your website? What did you do to ensure this? What more can be done to make it more accessible?
