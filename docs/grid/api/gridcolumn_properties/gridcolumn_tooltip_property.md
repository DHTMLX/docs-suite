---
sidebar_label: tooltip
title: JavaScript Grid column - tooltip Config 
description: You can explore the tooltip config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltip

@short: Optional. Enables/disables the header tooltip, or sets the configuration object with the tooltip settings

### Usage

~~~jsx
tooltip?: boolean | object;
~~~

@default: true

### Parameters

When set as an object, the `tooltip` config can have the following properties:

- **force** - (optional) forces opening of a tooltip; if set to true, the showDelay and hideDelay settings are ignored, *false* by default
- **showDelay** - (optional) the time period that should pass before showing a tooltip, in ms
- **hideDelay** - (optional) the time period that should pass before hiding a tooltip, in ms
- **margin** - (optional) the margin between the node and tooltip; *8px* by default
- **position** - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default
- **css** - (optional) the style of a tooltip box

The **tooltip** config can be redefined for the header/footer tooltip.

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], tooltip: true }, 
        { width: 150, id: "population", header: [{ text: "Population" }] },
    ],
    data: dataset,
    tooltip: false 
});
~~~

**Related article**: [Column and spans tooltips](grid/configuration.md#column-and-spans-tooltips)

