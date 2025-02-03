---
sidebar_label: subRowConfig
title: JavaScript Grid - subRowConfig Config 
description: You can explore the subRowConfig config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# subRowConfig

@short: Optional. Specifies the configuration settings of a subrow

@signature: {'subRowConfig?: ((row: IRow) => ISubRowConfig) | ISubRowConfig;'}

@descr:

## Parameters

When the property is set as an *object*, the specified parameters are applied to all the rows. When the property is set as a *callback function*, it is possible to provide specific configuration for each row. The `subRowConfig` property may contain the following properties:

- `expanded` - (*boolean*) defines whether a subrow is expanded by default; *false* by default
- `preserve` - (*boolean*) saves the state of subrows while expanding/collapsing, disappearing from the visible area, data updating; *false* by default
- `toggleIcon` - (*boolean*) enables the icon for expanding/collapsing; *true* by default
- `height` - (*number*) the height of a subrow in pixels; *200* by default
- `padding` - (*string|number*) the inner padding of a subrow; *8* by default
- `css` - (*string*) user-defined CSS classes for a subrow
- `fullWidth` - (*boolean*) defines whether a subrow will take all the width of Grid; *false* by default

:::info note
The `fullWidth` property works only if the `subRowConfig` property is initialized as an object.
:::

### Example

- the global configuration of subrows

~~~jsx {7-11}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "zone_name", header: [{ text: "Zone name" }] },
        { id: "temperature", header: [{ text: "Temperature" }] },
    ],
    data: dataset,
    subRowConfig: {
        height: 200,
        padding: 8,
        fullWidth: true,
    },
    subRow: ({ zone_name }) => `<div>Details for ${zone_name}</div>`,
});
~~~

- configuring subrows settings dynamically

~~~jsx {7-11}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "zone_name", header: [{ text: "Zone name" }] },
        { id: "temperature", header: [{ text: "Temperature" }] },
    ],
    data: dataset,
    subRowConfig: (row) => ({
        height: 200,
        expanded: row.temperature > 30,
        css: row.temperature > 30 ? "hot-zone" : "cool-zone",
    }),
    subRow: ({ zone_name }) => `<div>Details for ${zone_name}</div>`,
});
~~~

