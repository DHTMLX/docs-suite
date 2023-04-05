---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Event 
description: You can explore the afterChangeProperties event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterChangeProperties

@short: fires after configuration attributes of a Form control have been changed dynamically

@signature: {'afterChangeProperties: (name: string, properties: object) => void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `properties: object` - an object with [configuration attributes](form/api/form_setproperties_method.md) of the control and their new values

@example:
form.events.on("afterChangeProperties", function(name, properties) {
    console.log("afterChangeProperties", name,  properties);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/form_setproperties_method.md)
