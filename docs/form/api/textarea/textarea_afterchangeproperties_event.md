---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Textarea Event 
description: You can explore the afterChangeProperties event of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterChangeProperties

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: object) => void;'}

@params:
- `properties: object` - an object with [configuration attributes](form/api/textarea/textarea_setproperties_method.md) of the control and their new values

@example:s
form.getItem("textarea").events.on("afterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/textarea/textarea_setproperties_method.md)
