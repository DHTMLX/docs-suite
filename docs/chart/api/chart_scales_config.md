---
sidebar_label: scales
title: JavaScript Chart - scales Config 
description: You can explore the scales config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# scales

@short: defines configuration of chart scales

@signature: {'scales?: IScalesConfig;'}

@example:
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

@descr:

The `scales` object can contain a set of *key:value* pairs where *key* is the type of a scale and *value* is an object with configuration options of the scale.

There are the following *types* of the scales: "left","right","top","bottom","radial".

## The list of config options for scales

<table>
	<tbody>
        <tr>
			<td><b>title</b></td>
			<td>(<i>string</i>) sets a title for a scale <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/5ir00fer" target="_blank">Chart. Scale Title</a>
			</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) sets a template for labels of data items rendered on a scale</td>
		</tr>
		<tr>
			<td><b>textTemplate</b></td>
			<td>(<i>function</i>) sets a template for scale labels <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/nhm3438n" target="_blank">Chart. Text Template For Scale Labels</a>
			</td>
		</tr>
		<tr>
			<td><b>textPadding</b></td>
			<td>(<i>number</i>) distance between labels of data items and the scale</td>
		</tr>
		<tr>
			<td><b>showText</b></td>
			<td>(<i>boolean</i>) shows/hides labels of data items on the scale</td>
		</tr>
		<tr>
			<td><b>scaleRotate</b></td>
			<td>(<i>number</i>) the degree of rotation of labels of data items on the scale <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/iw00fgl5" target="_blank">Chart. Scale Rotate</a>
			</td>
		</tr>
		<tr>
			<td><b>scalePadding</b></td>
			<td>(<i>number</i>) distance between the scale and its title</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(<i>boolean</i>) hides/shows the whole scale</td>
		</tr>
		<tr>
			<td><b>grid</b></td>
			<td>(<i>boolean</i>) shows/hides the grid lines (for x,y, or both scales). <i>true</i> by default for both scales (scales lines are shown). To hide both scales lines, you need to set <i>grid:false</i> in the configs of each scale <br/> 
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/leqdx9qr" target="_blank">Chart. Grid</a>
			</td>
		</tr>
		<tr>
			<td><b>dashed</b></td>
			<td>(<i>boolean</i>) sets the dashed type for a scale. Use the <i>dashed:true</i> option in the configuration of the scale <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/gnj1xc3r" target="_blank">Chart. Dashed Grid</a>
			</td>
		</tr>
		<tr>
			<td><b>targetLine</b></td>
			<td>(<i>number</i>) shows a threshold line (a target value); looks for the specified value in the data <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/0h6n0yuy" target="_blank">Chart. Target Line</a>
			</td>
		</tr>
		<tr>
			<td><b>targetValue</b></td>
			<td>(<i>number</i>) allows setting a threshold line at any defined level (any number, not necessarily from the data) <br/>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/8d9kgw28" target="_blank">Chart. Target Value</a>
			</td>
		</tr>
		<tr>
			<td><b>max</b></td>
			<td>(<i>number</i>) the maximal value of the Y scale</td>
		</tr>
		<tr>
			<td><b>min</b></td>
			<td>(<i>number</i>) the minimal value of the Y scale</td>
		</tr>
		<tr>
			<td><b>log</b></td>
			<td>(<i>boolean</i>) sets the Y scale as logarithmic</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>number</i>) the padding between the values of the Y scale (area)</td>
		</tr>
		<tr>
			<td><b>maxTicks</b></td>
			<td>(<i>number</i>) sets the maximal number of ticks on the Y scale</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(<i>number</i>) sets the padding between the scale and the chart container</td>
		</tr>
		<tr>
			<td><b>locator</b></td>
			<td>(<i>string</i>) points to the data property, the values of which should be rendered in the chart (used for Scatter chart only)</td>
		</tr>
    </tbody>
</table>
<br/>

### The list of config options for radial scales

The **radial** scale is used for Radar chart and has its own properties, due to peculiarities of configuration:

<table>
	<tbody>
       <tr>
			<td><b>radial</b> scale</td>
			<td>(<i>object</i>) the radial scale contains the following properties:
            	<ul>
                	<li><b>value</b> - (<i>string</i>) the name of a <a href="../../chart/data_loading#preparing-data-set">data set</a> property to take data values from (map to)</li>
                    <li><b>zebra</b> - (<i>boolean</i>) sets a striped scale coloring for the Radar chart (alternation of two colors in a step)</li>
                    <li><b>showAxis</b> - (<i>boolean</i>) renders values of the scale</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

**Related sample**: [Chart. Axis Configuration](https://snippet.dhtmlx.com/yksfvhhl)

[comment]: # (@related: chart/configuration_properties.md#scales)
