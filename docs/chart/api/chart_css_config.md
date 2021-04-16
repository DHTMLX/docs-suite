---
sidebar_label: css
title: css
---          

@short: adds style classes to Chart

@signature: css?: string;

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

@template:	api_config
@descr: 
The DHTMLX library provides a set of CSS classes that you can apply to change appearance of Chart.

~~~js
var chart = new dhx.Chart({
    css:"dhx_widget--bg_white dhx_widget--bordered"
});
~~~

### List of CSS classes

- <b>dhx_widget--bg_white</b> - Sets white background to a widget

- <b>dhx_widget--bg_gray</b> - Sets gray background to a widget

- <b>dhx_widget--bordered</b> - Sets borders on all sides of a widget

- <b>dhx_widget--border_top</b> - Sets a border on the top side of a widget

- <b>dhx_widget--border_bottom</b> - Sets a border on the bottom side of a widget

- <b>dhx_widget--border_left</b> - Sets a border on the left side of a widget

- <b>dhx_widget--border_right</b> - Sets a border on the right side of a widget

- <b>dhx_widget--border-shadow</b> - Adds a shadow border to a widget

- <b>dhx_widget--no-border_top</b> - Removes the top border of a  widget

- <b>dhx_widget--no-border_bottom</b> - Removes the bottom border of a widget

- <b>dhx_widget--no-border_right</b> - Removes the right border of a widget

- <b>dhx_widget--no-border_left</b> - Removes the left border of a widget

@relatedsample:
https://snippet.dhtmlx.com/p82iew5s	Chart. Custom Styling

@related: chart/customization.md#stylingchart

