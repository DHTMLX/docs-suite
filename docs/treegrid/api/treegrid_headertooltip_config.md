---
sidebar_label: headerTooltip
title: JavaScript TreeGrid - headerTooltip Config 
description: You can explore the headerTooltip config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerTooltip

@short: Optional. Controls the header tooltips

@signature: {'headerTooltip?: boolean;'}

@default: true

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: false, // Disable all tooltips
    headerTooltip: true, // Enable all header tooltips
});

@descr:
The `headerTooltip` config redefines the value of the [`tooltip`](treegrid/api/treegrid_tooltip_config.md) config for the header tooltips.

@changelog: added in v8.2