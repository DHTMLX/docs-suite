---
sidebar_label: eachSeries()
title: eachSeries()
---          

@short: iterates over Chart series

@signature: {'eachSeries(handler: (seria: ISeria) => any): any[];'}

@params:
- `handler: function` - a handler function that takes an array with series objects as a parameter

@returns:
An array with the result of iteration.

@example:
var chart = new dhx.Chart("chart", {
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

**Related sample**: [Chart. Each Series](https://snippet.dhtmlx.com/4kbj4lmw)

[comment]: # (@related: chart/usage.md#iterating-over-series)
