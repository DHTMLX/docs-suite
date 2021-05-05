---
sidebar_label: serieClick
title: serieClick
---          

@short: fires on clicking a series

@signature: {'serieClick: (id: string, value: string) => void;'}

@params:
- id    string      the id of a clicked series
- value     string  the value of a series

@example:
chart.events.on("serieClick", function (id, value) {
    // your logic here
});


@descr: This event can be used for Bar, X-Bar, Pie, Pie 3D, Donut charts.

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)