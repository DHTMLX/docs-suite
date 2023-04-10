---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Container Event 
description: You can explore the afterChangeProperties event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterChangeProperties

@short: fires after properties of a Container control have been changed dynamically

@signature: afterChangeProperties: (properties: object) => void;

@params:
- `properties: object` - an object with [configuration properties](form/api/container/container_setproperties_method.md) of the control and their new values

@example:
form.getItem("container").events.on("afterChangeProperties", function(properties) {
    console.log("afterChangeProperties", properties);
});

@changelog: added in v7.2
