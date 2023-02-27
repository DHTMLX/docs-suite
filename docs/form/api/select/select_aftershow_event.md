---
sidebar_label: afterShow
title: JavaScript Form - afterShow Select Event 
description: You can explore the afterShow event of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: string | number) => void;'}

@params:
- `value: string | number` - the current value of the control

@example:
form.getItem("select").events.on("afterShow", function(value) {
    console.log("afterShow", value);
});

@descr:

@changelog: added in v7.0
