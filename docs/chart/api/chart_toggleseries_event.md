---
sidebar_label: toggleSeries
title: JavaScript Chart - toggleSeries Event 
description: You can explore the toggleSeries event of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# toggleSeries

@short: fires on toggle on/off a series in a legend

@signature: {'toggleSeries: (id: string, pieLike: object | undefined) => void;'}

@params:
- `id: string` - the id of a toggled series
- `pieLike: object | undefined` - an object with the configuration of a series in a legend (only for Pie, Pie 3D and Donut charts)

@example:
chart.events.on("toggleSeries", function(id){
    console.log("The "+id+" series is toggled");
});

@descr:

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)

The **pieLike** object can contain the following parameters:

- **color** - (*string*) the color of the legend item
- **id** - (*string*) the id of the legend item
- **text** - (*string*) the text label of the legend item