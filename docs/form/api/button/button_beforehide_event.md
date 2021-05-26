---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Button Event 
hide_title: true
description: You can explore the beforeHide Button event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeHide

@short: fires before a Button control is hidden

@signature: {'beforeHide: (text: string, init: boolean) => boolean | void;'}

@params:
- `text: string` - the current text label of the control
- `init: boolean` - true, if the event is triggered on the button control initialization

@returns:
Return `false` to prevent a control from being hidden; otherwise - `true`.

@example:
form.getItem("button").events.on("BeforeHide", function(text, init) {
    console.log("BeforeHide", text, init);
    return true;
});

@descr:

@changelog: added in v7.0
