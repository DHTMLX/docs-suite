---
sidebar_label: total
title: JavaScript Chart - total Config
description: The total config of DHTMLX Chart shows the sum of the values at the end of each stacked bar of a Bar or X-Bar chart or in the center of a Donut chart, in the default format or in the format that a callback returns. See the DHTMLX Suite docs.
---

# total

@short: Optional. Displays the sum of the values of all the stacked series for each bar of a Bar or X-Bar chart, or the aggregated value of a series in the center of a Donut chart

### Usage

~~~jsx
total?: boolean | ((total: number) => string | number);
~~~

### Parameters

The `total` property belongs to the root configuration of the chart rather than to a series and works with the `"bar"`, `"xbar"` and `"donut"` chart types. It can take one of the following values:

- `false` - the chart doesn't render the total values
- `true` - the chart calculates the sum automatically and displays it in the default format:
    - in a Bar or X-Bar chart, the sum of the values of all the series for each bar is displayed at the end of the bar (above the bar in a Bar chart and to the right of the bar in an X-Bar chart)
    - in a Donut chart, the sum of the series values is displayed in the center of the chart
- a callback function `((total: number) => string | number)` - the chart calculates the sum and calls the function with the following parameter:
    - `total` - (*number*) the sum calculated by the component:
        - in a Bar or X-Bar chart, the sum of the values of all the series of the current bar
        - in a Donut chart, the sum of all the series values

      and returns a *string* or a *number* that the chart displays at the end of the bar or in the center of the Donut chart

:::note
For Bar and X-Bar charts, the property takes effect only when the [`stacked`](chart/api/chart_series_config.md) property is enabled in at least one of the series.
:::

### Default config

~~~jsx
total: false
~~~

### Example

~~~jsx title="Stacked Bar chart with total values" {3,9-11}
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

~~~jsx title="Donut chart with total value" {3}
const chart = new dhx.Chart("chart_container", {
    type: "donut",
    total: true,
    series: [
        {
            value: "value",
            color: "color",
            text: "month",
        }
    ],
});
chart.data.parse(dataset);
~~~

@descr:

### Custom format of the total value

To change the way the total value looks, set the `total` property as a *callback function*. The chart calls the function with the calculated sum as a parameter and displays the returned *string* or *number* at the end of the bar in a Bar or X-Bar chart:

~~~jsx {3,9-11}
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

or in the center of a Donut chart:

~~~jsx {3}
const chart = new dhx.Chart("chart_container", {
    type: "donut",
    total: (total) => `${total}$`,
    series: [
        {
            value: "value",
            color: "color",
            text: "month",
        }
    ],
});
chart.data.parse(dataset);
~~~

**Related samples**:
- [Chart. Stacked Bar and X-Bar charts with total values](https://snippet.dhtmlx.com/s0a5ctvq)
- [Chart. Donut chart with total value](https://snippet.dhtmlx.com/cufn64vo)

**Related articles**:
- [Total values of stacked bars](chart/configuration_properties.md#total-values-of-stacked-bars)
- [Total value of Donut chart](chart/configuration_properties.md#total-value-of-donut-chart)

@changelog: added in v9.4
