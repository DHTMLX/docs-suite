---
sidebar_label: group()
title: JavaScript DataCollection - group Method 
description: You can explore the group method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# group()

@short: groups data in a collection that has a plain tree-like structure according to the specified order and additional configuration

:::info important
Data grouping isn't intended for working with [`lazyDataProxy`](helpers.md/lazydataproxy/)
:::

:::note
Grouped data can be serialized. After serialization data is available for rendering and editing as a plain tree-like structure
:::

## Usage

~~~jsx {16}
type TGroupOrderFunc = (item: IDataItem) => string;
type TAggregate = "sum" | "count" | "min" | "max" | "avg" | string;
interface IGroupOrder {
    by: string | TGroupOrderFunc;
    map?: {
        [field: string]: [string, TAggregate] | ((item: IDataItem[]) => string | number)
    };
    summary?: "top" | "bottom";
}
type TGroupOrder = string | TGroupOrderFunc | IGroupOrder;
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    field?: string; // "group" by default
}

group(order: TGroupOrder[], config?: IGroupConfig): void;
~~~

## Parameters

<table>
    <tbody>
        <tr>
            <td><b>order</b></td>
            <td> (<i>array</i>) an array that defines the order and configuration for data grouping. Each element in the array can be:<ul><li>a string that represents a grouping field</li><li>a function `(i: IDataItem) => string` for dynamic defining of a group</li><li>an `IGroupOrder` object that has the following properties:<ul><li><b>`by: string | function`</b> - the field name or a function for user-defined grouping</li><li><b>`map?: object`</b> - optional, an object for data aggregation in a group, where the keys are field names, and the values can be:
            <ul><li>a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the <a href="../../../helpers/data_calculation_functions/">`dhx.methods`</a> helper</li><li> a user-defined aggregation function `(i: IDataItem[]) => string | number`</li></ul></li><li><b>`summary?: string`</b> - optional, specifies where the total row is rendered - at the `top` or at the `bottom` of the group </li></ul></li></ul></td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) optional, the configuration of data grouping. The configuration object may include the following properties:<ul><li><b>`showMissed?: boolean | string`</b> - optional, specifies whether the elements that don't have the field for grouping should be displayed, *true* by default<ul><li>if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data</li><li>if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one</li><li>if set to *false*, the rows that don't suit the grouping criteria won't be rendered</li></ul></li><li><b>`field?: string`</b> - optional, the group field name, *"group"* by default</li></ul></td>
        </tr>
    </tbody>
</table>

## Examples

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

@descr:

@changelog: added in v9.0