---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
todoanton any приходит из d.ts
@signature: {'change: (name: string, value: any) => any;'}
 

@params:
- value     Date|string     the current value of the control


@example:
form.getItem("datepicker").events.on("Change", function(value) {
    console.log("Change", value);
});


@template: api_event
@descr:

@changelog: added in v7.0
