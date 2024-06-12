---
sidebar_label: headerTooltip
title: JavaScript Grid - headerTooltip Config 
description: You can explore the headerTooltip config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerTooltip

@short: Optional. Controls the header tooltips

:::note
The `headerTooltip` config redefines the value of the [`tooltip`](grid/api/grid_tooltip_config.md) config for the header tooltips.
:::

@signature: {'headerTooltip?: boolean | object;'}

@default: true

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: false, // Disable all tooltips
    headerTooltip: true, // Enable all header tooltips
});

@descr:
When set as an object, the `headerTooltip` config can have the following properties: 

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
    headerTooltip: {
       force: true
    }
});
~~~

@changelog: 
- The ability to set the `headerTooltip` config as an object is added in v8.4
- Added in v8.2