---
sidebar_label: afterShow
title: JavaScript Form - afterShow Combo Box Event 
hide_title: true
description: You can explore the afterShow Combo Box event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: string | string[]) => void;'}

@params:
`value: string | string[]` - the current value of the control

@example:
form.getItem("combo").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:

@changelog: added in v7.0
