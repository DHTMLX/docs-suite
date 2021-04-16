---
sidebar_label: legend
title: legend
---          

@short: defines the configuration of a chart legend

@signature: legend?: object;

@example: 
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


@template:	api_config
@descr: 

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


@relatedsample:
https://snippet.dhtmlx.com/00ei3q23	Chart. Enable Legend
https://snippet.dhtmlx.com/pgqf1yxj	Chart. Legend Position

@related:
chart/configuration_properties.md#legend

