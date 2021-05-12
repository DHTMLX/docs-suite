---
sidebar_label: type
title: type
---          

@short: specifies the type of a chart

@signature: {'type?: ChartType;'}

@example: 
var chart = new dhx.Chart("chart_container",{
    type:"line" 
});

@descr:
## Available types of charts 

- "bar", "x-bar"
- "line", "spline"
- "scatter"
- "area", "splineArea"
- "donut", "pie", "pie3D"
- "radar"

[comment]: # (@related: chart/configuration_properties.md#main-properties chart/charts_overview.md)
