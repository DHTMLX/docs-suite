---
sidebar_label: input
title: JavaScript Form - input Timepicker Event 
description: You can explore the input Timepicker event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# input

@short: fires when a user enters the value of a control in the input manually

@signature: {'input: (inputValue: string) => void;'}

@params:
`inputValue: string` - an entered value

@example:
form.getItem("timepicker").events.on("input", function(inputValue) {
    console.log("input", inputValue);
});

@descr:

{{note The functionality is available when the "editable" option of the TimePicker control is set to *true*.}}

@changelog: added in v7.0
