---
sidebar_label: afterShow
title: JavaScript Form - afterShow Combo Box Event 
description: You can explore the afterShow event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: string | string[]) => void;'}

@params:
`value: string | string[]` - the id(s) of the item(s) from data collection that are currently selected in the control

@example:
form.getItem("combo").events.on("afterShow", function(value) {
    console.log("afterShow", value);
});

@descr:

@changelog: added in v7.0
