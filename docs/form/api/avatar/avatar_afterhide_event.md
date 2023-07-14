---
sidebar_label: afterHide
title: JavaScript Form - afterHide Avatar Event 
description: You can explore the afterHide event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: object, init: boolean) => void;'}

@params:
- `value: object` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@example:
form.getItem("avatar").events.on("afterHide", value => {
    console.log("afterHide", value);
});

@descr: