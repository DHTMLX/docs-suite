---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Combo Box Event 
description: You can explore the beforeShow Combo Box event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (value: string | string[]) => boolean | void;'}

@params:
`value: string | string[]` - the id(s) of the item(s) from data collection that are currently selected in the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("combo").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
