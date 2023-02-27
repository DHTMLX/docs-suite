---
sidebar_label: afterShow
title: JavaScript Form - afterShow Radiogroup Event 
description: You can explore the afterShow event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control or its radio button is shown

@signature: {'afterShow: (value: string, id?: string) => void;'} 

@params:
- `value: string` - the current value of the control
- `id?: string` - optional, the ID of the radio button of the control

@example:
form.getItem("radiogroup").events.on("afterShow", function(value, id) {
    console.log("afterShow", value, id);
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog:

- The **id** parameter was added in v8.0
- The event was added in v7.0
