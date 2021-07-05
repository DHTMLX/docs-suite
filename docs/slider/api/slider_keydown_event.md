---
sidebar_label: keydown 
title: JavaScript Slider - keydown Event 
description: You can explore the keydown event of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and a thumb of Slider is in focus

@signature: keydown: (event: KeyboardEvent) => void;

@params:
`event` - a native KeyboardEvent object

@example:
slider.events.on("keydown", function(event) {
    console.log("the focus is on the element and any key is pressed", event);
});
@examplestop:

**Related sample**: [Slider. Slider Events](https://snippet.dhtmlx.com/sc7ov54z)

@changelog: added in v7.2
