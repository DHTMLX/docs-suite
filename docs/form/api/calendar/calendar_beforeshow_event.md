---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown

@signature: {'beforeShow: (value: string | Date) => boolean | void;'} 

@params:
`value: string | Date` - the current value of the control

@returns:
Return `false` to prevent a control from being shown; otherwise - `true`.

@example:
form.getItem("datepicker").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
