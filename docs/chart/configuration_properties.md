---
sidebar_label: Configuration
title: Configuration
---          

This chapter will guide you through the set of Chart configuration options. It explores both common dhtmlxChart properties actual for all chart types and the config options individual for particular types.

You need to set necessary properties from those listed below within the configuration object passed to the chart constructor function and thus adjust the chart settings to meet your needs.

Main properties
-----------------------

dhtmlxChart includes several configuration options that are mostly common for all chart types. They are: 

- [](chart/api/chart_type_config.md) - (*string*) defines the [type of a chart](chart/charts_overview.md) to initialize; "bar", "x-bar" (for horizontal Bar chart), "line", "spline", "scatter", "area", 
"splineArea", "donut", "pie", "pie3D" and "radar"

~~~js
var chart = new dhx.Chart("chart", {
	type:"bar"
});
~~~

- [](chart/api/chart_scales_config.md) - (*object*) defines configuration of chart scales. [Check details below](#scales).

~~~js
var chart = new dhx.Chart("chart", {
	scales:{}
});
~~~

- [](chart/api/chart_series_config.md) - (*array*) defines configuration of chart series. [Check details below](#series).

~~~js
var chart = new dhx.Chart("chart", {
	series:[]
});
~~~

- [](chart/api/chart_legend_config.md) - (*object*) defines the configuration of a chart legend. [Check details below](#legend).

~~~js
var chart = new dhx.Chart("chart", {
	legend:{}
});
~~~

- [](chart/api/chart_maxpoints_config.md) - (*number*) displays an average number of values in case a data set is too large to show all the values in the chart

~~~js
var chart = new dhx.Chart("chart", {
	type:"line",
	maxPoints:100
});
~~~

{{editor    https://snippet.dhtmlx.com/6917eudu	Chart. Max Points}}

Scales
-------------

There are "left","right","top","bottom" and "radial" (for Radar chart) types of [scales](chart/api/chart_scales_config.md). Scales have both common and specific options.

~~~js
var chart = new dhx.Chart("chart_container",{
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

<table class="webixdoc_links">
	<tbody>
    	<tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a scale: "left","right","top","bottom","radial" (see details below) </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>title</b></td>
			<td>(<i>string</i>) sets a title for a scale <br/>{{editor    https://snippet.dhtmlx.com/5ir00fer	Chart. Scale Title}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) sets a template for labels of data items rendered on a scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>textTemplate</b></td>
			<td>(<i>function</i>) sets a template for scale labels <br/>{{editor    https://snippet.dhtmlx.com/nhm3438n	Chart. Text Template For Scale Labels}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>textPadding</b></td>
			<td>(<i>number</i>) distance between labels of data items and the scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides labels of data items on the scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>scaleRotate</b></td>
			<td>(<i>number</i>) the degree of rotation of labels of data items on the scale <br/>{{editor    https://snippet.dhtmlx.com/iw00fgl5	Chart. Scale Rotate}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>scalePadding</b></td>
			<td>(<i>number</i>) distance between the scale and its title</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) hides/shows the whole scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>grid</b></td>
			<td>(<i>boolean</i>) shows/hides the grid lines (for x,y, or both scales). <i>true</i> by default for both scales (scales lines are shown). To hide both scales lines, you need to set <i>grid:false</i> in the configs of each scale 
<br/> {{editor    https://snippet.dhtmlx.com/leqdx9qr	Chart. Grid}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>dashed</b></td>
			<td>(<i>boolean</i>) sets the dashed type for a scale. Use the <i>dashed:true</i> option in the configuration of the scale <br/>{{editor    https://snippet.dhtmlx.com/gnj1xc3r	Chart. Dashed Grid}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>targetLine</b></td>
			<td>(<i>number</i>) shows a threshold line (a target value); looks for the specified value in the data <br/>{{editor    https://snippet.dhtmlx.com/0h6n0yuy	Chart. Target Line}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>targetValue</b></td>
			<td>(<i>number</i>) allows setting a threshold line at any defined level (any number, not necessarily from the data) <br/>{{editor    https://snippet.dhtmlx.com/8d9kgw28	Chart. Target Value}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>max</b></td>
			<td>(<i>number</i>) the maximal value of the Y scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>min</b></td>
			<td>(<i>number</i>) the minimal value of the Y scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>log</b></td>
			<td>(<i>boolean</i>) sets the Y scale as logarithmic</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>number</i>) the padding between the values of the Y scale (area)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>maxTicks</b></td>
			<td>(<i>number</i>) sets the maximal number of ticks on the Y scale</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>number</i>) sets the padding between the scale and the chart container</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>locator</b></td>
			<td>(<i>string</i>) points to the data property, the values of which should be rendered in the chart (used for Scatter chart only)</td>
		</tr>
    </tbody>
</table>
<br/>


The **radial** scale is used for Radar chart and has its own properties, due to peculiarities of configuration:

<table class="webixdoc_links">
	<tbody>
       <tr>
			<td class="webixdoc_links0"><b>radial</b> scale</td>
			<td>(<i>object</i>) the radial scale contains the following properties:
            	<ul>
                	<li><b>value</b> - (<i>string</i>) the name of a <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> property to take data values from (map to)</li>
                    <li><b>zebra</b> - (<i>boolean</i>) sets a striped scale coloring for the Radar chart (alternation of two colors in a step)</li>
                    <li><b>showAxis</b> - (<i>boolean</i>) renders values of the scale</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

{{editor    https://snippet.dhtmlx.com/yksfvhhl	Chart. Axis Configuration}}

Series
------------

[Series](chart/api/chart_series_config.md) present an array of objects each of which contains a number of properties for rendering a separate [data set](chart/data_loading.md#preparingdataset) on a chart.

~~~js
var chart = new dhx.Chart("chart_container",{
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


### The list of config options for series (for charts with scales)

<table class="webixdoc_links">
	<tbody>
    	<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a series </td>
		</tr>
       	<tr>
			<td class="webixdoc_links0"><b>gradient</b></td>
			<td>(<i>function</i>) a function that defines a color gradient for bars <br/>{{editor    https://snippet.dhtmlx.com/j3duyn2q	Chart. Bar Gradient}} </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a chart </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) defines, whether a series is active/inactive </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>pointColor</b></td>
			<td>(<i>string</i>) the color of data item points in a series </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>dashed</b></td>
			<td>(<i>boolean</i>) sets the dashed type for a series line </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>strokeWidth</b></td>
			<td>(<i>number</i>) the width of the chart outline </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the name of a <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> property to map data values to </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>pointType</b></td>
			<td>(<i>string</i>) sets the type of the point of the data item. There are the following point types:"circle","rect","triangle","rhombus","simpleRect","simpleCircle","empty" <br/>{{editor    https://snippet.dhtmlx.com/cbj54wwu	Chart. Point Types}} </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds a style class for a series </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>color</b></td>
			<td>(<i>string</i>) the color of the series outline</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>boolean</i>) shows values of data items in tooltips, <i>true</i> by default</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltipTemplate</b></td>
			<td>(<i>function</i>) a function that defines a template for showing values of data items in tooltip <br/>{{editor    https://snippet.dhtmlx.com/mbz7dkku	Chart. Tooltip Template}}</td>
		</tr>
    </tbody>
</table>
<br/>

 
#### Options specific for Area, Bar and Radar charts
<br/>
<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>fill</b></td>
			<td>(<i>string</i>) the color of the series filling in Hex format</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>alpha</b></td>
			<td>(<i>number</i>) transparency of the series filling</td>
		</tr>
    </tbody>
</table>
<br/>


#### Options specific for Bar charts
<br/>
<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>baseLine</b></td>
			<td>(<i>number</i>) sets a base line for rendering data items (bars) <br/>{{editor    https://snippet.dhtmlx.com/6tls4qhf	Chart. Base Line}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>stacked</b></td>
			<td>(<i>boolean</i>) defines whether a stacked chart will be rendered  <br/>{{editor    https://snippet.dhtmlx.com/ilew1ds4	Chart. Stacked Chart}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>barWidth</b></td>
			<td>(<i>number</i>) sets the width of bars</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides values of data items in bars</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showTextTemplate</b></td>
			<td>(<i>function</i>) a function that specifies the template for showing values of data items in bars</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showTextRotate</b></td>
			<td>(<i>number|string</i>) the degree of rotation of text values of data items in bars <br/>{{editor    https://snippet.dhtmlx.com/o7ke2f1s	Chart. Show Text}}</td>
		</tr>
    </tbody>
</table>
<br/>


### The list of config options for series (for charts without scales: Pie, Pie3D, Donut)

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a series</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) the name of the <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> property to map labels of data values to </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the name of the <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> property to map data values to</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>color</b></td>
			<td>(<i>string</i>) points to the property in a <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> that defines the color of a pie/donut sector</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>useLines</b></td>
			<td>(<i>boolean</i>) shows/hides lines used to "connect" chart sectors with labels</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>subType</b></td>
			<td>(<i>string|boolean</i>) specifies the subtype of a chart: "basic"|"percentOnly"|"valueOnly" (used for Donut chart only)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>stroke</b></td>
			<td>(<i>string</i>) the color of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>strokeWidth</b></td>
			<td>(<i>number</i>) the width of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>monochrome</b></td>
			<td>(<i>boolean|string</i>) colors chart sections in the shades of a color specified as a value of this property (e.g. "blue", "red"). It can be also set as HEX code (#ff00ff), as RGB code (rgb(255, 15, 0)) or as RGBA color code (rgba(255, 15, 0, 0.2)).</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>paddings</b></td>
			<td>(<i>number</i>) paddings between a chart and its initial position</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides values of data items on the chart (Pie, Pie3D)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>showTextTemplate</b></td>
			<td>(<i>function</i>) a function that specifies the template for showing values of data items on the chart (Pie, Pie3D)</td>
		</tr>
    </tbody>
</table>
<br/>



Legend
-----------

The [](chart/api/chart_legend_config.md) object may contain a number of options that define its configuration.

~~~js
var chart = new dhx.Chart("chart_container",{
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

{{editor    https://snippet.dhtmlx.com/00ei3q23	Chart. Enable Legend}}

{{editor    https://snippet.dhtmlx.com/pgqf1yxj	Chart. Legend Position}}


### The list of config options for legend (for charts with scales)

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>form</b></td>
			<td>(<i>string</i>) the form of the legend markers ("rect" or "circle")<br/>{{editor    https://snippet.dhtmlx.com/n8wsfv5n	Chart. Legend Form}}</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>itemPadding</b></td>
			<td>(<i>number</i>) padding between legend items</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>halign</b></td>
			<td>(<i>string</i>) the horizontal alignment of the legend block: "left"|"right"|"center"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>valign</b></td>
			<td>(<i>string</i>) the vertical alignment of the block: "top"|"bottom"|"middle"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>series</b></td>
			<td>(<i>array</i>) the list of series that should be shown in the legend</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>margin</b></td>
			<td>(<i>number</i>) margin between the scale and the legend</td>
		</tr>
    </tbody>
</table>


### The list of config options for legend (for charts without scales: Pie, Pie3D, Donut)

<table class="webixdoc_links">
	<tbody>
       <tr>
			<td class="webixdoc_links0"><b>values</b></td>
			<td>(<i>object</i>) maps attributes of legend items to <a href="https://docs.dhtmlx.com/suite/chart__data_loading.html#preparingdataset">data set</a> properties. Contains the following properties:
            	<ul>
                	<li><b>id</b> - (<i>string/number</i>) the id of the series that will be bound to the legend </li>
                    <li><b>text</b> - (<i>string</i>) the pointer to the data value to take a text for the legend from</li>
                    <li><b>color</b> - (<i>string</i>) the pointer to the data value to take a color for the legend from</li>
					<li><b>alpha</b> - (<i>number</i>) transparency of a legend item</li>
                </ul>
            </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>form</b></td>
			<td>(<i>string</i>) the form of the legend markers ("rect" or "circle")</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>itemPadding</b></td>
			<td>(<i>number</i>) padding between legend items</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>halign</b></td>
			<td>(<i>string</i>) the horizontal alignment of the legend block: "left"|"right"|"center"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>valign</b></td>
			<td>(<i>string</i>) the vertical alignment of the block: "top"|"bottom"|"middle"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>margin</b></td>
			<td>(<i>number</i>) margin between the scale and the legend</td>
		</tr>
    </tbody>
</table>