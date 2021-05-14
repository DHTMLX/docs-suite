---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control

@signature: {'change: (value: ISimpleVaultValue[]) => void;'} 

@params:
- value     array     the current value of the control

@example:
form.getItem("simplevault").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
