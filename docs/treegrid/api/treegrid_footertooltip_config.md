---
sidebar_label: footerTooltip
title: JavaScript TreeGrid - footerTooltip Config 
description: You can explore the footerTooltip config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerTooltip

@short: Optional. Controls the footer tooltips

@signature: {'footerTooltip?: boolean;'}

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
The `footerTooltip` config redefines the value of the [`tooltip`](treegrid/api/treegrid_tooltip_config.md) config for the footer tooltips.

@changelog: added in v8.2 