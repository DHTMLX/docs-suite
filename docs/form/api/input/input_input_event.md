---
sidebar_label: input
title: input
---          

@short: fires when a user types some text in the input
 

@params:
- inputValue        string|number  an entered value


@example:
form.getItem("input").events.on("Input", function(inputValue) {
    console.log("Input", inputValue);
});


@template: api_event
@descr:


@changelog: added in v7.0
