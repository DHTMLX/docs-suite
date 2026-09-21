---
sidebar_label: Configuration
title: JavaScript Chart - Configuration 
description: You can explore the configuration of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

This chapter will guide you through the set of Chart configuration options. It explores both common DHTMLX Chart properties actual for all chart types and the config options individual for particular types.

You need to set necessary properties from those listed below within the configuration object passed to the chart constructor function and thus adjust the chart settings to meet your needs.

## Main properties

DHTMLX Chart includes several configuration options that are mostly common for all chart types. They are:

- [type](#type)
- [scales](#scales)
- [series](#series)
- [legend](#legend)
- [maxPoints](#maxpoints)


### type

- [](chart/api/chart_type_config.md) - (*string*) defines the [type of a chart](chart/charts_overview.md) to initialize; "bar", "xbar" (for horizontal Bar chart), "line", "spline", "scatter", "area", 
"splineArea", "donut", "pie", "pie3D", "radar", "treeMap", and "calendarHeatMap"

~~~js
const chart = new dhx.Chart("chart_container", {
    type:"bar"
});
~~~

### scales

- [](chart/api/chart_scales_config.md) - (*object*) defines configuration of chart scales

~~~js
const chart = new dhx.Chart("chart_container", {
    scales:{}
});
~~~

:::info
It is necessary to configure [](chart/api/chart_scales_config.md) for the Line, Spline, Bar, X-Bar, Area, SplineArea, Radar, or Scatter chart.
:::

There are "left","right","top","bottom" and "radial" (for Radar chart) types of [scales](chart/api/chart_scales_config.md). 

~~~js
const chart = new dhx.Chart("chart_container", {
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
~~~

**Related sample**: [Chart. Scale title](https://snippet.dhtmlx.com/5ir00fer)

Scales have both common and specific options. Check the full list of the available options for scales in the [API reference](chart/api/chart_scales_config.md).

### series

- [](chart/api/chart_series_config.md) - (*array*) defines configuration of chart series

~~~js
const chart = new dhx.Chart("chart_container", {
    series:[]
});
~~~

:::info
The [](chart/api/chart_series_config.md) configuration option is required for all types of charts.
:::

[Series](chart/api/chart_series_config.md) present an array of objects each of which contains a number of properties for rendering a separate [data set](chart/data_loading.md#preparing-data-set) on a chart.

~~~js
const chart = new dhx.Chart("chart_container", {
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
~~~

**Related sample**: [Chart. Point types](https://snippet.dhtmlx.com/cbj54wwu)

See the full list of configuration options for chart series in the [API reference](chart/api/chart_series_config.md).

### legend

- [](chart/api/chart_legend_config.md) - (*object*) defines the configuration of a chart legend

~~~js
const chart = new dhx.Chart("chart_container", {
    legend:{}
});
~~~

:::info
The [](chart/api/chart_legend_config.md) configuration option is required for Treemap charts and is optional for other types of charts.
:::

The [](chart/api/chart_legend_config.md) object may contain a number of options that define its configuration.

~~~js
const chart = new dhx.Chart("chart_container", {
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
~~~

**Related Samples:**

- [Chart. Enable legend](https://snippet.dhtmlx.com/00ei3q23)
- [Chart. Legend position](https://snippet.dhtmlx.com/pgqf1yxj)

You can view the full list of the configuration options of chart legends in the [API reference](chart/api/chart_legend_config.md).


### maxPoints

- [](chart/api/chart_maxpoints_config.md) - (*number*) displays an average number of values in case a data set is too large to show all the values in the chart

~~~js
const chart = new dhx.Chart("chart_container", {
    type:"line",
    maxPoints:100
});
~~~

**Related sample**: [Chart. Max points](https://snippet.dhtmlx.com/6917eudu)

## Line and Spline chart

The configuration object of [Line and Spline chart](chart/charts_overview.md#line-and-spline-chart) must include the following properties:

- [type: "line"](chart/api/chart_type_config.md) (or [type: "spline"](chart/api/chart_type_config.md))
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "line", // or "spline"
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
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Line chart initialization](https://snippet.dhtmlx.com/t881qcim)

## Bar and X-Bar chart

The configuration object of [Bar and X-Bar chart](chart/charts_overview.md#bar-and-x-bar-chart) must include the following properties:

- [type: "bar"](chart/api/chart_type_config.md) (or [type: "xbar"](chart/api/chart_type_config.md))
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "bar", // or type: "xbar"
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
            fill: "#81C4E8"
        },
        {
            id: "B",
            value: "company B",
            color: "#74A2E7",
            fill: "#74A2E7"
        },
        {
            id: "C",
            value: "company C",
            color: "#5E83BA",
            fill: "#5E83BA"
        }
    ],
    legend: {
        series: ["A", "B", "C"],
        halign: "right",
        valign: "top"
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

## Area and SplineArea chart

The configuration object of [Area and SplineArea chart](chart/charts_overview.md#area-and-splinearea-chart) must include the following properties:

- [type: "area"](chart/api/chart_type_config.md) (or [type: "splineArea"](chart/api/chart_type_config.md))
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "area", // or "splineArea"
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
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Area chart initialization](https://snippet.dhtmlx.com/nv6t6lvm)

## Pie, Pie 3D and Donut chart

The configuration object of [Pie, Pie 3D and Donut chart](chart/charts_overview.md#pie-pie-3d-and-donut-chart) must include the following properties:

- [type: "pie"](chart/api/chart_type_config.md) (or [type: "pie3D"](chart/api/chart_type_config.md), [type: "donut"](chart/api/chart_type_config.md))
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-without-scales-pie-pie3d-donut)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-without-scales-pie-pie3d-donut) 

For example:

~~~js
const config = {
    type: "pie", // or type: "pie3D", or type: "donut"
    series: [
        {
            value: "value",
            color: "color",
            text: "month",
            stroke: "#FFFFFF",
            strokeWidth: 2
        }
    ],
    legend: {
        values: {
            text: "id",
            color: "color"
        },
        halign: "right",
        valign: "top"
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(pie_dataset);
~~~

**Related sample**: [Chart. Pie chart initialization](https://snippet.dhtmlx.com/jfbet749)

## Radar chart

The configuration object of [Radar chart](chart/charts_overview.md#radar-chart) must include the following properties:

- [type: "radar"](chart/api/chart_type_config.md)
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-radial-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "radar",
    scales: {
        "radial": {
            value: "month",
            maxTicks: 10
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            color: "#81C4E8",
            pointColor: "#81C4E8"
        },
        {
            id: "B",
            value: "company B",
            color: "#74A2E7",
            pointColor: "#74A2E7"
        },
        {
            id: "C",
            value: "company C",
            color: "#5E83BA",
            pointColor: "#5E83BA"
        }
    ],
    legend: {
        series: ["A", "B", "C"],
        halign: "right",
        valign: "top"
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Radar chart initialization](https://snippet.dhtmlx.com/6otf4h0t)

## Scatter chart

The configuration object of [Scatter chart](chart/charts_overview.md#scatter-chart) must include the following properties:

- [type: "scatter"](chart/api/chart_type_config.md)
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "scatter",
    scales: {
        bottom: {
            title: "value B",
            min: 0,
            max: 100,
            scalePadding: 25
        },
        left: {
            maxTicks: 10,
            title: "value A",
            max: 100
        }
    },
    series: [
        {
            id: "A_B",
            type: "scatter",
            value: "value A",
            valueY: "value B",
            color: "#81C4E8",
            pointType: "circle"
        },
        {
            id: "B_A",
            type: "scatter",
            value: "value B",
            valueY: "value A",
            color: "#74A2E7",
            pointType: "circle"
        }
    ],
    
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Scatter chart initialization](https://snippet.dhtmlx.com/pkczfmpu)

## Treemap chart

The configuration object of [Treemap chart](chart/charts_overview.md#treemap-chart) must include the following properties:

- [type: "treeMap"](chart/api/chart_type_config.md)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-without-scales-treemap)
- [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-without-scales-treemap) 

### With groups

~~~js
const treeMapData = [
    { id: "2021", name: "2021" },
    { id: "100", value: 50, name: "Outsourcing team", parent: "2021" },
    { id: "101", value: 100, name: "Product team", parent: "2021" },
    { id: "102", value: 10, name: "QA team", parent: "2021" },
    
    { id: "2020", name: "2020" },
    { id: "200", value: 32, name: "Outsourcing team", parent: "2020" },
    { id: "201", value: 4, name: "QA team", parent: "2020" },
    { id: "202", value: 35, name: "Product team", parent: "2020" },
];

const config = {
    type: "treeMap",
    series: [
        {
            value: "value",
            text: "name",
            stroke: "#eeeeee",
            strokeWidth: 1,
            tooltipTemplate: item => `${item[1]}: ${item[0]} employees`,
            direction: "desc",
        }
    ],
    legend: {
        type: "groupName",
        treeSeries: [
            { id: "2021", color: "#2A9D8F" },
            { id: "2020", color: "#78586F" },
            { id: "2019", color: "#E76F51" },
            { id: "2018", color: "#E5A910" },
            { id: "2017", color: "#11A3D0" },
        ],
        halign: "right",
        valign: "bottom",
    },
    data: treeMapData
};

const chart = new dhx.Chart("chart_container", config);
~~~

**Related sample**: [Chart. Treemap chart with groups initialization](https://snippet.dhtmlx.com/fmgnlue4)

### Without groups

~~~js
const treeMapData = [
       {
          "planet": "Mercury",
          "radius": "2440"
       },
       {
          "planet": "Venus",
          "radius": "6052"
       },
    ...
]

const config = {
    type: "treeMap",
    series: [
        {
            value: "radius",
            text: "planet",
            stroke: "#eeeeee",
            strokeWidth: 1,
            tooltipTemplate: item => `${item[1]} - ${item[0]}`,
        }
    ],
    legend: {
        type: "range",
        treeSeries: [
            { greater: 60000, color: "#237396" },
            { from: 50000, to: 60000, color: "#2780A8" },
            { from: 20000, to: 50000, color: "#3892A3" },
            { from: 6000, to: 20000, color: "#4DA3A0" },
            { less: 20000, color: "#67BF99" },
        ],
        halign: "right",
        valign: "top",
        direction: "row",
        size: 50,
    },
    data: treeMapData
};

const chart = new dhx.Chart("chart_container", config);
~~~

**Related sample**: [Chart. Treemap chart initialization](https://snippet.dhtmlx.com/p31wzm0b)

## Calendar heatmap chart

The configuration object of [Calendar heatmap chart](chart/charts_overview.md#calendar-heatmap-chart) must include the following properties:

- [type: "calendarHeatMap"](chart/api/chart_type_config.md)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-without-scales-calendar-heatmap)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-without-scales-calendar-heatmap)

For example

~~~js
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "201", value: 4, date: new Date(2022, 6, 15) },
    { id: "400", value: -14, date: new Date(2022, 9, 15) },
    { id: "500", value: 9, date: new Date(2022, 9, 20) },
    { id: "501", value: 100, date: new Date(2023, 1, 1) },
];

const config = {
    type: "calendarHeatMap",
    css: "dhx_widget--bordered",
    series: [
        {
            value: "value",
            date: "date",
            positiveColor: "#04deb6",
            negativeColor: "#ff457a",
            color: "#e5e5e5",
            weekStart: "monday",
            dateFormat: "%d %M %Y",
            tooltipTemplate: point => `${point[1]} contributions on ${point[0]}`,
            maxValue: 90,
            minValue: 0,
        }
    ],
    legend: {
        values: {
            text: "Calendar heatmap chart",
            tick: 5,
            majorTick: 2,
            step: 1,
            tickTemplate: value => `${value}c`,
        },
        halign: "right",
        valign: "top",
        margin: 0,
        size: 60,
    }
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

### Default range of dates

The default range of dates for which Calendar heatmap chart will be shown is **from** the 1st of January of the minimal year found in the dataset **to** the 31st of December of the maximal year found in the dataset.

### Custom range of dates

If you have a large data set and don't need the chart to be shown for the [whole period of time](#default-range-of-dates), you may change a range of dates to display the chart during the necessary period of time.

For this, use the **startDate** and **endDate** properties of the [series](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-without-scales-calendar-heatmap) property.

#### 1. startDate & endDate

Let's take the following data set:

~~~js
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "101", value: 100, date: new Date(2022, 4, 1) },
    { id: "200", value: 32, date: new Date(2022, 6, 1) },
    { id: "202", value: 35, date: new Date(2022, 7, 21) },
    { id: "400", value: -14, date: new Date(2022, 9, 15) },
    { id: "500", value: 9, date: new Date(2022, 9, 20) },
    { id: "501", value: 100, date: new Date(2023, 3, 1) },
    { id: "502", value: 40, date: new Date(2023, 4, 11) },
    { id: "503", value: 23, date: new Date(2023, 5, 6) },
];
~~~

and consider how the chart will be shown depending on the values of the start and end dates.

- **One year**

~~~js {7-8}
const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            startDate: "15/03/22",
            endDate: "15/03/23",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "15/03/22" to "15/03/23" inclusively.

- **One month**

~~~js {7-8}
const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            startDate: "01/03/22",
            endDate: "31/03/22",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "01/03/22" to "31/03/22" inclusively.

- **Any other period**

~~~js {7-8}
const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            startDate: "01/03/22",
            endDate: "01/07/24",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "01/03/22" to "01/07/24" inclusively.

#### 2. startDate

If you specify the start date but don't specify the end date, the period for which the chart will displayed depends both on the data set and the start date.

~~~js title="Example 1. Data in the range less than a year" {16}
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "101", value: 100, date: new Date(2022, 4, 1) },
    { id: "200", value: 32, date: new Date(2022, 6, 1) },
    { id: "202", value: 35, date: new Date(2022, 7, 21) },
    { id: "500", value: 9, date: new Date(2022, 9, 20) },
    { id: "501", value: 100, date: new Date(2023, 1, 1) },
];

const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            startDate: "15/03/22",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "15/03/22" to "14/03/23" inclusively (i.e. for one year).

~~~js title="Example 2. Data in the range more than a year" {18}
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "101", value: 100, date: new Date(2022, 4, 1) },
    { id: "200", value: 32, date: new Date(2022, 6, 1) },
    { id: "202", value: 35, date: new Date(2022, 7, 21) },
    { id: "500", value: 9, date: new Date(2022, 9, 20) },
    { id: "501", value: 100, date: new Date(2023, 3, 1) },
    { id: "502", value: 40, date: new Date(2023, 4, 11) },
    { id: "503", value: 23, date: new Date(2023, 5, 6) },
];

const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            startDate: "15/03/22",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "15/03/22" to "14/03/24" inclusively (i.e. for two years).

#### 3. endDate

If you specify the end date but don't specify the start date, the period for which the chart will displayed depends both on the data set and the end date. Note, that in this case the chart will start from the 1st of January of the minimal year found in the dataset.

~~~js {18}
const heatMapData = [
    { id: "100", value: 50, date: new Date(2022, 2, 2) },
    { id: "101", value: 100, date: new Date(2022, 4, 1) },
    { id: "200", value: 32, date: new Date(2022, 6, 1) },
    { id: "202", value: 35, date: new Date(2022, 7, 21) },
    { id: "300", value: 22, date: new Date(2022, 9, 6) },
    { id: "501", value: 100, date: new Date(2023, 3, 1) },
    { id: "502", value: 40, date: new Date(2023, 4, 11) },
    { id: "503", value: 23, date: new Date(2023, 5, 6) },
];

const config = {
    type: "calendarHeatMap",
    series: [
        {
            value: "value",
            date: "date",
            endDate: "15/05/23",
        }
    ],
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse(heatMapData);
~~~

As a result, the chart will be displayed for the period from "01/01/22" to "15/05/23" inclusively.

## Mixed graphs in one chart

You can create a chart that combines several graphs of different types. Define each graph as an object in the `series` array and set the desired chart type via the `type` property. For example: 

~~~jsx
const chart = new dhx.Chart("chart_container", {
    series: [
        {
            id: "A",
            type: "line",
            value: "company A",
            color: "red",
            fill: "#FDBBBB"
        },
        {
            id: "B",
            type: "bar",
            value: "company B",
            color: "blue",
            fill: "lightblue"
        },
        {
            id: "C",
            type: "area",
            value: "company C",
            fill: "lightgreen",
            color: "green"
        }
    ],
    // other configuration properties
});
~~~

**Related sample**: [Chart. Line, Spline and Area charts together](https://snippet.dhtmlx.com/eti3i33o)

:::note
The Bar and the X-Bar types can not be mixed in one chart, as one of them is drawn vertically and the other one horizontally.
:::

If the mixed graphs have different dimensions, each of them can be measured against its own value scale. Check the [Dual axis chart](#dual-axis-chart) section for the details.

## Dual axis chart

A chart can render two value scales at once, which allows showing series of different dimensions (for example, a volume in tons and a share in percent) against the same argument scale. The second of the value scales is also called a secondary axis.

The value scale is a characteristic of a separate series rather than of the whole chart, so each series names the scale its values are measured against via the [`scale`](chart/api/chart_series_config.md#scale) property:

~~~jsx {5,9}
const chart = new dhx.Chart("chart_container", {
    scales: {
        bottom: { text: "month" },
        left:   { title: "Sales, $" },
        right:  { title: "Profit ratio", min: 1.2, max: 1.45 }
    },
    series: [
        { id: "S", type: "line", value: "sales",  color: "#2A9D8F" },
        { id: "M", type: "line", value: "margin", color: "#E76F51", scale: "right" }
    ]
});
~~~

![Dual axis chart with two line series of different magnitude in DHTMLX Suite](/img/chart/dual_axis_overview.png)

**Related sample**: [Chart. Dual axis lines](https://snippet.dhtmlx.com/53xee7cq)

Each scale calculates its minimal and maximal values and its ticks by the series bound to it only, which keeps values of different magnitude readable in one chart.

### Value scale of a series

The `scale` property names the value scale only. The argument scale is applied automatically, which makes the property direction-agnostic: the direction of the value scale follows the type of the series.

- the value scale of the Line, Spline, Bar, Area, SplineArea and Scatter series is vertical, so the property takes `"left"` or `"right"`
- the value scale of the X-Bar series is horizontal, so the property takes `"bottom"` or `"top"`

The `"left"` and the `"right"` scales share the vertical direction, the `"bottom"` and the `"top"` ones the horizontal direction. A chart becomes a dual axis one when it declares both scales of a direction.

The argument scale is the scale of the remaining direction: the series are laid out along the `"bottom"` scale (`"left"` for X-Bar), or along the opposite one if a chart does not declare it. Thus, the second value scale of a horizontal chart is the `"top"` one:

~~~jsx {6,10}
const chart = new dhx.Chart("chart_container", {
    type: "xbar",
    scales: {
        left:   { text: "month" },
        bottom: { title: "Volume, t" },
        top:    { title: "Share, %", min: 0, max: 100 }
    },
    series: [
        { id: "A", value: "a", fill: "#394E79" },
        { id: "R", value: "ratio", fill: "#E76F51", scale: "top" }
    ]
});
~~~

**Related sample**: [Chart. Dual axis x-bar](https://snippet.dhtmlx.com/y1td91hl)

#### Default and incorrect scale positions

A series without the `scale` property is measured against the `"left"` scale (`"bottom"` for X-Bar). If a chart does not have it, the series takes the opposite scale. Thus, a chart with the `"right"` scale alone is configured the same way as a chart with the `"left"` one.

If the `scale` property names the perpendicular scale, for example `"top"` for a Bar series, the chart throws a `TypeError` that specifies the type of the series and the positions it can be bound to:

~~~jsx {6-7}
series: [
    {
        id: "margin",
        type: "bar",
        value: "margin",
        scale: "top" // TypeError: The "top" scale can not hold
                     // the values of the "bar" series, use "left" or "right"
    }
]
~~~

:::note
A value scale with no series bound to it is rendered as a plain scale line without labels.
:::

### Naming both scales of a series

The [`scales`](chart/api/chart_series_config.md#scales) property is the full form of the binding. It is needed when a series specifies not only its value scale, but also its argument scale, and it takes the pair of positions as an array:

~~~jsx {2}
series: [
    { type: "line", value: "ratio", scales: ["top", "right"] } // the categories on top, the values on the right
]
~~~

The order of the positions in the array does not matter, as the role of each of them is defined by its direction. The array has to name exactly one value scale of the series, and the remaining position is applied as the argument scale. 

As the argument scale is resolved automatically, the `scale` property is enough in most cases. If a series has both properties, `scale` takes priority and `scales` is ignored.

### Grid of the second scale

Two sets of grid lines placed at different heights are difficult to read, so the grid of a direction belongs to the first scale of this direction (`"bottom"` for the horizontal direction and `"left"` for the vertical one). The second scale renders its labels, its own scale line and its [`targetLine`](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales) and [`targetValue`](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales), if they are specified, but not the grid.

The [`grid`](chart/api/chart_scales_config.md#grid) property redistributes the grid between the two scales. Set `grid: true` for the second scale to render both grids:

~~~jsx {4}
scales: {
    bottom: { text: "month" },
    left:   { title: "Volume, t" },
    right:  { title: "Share, %", grid: true }
}
~~~

To leave the grid to the second scale instead of rendering both, set `grid: false` for the first one.

### Matching the ticks of the two scales

As each scale builds its own range, the ticks of one scale rarely land at the height of the ticks of the other one. The [`alignTicks`](chart/api/chart_scales_config.md#alignticks) property of a scale makes the grids match: the scale takes the number of ticks from the reference scale and spreads its own range over them. The accepted values of the property are:

- `false/undefined` - the scale chooses the number of its ticks on its own
- `true` - the number of ticks is taken from the main scale of the same direction (`"left"` for the vertical direction and `"bottom"` for the horizontal one), so the grid lines of both scales coincide
- `string` - the position of the scale to take the number of ticks from (`"left"` | `"right"` | `"bottom"` | `"top"`), which has to be of the same direction

~~~jsx {4}
scales: {
    bottom: { text: "month" },
    left:   { title: "Volume, t" },
    right:  { title: "Share, %", alignTicks: true }
}
~~~

![Dual axis charts before and after aligning the ticks of both value scales in DHTMLX Suite](/img/chart/dual_axis_align_ticks.png)

Without `alignTicks` the right scale builds 7 ticks of its own against the 17 of the left one, so its labels land between the grid lines.

### Stack groups

A chart can hold several stacks at once: one per value scale, or several named groups on one scale. In the example below the bars bound to the `"left"` scale are stacked together, while the line is measured against the `"right"` one:

~~~jsx {8-11}
const chart = new dhx.Chart("chart_container", {
    scales: {
        bottom: { text: "month" },
        left:   { title: "Volume, t" },
        right:  { title: "Share, %", min: 0, max: 100 }
    },
    series: [
        { id: "A", type: "bar",  value: "a", fill: "#394E79", stacked: true },
        { id: "B", type: "bar",  value: "b", fill: "#5E83BA", stacked: true },
        { id: "C", type: "bar",  value: "c", fill: "#C2D2E9", stacked: true },
        { id: "R", type: "line", value: "ratio", color: "#E76F51", scale: "right" }
    ],
    legend: { series: ["A", "B", "C", "R"] }
});
~~~

![Stacked bar chart with a ratio line on the second value scale in DHTMLX Suite](/img/chart/dual_axis_stacks.png)

**Related sample**: [Chart. Dual axis](https://snippet.dhtmlx.com/n25kiv0q)

The [`stacked`](chart/api/chart_series_config.md#stacked) property of a series defines the stack it belongs to. The accepted values of the property are:

- `false/undefined` - the series is rendered as a separate layer
- `true` - the stack is defined automatically by the value scale, so all the series with `stacked: true` bound to the same scale are put into one stack. For a chart with a single value scale, this is the plain stacked chart
- `string` - the explicit name of the group, which allows building two or more independent stacks, including on one scale

The stacks of one direction are placed side by side, as usual bar series, and the `total` property is calculated separately for each group.

~~~jsx {4-5,7-8}
series: [
    { type: "bar", value: "a", stacked: true },                  // the stack of the left scale
    { type: "bar", value: "b", stacked: true },
    { type: "bar", value: "x", stacked: true, scale: "right" },  // the independent stack of the right scale
    { type: "bar", value: "y", stacked: true, scale: "right" },

    { type: "bar", value: "plan", stacked: "plan" },             // two stacks on one scale,
    { type: "bar", value: "fact", stacked: "fact" }              // drawn side by side
]
~~~

The chart below stacks two series on the `"left"` scale and two more on the `"right"` one. The groups are drawn side by side, and the `total` over a stack counts that group only.

![Bar chart with a stack on each value scale, drawn side by side and totalled on its own, in DHTMLX Suite](/img/chart/dual_axis_independent_stacks.png)

**Related samples:**

- [Chart. Dual axis stacks](https://snippet.dhtmlx.com/s9kunqvd)
- [Chart. Independent stacks](https://snippet.dhtmlx.com/vcr5hf17)

### Supported series types

Which positions the `scale` and `scales` properties accept depends on the type of a series. The types rendered without scales ignore both of them:

| Series type | Value scale | Argument scale |
| --- | --- | --- |
| `bar` | `"left"` / `"right"` | `"bottom"` / `"top"` |
| `xbar` | `"bottom"` / `"top"` | `"left"` / `"right"` |
| `line`, `spline` | `"left"` / `"right"` | `"bottom"` / `"top"` |
| `area`, `splineArea` | `"left"` / `"right"` | `"bottom"` / `"top"` |
| `scatter` | `"left"` / `"right"` | `"bottom"` / `"top"` |
| `pie`, `pie3D`, `donut` | no scales, the properties are ignored | - |
| `treeMap`, `calendarHeatMap` | no scales, the properties are ignored | - |
| `radar` | `"radial"` only | - |

The types listed above can be mixed in one chart, which is the main purpose of a secondary scale: a bar and a line, a stack and a line, an area and a line, a bar and a spline. Check the [Mixed graphs in one chart](#mixed-graphs-in-one-chart) section for the details and the limitations.

**Related samples:**

- [Chart. Dual axis mixed series](https://snippet.dhtmlx.com/lzp4hcgb)
- [Chart. Dual axis area](https://snippet.dhtmlx.com/hvkfz5aj)