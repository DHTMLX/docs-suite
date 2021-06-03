---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Datepicker Event 
description: You can explore the beforeChangeProperties Datepicker event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChangeProperties

@short: fires before configuration attributes of the control are changed dynamically

@signature: {'beforeChangeProperties: (properties: IDatePickerProps) => boolean | void;'}

@params:
`properties: object` - an object with configuration attributes of the control and their new values

@returns:
Return `false` to cancel the default action of the event; otherwise - `true`.

@example:
form.getItem("datepicker").events.on("BeforeChangeProperties", function(properties) {
    console.log("BeforeChangeProperties", properties);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/calendar/calendar_setproperties_method.md)
