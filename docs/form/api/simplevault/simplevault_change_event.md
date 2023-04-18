---
sidebar_label: change
title: JavaScript Form - change Simple Vault Event 
description: You can explore the change event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: object[]) => void;'} 

@params:
- `value: array` - the current value of the control

@example:
form.getItem("simplevault").events.on("change", function(value) {
    console.log("change", value);
});

@descr:

@changelog: added in v7.0
