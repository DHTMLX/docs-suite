---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Avatar Event 
description: You can explore the beforeShow event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (value: object) => boolean | void;'}

@params:
- `value: object` - the current value of the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("avatar").events.on("beforeShow", value => {
    console.log("beforeShow", value);
    return true;
});

@descr: