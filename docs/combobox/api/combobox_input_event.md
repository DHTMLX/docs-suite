---
sidebar_label: input
title: input
---          

@short: fires on typing text in an input of Combobox
todoanton any приходит из d.ts
@signature: {'input: (value: any) => any;'}

@params:
- value     string|number       an entered value

@example:
combobox.events.on("Input", function(value) {
    console.log("You've entered: " + value);
});


@template: api_event
@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

