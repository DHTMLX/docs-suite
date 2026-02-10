---
sidebar_label: tooltip
title: JavaScript Grid column header - tooltip Config 
description: You can explore the tooltip config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltip

@short: Optional. Enables/disables the header tooltip, or sets the configuration object with the tooltip settings

#### Usage

~~~jsx
tooltip?: boolean | object;
~~~

@default: true

@params:
When set as an *object*, the tooltip config can have the following properties:

- `force` - (optional) forces opening of a tooltip; if set to *true*, the `showDelay` and `hideDelay` settings are ignored, *false* by default
- `showDelay` - (optional) the time period that should pass before showing a tooltip, in ms
- `hideDelay` - (optional) the time period that should pass before hiding a tooltip, in ms
- `margin` - (optional) the margin between the node and tooltip; *8px* by default
- `position` - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default
- `css` - (optional) the style of a tooltip box

@example:

const grid = new dhx.Grid("grid_container", {
    columns: [
        // enables a tooltip for the country title
        { id: "country", header: [{ text: "Country", tooltip: true }] }, 
        { id: "population", header: [{ text: "Population" }] },
        // more columns configuration objects
    ],
    // more options
});


@descr:
**Related article**: [Column header/footer tooltip](/grid/configuration/#column-headerfooter-tooltip)

**Related sample**: [Grid. Header/footer tooltips](https://snippet.dhtmlx.com/fgstf2mq)