---
sidebar_label: Configuration
title: JavaScript Chart - Configuration 
description: You can explore the configuration of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Configuration

This chapter will guide you through the set of Chart configuration options. It explores both common DHTMLX Chart properties actual for all chart types and the config options individual for particular types.

You need to set necessary properties from those listed below within the configuration object passed to the chart constructor function and thus adjust the chart settings to meet your needs.

## Main properties

DHTMLX Chart includes several configuration options that are mostly common for all chart types. They are: 

- [](chart/api/chart_type_config.md) - (*string*) defines the [type of a chart](chart/charts_overview.md) to initialize; "bar", "x-bar" (for horizontal Bar chart), "line", "spline", "scatter", "area", 
"splineArea", "donut", "pie", "pie3D", "radar", "treeMap", and "heatMap"

~~~js
const chart = new dhx.Chart("chart_container", {
	type:"bar"
});
~~~

- [](chart/api/chart_scales_config.md) - (*object*) defines configuration of chart scales. [Check details below](#scales).

~~~js
const chart = new dhx.Chart("chart_container", {
	scales:{}
});
~~~

:::info
It is necessary to configure [](chart/api/chart_scales_config.md) for the Line, Spline, Bar, X-Bar, Area, SplineArea, Radar, or Scatter chart.
:::

- [](chart/api/chart_series_config.md) - (*array*) defines configuration of chart series. [Check details below](#series).

~~~js
const chart = new dhx.Chart("chart_container", {
	series:[]
});
~~~

:::info
The [](chart/api/chart_series_config.md) configuration option is required for all types of charts.
:::

- [](chart/api/chart_legend_config.md) - (*object*) defines the configuration of a chart legend. [Check details below](#legend).

~~~js
const chart = new dhx.Chart("chart_container", {
	legend:{}
});
~~~

:::info
The [](chart/api/chart_legend_config.md) configuration option is required for Treemap charts and is optional for other types of charts.
:::

- [](chart/api/chart_maxpoints_config.md) - (*number*) displays an average number of values in case a data set is too large to show all the values in the chart

~~~js
const chart = new dhx.Chart("chart_container", {
	type:"line",
	maxPoints:100
});
~~~

**Related sample**: [Chart. Max points](https://snippet.dhtmlx.com/6917eudu)

## Scales

There are "left","right","top","bottom" and "radial" (for Radar chart) types of [scales](chart/api/chart_scales_config.md). 

~~~js
const chart = new dhx.Chart("chart_container", {
    type:"area",
    scales: {
    	"bottom" : {
    		text: 'month'
    	},
    	"left" : {
    		padding: 10,
    		max: 90
    	}
    },
    series: [
        {
           value: 'company A',
           strokeWidth: 2
           // more options   
        }
    ]
});
~~~

**Related sample**: [Chart. Scale title](https://snippet.dhtmlx.com/5ir00fer)

Scales have both common and specific options. Check the full list of the available options for scales in the [API reference](chart/api/chart_scales_config.md).

## Series

[Series](chart/api/chart_series_config.md) present an array of objects each of which contains a number of properties for rendering a separate [data set](chart/data_loading.md#preparing-data-set) on a chart.

~~~js
const chart = new dhx.Chart("chart_container", {
	type:"bar",
    scales: {
    	"bottom" : {
    		text: "month"
    	},
    	"left" : {}
    },
    series: [
    	{
    		id: "A",
    		value: "company A",
    		fill: "#394E79",
    		stacked: stacked,
    		color: "none"
    	},
    	{
    		id: "B",
    		value:"company B",
    		fill: "#5E83BA",
    		stacked: stacked,
    		color: "none"
    	}
    ]
});
~~~

**Related sample**: [Chart. Point types](https://snippet.dhtmlx.com/cbj54wwu)

See the full list of configuration options for chart series in the [API reference](chart/api/chart_series_config.md).

## Legend

The [](chart/api/chart_legend_config.md) object may contain a number of options that define its configuration.

~~~js
const chart = new dhx.Chart("chart_container", {
    scales: {
    	// scales config
    },
    series: [
    	// list of series 
    ],
    legend: {
    	series: ["A", "B", "C"],
    	valign: "top",
    	halign: "right"
    }    
});
~~~

**Related Samples:**

- [Chart. Enable legend](https://snippet.dhtmlx.com/00ei3q23)
- [Chart. Legend position](https://snippet.dhtmlx.com/pgqf1yxj)

You can view the full list of the configuration options of chart legends in the [API reference](chart/api/chart_legend_config.md).
