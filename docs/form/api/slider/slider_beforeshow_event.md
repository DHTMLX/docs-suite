---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Slider Event 
hide_title: true
description: You can explore the beforeShow Slider event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (value: number[]) => boolean | void;'}

@params:
`value: number[]` - the current value of the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("slider").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});

@descr:

@changelog: added in v7.0
