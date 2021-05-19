---
sidebar_label: input
title: input
---          

@short: fires when a user types some text in the textarea

@signature: {'input: (value: string | number) => void;'} 

@params:
`value: string | number` - an entered value

@example:
form.getItem("textarea").events.on("Input", function(inputValue) {
    console.log("Input", inputValue);
});

@descr:

@changelog: added in v7.0
