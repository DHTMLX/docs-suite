---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Spacer Event 
description: You can explore the afterChangeProperties event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterChangeProperties

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: IBaseLayoutItem) => void;'}

@params:
- `properties: object` - an object with configuration attributes of the control and their new values

@example:
form.getItem("spacer").events.on("afterChangeProperties", function(properties) {
    console.log("afterChangeProperties", properties);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/spacer/spacer_setproperties_method.md)
