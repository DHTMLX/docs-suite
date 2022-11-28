---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Spacer Event 
description: You can explore the beforeShow event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (value: undefined) => boolean | void;'}

@params:
- `value: undefined` - the current value of the control, null

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("spacer").events.on("beforeShow", function(value) {
    console.log("beforeShow", value);
    return true;
});

@descr:
