---
sidebar_label: afterShow
title: JavaScript Form - afterShow Toggle Group Event 
description: You can explore the afterShow event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control or its toggle is shown

@signature: {'afterShow: (value: {[id: string]: boolean | string | number}, id?: string) => void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where the <i>key</i> is the id of a toggle and the <i>value</i> is the value/state of the toggle
- `id?: string` - optional, the ID of a toggle of the control

@example:
form.getItem("ToggleGroup").events.on("afterShow", function(value, id) {
    console.log("afterShow", value, id);
});

@descr:

