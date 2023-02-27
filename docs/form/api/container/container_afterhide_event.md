---
sidebar_label: afterHide
title: JavaScript Form - afterHide Container Event 
description: You can explore the afterHide event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a Container control is hidden

@signature: afterHide: (init: boolean) => void;

@params:
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("container").events.on("afterHide", function(init) {
    console.log("afterHide", init);
});

@descr: 

**Change log:**
- The event was added in v7.2
- The **value** parameter was removed in v8.0