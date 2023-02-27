---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Radiogroup Event 
description: You can explore the beforeShow event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a control or its radio button is shown

@signature: {'beforeShow: (value: string, id?: string) => boolean | void;'} 

@params:
- `value: string` - the current value of the control
- `id?: string` - optional, the ID of the radio button of the control

@returns:
Return `false` to prevent a control or its radio button from being shown; otherwise, `true`.

@example:
form.getItem("radiogroup").events.on("beforeShow", function(value, id) {
    console.log("beforeShow", value, id);
    return true;
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog:

- The **id** parameter was added in v8.0
- The event was added in v7.0
