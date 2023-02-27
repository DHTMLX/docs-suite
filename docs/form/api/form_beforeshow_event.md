---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Event 
description: You can explore the beforeShow event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a Form control or its element is shown

@signature: {'beforeShow: (name: string, value?: any, id?: string) => boolean | void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the current value of the control
- `id?: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup)

@returns:
Return `false` to prevent a control from being shown; otherwise, `true`.

@example:
form.events.on("beforeShow", function(name, value) {
    console.log("beforeShow", name, value); 
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

[comment]: # (@relatedapi: form/api/form_aftershow_event.md)
