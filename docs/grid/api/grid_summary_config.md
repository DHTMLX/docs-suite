---
sidebar_label: summary
title: JavaScript Grid - summary Config 
description: You can explore the spans config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# summary

@short: Optional. Creates the list of counted values based on the column's data 

~~~jsx
type TSummaryMethod = (row: IRow[]) => string | number;

interface ISummary {
    [key: string]: [string, string] | TSummaryMethod;
}
summary?: ISummary;
~~~

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
            // when initialized as a string, the resulting value is used 
            // with applied patternMask/numberMask, if there are any (excluding "count")
            summary: "count" 
        },
        {
            width: 150,
            id: "area",
            header: [{ text: ({ customSum }) => `Area: ${customSum}` }],
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

@changelog:
- Added in v9.0