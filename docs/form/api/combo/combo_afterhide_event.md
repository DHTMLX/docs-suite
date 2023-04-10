---
sidebar_label: afterHide
title: JavaScript Form - afterHide Combo Box Event 
description: You can explore the afterHide event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (ids: (string | number) | (string | number)[], init: boolean) => void;'}

@params:
- `ids: (string | number) | (string | number)[]` - the ID(s) of the option(s) that are currently selected in the control
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("combo").events.on("afterHide", function(ids, init) {
    console.log("afterHide", ids, init);
});

@descr:

@changelog: added in v7.0
