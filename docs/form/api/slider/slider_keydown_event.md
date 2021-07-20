---
sidebar_label: keydown 
title: JavaScript Form - keydown Slider Event 
description: You can explore the keydown Slider event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and the Slider control is in focus

@signature: keydown: (event: KeyboardEvent) => void;

@params:
`event: KeyboardEvent` - a native KeyboardEvent object

@example:
form.getItem("slider").events.on("keydown", function(event) {
    console.log(event);
});

@changelog: added in v7.2
