---
sidebar_label: css
title: css
---          

@short: adds style classes to Chart

@signature: {'css?: string;'}

@example:
<style>
	.custom-class .dhx_chart-graph_area {
		fill:#444;
	}
	.custom-class .grid-line {
		stroke: white;
		stroke-width: 0.5;
	}
	.custom-class .chart.bar {
		fill: orange;
	}
</style>

var chart = new dhx.Chart("chart", {
    css: "custom-class",
    scales: { // scales config }
    series: [
        {
            //series config                 
        }
    ]
});


@descr:

**Related sample**: [Chart. Custom Styling](https://snippet.dhtmlx.com/p82iew5s)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Chart:

~~~js
var chart = new dhx.Chart({
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

[comment]: # (@related: chart/customization.md#styling-chart)
