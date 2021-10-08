---
sidebar_label: afterHide
title: JavaScript Form - afterHide Container Event 
description: You can explore the afterHide event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterHide

@short: fires after a Container control is hidden

@signature: afterHide: (value: undefined, init: boolean) => void;

@params:
- `value: undefined` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("container").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});

@changelog: added in v7.2
