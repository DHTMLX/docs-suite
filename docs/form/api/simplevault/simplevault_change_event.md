---
sidebar_label: change
title: JavaScript Form - change Simple Vault Event 
hide_title: true
description: You can explore the change Simple Vault event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# change

@short: fires on changing the value of a control

@signature: {'change: (value: ISimpleVaultValue[]) => void;'} 

@params:
`value: array` - the current value of the control

@example:
form.getItem("simplevault").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
