---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Event 
description: You can explore the beforeHide event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before a Form control or its element is hidden

@signature: {'beforeHide: (name: string | number, value?: any, id?: string) => boolean | void;'}

@params:
- `name | id: string | number` - the name (or id, if the name is not specified) of the Form control
- `value?: any` - the current value of the control
- `id?: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup)

@returns:
Return `false` to prevent a control or its element from being hidden; otherwise, `true`.

@example:
form.events.on("beforeHide", function(name, value) {
    console.log("beforeHide", name, value); 
    return false;
});

@descr:

**Related samples**: 
- [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)
- [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog:
- The **id** parameter was added in v8.0
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.
- The event was added in v6.5

[comment]: # (@relatedapi: form/api/form_afterhide_event.md)
