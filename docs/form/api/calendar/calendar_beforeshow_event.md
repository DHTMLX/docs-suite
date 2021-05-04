---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown

@signature: {'beforeShow: (value: string | Date) => boolean | void;'} 

@params:
- value     Date|string     the current value of the control

@returns:
param   boolean | void     false - to prevent a control from being shown, otherwise - true


@example:
form.getItem("datepicker").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});


@template: api_event
@descr:

@changelog: added in v7.0
