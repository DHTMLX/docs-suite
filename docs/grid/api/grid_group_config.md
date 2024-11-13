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

~~~jsx
group?: boolean | IGroup; // false by default
~~~

## Parameters

As an object the `group` configuration option has the following properties:

~~~jsx
group?: {
    panel?: boolean; // true by default
    panelHeight: number; // 40 by default
    hideableColumns?: boolean; // true by default
    showMissed?: boolean | string; // true by default
    fields?: { [colId: string]: IGroupOrder };
    order?: IGroupOrderItem[];
    column?: string | ICol;
}
~~~

:::tip
You can find the detailed description of the `group` object properties with examples in the related guide [Grouping data](grid/usage.md#grouping-data). 
:::

- `panel` - enables the panel of grouping control. When the `panel` config is set to *true*, a user can drag columns' headers to the panel of creating and modifying groups
- `panelHeight` - defines the height of a group in pixels, which allows adjusting the space for rendering a group of columns
- `hideableColumns` - specifies whether columns will be hidden on a group creation. If `hideableColumns` is set to *false*, columns used for grouping will remain visible
- `showMissed` - controls visibility of the elements that don't suit the grouping criteria (e.g. data without values). Has the following settings:
	- when set to *true*, the elements that don't have values for grouping are rendered row by row after all the data
	- if a *string* value is set, e.g. "Missed", values for grouping are rendered as a separate group the name of which will have the specified string value
	- if set to *false*, strings that don't suit the grouping criteria won't be rendered
- `fields` - predefines an extended configuration for data grouping by certain columns, by setting the rules of aggregation and rendering of the results. The attributes of the `fields` object correspond to the ids of columns the aggregation and the order of results are being configured for.
- `order` - defines the order of grouping by setting the sequence of columns for grouping. The `order` array can have the following elements:
strings (columns' ids), or functions that set the values for grouping.
	 - *columns' ids* to group data by in the order of their succession. Grouping starts from the first specified column and will continue for each following one
	 - *callback functions* that take the current data row and return the value for grouping
	 - a *configuration object* as an element that defines the grouping order
	 - a *combination of columns' ids, functions and configuration objects*. Such an approach provides a flexible control over the grouping order by applying static values for some columns and dynamic values calculated by a function for other columns
- `column` - defines the configuration of a column that renders values by the grouped data. This column will be used as a main one for structuring and rendering data grouped by value


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