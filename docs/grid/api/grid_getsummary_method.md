---
sidebar_label: getSummary()
title: JavaScript Grid - getSummary Method 
description: You can explore the getSummary method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSummary()

@short: returns an object with the specified counted values

#### Usage

~~~jsx
interface ISummaryList {
    [key: string]: string | number | null;
}

getSummary(colId?: string | number): ISummaryList;
~~~

@params:

- `colId?: string | number` - optional, the id of a column

@returns:
An object with the list of counted values

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 150, id: "population", header: [{ text: "Population" }] },
        {
            width: 150,
            id: "age",
            header: [{ text: "Med. Age" }],
            summary: { avgAge: "avg" } 
        }
    ],
    summary: {
        totalPopulation: ["population", "sum"],
    },
    data: dataset
});

// getting summary data for the component
const totalSummary = grid.getSummary();
console.log(totalSummary); //{ totalPopulation: 1000000 } - the sum of all the values in the "population" column

// getting summary data for a column
const columnSummary = grid.getSummary("age");
console.log(columnSummary); //{ totalPopulation: 1000000, avgAge: 28 } - the value of the "age" column only


@descr:

- When called without parameters, the method returns an object with the counted values defined in the configuration of the component. 
- When the `id` parameter is passed to the method, it returns an object with the counted values defined in the column's configuration together with the counted values defined in the component's configuration.

**Related article:** [Getting the summary object](grid/configuration.md#getting-the-summary-object)

**Related**: [summary](grid/api/grid_summary_config.md)

@changelog:
- Added in v9.0

