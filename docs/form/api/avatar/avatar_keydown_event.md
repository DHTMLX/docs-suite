---
sidebar_label: keydown
title: JavaScript Form - keydown Avatar Event 
description: You can explore the keydown event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed and the Avatar control is in focus

@signature: {'keydown: (event: KeyboardEvent) => void;'}

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object

@example:
form.getItem("avatar").events.on("keydown", event => {
    console.log("keydown", event);
});

@descr: