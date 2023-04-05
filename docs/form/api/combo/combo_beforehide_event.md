---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Combo Box Event 
description: You can explore the beforeHide event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (ids: (string | number) | (string | number)[], init: boolean) => boolean | void;'}

@params:
- `ids: (string | number) | (string | number)[]` - the ID(s) of the option(s) that are currently selected in the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("combo").events.on("beforeHide", function(ids, init) {
    console.log("beforeHide", ids, init);
    return true;
});

@descr:

@changelog: added in v7.0
