---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Spacer Event 
description: You can explore the beforeHide event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (value: undefined, init: boolean) => boolean | void;'}

@params:
- `value: undefined` - the current value of the control, null
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("spacer").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});

@descr:
