---
sidebar_label: change
title: JavaScript Form - change Combo Box Event 
description: You can explore the change event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (ids: (string | number) | (string | number)[]) => void;'}

@params:
- `ids: string | number | (string | number)[]` - the ID(s) of newly selected option(s) from data collection

@example:
form.getItem("combo").events.on("change", function(ids) {
    console.log("change", ids);
});

@descr:

@changelog: added in v7.0
