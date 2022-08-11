---
sidebar_label: series
title: JavaScript Chart - series Config 
description: You can explore the series config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# series

@short: defines configuration of chart series

@signature: {'series?: SeriaConfig[];'}

@example:
const chart = new dhx.Chart("chart_container",{
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

<table>
	<tbody>
    	<tr>
			<td><b>id</b></td>
			<td>(<i>string</i>) the id of a series </td>
		</tr>
		<tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) the type of a chart </td>
		</tr>
		<tr>
			<td><b>active</b></td>
			<td>(<i>boolean</i>) defines, whether a series is active/inactive </td>
		</tr>
		<tr>
			<td><b>pointColor</b></td>
			<td>(<i>string</i>) the color of data item points in a series </td>
		</tr>
		<tr>
			<td><b>dashed</b></td>
			<td>(<i>boolean</i>) sets the dashed type for a series line </td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(<i>number</i>) the width of the chart outline </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the name of a <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to </td>
		</tr>
		<tr>
			<td><b>pointType</b></td>
			<td>(<i>string</i>) sets the type of the point of the data item. There are the following point types:"circle","rect","triangle","rhombus","simpleRect","simpleCircle","empty" <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/cbj54wwu" target="_blank">Chart. Point types</a>
			</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds a style class for a series </td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(<i>string</i>) the color of the series outline</td>
		</tr>
		<tr>
			<td><b>tooltip</b></td>
			<td>(<i>boolean</i>) shows values of data items in tooltips, <i>true</i> by default</td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(<i>function</i>) a function that defines a template for showing values of data items in tooltip <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/mbz7dkku" target="_blank">Chart. Tooltip template</a>
			</td>
		</tr>
    </tbody>
</table>

### Options specific for Area, Bar and Radar charts

<table>
	<tbody>
        <tr>
			<td><b>fill</b></td>
			<td>(<i>string</i>) the color of the series filling in Hex format</td>
		</tr>
		<tr>
			<td><b>alpha</b></td>
			<td>(<i>number</i>) transparency of the series filling</td>
		</tr>
    </tbody>
</table>
<br/>

### Options specific for Bar charts

<table>
	<tbody>
    	<tr>
			<td><b>gradient</b></td>
			<td>(<i>function</i>) a function that defines a color gradient for bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/j3duyn2q" target="_blank">Chart. Bar chart. Gradient</a>
			</td>
		</tr>
        <tr>
			<td><b>baseLine</b></td>
			<td>(<i>number</i>) sets a base line for rendering data items (bars) <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/6tls4qhf" target="_blank">Chart. Base line</a>
			</td>
		</tr>
		<tr>
			<td><b>stacked</b></td>
			<td>(<i>boolean</i>) defines whether a stacked chart will be rendered  <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/ilew1ds4" target="_blank">Chart. Stacked chart</a>
			</td>
		</tr>
		<tr>
			<td><b>barWidth</b></td>
			<td>(<i>number</i>) sets the width of bars</td>
		</tr>
		<tr>
			<td><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides values of data items in bars</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(<i>function</i>) a function that specifies the template for showing values of data items in bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/o7ke2f1s" target="_blank">Chart. Show text</a>
			</td>
		</tr>
		<tr>
			<td><b>showTextRotate</b></td>
			<td>(<i>number|string</i>) the degree of rotation of text values of data items in bars <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/o7ke2f1s" target="_blank">Chart. Show text</a>
			</td>
		</tr>
    </tbody>
</table>
<br/>

## The list of config options for series (for charts without scales: Pie, Pie3D, Donut)

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string</i>) the id of a series</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map labels of data values to </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to</td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(<i>string</i>) points to the property in a <a href="../../data_loading#preparing-data-set">data set</a> that defines the color of a pie/donut sector</td>
		</tr>
		<tr>
			<td><b>useLines</b></td>
			<td>(<i>boolean</i>) shows/hides lines used to "connect" chart sectors with labels</td>
		</tr>
		<tr>
			<td><b>subType</b></td>
			<td>(<i>string|boolean</i>) specifies the subtype of a chart: "basic"|"percentOnly"|"valueOnly"</td>
		</tr>
		<tr>
			<td><b>stroke</b></td>
			<td>(<i>string</i>) the color of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(<i>number</i>) the width of lines between sectors of a chart</td>
		</tr>
		<tr>
			<td><b>monochrome</b></td>
			<td>(<i>boolean|string</i>) colors chart sections in the shades of a color specified as a value of this property (e.g. "blue", "red"). It can be also set as HEX code (#ff00ff), as RGB code (rgb(255, 15, 0)) or as RGBA color code (rgba(255, 15, 0, 0.2)).</td>
		</tr>
		<tr>
			<td><b>paddings</b></td>
			<td>(<i>number</i>) paddings between a chart and its initial position</td>
		</tr>
		<tr>
			<td><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides values of data items on the chart (Pie, Pie3D)</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(<i>function</i>) a function that specifies the template for showing values of data items on the chart (Pie, Pie3D)</td>
		</tr>
    </tbody>
</table>
<br/>

## The list of config options for series (for charts without scales: Treemap)

<table>
	<tbody>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map labels of data values to. The index of the option is 0 (item[0]). </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the name of the <a href="../../data_loading#preparing-data-set">data set</a> property to map data values to. The index of the option is 1 (item[1]).</td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(<i>string</i>) defines the arrangement of tiles inside a chart ("desc" (by default) - from larger to smaller value, "asc" - from smaller to larger value)</td>
		</tr>
		<tr>
			<td><b>stroke</b></td>
			<td>(<i>string</i>) the color of lines between tiles</td>
		</tr>
		<tr>
			<td><b>strokeWidth</b></td>
			<td>(<i>number</i>) the width of lines between tiles inside a group in pixels, 2 by default. The width of lines between the groups is 4 (=2px*2) by default </td>
		</tr>
		<tr>
			<td><b>paddings</b></td>
			<td>(<i>number</i>) paddings between a chart and its initial position</td>
		</tr>
		<tr>
			<td><b>tooltipTemplate</b></td>
			<td>(<i>function</i>) a function that defines a template for showing values of data items in tooltip<br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b?text=chart" target="_blank">Chart. Treemap chart initialization</a>
			</td>
		</tr>
		<tr>
			<td><b>showTextTemplate</b></td>
			<td>(<i>function</i>) a function that specifies the template for showing values of data items on the chart</td>
		</tr>
    </tbody>
</table>
<br/>

[comment]: # (@related: chart/configuration_properties.md#series)
