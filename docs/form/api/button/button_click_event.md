---
sidebar_label: click
title: JavaScript Form - click Button Event 
description: You can explore the click event of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# click

@short: fires after a click on a Button control

@signature: {'click: (events: Event) => void;'}

@params:
- `events: Event` - a native event object

@example:
form.getItem("button").events.on("click", function(events) {
    console.log("click", events);
});

@descr:

@changelog: added in v7.0
