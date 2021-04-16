---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown
 

@params:
- value     object     the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.



@example:
form.getItem("CheckboxGroup").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});


@template: api_event
@descr:

