---
description: >-
  How can one use HTML, CSS, and Bulma together to make an accessible and
  responsive website?
---

# 🎨 Unit 1 Final Project: My Travel Page

### Teacher Notes

The _Travel Page Lab_ is purposely made open ended for students to connect with it in what ever way they can relate. That being said, use your best judgement when it comes to narrowing down options for your particular students. If students struggle with making an initial decision, recommend a travel site to their a country of their choice or even a specific part of their neighborhood. If students have an idea but struggle with how to start the website, point them to the Bulma templates. See [Extra Help](unit-1-final-project-my-travel-page.md#extra-help) below.

Reminder that these sites are really just digital brochures or posters. Remind students that nothing on the page is expected to be dynamic: drop down menus, links to another html page, data collection, etc. That will all be learned in Unit 2 and beyond. For this lab, the focus is HTML and CSS. If students need an extra challenge, they can incorporate some fun CSS animations. See [Extensions](unit-1-final-project-my-travel-page.md#extensions) below.

**Students do not require any starter code for this final project as they are showcasing all of the skills they built thus far; they should begin from a blank HTML/CSS project.**

### Prompt

It's vacation time, and people need your website to help them get started. Will you show the next location they're going to, and entice them with things to do and place to see like this [Germany travel site](https://www.germany.travel/en/home.html) or this [Dominican Republic one](https://www.godominicanrepublic.com/)? Will you create a site for the transit in that city including bus routes and trains like [the NYC MTA site](https://new.mta.info/agency/new-york-city-transit)? Or, will your page be a center for available hotels in the area allowing people to book right on the site like [MGM Resorts](https://www.mgmresorts.com/en.html) or a more generic [Hotels.Com](https://www.hotels.com/)?

**Directions**: Choose a website idea that will help people with their travels, and create a single webpage that is both accessible and responsive. We recommend creating a travel page like the Germany or Dominican Republic site above, but you can alternatively choose to do a transit help page or a Hotel help page for any city.

Once you decide and choose a city, do some research on what similar sites already exist, and determine which parts of the website you want to copy and which parts you want to make better. This is your opportunity to put everything you've learned so far together in one site.

**Requirements**:

There are a couple of things that should be included in your website:

1. A **Navbar**, a **Footer**, and at least one section of **Cards**.
2. A section with a **Form** containing things like text-boxes, checkboxes, dropdown menus, etc. _(For example: a "subscribe now" form, find hotels by date and location, or a quick survey for quality assurance)_
3. Other than the above 4 sections, at least 3 more sections - maybe a second navbar, a hero, a gallery section, etc.
4. The use of **Grid** -- either with CSS or with Bulma
5. It should be **100% Accessible**.
6. It should look good on Mobile and on Desktop; **100% Responsive**.

### Exemplar

Take a look at [this finished example](https://github.com/nycdoe-cs4all/interactive-web/tree/main/unit-1-html-and-css-good-vs-bad-design/U1FINAL/U1FINAL-Exemplar) before you start to sketch what your travel page might look like.

### Culturally Responsive Best Practice

_Coming Soon_

### Extra Help?

Having trouble starting, deciding where to go or which to do? Go for a travel page! Remember, it doesn't have to be a country like Germany, the Dominican Republic, or Madagascar, it can be a city like New York, Paris, or Tokyo instead. It can alternatively be a park like Central Park, or even a neighborhood like Harlem or SoHo. You can make it specific to your area, for example "East Jamaica Queens", or you can use a fictional place like _Gotham City_, _Hogwarts School of Witchcraft and Wizardry_, or _Bikini Bottom_.

Have an idea but not sure how to begin your website? Check out [these Bulma templates](https://bulmatemplates.github.io/bulma-templates/). Feel free to copy one idea or make a collage of several ideas while you are designing your website. Sketch what your site will look like on a piece of paper before putting it all together. Remember all the individual pieces can be found in [Bulma's documentation](https://bulma.io/documentation/).

### Extensions

**Mild**

*   Some websites' links in the navbar scroll to that section in the page instead of taking you to a different site. For example, if you click "STAY" in the exemplar website, notice that it takes you to the "Find a place to stay" section of the site. Implement this effect in your website. Use this [resource on how to write the HTML `href` attribute](https://webplatform.github.io/docs/guides/html\_links/#Creating-intra-page-navigation-with-id-attributes). Here's an example:

    ```html
    <a href="#contact-form">Email me!</a>

    <!-- the link above will take the user to this element -->
    <div id="contact-form">
        ...
    </div>
    ```

    Bonus! Slow down the scroll with this CSS ruleset. Use this [resource on how to make the transition smooth](https://www.w3schools.com/howto/howto\_css\_smooth\_scroll.asp#section1) if you need more information.

    ```css
    html {
        scroll-behavior: smooth;
    }
    ```

**Medium**

* Check out the [CSS-Tricks Almanac](https://css-tricks.com/almanac/) for some more styles you can add to your page. Some of my favorite selectors are `:hover`, `::first-letter`, `:first-child`, `:last-child`, and `:visited`. Explore these and other selectors and properties and find some ways to incorporate them into your site.

**Spicy**

*   [CSS animations](https://www.w3schools.com/css/css3\_animations.asp) let an element gradually change from one style to another. You can change as many CSS properties you want, as many times as you want. In the example below, I permanently change the `background-color` from white to black and the font `color` from black to white:

    ```css
    div {
        width: 90%;
        height: 700px;
        background-color: white;

        animation-name: dark-mode;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes dark-mode {
        from {
            background-color: white;
            color: black;
        }
        to {
            background-color: black;
            color: white;
        }
    }

    ```

**Reflection Questions:**

* If you had more time to work on your webpage, what else would you have added? What tools would you have used to do so?
* What was the easiest part of the website to implement? What was most challenging?
