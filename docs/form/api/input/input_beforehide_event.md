---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a control is hidden

@signature: {'beforeHide: (value: string | number, init: boolean) => boolean | void;'} 

@params:
- `value: string | number` - the current value of the control
- `init: boolean` - true, if the event is triggered on the control initialization, otherwise false

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("input").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});

@descr:

@changelog: added in v7.0
