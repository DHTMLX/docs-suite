---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Slider Event 
description: You can explore the beforeHide event of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (value: number[], init: boolean) => boolean | void;'}

@params:
- `value: number[]` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("slider").events.on("beforeHide", function(value, init) {
    console.log("beforeHide", value, init);
    return true;
});

@descr:

@changelog: added in v7.0
