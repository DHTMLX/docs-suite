---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 
@signature: {'beforeShow: (value: string | boolean) => boolean | void;'}

@params:
- value     string | boolean     the current value of the control

@returns:
param   boolean | void     false - to prevent a control from being shown, otherwise - true


@example:
form.getItem("checkbox").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});



@descr:

@changelog: added in v7.0
