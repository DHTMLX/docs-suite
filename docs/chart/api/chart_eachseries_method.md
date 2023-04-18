---
sidebar_label: eachSeries()
title: JavaScript Chart - eachSeries Method 
description: You can explore the eachSeries method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eachSeries()

@short: iterates over Chart series

@signature: {'eachSeries(handler: (seria: object[]) => any): any[];'}

@params:
- `handler: function` - a handler function that takes an array with series objects as a parameter

@returns:
An array with the result of iteration.

@example:
const chart = new dhx.Chart("chart_container", {
	type: "radar",
	scales: {
		radial:{
			value: "month",
			maxTicks: 7
		}
	},
	series: [
		{
			id: "A",
			value: "company A",
			fill: "#000000",
			alpha: 0.3,
			color: "#000000"
	 	},
		{
			id: "B",
			value: "company B",
			fill: "#FFFF33",
			alpha: 0.3,
			color: "#FFFF33"
		}
	]
});

chart.eachSeries(function(seria){
	seria.config.fill
});
// -> ["#394E79", "#5E83BA", "#C2D2E9"]

@descr:

**Related sample**: [Chart. Each series](https://snippet.dhtmlx.com/4kbj4lmw)

[comment]: # (@related: chart/usage.md#iterating-over-series)
