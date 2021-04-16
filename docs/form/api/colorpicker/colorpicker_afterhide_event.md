---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a control is hidden
 

@params:
- value     string     the current value of the control
- init      boolean     true if the event is triggered on the colorpicker control initialization


@example:
form.getItem("colorpicker").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});


@template: api_event
@descr:

@changelog: added in v7.0
