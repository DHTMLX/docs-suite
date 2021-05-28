---
sidebar_label: input
title: JavaScript Form - input Input Event 
hide_title: true
description: You can explore the input Input event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# input

@short: fires when a user types some text in the input

@signature: {'input: (inputValue: string | number) => void;'} 

@params:
`inputValue: string | number` - an entered value

@example:
form.getItem("input").events.on("Input", function(inputValue) {
    console.log("Input", inputValue);
});

@descr:

@changelog: added in v7.0
