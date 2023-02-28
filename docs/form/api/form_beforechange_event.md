---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Event 
description: You can explore the beforeChange event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (name: string, value: any) => boolean | void;'}

@params:
- `name | id: string` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the value set for the control

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.events.on("beforeChange",function(name, value){
	// your logic here
    return true;
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

**Change log**: The event was added  in v8.0