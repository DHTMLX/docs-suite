---
sidebar_label: Data Loading
title: JavaScript Chart - Data Loading 
description: You can explore the data loading of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data Loading

There are two ways of loading data into dhtmlxChart:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Chart.

## Preparing data set

dhtmlxChart expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var dataset = [
    { "month": "`02", "company A": 20, "company B": 52, "company C": 72},
    { "month": "`03", "company A": 5, "company B": 33, "company C": 90},
    { "month": "`04", "company A": 55, "company B": 30, "company C": 81},
    { "month": "`05", "company A": 30, "company B": 11, "company C": 62},
    { "month": "`06", "company A": 27, "company B": 14, "company C": 68},
    { "month": "`07", "company A": 32, "company B": 31, "company C": 64},
    { "month": "`08", "company A": 50, "company B": 22, "company C": 30},
    { "month": "`09", "company A": 12, "company B": 19, "company C": 65},
    { "month": "`10", "company A": 10, "company B": 24, "company C": 50},
    { "month": "`11", "company A": 17, "company B": 40, "company C": 78}
]
~~~

Each object in the data set contains a number of *key:value* pairs for data titles and values.

A data set for Pie, Pie3D and Donut charts differs a little bit. You need to provide the "color":"value" properties to color the sections of these types of Chart. For example:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string,number</i>) the id of a series </td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the name of the data set property to map labels of data values to</td>
		</tr>
        <tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the name of the data set property to map data values to </td>
		</tr>
        <tr>
			<td><b>color</b></td>
			<td>(<i>string</i>) points to the property in a data set that defines the color of a pie/donut sector</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var pie_dataset = [
	{ "id": "Jan", "value": 44.33, "color": "#394E79", "month": "Jan"},
	{ "id": "Feb", "value": 22.12, "color": "#5E83BA", "month": "Feb"},
	{ "id": "Mar", "value": 53.21, "color": "#C2D2E9", "month": "Mar"},
	{ "id": "Apr", "value": 34.25, "color": "#9A8BA5", "month": "Apr"},
	{ "id": "May", "value": 24.65, "color": "#E3C5D5", "month": "May"}
];
~~~

## External data loading

To load data from an external file, make use of the **load()** method of [DataCollection](data_collection/index.md). It takes the URL of the file with data as a parameter:

~~~js
var chart = new dhx.Chart("chart_container");
chart.data.load("../common/dataset.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
chart.data.load("/some/data").then(function(){
   // some logic here
});
~~~

**Related sample**: [Chart. Load Data](https://snippet.dhtmlx.com/qah8exx2)

## Loading from local source

To load data from a local data source, use the **parse()** method of [DataCollection](data_collection/index.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
var chart = new dhx.Chart("chart_container");
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Basic Initialization Bar Chart](https://snippet.dhtmlx.com/id9nbujd)

## Saving and restoring state

To save the current state of a chart, use the **serialize()** method of [DataCollection](data_collection/index.md). It converts the data of a chart into an array of JSON objects. 
Each JSON object contains a set of *key:value* pairs for data titles and values.

~~~js
var state = chart1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different chart. For example:

~~~js
// creating a new chart
var chart2 = new dhx.Chart(document.body);
// parsing the state of chart1 into chart2
chart2.data.parse(state);
~~~

**Related sample**: [Chart. Serialize](https://snippet.dhtmlx.com/rqvvpopp)
