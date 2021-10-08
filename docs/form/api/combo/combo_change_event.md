---
sidebar_label: change
title: JavaScript Form - change Combo Box Event 
description: You can explore the change event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: string | string[]) => void;'}

@params:
`value: string | string[]` - the id(s) of newly selected item(s) from data collection

@example:
form.getItem("combo").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
