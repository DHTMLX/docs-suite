---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Checkbox Group Event 
description: You can explore the beforeHide event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before a control or its checkbox is hidden

@signature: {'beforeHide: (value: {[id: string]: boolean | string}, id?: string, init?: boolean) => boolean | void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where the <i>key</i> is the id of a checkbox and the <i>value</i> is the value/state of the checkbox.
- `id?: string` - optional, the ID of a checkbox of the control
- `init?: boolean` - optional, *true*, if the event is triggered on the control initialization; otherwise, *false*

@returns:
Return `false` to prevent a control or its checkbox from being hidden; otherwise, `true`.

@example:
form.getItem("CheckboxGroup").events.on("beforeHide", function(value, id, init) {
    console.log("beforeHide", value, id, init);
    return true;
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog: The **id** parameter was added in v8.0