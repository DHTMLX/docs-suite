---
sidebar_label: changeOptions
title: JavaScript Form - changeOptions Select Event 
hide_title: true
description: You can explore the changeOptions Select event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# changeOptions

@short: fires on changing a list of Select options

@signature: {'changeOptions: (options: IOption[]) => void;'}

@params:
`options: array` - a new array of Select options

@example:
form.getItem("select").events.on("ChangeOptions", function(options) {
    console.log("ChangeOptions", options);
});

@descr:

@changelog: added in v7.0
