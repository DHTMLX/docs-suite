---
sidebar_label: afterChangeProperties
title: JavaScript Form - afterHide Button Event 
hide_title: true
description: You can explore the afterHide Button event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterChangeProperties

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: IButtonProps) => void;'}

@params:
`properties: object` - an object with configuration attributes of the control and their new values

@example:
form.getItem("button").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/button/button_setproperties_method.md)
