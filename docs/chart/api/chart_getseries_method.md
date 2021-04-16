---
sidebar_label: getSeries
title: getSeries
---          

@short: returns an object with configuration of a specified series

@signature: getSeries(id: string): object;

@params:
- id	string		the id of a series

@returns:
- series	object		 an object with configuration of a series


@example:
var config = chart.getSeries("A");
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


@template: api_method
@descr:


@related:
chart/usage.md#gettingseriesconfiguration

@relatedsample: https://snippet.dhtmlx.com/9jtscd9q	Chart. Get Series

@changelog:


