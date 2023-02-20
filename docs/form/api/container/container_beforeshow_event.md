---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Container Event 
description: You can explore the beforeShow event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a Container control is shown

@signature: beforeShow: () => boolean | void;

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("container").events.on("beforeShow", function() {
    console.log("beforeShow");
    return true;
});

**Change log:**
- The event was added in v7.2
- The **value** parameter was removed in v8.0
