---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 
@signature: {'change: (value: string | string[]) => void;'}

@params:
- value     string|string[]     the current value of the control

@example:
form.getItem("combo").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
