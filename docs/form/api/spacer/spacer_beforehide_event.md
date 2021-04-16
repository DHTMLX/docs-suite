---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a control is hidden
 

@params:
- value     undefined     the current value of the control, null
- init      boolean     true, if the event is triggered on the control initialization, otherwise false

@returns:
param   boolean     false - to prevent a control from being hidden, otherwise - true


@example:
form.getItem("spacer").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});


@template: api_event
@descr:


