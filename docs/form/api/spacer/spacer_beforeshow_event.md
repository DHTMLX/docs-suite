---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 
@signature: {'beforeShow: (value: undefined) => boolean | void;'}

@params:
`value: undefined` - the current value of the control, null

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("spacer").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:
