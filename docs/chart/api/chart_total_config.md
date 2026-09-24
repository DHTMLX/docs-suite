---
sidebar_label: total
title: JavaScript Chart - total Config
description: The total config of DHTMLX Chart shows the sum of the series values in the center of a Donut chart, either in the default format or in the format that a callback function returns. See the usage and code examples in the DHTMLX Suite docs.
---

# total

@short: Optional. Displays the aggregated value of a series in the center of a Donut chart

### Usage

~~~jsx
total?: boolean | ((total: number) => string | number);
~~~

### Parameters

The `total` property can take one of the following values:

- `false` - the center of the chart stays empty
- `true` - the chart calculates the sum of the series values automatically and displays it in the center of the chart in the default format
- a callback function `((total: number) => string | number)` - the chart calculates the sum of the series values and calls the function with the following parameter:
    - `total` - (*number*) the sum of all the values that the component calculates

    and returns a *string* or a *number* that the chart displays in its center

### Default config

~~~jsx
total: false
~~~

### Example

~~~jsx
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

To change the way the total value looks, set the `total` property as a *callback function*. The chart calls the function with the calculated sum as a parameter and displays the returned *string* or *number* in its center:

~~~jsx
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

**Related sample**: [Chart. Donut chart with total value](https://snippet.dhtmlx.com/cufn64vo)

**Related article**: [Total value of Donut chart](chart/configuration_properties.md#total-value-of-donut-chart)

@changelog: added in v9.4
