---
sidebar_label: serieClick
title: JavaScript Chart - serieClick Event 
hide_title: true
description: You can explore the serieClick event of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# serieClick

@short: fires on clicking a series

@signature: {'serieClick: (id: string, value: string) => void;'}

@params:
- `id: string` - the id of a clicked series
- `value: string` - the value of a series

@example:
chart.events.on("serieClick", function (id, value) {
    // your logic here
});

@descr: 

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)

This event can be used for Bar, X-Bar, Pie, Pie 3D, Donut charts.
