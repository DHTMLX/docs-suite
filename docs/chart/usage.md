---
sidebar_label: Work with Chart
title: Work with Chart
---          

Setting Chart configuration
------------------------

You can change configuration of Chart on the fly with the help of the [](chart/api/chart_setconfig_method.md) method. It takes as a parameter an object with updated [chart configuration](chart/configuration_properties.md).

~~~js
var config = {
    type: "radar",
    scales: {
        radial:{
            value: "month",
            maxTicks: 7
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            fill: "#000000",
            alpha: 0.3,
            color: "#000000"
        },
        {
            id: "B",
            value: "company B",
            fill: "#FFFF33",
            alpha: 0.3,
            color: "#FFFF33"
        }
    ]
}

chart.setConfig(config);
~~~

{{editor    https://snippet.dhtmlx.com/7umj531n	Chart. Change Configuration On The Fly}}

Getting series configuration
-----------------------------

The Chart API gives you the possibility to get an object with the configuration of a certain series. Use the [](chart/api/chart_getseries_method.md) method for this purpose. It takes the id of a series as a parameter:

~~~js
var config = chart.getSeries("A");
/* => 
{
    "strokeWidth": 2, "active": true,
    "tooltip": true, "paddings": 5,
    "color": "none", "fill": "none",
    "pointType": "circle", "id": "A",
    "value": "company A", "pointColor": "blue",
    "type": "radar",
    "scales": [
        "radial"
    ]
}
*/
~~~

{{editor    https://snippet.dhtmlx.com/9jtscd9q	Chart. Get Series}}

Iterating over series
----------------------

It is possible to iterate over chart series using the [](chart/api/chart_eachseries_method.md). As a parameter it takes a handler function that will perform iteration. 
Pass an array with series objects as a parameter of the handler function:

~~~js
var chart = new dhx.Chart("chart", {
    type: "radar",
    scales: {
        radial:{
            value: "month",
            maxTicks: 7
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            fill: "#000000",
            alpha: 0.3,
            color: "#000000"
        },
        {
            id: "B",
            value: "company B",
            fill: "#FFFF33",
            alpha: 0.3,
            color: "#FFFF33"
        }
    ]
});
 
chart.eachSeries(function(seria){
    seria.config.fill
});
// -> ["#394E79", "#5E83BA", "#C2D2E9"]
~~~

{{editor    https://snippet.dhtmlx.com/4kbj4lmw	Chart. Each Series}}

Adding items into Chart
-----------------------

The API of [Data Collection](data_collection/api/refs/datacollection.md) allows you to perform operations with Chart data items. 
For example, you can add more items (points) into your Chart using the [](data_collection/api/add.md) method, like this:

~~~js
var config = {
	type:"line",
	scales: {
		"bottom" : {
			text: "text",
			showText: false
		},
		"left" : {
			maxTicks: 10,
			max: 100,
			min: 0
		}
	},
	series: [
		{
			value: "value",
			color: "#5E83BA",
			strokeWidth: 2
		}
	]
};

var chart = new dhx.Chart("chart", config);
chart.data.parse([
	{
		value: Math.random() * 100,
		text: "u" + Date.now() + 1
	},
    {
    	value: Math.random() * 100,
    	text: "u" + Date.now() + 2
    },
    {
    	value: Math.random() * 100,
    	text: "u" + Date.now() + 3
    }
]);
function add() {
	chart.data.add({
		value: Math.random() * 100,
		text: "u" + Date.now()
	});
};
~~~

The method takes as a parameter an object with two properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0">- value</td>
			<td>the value of an item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0">- text</td>
			<td>the text of an item on the X-axis</td>
		</tr>
    </tbody>
</table>

A new data item is added relative to the X-axis. In case of adding many items, you need to increase the value of each new data item position to add it corrrectly.

{{editor    https://snippet.dhtmlx.com/dpz4w5nr	Chart. Adding Data On The Fly}}

@todo:
add section "work with data"
