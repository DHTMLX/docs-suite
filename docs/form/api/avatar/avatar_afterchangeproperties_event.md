---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Avatar Event 
description: You can explore the afterChangeProperties event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterChangeProperties

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: object) => void;'}

@params:
- `properties: object` - an object with the [configuration attributes](form/api/avatar/avatar_setproperties_method.md) of the control and their new values

@example:
form.getItem("avatar").events.on("afterChangeProperties", properties => {
    console.log("afterChangeProperties", properties);
});

@descr: