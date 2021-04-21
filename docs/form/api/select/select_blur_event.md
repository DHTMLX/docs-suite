---
sidebar_label: blur
title: blur
---          

`to do - check`

@short: fires on focus removal from a Select control

@signature: 

@params:
- value - the current value of the control

@example:
form.getItem("select").events.on("blur", (value) => {
    console.log("blur", value);
});

@relatedapi: 

@changelog: added v7.2
