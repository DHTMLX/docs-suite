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

- [](chart/api/chart_type_config.md) - (*string*) defines the [type of a chart](chart/charts_overview.md) to initialize; "bar", "x-bar" (for horizontal Bar chart), "line", "spline", "scatter", "area", 
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

- [type: "bar"](chart/api/chart_type_config.md) (or [type: "x-bar"](chart/api/chart_type_config.md))
- [scales: {}](chart/api/chart_scales_config.md#the-list-of-config-options-for-scales)
- [series: []](chart/api/chart_series_config.md#the-list-of-config-options-for-series-for-charts-with-scales)
- and, optionally, [legend: {}](chart/api/chart_legend_config.md#the-list-of-config-options-for-legend-for-charts-with-scales) 

For example:

~~~js
const config = {
    type: "bar", // or type: "x-bar"
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

const chart = new dhx.Chart("chart", config);
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