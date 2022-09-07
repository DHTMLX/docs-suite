---
sidebar_label: Initialization
title: JavaScript Chart - Initialization 
description: You can explore the initialization of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
Download the DHTMLX Chart package:

- [as a separate component](https://dhtmlx.com/docs/products/dhtmlxChart/download.shtml)
- [as a part of the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml)
:::

To initialize DHTMLX Chart in an application, you need to take the following steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Chart](#initialize-chart) with the object constructor
- [Load data into Chart](#load-data-into-chart)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Chart</title>         
        <script type="text/javascript" src="../../codebase/chart.js"></script>
        <link rel="stylesheet" href="../../codebase/chart.css">
    </head>
    <body>
    	<div id="chart_container"></div>
        <script>
            // creating Chart 
            const chart = new dhx.Chart("chart_container", {
    			type: "bar",
				scales: {
					"bottom" : {
						text: "month"
					},
					"left" : {
						maxTicks: 10,
						max: 100,
						min: 0
					}
				},
				series: [
					{
						id: "A",
						value: "company C",
						color: "#5E83BA",						
						fill: "#5E83BA"						
					}
				]
			});
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the library into the header of the created file.

**If you use DHTMLX Chart standalone**, you need to include JS/CSS files of DHTMLX Chart:

- *chart.js*
- *chart.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/chart.js"></script>
<link rel="stylesheet" href="../../codebase/chart.css">
~~~

**If you use DHTMLX Chart as a part of the Suite package**, you need to include JS/CSS files of the DHTMLX Suite library:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container 

Add a container for Chart and give it an id, "chart_container", for example: 

~~~html title="index.html"
<div id="chart_container"></div>
~~~

## Initialize Chart

Initialize Chart with the `dhx.Chart` object constructor. The constructor has two parameters:

- a container to place a Chart into. You've defined it at the previous step.
- an object with configuration properties. [See the full list of properties here](chart/api/api_overview.md#properties)

~~~js title="index.js"
const config = {
	type: "bar",
    scales: {
    	"bottom" : {
    		text: "month"
    	},
    	"left" : {
    		maxTicks: 10,
    		max: 100,
    		min: 0
    	}
    },
    series: [
    	{
    		id: "A",
    		value: "company C",
    		color: "#5E83BA",						
    		fill: "#5E83BA"						
    	}
    ]
};

const chart = new dhx.Chart("chart_container", config);
~~~

### Configuration properties

See the full list of Chart configuration properties in the [Chart API overview](chart/api/api_overview.md#properties) article.

## Load data into Chart

Detailed information on how to load data into DHTMLX Chart is given in the [Data loading](chart/data_loading.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/id9nbujd?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
