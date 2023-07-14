---
sidebar_label: afterShow
title: JavaScript Form - afterShow Avatar Event 
description: You can explore the afterShow event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: object) => void;'}

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("afterShow", value => {
    console.log("afterShow", value);
});

@descr:
