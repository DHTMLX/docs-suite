---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Checkbox Event 
description: You can explore the beforeShow event of the Checkbox control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (value: string | boolean) => boolean | void;'}

@params:
`value: string | boolean` - the current value of the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("checkbox").events.on("beforeShow", function(value) {
    console.log("beforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
