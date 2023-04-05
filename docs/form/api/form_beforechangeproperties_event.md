---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Event 
description: You can explore the beforeChangeProperties event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeProperties

@short: fires before configuration attributes of a Form control are changed dynamically

@signature: {'beforeChangeProperties: (name: string, properties: any) => boolean | void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `properties: object` - an object with [configuration attributes](form/api/form_setproperties_method.md) of the control and their new values

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.events.on("beforeChangeProperties", function(name, properties) {
    console.log("beforeChangeProperties", name, properties);
    return true;
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/form_setproperties_method.md)
