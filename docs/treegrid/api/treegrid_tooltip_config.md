---
sidebar_label: tooltip
title: JavaScript TreeGrid - tooltip Config 
description: You can explore the tooltip config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltip

@short: Optional. Enables/disables all the tooltips of a column

@signature: {'tooltip?: boolean | object;'}

@default: true

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
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
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: {
       force: true
    }
});
~~~

**Related sample**: [TreeGrid. Hiding tooltips](https://snippet.dhtmlx.com/jaib6ovf)

@changelog: 
- The ability to set the `tooltip` config as an object is added in v8.4
- Added in v6.5

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/configuration.md#tooltip)
