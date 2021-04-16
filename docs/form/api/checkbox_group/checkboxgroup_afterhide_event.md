---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a control is hidden
 

@params:
- value     object     the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.
- init      boolean     true, if the event is triggered on the control initialization, otherwise false


@example:
form.getItem("CheckboxGroup").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});


@template: api_event
@descr:

