---
sidebar_label: blur
title: blur
---          

`to do - check`

@short: fires on focus removal from a Combo control

@signature: 

@params:
- value - the current value of the control

@example:
form.getItem("combo").events.on("blur", (value) => {
    console.log("blur", value);
});

@relatedapi: 

@changelog: added v7.2
