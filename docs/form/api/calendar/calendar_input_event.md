---
sidebar_label: input
title: input
---          

@short: fires when a user enters the value of a control in the input manually
 

@params:
- inputValue        string  an entered value


@example:
form.getItem("datepicker").events.on("Input", function(inputValue) {
    console.log("Input", inputValue);
});


@template: api_event
@descr:

{{note The functionality is available when the "editable" option of the DatePicker control is set to *true*.}}

@changelog: added in v7.0
