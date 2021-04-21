---
sidebar_label: focus
title: focus
---          

`to do check`

@short: fires on focus in a Select control

@signature: 

@params:
- value - the current value of the control

@example:
form.getItem("select").events.on("focus", (value) => {
    console.log("focus", value);
});

@relatedapi: 

@changelog: Added in v7.2
