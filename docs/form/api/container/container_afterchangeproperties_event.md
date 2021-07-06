---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterChangeProperties Container Event 
description: You can explore the afterChangeProperties Container event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterChangeProperties

@short: fires after properties of a Container control have been changed dynamically

@signature: afterChangeProperties: (properties: IBaseLayoutItem) => void;

@params:
`properties: object` - an object with configuration properties of the control and their new values

@example:
form.getItem("container").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});

@changelog: added in v7.2
