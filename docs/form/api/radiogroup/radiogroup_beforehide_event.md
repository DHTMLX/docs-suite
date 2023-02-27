---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Radiogroup Event 
description: You can explore the beforeHide event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a control or its radio button is hidden

@signature: {'beforeHide: (value: string, id?: string, init: boolean) => boolean | void;'} 

@params:
- `value: string` - the current value of the control
- `id?: string` - optional, the ID of the radio button of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control or its radio button from being hidden; otherwise, `true`.

@example:
form.getItem("radiogroup").events.on("beforeHide", function(value, id, init) {
    console.log("beforeHide", value, id, init);
    return true;
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog:

- The **id** parameter was added in v8.0
- The event was added in v7.0
