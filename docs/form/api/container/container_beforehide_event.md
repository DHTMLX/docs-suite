---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Container Event 
description: You can explore the beforeHide event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a Container control is hidden

@signature: beforeHide: (init: boolean) => boolean | void;

@params:
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("container").events.on("beforeHide", function(init) {
    console.log("beforeHide", init);
    return true;
});

**Change log:**
- The event was added in v7.2
- The **value** parameter was removed in v8.0