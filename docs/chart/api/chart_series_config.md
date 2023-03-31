---
sidebar_label: series
title: JavaScript Chart - series Config 
description: You can explore the series config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# series

@short: Required. Defines configuration of chart series

@signature: {'series: object[];'}

@example:
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

@descr:

## The list of config options for series (for charts with scales)

:::info
You can apply the options below to configure series for charts with the following types: 
["line", "spline"](chart/charts_overview.md#line-and-spline-chart), ["bar", "x-bar"](chart/charts_overview.md#bar-and-x-bar-chart), ["area", "splineArea"](chart/charts_overview.md#area-and-splinearea-chart), ["radar"](chart/charts_overview.md#radar-chart), ["scatter"](chart/charts_overview.md#scatter-chart).
:::

### Usage

~~~js
series: [
	{
		id: string,
		value: string,
		type?: "line" | "spline" | "bar" | "x-bar" | "area" | "splineArea" | "radar"| "scatter",

		active?: boolean,
		color?: string,
		css?: string,
		dashed?: boolean,
		pointColor?: string,
		pointType?: "rect" | "circle" | "triangle" | "rhombus" | "simpleRect" | "simpleCircle" | "empty",
		strokeWidth?: number,
		tooltip?: boolean,
		tooltipTemplate?: (points: any[]) => string,
	}
]
~~~

### Description

<table>
	<tbody>
    	<tr>
			<td><b>id</b></td>
			<td>(required) the id of a series </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(required) the name of a <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to </td>
		</tr>
		<tr>
			<td><b>type</b></td>
			<td>(optional) the type of a chart </td>
		</tr>
		<tr>
			<td><b>active</b></td>
			<td>(optional) defines, whether a series is active/inactive </td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(optional) the color of the series outline</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(optional) adds a style class for a series </td>
		</tr>
		<tr>
			<td><b>dashed</b></td>
			<td>(optional) sets the dashed type for a series line </td>
		</tr>
		<tr>
			<td><b>pointColor</b></td>
			<td>(optional) the color of data item points in a series </td>
		</tr>
		<tr>
			<td><b>pointType</b></td>
			<td>(optional) sets the type of the point of the data item. There are the following point types:"circle","rect","triangle","rhombus","simpleRect","simpleCircle","empty" <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/cbj54wwu" target="_blank">Chart. Point types</a>
			</td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(optional) the width of the chart outline </td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) shows values of data items in tooltips, <i>true</i> by default</td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(optional) a function that defines a template for showing values of data items in tooltip <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/mbz7dkku" target="_blank">Chart. Tooltip template</a>
			</td>
		</tr>
    </tbody>
</table>
<br><br>

## Options specific for Area, Bar and Radar charts

### Usage

~~~js
series: [
	{
		..., // config options for series (for charts with scales)
		fill?: string,
		alpha?: number,
	}
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>fill</b></td>
			<td>(optional) the color of the series filling in Hex format</td>
		</tr>
		<tr>
			<td><b>alpha</b></td>
			<td>(optional) transparency of the series filling</td>
		</tr>
    </tbody>
</table>
<br><br>

## Options specific for Bar charts

### Usage

~~~js
series: [
	{
		..., // config options for series (for charts with scales)
		barWidth?: number,
		baseLine?: number,
		gradient?: (color: string) => any,
		showText?: boolean,
		showTextRotate?: number | string,
		showTextTemplate?: (points: any) => string,
		stacked?: boolean,
	}
]
~~~

### Description

<table>
	<tbody>
		<tr>
			<td><b>barWidth</b></td>
			<td>(optional) sets the width of bars</td>
		</tr>
        <tr>
			<td><b>baseLine</b></td>
			<td>(optional) sets a base line for rendering data items (bars) <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/6tls4qhf" target="_blank">Chart. Base line</a>
			</td>
		</tr>
    	<tr>
			<td><b>gradient</b></td>
			<td>(optional) a function that defines a color gradient for bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/j3duyn2q" target="_blank">Chart. Bar chart. Gradient</a>
			</td>
		</tr>
		<tr>
			<td><b>showText</b></td>
			<td>(optional) shows/hides values of data items in bars</td>
		</tr>
		<tr>
			<td><b>showTextRotate</b></td>
			<td>(optional) the degree of rotation of text values of data items in bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/o7ke2f1s" target="_blank">Chart. Show text</a>
			</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(optional) a function that specifies the template for showing values of data items in bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/o7ke2f1s" target="_blank">Chart. Show text</a>
			</td>
		</tr>
		<tr>
			<td><b>stacked</b></td>
			<td>(optional) defines whether a stacked chart will be rendered  <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/ilew1ds4" target="_blank">Chart. Stacked chart</a>
			</td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for series (for charts without scales: Pie, Pie3D, Donut)

:::info
You can apply the options below to configure series for charts with the following types: 
["pie", "pie3D", "donut"](chart/charts_overview.md#pie-pie-3d-and-donut-chart).
:::

### Usage

~~~js
series: [
	{
		id?: string,
		text?: string,
		value: string,

		color?: string,
		monochrome?: string,
		paddings?: number,
		showText?: boolean,
		showTextTemplate?: (points: any) => string,
		stroke?: string,
		strokeWidth?: number,
		subType?: "basic" | "percentOnly" | "valueOnly",
		useLines?: boolean,
	}
]
~~~

### Description

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(optional) the id of a series</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(optional) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map labels of data values to </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(required) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to</td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(optional) points to the property in a <a href="../../data_loading#preparing-data-set">data set</a> that defines the color of a pie/donut sector</td>
		</tr>
		<tr>
			<td><b>monochrome</b></td>
			<td>(optional) colors chart sections in the shades of a color specified as a value of this property (e.g. "blue", "red"). It can be also set as HEX code (#ff00ff), as RGB code (rgb(255, 15, 0)) or as RGBA color code (rgba(255, 15, 0, 0.2)).</td>
		</tr>
		<tr>
			<td><b>paddings</b></td>
			<td>(optional) paddings between a chart and its initial position</td>
		</tr>
		<tr>
			<td><b>showText</b></td>
			<td>(optional) shows/hides values of data items on the chart (Pie, Pie3D)</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(optional) a function that specifies the template for showing values of data items on the chart (Pie, Pie3D)</td>
		</tr>
		<tr>
			<td><b>stroke</b></td>
			<td>(optional) the color of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(optional) the width of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td><b>subType</b></td>
			<td>(optional) specifies the subtype of a chart: "basic"|"percentOnly"|"valueOnly"</td>
		</tr>
		<tr>
			<td><b>useLines</b></td>
			<td>(optional) shows/hides lines used to "connect" chart sectors with labels</td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for series (for charts without scales: Treemap)

:::info
You can apply the options below to configure series for charts with the ["treeMap"](chart/charts_overview.md#treemap-chart) type.
:::

### Usage

~~~js
series: [
	{
		text: string,
		value: string,

		direction?: "asc" | "desc",
		paddings?: number,
		showTextTemplate?: (points: any) => string,
		stroke?: string,
		strokeWidth?: number,
		tooltipTemplate?: (points: any[]) => string,
	}
]
~~~

### Description

<table>
	<tbody>
		<tr>
			<td><b>text</b></td>
			<td>(required) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map labels of data values to. The index of the option is 1 (item[1]). </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(required) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to. The index of the option is 0 (item[0]).</td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(optional) defines the arrangement of tiles inside a chart ("desc" (by default) - from larger to smaller value, "asc" - from smaller to larger value)</td>
		</tr>
		<tr>
			<td><b>paddings</b></td>
			<td>(optional) paddings between a chart and its initial position</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(optional) a function that specifies the template for showing values of data items on the chart</td>
		</tr>
		<tr>
			<td><b>stroke</b></td>
			<td>(optional) the color of lines between tiles</td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(optional) the width of lines between tiles inside a group in pixels, 2 by default. The width of lines between the groups is 4 (=2px*2) by default </td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(optional) a function that defines a template for showing values of data items in tooltip<br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b?tag=chart" target="_blank">Chart. Treemap chart initialization</a>
			</td>
		</tr>
    </tbody>
</table>
<br><br>

## The list of config options for series (for charts without scales: Calendar heatmap)

:::tip PRO VERSION ONLY
The calendar heatmap chart is available only in the PRO version of the DHTMLX Chart (or DHTMLX Suite).
:::

:::info
You can apply the options below to configure series for charts with the ["calendarHeatMap"](chart/charts_overview.md#calendar-heatmap-chart) type.
:::


### Usage

~~~js
series: [
	{
		date: string,
		value: string,

		color?: string, // by default, matches the value of the --dhx-background-secondary variable from the current color theme
		negativeColor?: string, // by default, matches the value of the --dhx-color-primary variable from the current color theme
		positiveColor?: string, // by default, matches the value of the --dhx-color-success variable from the current color theme

		dateFormat?: string, // "%d/%m/%y" by default
        days?: string[], // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] by default
        endDate?: string | Date, // the 31st of December of the maximal year specified in the dataset
		maxValue?: number,
		minValue?: number,
        months?: string[], // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] by default
		startDate?: string | Date, // by default, the 1st of January of the minimal year specified in the dataset
		tooltip?: boolean, // true by default
		tooltipTemplate?: ([string, number]) => string,
		weekStart?: string, // "sunday" by default
	}
]
~~~

### Description

<table>
	<tbody>
		<tr>
			<td><b>date</b></td>
			<td>(required) points to the name of the <a href="../../data_loading#preparing-data-set">data set</a> property which sets the dates for the chart. The index of the option is 0 (point[0])</td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(required) points to the name of the <a href="../../data_loading#preparing-data-set">data set</a> property which sets the number content for the chart. The index of the option is 1 (point[1])</td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(optional) sets the color of null values in the chart and legend. <br>By default, the color matches the value of the <b>--dhx-background-secondary</b> variable from the current <a href="../../../themes">color theme</a></td>
		</tr>
		<tr>
			<td><b>negativeColor</b></td>
			<td>(optional) sets the color of negative values in the chart and legend.<br>By default, the color matches the value of the <b>--dhx-color-primary</b> variable from the current <a href="../../../themes">color theme</a></td>
		</tr>
		<tr>
			<td><b>positiveColor</b></td>
			<td>(optional) sets the color of positive values in the chart and legend. <br>By default, the color matches the value of the <b>--dhx-color-success</b> variable from the current <a href="../../../themes">color theme</a></td>
		</tr>
		<tr>
			<td><b>dateFormat</b></td>
			<td>(optional) defines the <a href="../../../calendar/api/calendar_dateformat_config">format of dates</a> in the tooltips ("%d/%m/%y" by default). In this format, you can specify dates in the data set </td>
		</tr>
		<tr>
			<td><b>days</b></td>
			<td>(optional) an array with the list of the days of the week starting from sunday</td>
		</tr>
		<tr>
			<td><b>endDate</b></td>
			<td>(optional) the end date of the calendar heatmap; by default, the 31st of December of the maximal year specified in the dataset. <a href="../../../chart/configuration_properties/#default-range-of-dates">Read the details.</a><br>If you use a string value to specify the end date, it should match the format specified via the <b>dateFormat</b> option.</td>
		</tr>
		<tr>
			<td><b>maxValue</b></td>
			<td>(optional) the maximal value to be shown in the chart and legend. If there are values bigger than the maximal one, they will be painted with the color of the maximal value</td>
		</tr>
		<tr>
			<td><b>minValue</b></td>
			<td>(optional) the minimal value to be shown in the chart and legend. If there are values less than the minimal one, they will be painted with the color of the minimal value</td>
		</tr>
		<tr>
			<td><b>months</b></td>
			<td>(optional) an array with the list of the months of the year starting from January</td>
		</tr>
		<tr>
			<td><b>startDate</b></td>
			<td>(optional) the date starting from which the calendar heatmap will be displayed; by default, the 1st of January of the minimal year specified in the dataset. <a href="../../../chart/configuration_properties/#default-range-of-dates">Read the details.</a><br>If you use a string value to specify the start date, it should match the format specified via the <b>dateFormat</b> option.</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(optional) defines whether tooltips should be shown when you hover over the chart cell; <i>true</i> by default
			</td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(optional) a function that defines a template for the tooltip
			</td>
		</tr>
		<tr>
			<td><b>weekStart</b></td>
			<td>(optional) sets the starting day of the week: "monday" | "saturday" | "sunday" (by default)</td>
		</tr>
    </tbody>
</table>
<br><br>

**Related article:** [Configuration](chart/configuration_properties.md)
