---
sidebar_label: group
title: JavaScript Grid - group Config 
description: You can explore the group config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# group

@short: Optional. Enables and allows configuring of grouping in Grid columns

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

:::note
Note that when you initialize Grid with the `group` configuration property, the tree-like mode is enabled for Grid and it will have `type: tree` property in its configuration.
:::

## Usage

~~~jsx {22}
type TAggregate = "sum" | "count" | "min" | "max" | "avg" | string;

interface IGroupOrder {
    map?: { [field: string]: [string, TAggregate] | ((row: IRow[]) => string | number) };
    summary?: "top" | "bottom";
}

type IGroupOrderItem = string | IGroupOrder | ((row: IRow) => string);

interface IGroup {
    panel?: boolean; // true by default
    panelHeight: number; // 40 by default
    hideableColumns?: boolean; // true by default
    showMissed?: boolean | string; // true by default
    fields?: { [colId: string]: IGroupOrder };
    order?: IGroupOrderItem[];
    column?: string | ICol;
}

interface IGridConfig {
    ...
    group?: boolean | IGroup;
    ...
}
~~~

## Parameters 

As an object the `group` configuration option has the following properties:

:::tip
You can find the detailed description of the `group` object properties with examples in the related guide [Grouping data](grid/usage.md#configuring-data-grouping). 
:::

- `panel` -  (optional) enables the panel of grouping control, *true* by default. When the `panel` config is set to *true*, a user can drag columns' headers to the panel of creating and modifying groups
- `panelHeight` - (optional) defines the height of a group in pixels, which allows adjusting the space for rendering a group of columns, *40* by default
- `hideableColumns` - (optional) specifies whether columns will be hidden on a group creation, *true* by default. If set to *false*, columns used for grouping will remain visible
- `showMissed` - (optional) controls visibility of the elements that don't suit the grouping criteria (e.g. data without values), *true* by default
- `fields` - (optional) predefines an extended configuration for data grouping by certain columns, by setting the rules of aggregation and rendering of the results. The attributes of the `fields` object correspond to the ids of columns for which the aggregation and the order of results are being configured. The configuration of a column is defined by the `IGroupOrder` object that has the following properties:
    - `map` - (optional) an object for data aggregation in a group, where keys are field names, and the values can be:
        - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the `dhx.methods` helper
        - a user-defined aggregation function `((row: IRow[]) => string | number)`
    - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group
- `order` - (optional) defines the order of grouping by setting the sequence of columns for grouping. The elements of the `order` array can be: 
    - a string that represents a grouping field
    - a function of the `((row: IRow) => string)` type for dynamic defining of a group
    - the `IGroupOrder` object that has the following properties:
        - `map` - (optional) an object for data aggregation in a group, where keys are field names, and the values can be:
            - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the `dhx.methods` helper
            - a user-defined aggregation function `((row: IRow[]) => string | number)`
        - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group 
- `column` - (optional) defines the configuration of a column that renders values by the grouped data. This column will be used as a main one for structuring and rendering data grouped by value

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] },
        { id: "area", header: [{ text: "Land Area (Km²)" }] }
    ],
    group: {
        panel: true
    },
    data: dataset
});


@descr:


**Related article**: [Grouping data](grid/usage.md#grouping-data)

@changelog: added in v9.0