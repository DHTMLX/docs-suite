---
sidebar_label: serieClick
title: serieClick
---          

@short: fires on clicking a series

```todoapi
void serieClick(string id,string value){ ... };
serieClick = "serieClick",
```

@params:
- id    string      the id of a clicked series
- value     string  the value of a series

@example:
chart.events.on("serieClick", function (id, value) {
    // your logic here
});

@template: api_event
@descr: This event can be used for Bar, X-Bar, Pie, Pie 3D, Donut charts.

@relatedsample: https://snippet.dhtmlx.com/a1b9yfwo	Chart. Events