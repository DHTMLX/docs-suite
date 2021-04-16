---
sidebar_label: input
title: input
---          

@short: fires on typing text in an input of Combobox

@signature: input: (value: string | number) => void;

@params:
- value     string|number       an entered value

@example:
combobox.events.on("Input", function(value) {
    console.log("You've entered: " + value);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/n70eqx5l	Combobox. Events

