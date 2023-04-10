---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Combo Box Event 
description: You can explore the beforeShow event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeShow

@short: fires before a control is shown

@signature: {'beforeShow: (ids: (string | number) | (string | number)[]) => boolean | void;'}

@params:
- `ids: string | number | (string | number)[]` - the ID(s) of the options(s) that are currently selected in the control

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.getItem("combo").events.on("beforeShow", function(ids) {
    console.log("beforeShow", ids);
    return true;
});

@descr:

@changelog: added in v7.0
