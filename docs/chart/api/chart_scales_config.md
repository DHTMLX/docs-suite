---
sidebar_label: scales
title: scales
---          

@short: defines configuration of chart scales

```todoapi
object scales;
scales?: IScalesConfig;
export declare type ScaleType = "left" | "right" | "top" | "bottom" | "radial";
а еще не у всех чартов это есть
```

@type: object

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


@template:	api_config

@descr: 

### The list of config options for scales

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

@related:
chart/configuration_properties.md#scales