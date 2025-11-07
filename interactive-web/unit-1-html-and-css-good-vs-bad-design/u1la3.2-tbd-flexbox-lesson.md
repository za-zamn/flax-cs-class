---
description: How can I place container items using Flexbox?
---

# U1LA3.2: Layout with Flexbox

### Teacher Notes && Overview

In this lesson, students will begin working with CSS flexbox to place the items in a container element at designated positions within the box. They will begin with a code-along to get a sense of how CSS Flexbox and CSS grid compare. They will then use the starter code to independently use flexbox to arrange items in parent containers. Time permitting, students will add additional styling to their page or use Flexbox Froggy to practice applying various flexbox properties in a gamified context.

### Objectives

Students will be able to:

* Use CSS Flexbox properties to arrange items in a parent container
* Compare the performance of grid and flexbox displays

### Suggested Duration

1-2 Periods (\~45 - 90 minutes)

### NYS Standards

**9-12.DL.1** Type proficiently on a keyboard.

**9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.

**9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **flex container:** the parent element that contains flex items; any element can be a flex container as long as the CSS property and value `display: flex;` || `display: inline-flex` are applied
* **flex item**: the direct child(ren) element(s) of a flex container
* **axis**: a line that divides a shape into two equal parts
* **main axis**: the primary axis that items are placed along; the placement of the main axis depends on the `flex-direction`
* **cross axis**: the axis perpendicular to the main axis

### Planning Notes && Materials

| Planning Notes |               Materials Needed               |
| :------------: | :------------------------------------------: |
|      Notes     | Do now handout - digital or print paper copy |

### Suggestions for UDL

_Coming Soon_

### Suggestions for Differentiation

The Flexbox Froggy game is excellent for students who need a different access point and/ or focused repetition on applying specific flexbox properties with instant visual feedback.

### Resources

* Code Along Starter Code ([repl.it](https://replit.com/@KELLYJOHNSTON4/Flexbox-vs-Grid) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA3.2/Code%20Along%20Starter%20Code))
* Independent Practice Starter Code ([repl.it](https://replit.com/@KELLYJOHNSTON4/Flex-the-Swag) | [github](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1LA3.2/Independent%20Practice%20Starter%20Code))
* [CSS Grid Vs. Flexbox](https://youtu.be/MdPYenT89o4) video (resource)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (resource)
* [Flexbox - The Ultimate CSS Flex Cheatsheet (with animated diagrams!)](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/) (resource)
* [CSS-Tricks Flexbox Poster](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png) (resource)
* [W3 Schools Reference | Documentation](https://www.w3schools.com/css/css3\_flexbox.asp) (resource)
* [Flexbox Froggy](https://flexboxfroggy.com/) Game (Extra Learning Resource)
* [More Games to Learn and Practice CSS Flexbox and Grid](https://daily-dev-tips.com/posts/10-amazing-games-to-learn-css/) (Extra Learning Resource)

### Assessments

**Formative:**

* Independent practice: Mock-Up Designs for School Swag Store landing page

**Summative:**

* Upcoming CSS Flexbox lab

### Do Now/Warm-Up (\~5-7 min)

Flexbox Scavenger Hunt: Invite students to work in pairs to find at least one example of each of the following Flexbox properties, while inspecting the code of any website(s) they choose. As students identify each property, they should take note of the value that is assigned to that property. Project the following Flexbox properties and provide this note catcher to students.

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-02 at 9.27.53 AM.png" alt=""><figcaption><p>Note catcher to decompose flexbox properties from a website</p></figcaption></figure>

### Introduction to CSS Flexbox (5 min)

Flexbox, like Grid, is another way to create layouts with CSS. Flexbox, also referred to as ‘flex’ (which is the value used with the display property when applying the Flexbox module) is often described as being for ‘one-dimensional’ layouts in contrast to grid being used to build two-dimensional layouts. While we will soon see how both flexbox and grid can create similar outputs, let’s take a minute to focus on the one-dimensionality of the flexbox container and to understand how relevant properties place items within that space.

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-02 at 9.29.08 AM.png" alt=""><figcaption><p>Flexbox diagram from <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background">SOURCE</a></p></figcaption></figure>

The `display` and `flex-direction` properties are assigned to the flex container. The image shows a flex container - `display: flex;` - with the default `flex-direction` value, which is `row`. When the `flex-direction` is set to `row`, the main axis runs through the center of the container from left to right. The value that is assigned the `flex-direction` property will change the placement of both the main and cross axis. Although these axes are invisible, they are the lnes that several properties refer to when placing items within the box, so it's important to get a baseline understanding of how the `flex-direction` impacts those axes. We have three other direction alues that we can apply to the `flex-direction` property:

* `row-reverse` - which shifts the main axis so it moves from right to left
* `column` - which shifts the main axis so it moves from top to bottom
* `column-reverse` - which shifts the main axis so it moves from bottom to top

### Code Along (10 - 15 min)

NB: To provide another access point comparing CSS grid and flexbox, you might want to screen the [CSS Grid Vs Flexbox ](https://youtu.be/MdPYenT89o4)video before the code along–or at some other point in this lesson, depending on the flow that makes the most sense for your students.&#x20;

Some students might find the one-dimensional vs two-dimensional distinction between flexbox and grid useful. Others might find it misleading or confusing as both approaches can result in column and row placements, especially as screen size changes. For this reason, this code-along presents two container divs, each with the same items. We will style one group using flex and the other using grid. You’ll notice in the starter HTML that the class and ID names are clearly labeled according to which layout style students will use.

```html
<body>
    <h2>Flexbox</h2>
    <div class="flex-container">
        <div class="flex-item" id="flex-one">Home</div>
        <div class="flex-item" id="flex-two">About</div>
        <div class="flex-item" id="flex-three">Get your latest astrological insights here!</div>
        <div class="flex-item" id="flex-four">Free Natal Charts!</div>
    </div>
    
    <h2>Grid</h2>
    <div class="grid-container">
        <div class="grid-item" id="grid-one">Home</div>
        <div class="grid-item" id="grid-two">About</div>
        <div class="grid-item" id="grid-three">Get your latest astrological insights here!</div>
        <div class="grid-item" id="grid-four">Free Natal Charts!</div>
    </div>
</body>
```

There is also some minimal stying applied. Invite students to take note of hte starter code in the CSS file as well as the output.

```css
/*Starter Code*/

.flex-container{
    display: flex;
    gap: 10px;
}

.flex-item{
    border: 2px solid purple;
}

/*Add styling below to refine grid formatting*/

.grid-container{
    display: grid;
    gap: 10px;
}

.grid-item{
    broder: 2px solid green;
}
```

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-02 at 11.19.22 AM.png" alt=""><figcaption><p>Initial output from starter code</p></figcaption></figure>

Remind students to open a new tab and to inspect the page, where they can look for the flex and grid notations under the elements tab in the source code.

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-02 at 11.20.04 AM.png" alt=""><figcaption><p>Source code after using the 'Inspect' feature</p></figcaption></figure>

Elicit student noticings on how applying the flex and grid displays affect the output. Coding along with students, have them experiment with different values for the `flex-direction` property: `row-reverse`, `column`, and `column-reverse`. You might check students' understanding of how each direction affects the main and cross axes as you code along.

Land on the default direction (row) and ask students how they would make the grid-items appear in the same way on the screen while viewing the output on a separate tab. What changes would they make to the grid container to make the items line up alongside each other like the flex items. Ask students to notice the differences in full screen mode and as you change the size of the tab and reduce the viewport. \[The idea here is to help students build some insight into when one layout approach might be best suited for a particular design task.]&#x20;

**NB**: _Depending on your students’ needs/ interest, you can adjust the degree to which you continue to compare the flexbox and grid comparisons during the code-along._

<figure><img src="../.gitbook/assets/Screen Shot 2023-05-02 at 11.21.32 AM.png" alt=""><figcaption><p>Preview after setting both to display in rows</p></figcaption></figure>

Present the `flex-wrap` property and possible values: `nowrap` (default), `wrap`, and `wrap-reverse` on the flex container. Gie students somet ime to play around with these properties as well as the `justify-content` property and possible values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`.

Students can make use of the resource [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to learn about and experiment with other properties that can be used to style the flex container.

**NB**: _Once students have a basic understanding of the relationship between the flex container and its items, they are likely to benefit most by experimenting with various properties and values in the code editor. You might gradually release from the code-along and send students into the independent practice to experiment with properties used to style flex items. The starter code has some pre-populated properties applied to the flex items to get them started with experimenting._ [_This resource is a helpful guide_](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/) _as they begin working with properties that can be applied to flex items._

### Student Activity (20 - 30 min)

Use this [starter code](https://replit.com/@KELLYJOHNSTON4/Flex-the-Swag#index.html) to create at least one landing page for a school swag store. Experiment with different layouts and designs that you can present to the student council for a vote on which version will go live. Your code must meet the following requirements:

* Designate a parent container as a flexbox with `display: flex`
* Display `flex-direction` in both row and column orientations
* Use the `justify-content` property to center or distribute content within a flexbox
* Add minimum gaps to a flexbox with the `gap` property
* Use the `min-height` or `min-width` property to preserve the size of a specific flexbox child

Once you have created your layout witht he above specifications, you can try one or more of the following stretch challenges.

* \[**Stretch**] Group elements within a flex child to bundle them together. (For example, your hats div might include three different types of hats, each contained in a new div contained within the hat div)
* \[**Stretch**] Utilize flexbox within a flexbox to replicate common web layouts (e.g. a navbar with a cluster of items on the right hand side)
* \[**Stretch**] Modify the behavior of a single child element within a flexbox using one or more of the following properties: `align-self`, `order`, `flex-shrink`, or `flex-grow`

### Wrap-Up (5 min)

Share your layout(s) with a partner and discuss:

1. What aspects of CSS Flex are easiest to implement for you?
2. Which aspects of CSS Flex are you still figuring out?
3. What would you ike to do next with your layout/design?
4. What advice would your partner give you as you continue working on your layout?
