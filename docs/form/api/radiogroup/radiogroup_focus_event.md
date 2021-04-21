---
sidebar_label: focus
title: focus
---          

`to do check`

@short: fires on focus in a Radiogroup control

@signature: 

@params:
- value - the current value of the control
- id - id of the element of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("focus", (value, id) => {
    console.log("focus", value, id);
});

@relatedapi: 

@changelog: Added in v7.2
