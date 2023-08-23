---
sidebar_label: beforeChangeProperties
title: JavaScript Form - beforeChangeProperties Toggle Group Event 
description: You can explore the beforeChangeProperties event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChangeProperties

@short: fires before configuration attributes of the control are changed dynamically

@signature: {'beforeChangeProperties: (properties: object, id?: string) => boolean | void;'}

@params:
- `properties: object` - an object with [configuration attributes](form/api/togglegroup/togglegroup_getproperties_method.md) of the ToggleGroup or its separate options and their new values
- `id: string` - optional, the id of an option of the ToggleGroup

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("toggleGroup").events.on("beforeChangeProperties", function(properties) {
    console.log("beforeChangeProperties", properties);
    return true;
});

@descr:
The **properties** object of the **ToggleGroup** control looks like:

~~~js
{
    css: string,
    full: boolean,
    gap: number,
    height: string | number|"content",
    multiselection: boolean,
    options: object[],
    padding: string | number,
    width: string|number|"content"
}
~~~

The **properties** object object of a **toggle** of the **ToggleGroup** control looks like:

~~~js
{
    full: boolean,
    icon: string,
    offIcon: string,
    offText: string,
    text: string,
    value: string | number
}
~~~

You will find the description of all these properties [here](form/api/togglegroup/api_togglegroup_properties.md).