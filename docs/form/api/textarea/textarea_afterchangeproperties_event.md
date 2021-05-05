---
sidebar_label: afterChangeProperties
title: afterChangeProperties
---          

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: ITextareaProps) => void;'}

@params:
- properties     object      an object with configuration attributes of the control and their new values

@example:s
form.getItem("textarea").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});



@descr:

@relatedapi: form/api/textarea/textarea_setproperties_method.md

@changelog: added in v7.0

