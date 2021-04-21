---
sidebar_label: blur
title: blur
---          

`to do - check`

@short: fires on focus removal from a Radiogroup control

@signature: 

@params:
- value - the current value of the control
- id - id of the element of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("blur", (value, id) => {
    console.log("blur", value, id);
});

@relatedapi: 

@changelog: added v7.2
