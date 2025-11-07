---
description: What role do servers play in socket communication?
---

# U5LA3: Socket Servers

## Preface && Context

### Teacher Notes && Overview

So far, Unit 5 has focused on websockets in the context of a standard HTML, CSS, and JavaScript website. But websockets can be used to broadcast _any_ sort of information to users. That includes data that can be incorporated into a p5.js sketch, which means that this unit presents a phenomenal opportunity to invite students to re-engage with the concepts they worked in previous courses. 

If your students loved p5 and have expressed that they miss it, this is an opportunity to re-engage them in that form of creative expression. This is also an opportunity to both remind students and demonstrate that all the pure JavaScript concepts they've learned in _this_ course can indeed be retroactively used to supercharge their p5 work. 

If your students have mostly forgotten their p5 work, if they came to this course without that prerequisite, or if there simply isn't time in the schedule, you should feel free to skip this content with students. 

This activity is 100% optional - please only implement it if your students would benefit from the activity. 

### Objectives

**Students will be able to:**

* Implement Websockets into a p5.js sketch.

### Suggested Duration

\~1-2 Periods (\~45 - 90 min)

### NYS Standards

### Vocabulary (UC)

* **Socket.IO:** A client and server library that adds features to WebSocket communication
* **Socket Server:** A server that listens for WebSocket connections and relays messages between them in real-time
* **Emit:** Send a message
* **Broadcast:** Exclude the sender when emitting
* **Socket.IO Event:** A way to label socket messages
* **Event Handler:** A function that's called when a socket message is received

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| You can teach p5 + websockets completely on your own if you wish - you and your students have all the requisite knowledge do modify one of the lessons from this lab to broadcast p5-specific data and display it on an HTML canvas. But if you prefer to follow a more guided approach, there's a robust set of resources that you can draw on to launch students into this exploration. This can be done either as a unified cohort, or as a stretch (or guided remediation) activity for a subset of students. | The strongest entry point is [this p5.js websockets tutorial](https://thecodingtrain.com/tracks/web-sockets-and-p5js) from Dan Shiffman. It's important to name that as a culminating activity to this unit, there might be some rusty syntax, but there are no new concepts introduced in Dan's tutorial.  |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| You can ask students to replicate their favorite lesson or lab thus far when combining it with p5.  | You can flex this lesson into a code along, you can offer the video fro students to code along side or you can do both. | Consider doing a show and tell with students' p5 creations. |

### Suggestions for Differentiation

This Unit is already advanced and should be reserved for a more accelerating group of students. Furthermore in this lesson, students can go as explore at their own pace and at their own comfortable level of depth therefore self differentiating.

Nonetheless, you can use the resource provided in the Planning Notes as a low entry point, and have students create a fully functional chat room with p5 as an extension. 

### Resources

- [This p5.js websockets tutorial](https://thecodingtrain.com/tracks/web-sockets-and-p5js) from Dan Shiffman. 

### Assessments

**Formative:**
- You can have student present their creations to the rest of the class.
- You can collect and grade their exploration for completion.

**Summative:**

- This final curriculum lesson is by nature summative as students are expected to combine all the topics they've previously learned.
- Final Course Project

## Lesson

> This lesson doesn't require any front loading. However, feel empowered to do a review on the two joined topics before launching them into independent exploration: Websockets and p5. _See teacher note_

### Wrap Up (\~5 min)

- _Consider having students show and tell their p5 creations._
- If you had more time, what would you add to your creation?
- What else are you curious about?