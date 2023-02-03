---
sidebar_label: legend
title: JavaScript Chart - legend Config 
description: You can explore the legend config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# legend

@short: Required for Treemap charts, optional for other types of charts. Defines the configuration of a chart legend

@signature: {'legend?: ILegendConfig;'}

@example:
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


@descr:
  
## The list of config options for legend (for charts with scales)

:::info
You can apply the options below to configure the legend for charts with the following types: 
["line", "spline"](chart/charts_overview.md#line-and-spline-chart), ["bar", "x-bar"](chart/charts_overview.md#bar-and-x-bar-chart), ["area", "splineArea"](chart/charts_overview.md#area-and-splinearea-chart), ["radar"](chart/charts_overview.md#radar-chart), ["scatter"](chart/charts_overview.md#scatter-chart).
:::

### Usage

~~~js
legend?: {
	series: string[],
	direction?: "row" | "column", // "row" by default
	form?: "rect" | "circle", // "rect" by default
	halign?: "left" | "right" | "center", // "right" by default
	itemPadding?: number,
	margin?: number,
	size?: number,
	valign?: "top" | "middle" | "bottom", // "top" by default
}
~~~

### Description

<table>
	<tbody>
		<tr>
			<td><b>series</b></td>
			<td>(required) the list of series that should be shown in the legend<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/00ei3q23" target="_blank">Chart. Enable legend</a></td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(optional) the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
        <tr>
			<td><b>form</b></td>
			<td>(optional) the form of the legend markers: "rect" (by default) | "circle"<br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/n8wsfv5n" target="_blank">Chart. Legend form</a>
			</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(optional) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/pgqf1yxj" target="_blank">Chart. Legend position</a></td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(optional) padding between legend items</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(optional) margin between the scale and the legend</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(optional) defines width or height of legend block, px </td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(optional) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/pgqf1yxj" target="_blank">Chart. Legend position</a></td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for legend (for charts without scales: Pie, Pie3D, Donut)

:::info
You can apply the options below to configure the legend for charts with the following types: 
["pie", "pie3D", "donut"](chart/charts_overview.md#pie-pie-3d-and-donut-chart).
:::

### Usage

~~~js
legend?: {
	values: {
		text: string;
		color: string;
	},
	direction?: "row" | "column", // "row" by default
	form?: "rect" | "circle", // "rect" by default
	halign?: "left" | "right" | "center", // "right" by default
	itemPadding?: number,
	margin?: number,
	size?: number,
	valign?: "top" | "middle" | "bottom", // "top" by default
}
~~~

### Description

<table>
	<tbody>
       <tr>
			<td><b>values</b></td>
			<td>(required) maps attributes of legend items to <a href="../../data_loading#preparing-data-set">data set</a> properties. Contains the following properties:
            	<ul>
                    <li><b>text</b> - (required) the pointer to the data value to take a text for the legend from</li>
                    <li><b>color</b> - (required) the pointer to the data value to take a color for the legend from</li>
                </ul>
				<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/lobb80ig" target="_blank">Chart. Donut chart initialization</a><br>
				<b>Related Sample: </b><a href="https://snippet.dhtmlx.com/jfbet749" target="_blank">Chart. Pie chart initialization</a><br>
				<b>Related Sample: </b><a href="https://snippet.dhtmlx.com/xfce9pys" target="_blank">Chart. Pie 3D chart initialization</a>
            </td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(optional) the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
		<tr>
			<td><b>form</b></td>
			<td>(optional) the form of the legend markers: "rect" (by default) | "circle"</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(optional) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(optional) padding between legend items</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(optional) margin between the series and the legend</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(optional) defines width or height of legend block, px </td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(optional) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"</td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for legend (for charts without scales: Treemap)

:::info
You can apply the options below to configure the legend for charts with the ["treeMap"](chart/charts_overview.md#treemap-chart) type.
:::

### Usage

~~~js
legend: {
	type?: "groupName" | "range", // "groupName" by default
	treeSeries: [
		{
			greater?: number,
			from?: number,
			to?: number,
			less?: number,
			color?: string,
			active?: boolean,
			id?: string,
		},
		// more objects
	],
	direction?: "row" | "column", // "row" by default
	form?: "rect" | "circle", // "rect" by default
	halign?: "left" | "right" | "center", // "right" by default
	itemPadding?: number,
	margin?: number,
	size?: number,
	valign?: "top" | "middle" | "bottom", // "top" by default
}
~~~

### Description

<table>
	<tbody>
		<tr>
			<td><b>type</b></td>
			<td>(optional) defines the way of displaying values in the legend and the logic for coloring tiles: "range" | "groupName" (by default).
			<ul>
				<li><code>type: "range"</code> - Each tile will have the color depending on the value of the tile. The legend shows value ranges. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b" target="_blank">Chart. Treemap chart initialization</a></li>
				<li><code>type: "groupName"</code> - All tiles within one group will have the same color. The legend shows the group names. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/fmgnlue4" target="_blank">Chart. Treemap chart with groups initialization</a></li>
			</ul></td>
		</tr>
       <tr>
			<td><b>treeSeries</b></td>
			<td>(required) an array of objects that define configuration for legend items and color of rectangular tiles. Each object can contain the following properties:
            	<ul>
					<li><b>greater</b> - (optional) defines range for values of tiles; specifies the value to be shown in the "greater than or equal to" legend</li>
                    <li><b>from</b> - (optional) defines range for values of tiles;specifies the lowest value to be shown in the "from-to" legend</li>
					<li><b>to</b> - (optional) defines range for values of tiles; specifies the highest value to be shown in the "from-to" legend</li>
					<li><b>less</b> - (optional) defines range for values of tiles; specifies the value to be shown in the "less than or equal to" legend</li>
                    <li><b>color</b> - (optional) defines the color both of the legend item and related tiles</li>
					<li><b>active</b> - (optional) defines whether tiles with corresponding values are active (true, by default) or inactive (false)</li>
					<li><b>id</b> - the id of a legend item:
						<ul>
						<li> Optional, if <code>type: "range"</code>. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b" target="_blank">Chart. Treemap chart initialization</a></li>
						<li> Mandatory, if <code>type: "groupName"</code>. You need to specify the id of the group as id of the legend item. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/fmgnlue4" target="_blank">Chart. Treemap chart with groups initialization</a></li>
						</ul></li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(optional) the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
		<tr>
			<td><b>form</b></td>
			<td>(optional) the form of the legend markers: "rect" (by default) | "circle"</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(optional) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(optional) padding between legend items</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(optional) margin between the series and the legend</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(optional) defines the width or height of the legend block in pixels</td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(optional) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"</td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for legend (for charts without scales: Calendar heatmap)

:::tip PRO VERSION ONLY
The calendar heatmap chart is available only in the PRO version of the DHTMLX Chart (or DHTMLX Suite).
:::

:::info
You can apply the options below to configure the legend for charts with the ["calendarHeatMap"](chart/charts_overview.md#calendar-heatmap-chart) type.
:::

### Usage

~~~js
legend?: {
	values?: {
		text?: string,
		tick?: number, // 10 by default
		majorTick?: number, // 1 by default
		step?: number, // 1 by default
		tickTemplate?: string => string,
	},
	halign?: "left" | "right" | "center", // "right" by default
	margin?: number, // 0 by default
	size?: number,
	valign?: "top" | "middle" | "bottom", // "top" by default
}
~~~

### Description

<table>
	<tbody>
       <tr>
			<td><b>values</b></td>
			<td>(optional) an object with settings for the content of the legend. The object can contain the following properties:
            	<ul>
					<li><b>text</b> - (optional) the title of the legend</li>
                    <li><b>tick</b> - (optional) sets the size of the main step (division) of the legend scale; 10 by default</li>
					<li><b>majorTick</b> - (optional) sets the number of divisions between display of labels on the legend scale; 1 by default</li>
					<li><b>step</b> - (optional) sets the step of display of divisions on the legend scale; 1 by default. <i>step: 1</i> means that each division will be displayed on the scale</li>
					<li><b>tickTemplate</b> - (optional) sets a template for display of labels on the legend scale</li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(optional) the horizontal alignment of the legend: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(optional) margin between the series and the legend; 0 by default</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(optional) defines the height of the legend container</td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(optional) the vertical alignment of the legend: "top" (by default) | "bottom" | "middle"</td>
		</tr>
    </tbody>
</table>
<br><br>

**Related article:** [Configuration](chart/configuration_properties.md)
