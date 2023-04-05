---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Text Event 
description: You can explore the beforeChangeProperties event of the Text control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeProperties

@short: fires before configuration attributes of the control are changed dynamically

@signature: {'beforeChangeProperties: (properties: object) => boolean | void;'}

@params:
- `properties: object` - an object with [configuration attributes](form/api/text/text_setproperties_method.md) of the control and their new values

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("text").events.on("beforeChangeProperties", function(properties) {
    console.log("beforeChangeProperties", properties);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/text/text_setproperties_method.md)
