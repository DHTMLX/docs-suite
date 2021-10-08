---
sidebar_label: blur
title: JavaScript Form - blur Combo Box Event 
description: You can explore the blur event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a Combo control has lost focus

@signature: blur: (value: string | string[]) => void;

@params:
- `value: string | string[]` - the id(s) of the item(s) from data collection that are currently selected in the control

@example:
form.getItem("combo").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
