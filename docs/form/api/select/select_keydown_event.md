---
sidebar_label: keydown 
title: JavaScript Form - keydown Select Event 
description: You can explore the keydown Select event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and the Select control is in focus

@signature: keydown: (event: KeyboardEvent) => void;

@params:
`event: KeyboardEvent` - a native KeyboardEvent object

@example:
form.getItem("select").events.on("keydown", function(event, name) {
    console.log(event, name, id);
});

@changelog: added in v7.2
