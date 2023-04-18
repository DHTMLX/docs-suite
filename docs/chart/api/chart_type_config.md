---
sidebar_label: type
title: JavaScript Chart - type Config 
description: You can explore the type config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# type

@short: Required. Specifies the type of a chart

@signature: {'type: string;'}

@example:
const chart = new dhx.Chart("chart_container", {
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
- "treeMap" (from v7.3)
- "calendarHeatMap" (from v8.0)

[comment]: # (@related: chart/configuration_properties.md#main-properties chart/charts_overview.md)
