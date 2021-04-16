---
sidebar_label: toggleSeries
title: toggleSeries
---          

@short: fires on toggle on/off a series in a legend

```todoapi
void toggleSeries(string id){ ... };
toggleSeries = "toggleSeries",
```

@params:
- id	string		the id of a toggled series

@example:
chart.events.on("ToggleSeries", function(id){
    console.log("The "+id+" series is toggled");
});


@template: api_event
@descr:

@relatedsample: 
https://snippet.dhtmlx.com/a1b9yfwo	Chart. Events

