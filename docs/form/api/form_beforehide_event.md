---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Event 
description: You can explore the beforeHide event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a Form control is hidden

@signature: {'beforeHide: (name: string | number, value?: any) => boolean | void;'}

@params:
- `name|id: string | number` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the current value of the control

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.events.on("beforeHide", function(name, value) {
    console.log("beforeHide", name, value); 
    return false;
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog:
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.
- The event was added in v6.5

[comment]: # (@relatedapi: form/api/form_afterhide_event.md)
