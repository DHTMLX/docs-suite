---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown
 
@signature: {'afterShow: (value: string | boolean) => void;'}

@params:
- value     string|boolean     the current value of the control

@example:
form.getItem("checkbox").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:

@changelog: added in v7.0
