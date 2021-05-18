---
sidebar_label: beforeChangeProperties
title: beforeChangeProperties
---          

@short: fires before configuration attributes of the control are changed dynamically

@signature: {'beforeChangeProperties: (properties: IButtonProps) => boolean | void;'}

@params:
`properties: object` - an object with configuration attributes of the control and their new values

@returns:
Return `false` to cancel the default action of the event; otherwise, return `true`.

@example:
form.getItem("button").events.on("BeforeChangeProperties", function(properties) {
    console.log("BeforeChangeProperties", properties);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/button/button_setproperties_method.md)
