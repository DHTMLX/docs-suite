---
sidebar_label: afterHide
title: JavaScript Form - afterHide Event 
description: You can explore the afterHide event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterHide

@short: fires after hiding a control of Form

@signature: {'afterHide: (name: string, value?: any) => void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the current value of the control

@example:
form.events.on("AfterHide", function(name, value) {
    console.log("AfterHide", name, value); 
});

@descr:

@changelog:
- added in v6.5
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.

[comment]: # (@relatedapi: form/api/form_beforehide_event.md)
