---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Container Event 
description: You can explore the beforeChangeProperties event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeProperties

@short: fires before properties of a Container control are changed dynamically

@signature: beforeChangeProperties: (properties: IBaseLayoutItem) => boolean | void;

@params:
- `properties: object` - an object with configuration attributes of the control and their new values

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("container").events.on("beforeChangeProperties", function(properties) {
    console.log("beforeChangeProperties", properties);
    return true;
});

@changelog: added in v7.2
