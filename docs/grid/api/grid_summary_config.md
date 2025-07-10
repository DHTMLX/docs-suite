---
sidebar_label: summary
title: JavaScript Grid - summary Config 
description: You can explore the spans config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# summary

@short: Optional. Creates the list of calculated values based on the column's data 

## Usage

~~~jsx
type TSummaryMethod = (rows: IRow[]) => string | number;

interface ISummary {
    [key: string]: [string, string] | TSummaryMethod;
}
summary?: ISummary;
~~~

## Parameters

The `summary` configuration option of Grid is an object with calculated values, where the *keys* are the field names and the *values* can be:

- a string with the name of the applied functor

- a tuple `[string, string]` that specifies the column id and the name of the applied functor

- a `(rows: IRow[]) => string | number;` function for calculating the summary of the column

@example:

// defining the method for calculating the density of population
dhx.methods.populationDensity = (rows) => {
    const totalPopulation = rows.reduce((sum, row) => sum + row.population, 0);
    const totalArea = rows.reduce((sum, row) => sum + row.area, 0);
    return totalArea ? (totalPopulation / totalArea).toFixed(2) : 0;
};

// adjusting a grid and using the method for calculating density
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: () => `<mark>Population</mark>`, htmlEnable: true }],
            footer: [{ text: ({ totalPopulation, count }) => `Total: ${totalPopulation}, Count: ${count}` }],
            // initializing column summary as a string
            summary: "count" 
        },
        {
            width: 150,
            id: "area",
            header: [{ text: ({ customSum }) => `Area: ${customSum}` }],
            // initializing column summary as an object
            summary: {
                customSum: rows => {		
                    return dhx.methods.sum(rows, "population") + dhx.methods.sum(rows, "area");		
                },
            }
        },
        {
            width: 150,
            id: "density",
            header: [{ text: "Density" }],
            footer: [{ text: ({ density }) => `Density: ${density}` }],
        }
    ],
    // initializing grid summary
    summary: {
        totalPopulation: ["population", "sum"],
        totalArea: ["area", "sum"],
        density: "populationDensity" // adding the summary value for density
    },
    data: dataset
});

// an example of getting the values of population density
const summary = grid.getSummary();
console.log(summary); // { totalPopulation: 1000000, totalArea: 50000, density: 20.00 }

@descr:

**Related article:** [Custom statistics in the column header/footer and spans](../../configuration/#custom-statistics-in-the-column-headerfooter-and-spans)

**Related API**: [getSummary()](grid/api/grid_getsummary_method.md)

@changelog:
- Added in v9.0