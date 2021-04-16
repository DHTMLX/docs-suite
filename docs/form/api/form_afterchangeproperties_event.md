---
sidebar_label: afterChangeProperties
title: afterChangeProperties
---          

@short: fires after configuration attributes of a Form control have been changed dynamically


@params:
- name|id   string      the name (or id, if the name is not specified) of the Form control
- properties     object      an object with configuration attributes of the control and their new values

@example:
form.events.on("AfterChangeProperties", function(name, properties) {
    console.log("AfterChangeProperties", name,  properties);
});


@template: api_event
@descr:

@relatedapi: form/api/form_setproperties_method.md

@changelog: added in v7.0

