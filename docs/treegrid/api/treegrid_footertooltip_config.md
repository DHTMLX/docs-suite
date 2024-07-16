---
sidebar_label: footerTooltip
title: JavaScript TreeGrid - footerTooltip Config 
description: You can explore the footerTooltip config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerTooltip

@short: Optional. Controls the footer tooltips

:::note
The `footerTooltip` config redefines the value of the [`tooltip`](treegrid/api/treegrid_tooltip_config.md) config for the footer tooltips.
:::

@signature: {'footerTooltip?: boolean | object;'}

@default: true

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: false, // Disable all tooltips
    footerTooltip: true, // Enable all footer tooltips
});

@descr:
When set as an object, the `footerTooltip` config can have the following properties: 

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
    footerTooltip: {
       force: true
    }
});
~~~

@changelog: 
- The ability to set the `footerTooltip` config as an object is added in v8.4
- Added in v8.2