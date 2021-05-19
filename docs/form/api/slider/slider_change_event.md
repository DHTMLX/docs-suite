---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 
@signature: {'change: (value: number[]) => void;'}

@params:
`value: number[]` - the current value of the control

@example:
form.getItem("slider").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
