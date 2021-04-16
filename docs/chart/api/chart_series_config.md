---
sidebar_label: series
title: series
---          

``` todo спросить про нижнюю таблицу

@short: defines configuration of chart series


@type: array

@example: 
var chart = new dhx.Chart("chart_container",{
    type:"bar",
    scales: {
        "bottom" : {s
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


@template:	api_config
@descr: 

### The list of config options for series (for charts with scales)

<table class="webixdoc_links">
	<tbody>
    	<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a series </td>
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

####Options specific for Area, Bar and Radar charts

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

####Options specific for Bar charts

<br/>
<table class="webixdoc_links">
	<tbody>
    	<tr>
			<td class="webixdoc_links0"><b>gradient</b></td>
			<td>(<i>function</i>) a function that defines a color gradient for bars <br/>{{editor    https://snippet.dhtmlx.com/j3duyn2q	Chart. Bar Gradient}} </td>
		</tr>
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

@related:
chart/configuration_properties.md#series

``` todo