---
sidebar_label: total
title: JavaScript Chart - total Config
description: The total config of DHTMLX Chart shows the sum of the values of all the stacked series at the end of each bar of a Bar or X-Bar chart, either in the default format or in the format that a callback returns. See usage and examples in the DHTMLX Suite docs.
---

# total

@short: Optional. Displays the sum of the values of all the stacked series at the end of each bar of a Bar or X-Bar chart

### Usage

~~~jsx
total?: boolean | ((total: number) => string | number);
~~~

### Parameters

The `total` property can take one of the following values:

- `false` - the chart doesn't render the total values
- `true` - the chart calculates the sum of the values of all the series for each bar automatically and renders it in the default format at the end of the bar (above the bar in a Bar chart and to the right of the bar in an X-Bar chart)
- a callback function `((total: number) => string | number)` - the chart calculates the sum for each bar and calls the function with the following parameter:
    - `total` - (*number*) the sum of the values of all the series of the current bar calculated by the component

    and returns a *string* or a *number* that the chart displays at the end of the bar

### Default config

~~~jsx
total: false
~~~

### Example

~~~jsx
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    total: true,
    scales: {
        bottom: { text: "month" },
        left: { max: 170 }
    },
    series: [
        { id: "A", value: "company A", fill: "#394E79", stacked: true },
        { id: "B", value: "company B", fill: "#5E83BA", stacked: true },
        { id: "C", value: "company C", fill: "#C2D2E9", stacked: true },
    ],
});
chart.data.parse(dataset);
~~~

@descr:

The `total` property belongs to the root configuration of the chart rather than to a series, since the total value is the aggregation of all the series for each bar. The property works with the `"bar"` and `"xbar"` chart types and only takes effect when the [`stacked`](chart/api/chart_series_config.md) property is enabled in at least one of the series.

### Custom format of the total value

To change the way the total value looks, set the `total` property as a *callback function*. The chart calls the function with the sum of the current bar as a parameter and displays the returned *string* or *number* at the end of the bar:

~~~jsx
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    total: (total) => `${total}$`,
    scales: {
        bottom: { text: "month" },
        left: { max: 170 }
    },
    series: [
        { id: "A", value: "company A", fill: "#394E79", stacked: true },
        { id: "B", value: "company B", fill: "#5E83BA", stacked: true },
        { id: "C", value: "company C", fill: "#C2D2E9", stacked: true },
    ],
});
chart.data.parse(dataset);
~~~

**Related sample**: [Chart. Stacked Bar and X-Bar charts with total values](https://snippet.dhtmlx.com/s0a5ctvq)

**Related article**: [Total values of stacked bars](chart/configuration_properties.md#total-values-of-stacked-bars)

@changelog: added in v9.4
