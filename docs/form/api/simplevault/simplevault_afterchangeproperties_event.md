---
sidebar_label: afterChangeProperties
title: afterChangeProperties
---          

@short: fires after configuration attributes of the control have been changed dynamically


@params:
- properties     object      an object with configuration attributes of the control and their new values

@example:
form.getItem("simplevault").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});


@template: api_event
@descr:

@relatedapi: form/api/simplevault/simplevault_setproperties_method.md

@changelog: added in v7.0

