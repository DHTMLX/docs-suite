---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Button Event 
description: You can explore the beforeShow event of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeShow

@short: fires before a Button control is shown

@signature: {'beforeShow: (text: string) => boolean | void;'}

@params:
- `text: string` - the current text label of the control

@returns:
Return `false` to prevent a control from being shown; otherwise - `true`.

@example:
form.getItem("button").events.on("beforeShow", function(text) {
    console.log("beforeShow", text);
    return true;
});

@descr:

@changelog: added in v7.0
