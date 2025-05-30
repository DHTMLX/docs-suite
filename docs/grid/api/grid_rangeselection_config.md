---
sidebar_label: rangeSelection
title: JavaScript Grid - rangeSelection Config 
description: You can explore the rangeSelection config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rangeSelection

@short: Optional. Enables/disables range selection management within a grid

### Usage

~~~jsx
rangeSelection?:
    | boolean
    | {
        disabled?: boolean;
    };
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    rangeSelection: true // enables the Range module
});

@descr:
The `rangeSelection` configuration object can have the following properties:

- **disabled** - makes the module inactive upon initialization of the component

~~~jsx {11,15}
const grid = new dhx.Grid("grid_container", {
    // other configuration
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    rangeSelection: { disabled: true }
});

console.log(grid.range.isDisabled()); // `true` - module is inactive
grid.range.setRange({ xStart: "a", yStart: "1" }); // the range will not be set
~~~

**Related article:** [Managing RangeSelection in Grid](grid/configuration.md/#managing-range-selection-in-grid)

@changelog: added in v9.2