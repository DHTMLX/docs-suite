---
sidebar_label: legend
title: JavaScript Chart - legend Config 
description: You can explore the legend config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# legend

@short: defines the configuration of a chart legend

@signature: {'legend?: ILegendConfig;'}

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


@descr:

**Related samples**:
- [Chart. Enable Legend](https://snippet.dhtmlx.com/00ei3q23)
- [Chart. Legend Position](https://snippet.dhtmlx.com/pgqf1yxj)
  
## The list of config options for legend (for charts with scales)

<table>
	<tbody>
        <tr>
			<td><b>form</b></td>
			<td>(<i>string</i>) the form of the legend markers ("rect" or "circle")<br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/n8wsfv5n" target="_blank">Chart. Legend Form</a>
			</td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(<i>number</i>) padding between legend items</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(<i>string</i>) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(<i>string</i>) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"</td>
		</tr>
		<tr>
			<td><b>series</b></td>
			<td>(<i>array</i>) the list of series that should be shown in the legend</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(<i>number</i>) margin between the scale and the legend</td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(<i>string</i>) optional, the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(<i>number</i>) optional, defines width or height of legend block, px </td>
		</tr>
    </tbody>
</table>

## The list of config options for legend (for charts without scales: Pie, Pie3D, Donut)

<table>
	<tbody>
       <tr>
			<td><b>values</b></td>
			<td>(<i>object</i>) maps attributes of legend items to <a href="../../data_loading#preparing-data-set">data set</a> properties. Contains the following properties:
            	<ul>
                	<li><b>id</b> - (<i>string/number</i>) the id of the series that will be bound to the legend </li>
                    <li><b>text</b> - (<i>string</i>) the pointer to the data value to take a text for the legend from</li>
                    <li><b>color</b> - (<i>string</i>) the pointer to the data value to take a color for the legend from</li>
					<li><b>alpha</b> - (<i>number</i>) transparency of a legend item</li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>form</b></td>
			<td>(<i>string</i>) the form of the legend markers ("rect" or "circle")</td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(<i>number</i>) padding between legend items</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(<i>string</i>) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(<i>string</i>) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(<i>number</i>) margin between the series and the legend</td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(<i>string</i>) optional, the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(<i>number</i>) optional, defines width or height of legend block, px </td>
		</tr>
    </tbody>
</table>


## The list of config options for legend (for charts without scales: Treemap)

<table>
	<tbody>
		<tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) defines the way of displaying values in the legend and the logic for coloring tiles: "range" | "groupName" (by default).
			<ul>
				<li><code>type: "range"</code> - Each tile will have the color depending on the value of the tile. The legend shows value ranges. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b" target="_blank">Chart. Treemap chart initialization</a></li>
				<li><code>type: "groupName"</code> - All tiles within one group will have the same color. The legend shows the group names. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/fmgnlue4" target="_blank">Chart. Treemap chart with groups initialization</a></li>
			</ul></td>
		</tr>
       <tr>
			<td><b>treeSeries</b></td>
			<td>(<i>array</i>) required, an array of objects that define configuration for legend items and color of rectangular tiles. Each object can contain the following properties:
            	<ul>
					<li><b>greater</b> - (<i>number</i>) optional, defines range for values of tiles; specifies the value to be shown in the "greater than or equal to" legend</li>
                    <li><b>from</b> - (<i>number</i>) optional, defines range for values of tiles;specifies the lowest value to be shown in the "from-to" legend</li>
					<li><b>to</b> - (<i>number</i>) optional, defines range for values of tiles; specifies the highest value to be shown in the "from-to" legend</li>
					<li><b>less</b> - (<i>number</i>) optional, defines range for values of tiles; specifies the value to be shown in the "less than or equal to" legend</li>
                    <li><b>color</b> - (<i>string</i>) optional, defines the color both of the legend item and related tiles</li>
					<li><b>active</b> - (<i>boolean</i>) optional, defines whether tiles with corresponding values are active (true, by default) or inactive (false)</li>
					<li><b>id</b> - (<i>string</i>) the id of a legend item:
						<ul>
						<li> Optional, if <code>type: "range"</code>. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/p31wzm0b" target="_blank">Chart. Treemap chart initialization</a></li>
						<li> Mandatory, if <code>type: "groupName"</code>. You need to specify the id of the group as id of the legend item. <br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/fmgnlue4" target="_blank">Chart. Treemap chart with groups initialization</a></li>
						</ul></li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>form</b></td>
			<td>(<i>string</i>) the form of the legend markers: "rect" (by default) | "circle"</td>
		</tr>
		<tr>
			<td><b>itemPadding</b></td>
			<td>(<i>number</i>) padding between legend items</td>
		</tr>
		<tr>
			<td><b>halign</b></td>
			<td>(<i>string</i>) the horizontal alignment of the legend block: "left" | "right" (by default) | "center"</td>
		</tr>
		<tr>
			<td><b>valign</b></td>
			<td>(<i>string</i>) the vertical alignment of the block: "top" (by default) | "bottom" | "middle"</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(<i>number</i>) margin between the series and the legend</td>
		</tr>
		<tr>
			<td><b>direction</b></td>
			<td>(<i>string</i>) optional, the arrangement of the legend items: "row" (default) | "column" </td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(<i>number</i>) optional, defines the width or height of the legend block in pixels</td>
		</tr>
    </tbody>
</table>

[comment]: # (@related: chart/configuration_properties.md#legend)
