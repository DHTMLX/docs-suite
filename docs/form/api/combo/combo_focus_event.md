---
sidebar_label: focus
title: focus
---          

`to do check`

@short: fires on focus in a Combo control

@signature: 

@params:
- value - the current value of the control
- id - id of the element of the Combo control `to do check`

@example:
form.getItem("combo").events.on("focus", (value) => {
    console.log("focus", value);
});

@relatedapi: 

@changelog: Added in v7.2
