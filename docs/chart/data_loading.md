---
sidebar_label: Data loading
title: JavaScript Chart - Data Loading 
description: You can explore the data loading of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

DHTMLX Chart supports two ways to load data:

- On initialization
- After initialization

First, prepare a data set to load into Chart.

## Preparing data set

DHTMLX Chart expects data in JSON format. 

:::info
If you specify the `id` fields in the data collection, their values must be **unique**. You can also omit these fields; Chart then generates the ids automatically.
:::

The following examples show data sets for different chart types:

- **Line, Spline, Bar, X-Bar, Area, Spline Area, Radar, Scatter charts**

A data set for these chart types can look like this:

~~~js
const dataset = [
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

Each object in the data set contains `key:value` pairs for data titles and values.

- **Pie, Pie3D and Donut charts**

A data set for Pie, Pie3D, and Donut charts includes the following properties:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string | number</i>) the id of a series</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the text label of a pie/donut sector</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the value of a pie/donut sector</td>
        </tr>
        <tr>
            <td><b>color</b></td>
            <td>(<i>string</i>) points to the data set property that defines the color of a pie/donut sector</td>
        </tr>
    </tbody>
</table>
<br/>

Set the `"color": "value"` properties to color the sections of these chart types. For example:

~~~js
const pie_dataset = [
    { "id": "Jan", "value": 44.33, "color": "#394E79", "month": "Jan"},
    { "id": "Feb", "value": 22.12, "color": "#5E83BA", "month": "Feb"},
    { "id": "Mar", "value": 53.21, "color": "#C2D2E9", "month": "Mar"},
    { "id": "Apr", "value": 34.25, "color": "#9A8BA5", "month": "Apr"},
    { "id": "May", "value": 24.65, "color": "#E3C5D5", "month": "May"}
];
~~~

- **Treemap chart**

A data set for the Treemap chart has a different structure and can include the following properties:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string | number</i>) the id of a tile or group</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the text label of a tile</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the value of a tile</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(<i>string</i>) the id of the group</td>
        </tr>
    </tbody>
</table>
<br/>

For example:

~~~js
const treeMapData = [
    { id: "2020", month: "2020" },
    { id: "Jan", value: 144.33, month: "Jan", parent: "2020" },
    { id: "Feb", value: 22.12, month: "Feb", parent: "2020" },
    { id: "Mar", value: 53.21, month: "Mar", parent: "2020" },
    // more data
];
~~~

- **Calendar heatmap chart**

A data set for the Calendar heatmap chart must include the following properties:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string | number</i>) the id of a cell</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the number value of a cell</td>
        </tr>
        <tr>
            <td><b>key:value</b></td>
            <td><i>key</i> is the name of the attribute and <i>value</i> is the date of a cell</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "101", value: 100, date: new Date(2022, 4, 1) },
    { id: "102", value: 10, date: new Date(2022, 4, 4) },
    { id: "200", value: 32, date: new Date(2022, 6, 1) },
    { id: "201", value: 4, date: new Date(2022, 6, 15) },
    { id: "202", value: 35, date: new Date(2022, 7, 21) },
    { id: "300", value: 22, date: new Date(2022, 9, 6) },
    { id: "501", value: 100, date: new Date(2023, 1, 1) },
];
~~~

## Loading data on initialization

You can load [a predefined data set](#preparing-data-set) into Chart during initialization. Use the [data](chart/api/chart_data_config.md) configuration property:

~~~js
const chart = new dhx.Chart("chart_container", {
    type: "area",
    scales: {
        "bottom": {
            text: "month"
        },
        "left": {
            maxTicks: 10,
            max: 100,
            min: 0
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            color: "#81C4E8",
            strokeWidth: 3
        },
        {
            id: "B",
            value: "company B",
            color: "#74A2E7",
            strokeWidth: 3
        },
        {
            id: "C",
            value: "company C",
            color: "#5E83BA",
            strokeWidth: 3
        }
    ],
    legend: {
        series: ["A", "B", "C"],
        halign: "right",
        valign: "top"
    },
    data: dataset
});
~~~

## Loading data after initialization

You can load data into Chart after initialization in two ways:

- [From an external file](#external-data-loading)
- [From a local data source](#loading-from-local-source)

### External data loading

To load data from an external file, use the [load()](data_collection/api/datacollection_load_method.md) method of [DataCollection](/data_collection/). The method takes the data file URL as a parameter:

~~~js
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    scales: { 
        // scales config 
    },
    series: [
        {
            //series config                 
        }
    ]
});

chart.data.load("../common/dataset.json");
~~~

The component makes an AJAX call and expects the remote URL to return valid JSON data.

Data loading is asynchronous, so wrap in a promise any code that runs after loading:

~~~js
chart.data.load("/some/data").then(function(){
   // some logic here
});
~~~

**Related sample**: [Chart. Load data](https://snippet.dhtmlx.com/qah8exx2)

### Loading from local source

To load data from a local data source, use the [parse()](data_collection/api/datacollection_parse_method.md) method of [DataCollection](/data_collection/). Pass [a predefined data set](#preparing-data-set) to the method:

~~~js
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    scales: { 
        // scales config 
    },
    series: [
        {
            //series config                 
        }
    ]
});

chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

## Saving and restoring state

To save the current state of a chart, use the `serialize()` method of [DataCollection](/data_collection/). The method converts the chart data into an array of JSON objects.
Each JSON object contains `key:value` pairs that match the original data set structure.

~~~js
const state = chart1.data.serialize();
~~~

You can then parse the saved state into a different chart. For example:

~~~js
// creating a new chart
const chart2 = new dhx.Chart(document.body);
// parsing the state of chart1 into chart2
chart2.data.parse(state);
~~~

**Related sample**: [Chart. Serialize](https://snippet.dhtmlx.com/rqvvpopp)
