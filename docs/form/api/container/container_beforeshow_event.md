---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Container Event 
description: You can explore the beforeShow Container event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a Container control is shown

@signature: beforeShow: (value: undefined) => boolean | void;

@params:
`value: undefined` - the current value of the control, null

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("container").events.on("BeforeShow", function(text) {
    console.log("BeforeShow", text);
    return true;
});

@changelog: added in v7.2
