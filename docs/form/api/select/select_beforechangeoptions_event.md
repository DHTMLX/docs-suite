---
sidebar_label: beforeChangeOptions
title: JavaScript Form - beforeChangeOptions Select Event 
description: You can explore the beforeChangeOptions event of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeOptions

@short: fires before changing a list of Select options

@signature: {'beforeChangeOptions: (options: IOption[]) => boolean | void;'}

@params:
- `options: array` - a new array of Select options

@example:
form.getItem("select").events.on("beforeChangeOptions", function(options) {
    console.log("beforeChangeOptions", options);
});

@descr:

**Change log**: The event was added in v8.0
