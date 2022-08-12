---
sidebar_label: getSeries()
title: JavaScript Chart - getSeries Method 
description: You can explore the getSeries method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getSeries()

@short: returns an object with configuration of a specified series

@signature: {'getSeries(id: string): ISeria;'}

@params:
`id: string` - the id of a series

@returns:
An object with configuration of a series.

@example:
const config = chart.getSeries("A");
/* => 
{
    "strokeWidth": 2, "active": true,
    "tooltip": true, "paddings": 5,
    "color": "none", "fill": "none",
    "pointType": "circle", "id": "A",
    "value": "company A", "pointColor": "blue",
    "type": "radar",
    "scales": [
        "radial"
    ]
}
*/
@descr:

**Related sample**: [Chart. Get series](https://snippet.dhtmlx.com/9jtscd9q)

[comment]: # (@related: chart/usage.md#getting-series-configuration)
