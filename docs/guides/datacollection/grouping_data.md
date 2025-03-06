---
sidebar_label: Grouping data
title: JavaScript Guides - Grouping data 
description: You can learn how to group data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Grouping data

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can group the data of a component, ungroup data and check whether data in a collection is grouped via the DataCollection API.

:::info important
Data grouping isn't intended for working with [`lazyDataProxy`](helpers.md/lazydataproxy/)
:::

The DataCollection API can be used for working with [data grouping in Grid](grid/usage.md/#grouping-data). 

## Enabling data grouping

To use the [row data grouping functionality](grid/usage.md/#grouping-data) in Grid, you need to apply the [`group`](grid/api/grid_group_config.md) configuration property of Grid. You can set the `group` property to *true* to enable grouping, or specify it as a configuration object to [configure data grouping](grid/usage.md/#configuring-data-grouping).

~~~jsx {5}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    group: true, // enabling grouping in a grid
    groupable: true 
    data: dataset
});
~~~

:::note
Grouped data can be serialized. After serialization data is available for rendering and editing as a plain tree-like structure
:::

## Grouping data 

The [`group()`](data_collection/api/datacollection_group_method.md) method of DataCollection groups data in a collection that has a plain tree-like structure according to the specified order and additional configuration. The method takes the following parameters:

- `order` - an array that defines the order and configuration for data grouping. Each element in the array can be:
	- a string that represents a grouping field
	- a function `(i: IDataItem) => string` for dynamic defining of a group
	- an `IGroupOrder` object that has the following properties:
		- `by` - the field name or a function for user-defined grouping
		- `map` - (optional) an object for data aggregation in a group, where the keys are field names, and the values can be:
            - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the [`dhx.methods`](helpers/data_calculation_functions.md) helper
            - a user-defined aggregation function `(i: IDataItem[]) => string | number`
        - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group 
- `config` - (optional) the configuration of data grouping
    - `showMissed` - (optional) specifies whether the elements that don't have the field for grouping should be displayed, *true* by default
        - if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data
        - if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one
        - if set to *false*, the rows that don't suit the grouping criteria won't be rendered
    - `field` - (optional) the group field name, *"group"* by default

There are several examples of grouping Grid data via the `group()` method of DataCollection:

- simple grouping with the use of a callback function and a string field value

~~~jsx {12-19}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "salary", header: [{ text: "Salary" }] },
        { id: "experience", header: [{ text: "Experience (years)" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group([
    function(row) {
        if (row.salary < 30000) return "Low income";
        if (row.salary >= 30000 && row.salary < 70000) return "Medium income";
        return "High income";
    },
    "city"
]);
~~~

- grouping with the use of a configuration object and aggregation settings

~~~jsx {12-23}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "department", header: [{ text: "Department" }] },
        { id: "employees", header: [{ text: "Number of Employees" }] },
        { id: "location", header: [{ text: "Location" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group([{
    by: "department", // grouping by the `department` field
    map: {
        employees: ["employees", "sum"], // aggregation: sums up the number of employees
        location: (rows) => {
            // a custom function for calculating unique locations
            const uniqueLocations = [...new Set(rows.map(r => r.location))];
            return uniqueLocations.join(", ");
        }
    },
    summary: "top" // the total row is rendered at the top of the group
}]);
~~~

- grouping with the use of the `showMissed` property

~~~jsx {12-16}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "age", header: [{ text: "Age" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group(["city"], {
    // the group elements that don't have the "city" value
    // will be rendered in the "Unknown City" group
    showMissed: "Unknown City" 
});
~~~

## Ungrouping data

To ungroup the data of a component, use the [`ungroup()`](data_collection/api/datacollection_ungroup_method.md) method of DataCollection.

~~~jsx
grid.data.ungroup();
~~~

## Checking whether data is grouped

To check whether the data of a component is grouped at the moment, use the [`isGrouped()`](data_collection/api/datacollection_isgrouped_method.md) method of DataCollection. The method returns *true* if the data in a collection is grouped at the moment and *false* if it isn't grouped.

~~~jsx
if (component.data.isGrouped()) {
    console.log("The data is currently grouped");
}
~~~