---
sidebar_label: subRowConfig
title: JavaScript Grid - subRowConfig Config 
description: You can explore the subRowConfig config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# subRowConfig

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Specifies the configuration settings of a sub-row

:::note
Note that when the [`subRow`](/grid/api/grid_subrow_config/) config is used, Grid doesn't support the [TreeGrid mode](grid/treegrid_mode.md), except for the [data grouping](grid/usage.md#grouping-data) functionality.
:::

@signature: {'subRowConfig?: ((row: IRow) => ISubRowConfig) | ISubRowConfig;'}

@descr:

## Parameters

When the property is set as an *object*, the specified parameters are applied to all the rows. 

When the property is set as a *callback function*, it is called with the row object as a parameter and returns the `subRowConfig` object, which allows providing specific configuration for each particular row. 

The `subRowConfig` object may contain the following properties:

- `expanded` - (*boolean*) defines whether a sub-row is expanded by default, *false* by default
- `preserve` - (*boolean*) saves the state of sub-rows while expanding/collapsing, disappearing from the visible area, data updating, *false* by default
- `toggleIcon` - (*boolean*) enables the icon for expanding/collapsing, *true* by default
- `height` - (*number*) the height of a sub-row in pixels, [controls the visibility of sub-rows](grid/configuration.md#adding-sub-rows-for-specific-rows), *200* by default
- `padding` - (*string* | *number*) the inner padding of a sub-row, *8* by default
- `css` - (*string*) user-defined CSS classes for a sub-row
- `fullWidth` - (*boolean*) defines whether a sub-row will take all the width of Grid, *false* by default

:::info note
The `fullWidth` property works only if the `subRowConfig` property is initialized as an object.
:::

### Example

- the global configuration of sub-rows

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

- configuring sub-rows settings dynamically

The `height` setting of the `subRowConfig` property (set as a callback function) allows you to control the visibility of sub-rows. Set the `height` setting to 0 if you don't want a sub-row to be created for particular rows.

~~~jsx {7-10}
const grid = new dhx.Grid("grid_container", {
    columns:[
        // columns config
    ],
    data: dataset,
    autoWidth: true,
    subRowConfig: (row) => ({
        height: row.data.length ? 250 : 0, 
        expanded: true
    }),
    subRow: (row) => new dhx.Grid(null, {
        columns: [
            // columns config
        ],
        data: row.data
    }),
});
~~~

**Related sample:** 
- [Grid. Row expander. Full config](https://snippet.dhtmlx.com/xdw2037t)
- [Grid. Row expander. Subgrid only in specific rows](https://snippet.dhtmlx.com/03udbtmr)

**Related article:** [Row expander](grid/configuration.md#row-expander)

**Related API**: [subRow](grid/api/grid_subrow_config.md)

@changelog:
- Added in v9.1
 