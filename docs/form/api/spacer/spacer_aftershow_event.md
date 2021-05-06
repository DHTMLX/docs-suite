---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown

@signature: {'afterShow: (value: undefined) => void;'}
 
@params:
- value     undefined     the current value of the control, null

@example:
form.getItem("spacer").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});


@descr:

