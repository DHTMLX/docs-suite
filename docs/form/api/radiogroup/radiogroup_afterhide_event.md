---
sidebar_label: afterHide
title: JavaScript Form - afterHide Radiogroup Event 
description: You can explore the afterHide event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterHide

@short: fires after a control or its radio button is hidden

@signature: {'afterHide: (value: string, id?: string, init: boolean) => void;'}

@params:
- `value: string` - the current value of the control
- `id?: string` - optional, the ID of the radio button of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("radiogroup").events.on("afterHide", function(value, id, init) {
    console.log("afterHide", value, id, init);
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog:

- The **id** parameter was added in v8.0
- The event was added in v7.0
