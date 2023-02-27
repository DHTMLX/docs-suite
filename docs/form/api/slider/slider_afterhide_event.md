---
sidebar_label: afterHide
title: JavaScript Form - afterHide Slider Event 
description: You can explore the afterHide event of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: number[], init: boolean) => void;'} 

@params:
- `value: number[]` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; *false* otherwise 

@example:
form.getItem("slider").events.on("afterHide", function(value, init) {
    console.log("afterHide", value, init);
});

@descr:

@changelog: added in v7.0
