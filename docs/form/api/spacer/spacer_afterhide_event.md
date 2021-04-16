---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a control is hidden
 

@params:
- value     undefined   the current value of the control, null
- init      boolean     true, if the event is triggered on the control initialization


@example:
form.getItem("spacer").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});


@template: api_event
@descr:


