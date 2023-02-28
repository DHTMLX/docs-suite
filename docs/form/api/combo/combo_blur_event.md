---
sidebar_label: blur
title: JavaScript Form - blur Combo Box Event 
description: You can explore the blur event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Combo control has lost focus

@signature: blur: (value: Id | Id[]) => void;

@params:
- `value: (string | number) | (string | number)[]` - the ID(s) of the option(s) that are currently selected in the control

@example:
form.getItem("combo").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
