---
sidebar_label: blur
title: JavaScript Form - blur Button Event 
description: You can explore the blur Button event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a Button control has lost focus

@signature: blur: (text: string) => void;

@params:
`text: string` - the current text value of the control

@example:
form.getItem("button").events.on("blur", (text) => {
    console.log("blur", text);
});
@examplestop:

@changelog: added in v7.2
