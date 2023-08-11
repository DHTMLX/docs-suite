---
sidebar_label: afterHide
title: JavaScript Form - afterHide Toggle Event 
description: You can explore the afterHide event of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: string | number | boolean, init: boolean) => void;'}

@params:
- `value: string | number | boolean` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the toggle control initialization; otherwise, *false*

@example:
form.getItem("toggle").events.on("afterHide", function(value, init) {
    console.log("afterHide", value, init);
});

@descr:
