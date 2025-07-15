---
sidebar_label: tooltip
title: JavaScript Grid - tooltip Config 
description: You can explore the tooltip config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltip

@short: Optional. Enables/disables all the tooltips of a column

@signature: {'tooltip?: boolean | object;'}

@default: true

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: false
});

@descr:
When set as an object, the `tooltip` config can have the following properties: 

- `force` - (optional) forces opening of a tooltip; if set to true, the `showDelay` and `hideDelay` settings are ignored, *false* by default
- `showDelay` - (optional) the time period that should pass before showing a tooltip, in ms
- `hideDelay` - (optional) the time period that should pass before hiding a tooltip, in ms
- `margin` - (optional) the margin between the node and tooltip; *8px* by default
- `position` - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default 
- `css` - (optional) the style of a tooltip box

~~~jsx {6-8}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: {
       force: true
    }
});
~~~

**Related samples**: 
- [Grid. Hiding tooltips](https://snippet.dhtmlx.com/mq4t3t3w)
- [Grid. Tooltip config](https://snippet.dhtmlx.com/qpqnalyt)

**Related article:** [Tooltip](grid/configuration.md#tooltip)

@changelog: 
- The ability to set the `tooltip` config as an object is added in v8.4
- Added in v6.5

