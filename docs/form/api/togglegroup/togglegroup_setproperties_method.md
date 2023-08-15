---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Toggle Group Method 
description: You can explore the setProperties method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing the available configuration attributes of the ToggleGroup or its separate options dynamically

@signature: {'setProperties(config: object, id?: string): void;'}

@params:
- `config: object` - a configuration object with the available attributes and their new values
- `id: string` - optional, the id of an option to apply the new configuration object to

@example:
// 1. Changes values in the configuration of the ToggleGroup control
form.getItem("ToggleGroup").setProperties({
    full: true,
    width: 140,
    options: {
        rows: [
            {
                id: "first",
                text: "S",
            },
            {
                id: "second",
                text: "M",
            },
            {
                id: "third",
                text: "L",
            },
        ]
    }
});

// 2. Changes values in the configuration of the specified toggle of a ToggleGroup
form.getItem("ToggleGroup").setProperties({
    text: "On Text",
	offText: "Off Text"
}, "first");

@descr:

:::info
The method invokes the [](form/api/togglegroup/togglegroup_afterchangeproperties_event.md) and [](form/api/togglegroup/togglegroup_beforechangeproperties_event.md) events.
:::

It is possible to change the values of the following configuration attributes of the **ToggleGroup** control:

~~~js
css: string,
full: boolean,
gap: number,
height: string | number|"content",
multiselection: boolean,
options: object[],
padding: string | number,
width: string|number|"content"
~~~

It is possible to change the values of the following configuration attributes of a **toggle** of the ToggleGroup control:

~~~js
full: boolean,
icon: string,
offIcon: string,
offText: string,
text: string,
value: string | number
~~~

You will find the description of these properties [here](form/api/togglegroup/api_togglegroup_properties.md).