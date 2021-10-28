---
sidebar_label: click
title: JavaScript Form - click Event 
description: You can explore the click event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# click

@short: fires after a click on a button in a form

@signature: {'click: (name: string, e: Event) => any;'}

@params:
- `name|id: string` - the name  (or id, if the name is not specified) of a clicked button
- `e: Event` - a native event object

@example:
form.events.on("click", function(name, events) {
    console.log("click", name, events); 
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added in v7.0
