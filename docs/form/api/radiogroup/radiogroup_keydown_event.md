---
sidebar_label: keydown 
title: JavaScript Form - keydown Radiogroup Event 
description: You can explore the keydown event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and a radio button of the Radiogroup control is in focus

@signature: keydown: (event: KeyboardEvent, id: string) => void;

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id: string` - the id of the radio button of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("keydown", function(event, id) {
    console.log(event, id);
});

@changelog: added in v7.2
