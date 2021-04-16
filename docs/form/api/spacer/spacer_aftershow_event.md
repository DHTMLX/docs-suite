---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown
 

@params:
- value     undefined     the current value of the control, null



@example:
form.getItem("spacer").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});


@template: api_event
@descr:


