---
sidebar_label: toggleSeries
title: toggleSeries
---          

@short: fires on toggle on/off a series in a legend

@signature: {'toggleSeries: (id: string, pieLike: boolean) => void;'}

@params:
- id	string		the id of a toggled series

@example:
chart.events.on("ToggleSeries", function(id){
    console.log("The "+id+" series is toggled");
});



@descr:

**Related sample**:
- [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)

