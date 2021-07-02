---
sidebar_label: keydown 
title: JavaScript Form - keydown Radiogroup Event 
description: You can explore the keydown Radiogroup event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and the element of the Radiogroup control is in focus

@signature: keydown: (event: KeyboardEvent, id: string) => void;

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id: string` - the id of the element of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("keydown", function(event, name, id) {
    console.log(event, name, id);
});

@changelog: added in v7.2
