---
sidebar_label: afterShow
title: JavaScript Form - afterShow Toggle Event 
description: You can explore the afterShow event of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: string | number | boolean) => void;'}

@params:
- `value: string | number | boolean` - the current value of the control

@example:
form.getItem("toggle").events.on("afterShow", function(value) {
    console.log("afterShow", value);
});

@descr: