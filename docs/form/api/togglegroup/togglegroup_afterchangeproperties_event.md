---
sidebar_label: afterChangeProperties
title: afterChangeJavaScript Form - afterChangeProperties Toggle Group Event Properties
description: You can explore the afterChangeProperties event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterChangeProperties

@short: fires after configuration attributes of the control have been changed dynamically

@signature: {'afterChangeProperties: (properties: object, id?: string) => void;'}

@params:
- `properties: object` - an object with configuration attributes of the ToggleGroup or its separate options and their new values
- `id: string` - optional, the id of an option of the ToggleGroup

@example:
form.getItem("toggleGroup").events.on("afterChangeProperties", function(properties) {
    console.log("afterChangeProperties", properties);
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
