---
sidebar_label: afterHide
title: JavaScript Form - afterHide Event 
description: You can explore the afterHide event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterHide

@short: fires after a Form control or its element is hidden

@signature: {'afterHide: (name: string, value?: any, id?: string) => void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the current value of the control
- `id?: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup)

@example:
form.events.on("afterHide", function(name, value) {
    console.log("afterHide", name, value); 
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog:

- The **id** parameter was added in v8.0
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.
- The event was added in v6.5

[comment]: # (@relatedapi: form/api/form_beforehide_event.md)
