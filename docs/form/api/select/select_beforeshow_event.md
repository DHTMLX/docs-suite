---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 
@signature: {'beforeShow: (value: string | number) => boolean | void;'}

@params:
- value     string | number     the current value of the control

@returns:
param   boolean | void     false - to prevent a control from being shown, otherwise - true

@example:
form.getItem("select").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
