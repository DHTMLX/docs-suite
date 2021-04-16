---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a control is hidden
 

@params:
- value     object     the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.
- init      boolean     true, if the event is triggered on the control initialization, otherwise false

@returns:
param   boolean     false - to prevent a control from being hidden, otherwise - true


@example:
form.getItem("CheckboxGroup").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});


@template: api_event
@descr:


