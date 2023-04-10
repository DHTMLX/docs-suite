---
sidebar_label: afterHide
title: JavaScript Form - afterHide Simple Vault Event 
description: You can explore the afterHide event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: object[], init: boolean) => void;'}

@params:
- `value: array` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@example:
form.getItem("simplevault").events.on("afterHide", function(value, init) {
    console.log("afterHide", value, init);
});

@descr:

@changelog: added in v7.0
