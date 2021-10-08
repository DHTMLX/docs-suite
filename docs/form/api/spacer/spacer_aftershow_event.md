---
sidebar_label: afterShow
title: JavaScript Form - afterShow Spacer Event 
description: You can explore the afterShow event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: undefined) => void;'}

@params:
`value: undefined` - the current value of the control, null

@example:
form.getItem("spacer").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:
