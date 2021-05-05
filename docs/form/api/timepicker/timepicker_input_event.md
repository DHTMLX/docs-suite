---
sidebar_label: input
title: input
---          

@short: fires when a user enters the value of a control in the input manually
 
@signature: {'input: (inputValue: string) => void;'}

@params:
- inputValue        string  an entered value

@example:
form.getItem("timepicker").events.on("Input", function(inputValue) {
    console.log("Input", inputValue);
});


@descr:

{{note The functionality is available when the "editable" option of the TimePicker control is set to *true*.}}

@changelog: added in v7.0
