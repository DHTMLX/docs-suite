---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control

@signature: {'change: (value: string | boolean) => void;'}

@params:
- value     string | boolean     the current value of the control

@example:
form.getItem("checkbox").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
