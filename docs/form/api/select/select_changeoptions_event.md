---
sidebar_label: changeOptions
title: JavaScript Form - changeOptions Select Event 
description: You can explore the changeOptions event of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# changeOptions

@short: fires on changing a list of Select options

@signature: {'changeOptions: (options: object[]) => void;'}

@params:
- `options: array` - a new array of Select options

@example:
form.getItem("select").events.on("changeOptions", function(options) {
    console.log("changeOptions", options);
});

@descr:

@changelog: added in v7.0
