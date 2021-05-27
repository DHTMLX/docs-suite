---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Textarea Event 
hide_title: true
description: You can explore the beforeHide Textarea event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (value: string | number, init: boolean) => boolean | void;'} 

@params:
- `value: string | number` - the current value of the control
- `init: boolean` - true, if the event is triggered on the control initialization, otherwise false

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("textarea").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});

@descr:

@changelog: added in v7.0
