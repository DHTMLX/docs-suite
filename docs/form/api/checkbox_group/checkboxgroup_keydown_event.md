---
sidebar_label: keydown 
title: JavaScript Form - keydown Checkbox Group Event 
description: You can explore the keydown event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed and a checkbox of the CheckboxGroup control is in focus

@signature: keydown: (event: KeyboardEvent, id: string) => void;

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id: string` - the id of a checkbox of the CheckboxGroup control

@example:
form.getItem("CheckboxGroup").events.on("keydown", function(event, id) {
    console.log(event, id);
});

@descr:

@changelog: added in v7.2
