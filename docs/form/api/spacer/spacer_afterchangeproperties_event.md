---
sidebar_label: afterChangeProperties
title: afterChangeProperties
---          

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: IBaseLayoutItem) => void;'}

@params:
- properties     object      an object with configuration attributes of the control and their new values

@example:
form.getItem("spacer").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/spacer/spacer_setproperties_method.md)
