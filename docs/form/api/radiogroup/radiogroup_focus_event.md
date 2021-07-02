---
sidebar_label: focus
title: JavaScript Form - focus Radiogroup Event 
description: You can explore the focus Radiogroup event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus

@short: fires when a Radiogroup control has received focus

@signature: focus: (value: string, id: string) => void;

@params:
- `value: string` - the current value of the control
- `id: string` - the id of the element of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("focus", (value, id) => {
    console.log("focus", value, id);
});
@examplestop:

@changelog: Added in v7.2
