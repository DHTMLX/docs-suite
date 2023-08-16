---
sidebar_label: afterHide
title: JavaScript Form - afterHide Toggle Group Event 
description: You can explore the afterHide event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a control or its toggle is hidden

@signature: {'afterHide: (value: {[id: string]: boolean | string | number}, id?: string, init?: boolean) => void;'} 

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where the <i>key</i> is the id of a toggle and the <i>value</i> is the value/state of the toggle
- `id?: string` - optional, the ID of a toggle of the control
- `init?: boolean` - optional, *true*, if the event is triggered on the control initialization; otherwise, *false*

@example:
form.getItem("ToggleGroup").events.on("afterHide", function(value, id, init) {
    console.log("afterHide", value, id, init);
});

@descr: