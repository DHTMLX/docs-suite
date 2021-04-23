---
sidebar_label: beforeChangeProperties
title: beforeChangeProperties
---          

@short: fires before configuration attributes of a Form control are changed dynamically
todoanton any приходит из d.ts и вроде name|id  должно быть
@signature: {'beforeChangeProperties: (name: string, props: any) => boolean | void;'}

@params:
- name|id   string      the name (or id, if the name is not specified) of the Form control
- props     object      an object with configuration attributes of the control and their new values

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.events.on("BeforeChangeProperties", function(name, properties) {
    console.log("BeforeChangeProperties", name, properties);
    return true;
});


@template: api_event
@descr:

@relatedapi: form/api/form_setproperties_method.md

@changelog: added in v7.0

