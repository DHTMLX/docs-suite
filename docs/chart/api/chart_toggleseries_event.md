---
sidebar_label: toggleSeries
title: JavaScript Chart - toggleSeries Event 
description: You can explore the toggleSeries event of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# toggleSeries

@short: fires on toggle on/off a series in a legend

@signature: {'toggleSeries: (id: string, pieLike: boolean) => void;'}

@params:
`id: string` - the id of a toggled series

@example:
chart.events.on("ToggleSeries", function(id){
    console.log("The "+id+" series is toggled");
});

@descr:

**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)
