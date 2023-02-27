---
sidebar_label: focus
title: JavaScript Form - focus Button Event 
description: You can explore the focus event of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when a Button control has received focus

@signature: focus: (text: string) => void;

@params:
- `text: string` - the current value of the control

@example:
form.getItem("button").events.on("focus", (text) => {
    console.log("focus", text);
});
@examplestop:

@changelog: Added in v7.2
