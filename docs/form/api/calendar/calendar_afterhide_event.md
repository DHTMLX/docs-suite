---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a control is hidden
 
@signature: {'afterHide: (value: string | Date, init: boolean) => void;'}

@params:
- `value: string | Date` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the datepicker control initialization

@example:
form.getItem("datepicker").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});

@descr:

@changelog: added in v7.0
