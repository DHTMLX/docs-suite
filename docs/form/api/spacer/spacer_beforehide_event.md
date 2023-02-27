---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Spacer Event 
description: You can explore the beforeHide event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (init: boolean) => boolean | void;'}

@params:
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("spacer").events.on("beforeHide", function(value, init) {
    console.log("beforeHide", init);
    return true;
});

@descr:

**Change log:**
- The **value** parameter was removed in v8.0
