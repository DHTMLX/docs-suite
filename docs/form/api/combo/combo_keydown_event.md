---
sidebar_label: keydown 
title: JavaScript Form - keydown Combo Box Event
description: You can explore the keydown event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# keydown

@short: fires when any key is pressed and an option of the Combo control is in focus

@signature: keydown: (event: KeyboardEvent, id: string | undefined) => void;

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id: string | undefined` - the id of the option of the Combo control 

@example:
form.getItem("combo").events.on("keydown", function(event, id) {
    console.log(event, id);
});

@changelog: added in v7.2
