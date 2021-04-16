---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 

@params:
- value     array     the current value of the control

@returns:
param   boolean     false - to prevent a control from being shown, otherwise - true


@example:
form.getItem("simplevault").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});


@template: api_event
@descr:

@changelog: added in v7.0
