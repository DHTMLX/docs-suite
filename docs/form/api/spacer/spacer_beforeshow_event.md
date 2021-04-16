---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 

@params:
- value     undefined     the current value of the control, null

@returns:
param   boolean     false - to prevent a control from being shown, otherwise - true


@example:
form.getItem("spacer").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});


@template: api_event
@descr:

