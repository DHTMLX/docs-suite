---
sidebar_label: Customization
title: JavaScript Chart - Customization 
description: You can explore the customization of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling chart

There is a possibility to make changes in the look and feel of a chart.

![Bar chart styled with custom CSS on a dark background and orange bars in DHTMLX Suite](/img/chart/custom_style.png)

**Related sample**: [Chart. Styling (custom CSS)](https://snippet.dhtmlx.com/p82iew5s)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~html
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [`css`](chart/api/chart_css_config.md) property in the Chart configuration:

~~~jsx
const chart = new dhx.Chart("chart_container", {
    css: "my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-background-primary: #444;
        --dhx-font-color-secondary: #fff;
    }
    .custom .chart.bar {
        fill: orange;
    }
</style>

<script>
    const chart = new dhx.Chart("chart_container", {
        type: "bar",
        css: "custom dhx_widget--bordered",
        scales: {
            "top": {
                size: 100
            },
            "bottom": {
                text: "month", size: 100
            },
            "left": {
                size: 100, maxTicks: 10, max: 100, min: 0
            },
            "right": {
                size: 100
            }
        },
        series: [
            {
                id: "A", value: "company C", color: "#5E83BA",
                pointType: "circle", fill: "#5E83BA", size: 35
            }
        ]
    });
</script>
~~~

## Adding template to scale labels

![Line chart with custom scale labels formatted by a text template in DHTMLX Suite](/img/chart/text_template.png)

**Related sample**: [Chart. Text template for scale labels](https://snippet.dhtmlx.com/nhm3438n)

While configuring chart scales you can add a template for the labels of the scales by using the `textTemplate` configuration option of [scales](chart/configuration_properties.md#scales):

~~~jsx {7-9}
const chart = new dhx.Chart("chart_container", {
    type: "line",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom": {
            text: "month",
            textTemplate: function(month) {
                return "m:" + month;
            }
        },
        "left": {
            maxTicks: 10, max: 100, min: 0
        }
    },
    series: [
        {
            id: "A", value: "company C", color: "#5E83BA", strokeWidth: 2
        }
    ]
});
~~~

## Adding color gradient for bars

![Bar chart with color gradient fill applied to the bars in DHTMLX Suite](/img/chart/bar_gradient.png)

**Related sample**: [Chart. Bar chart. Gradient](https://snippet.dhtmlx.com/j3duyn2q)

It is possible to define a color gradient for bars with the help of the `gradient` option of [series](chart/configuration_properties.md#series). You need to set its value as a function that takes the color of the series filling in Hex format as a parameter:

~~~jsx {16-31}
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom": {
            text: "month",
        },
        "left": {
            max: 90
        }
    },
    series: [
        {
            id: "A", value: "company A", color: "none", size: 35,
            fill: "#5E83BA",
            gradient: function(color) {
                return {
                    stops: [
                        {
                            offset: 0.5, 
                            color: color, 
                            opacity: 1 
                        }, 
                        { 
                            offset: 1, 
                            color: "#394E79", 
                            opacity: 1 
                        } 
                    ] 
                } 
            } 
        }
    ]
});
~~~

## Setting bar colors dynamically

![Bar chart with bars colored by value thresholds in green, yellow and red in DHTMLX Suite](/img/chart/bar_color_by_value.png)

By default, all bars of a series have the same color. To color each bar by its data, set the `fill` option of [series](chart/configuration_properties.md#series) as a function. The function takes a data item and returns the fill color of the bar that displays it:

~~~jsx {19-24}
const plan = 500;
const minimum = 250;

const chart = new dhx.Chart("chart_container", {
    type: "bar",
    scales: {
        "bottom": {
            text: "month"
        },
        "left": {
            max: 700
        }
    },
    series: [
        {
            id: "sales",
            label: "Monthly sales",
            value: "company A",
            fill: function(item) {
                if (item["company A"] >= plan) {
                    return "#5FDAA0";
                }
                return item["company A"] >= minimum ? "#FFD54F" : "#F44336";
            },
            color: "#394E79",
            showText: true
        }
    ],
    legend: {
        series: ["sales"],
        halign: "right",
        valign: "top"
    }
});
~~~

**Related sample**: [Chart. Color by value](https://snippet.dhtmlx.com/q7rufn33)

You can also set the `color` option as a function that takes a data item and returns a color. If you set only `color` (and don't set `fill`), its value colors the bars as well. If you set both options, the bars take the color that `fill` returns.

**Related sample**: [Chart. Highlight the best month](https://snippet.dhtmlx.com/jlbn196p)

Details on how the chart applies the colors:

- The chart calls the `fill` or `color` function for each bar. When the data changes, the chart calls the function again and repaints the bars.
- The legend marker takes the color that the function returns for the first data item, so it doesn't reflect the other bar colors.
- In a [stacked chart](chart/api/chart_series_config.md#options-specific-for-bar-charts), each series applies its own `fill` and `color`, so one series can use a function while another uses a fixed color.
- The chart calls the [`gradient`](#adding-color-gradient-for-bars) function once for each distinct color that `fill` returns, so bars that share a color also share a gradient (see the [Chart. Gradient by value](https://snippet.dhtmlx.com/nwwi5dh1) sample).

:::note
Only Bar and X-Bar charts accept a function in `fill` and `color`. Line, Spline, Area, SplineArea, Radar and Scatter charts draw a series as a single shape and throw a `TypeError` if you set `fill` or `color` as a function.
:::

## Adding template to tooltips

![Scatter chart with a custom tooltip template showing x and y values in DHTMLX Suite](/img/chart/show_tooltip.png)

**Related sample**: [Chart. Tooltip template](https://snippet.dhtmlx.com/mbz7dkku)

You can easily define a template for showing values of data items in tooltip via the `tooltipTemplate` option of [series](chart/configuration_properties.md#series):

~~~jsx {1-3,18,23}
function tooltipTemplate(p) {
  return "x: " + p[1] + ", y: " + p[0];
};

const chart = new dhx.Chart("chart_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        bottom: {
            locator: "value B", title: "value B", max: 70
        },
        left: {
            title: "value A", max: 70
        }
    },
    series: [{
        id: "A", type: "scatter", value: "value A", valueY: "value B",
        pointType: "circle", color: "#EEB98E",
        tooltipTemplate: tooltipTemplate
    },
    {
        id: "B", type: "scatter", value: "value B", valueY: "value A",
        pointType: "rect", color: "#5E83BA",
        tooltipTemplate: tooltipTemplate
    }],
    legend: {
        series: ["A", "B"],
        usePointType: true,
    }
});
~~~

## Adding template to text values of data items in bars

![Bar chart with formatted dollar value labels shown on each bar in DHTMLX Suite](/img/chart/show_text.png)

**Related sample**: [Chart. Show text](https://snippet.dhtmlx.com/o7ke2f1s)

The `showTextTemplate` option of [series](chart/configuration_properties.md#series) allows you to add a template to values that are shown for data items in bars:

~~~jsx {20-22,29-31}
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        bottom: {
            text: "month"
        },
        left: {
            max: 1000, maxTicks: 10, min: 0,
            textTemplate: function (cost) {
                return cost !== 0 ? "$" + cost + ".00" : cost + ".00"
            }
        }
    },
    series: [
        {
            id: "A", value: "company A", color: "#81C4E8", fill: "#81C4E8",
            showText: true,
            showTextRotate: -90,
            showTextTemplate: function (sum) {
                return "$ " + sum + ".00";
            },
            barWidth: 22, tooltip: false
        },
        {
            id: "B", value: "company B", color: "#74A2E7", fill: "#74A2E7",
            showText: true,
            showTextRotate: "-90",
            showTextTemplate: function (sum) {
                return "$ " + sum + ".00";
            },
            barWidth: 22, tooltip: false
        }
    ],
    legend: {
        series: ["A", "B"],
        halign: "right",
        valign: "middle"
    }
});
~~~

## Adding template to values of data items in Pie and Donut charts

![Pie chart with percentage value labels on each slice in DHTMLX Suite](/img/chart/show_percent_values.png)

**Related sample**: [Chart. Value template](https://snippet.dhtmlx.com/77aei7os)

When you need to show values for data items on the Pie, Pie3D and Donut charts, you can use the `valueTemplate` option of [series](chart/configuration_properties.md#pie-pie-3d-and-donut-chart) to specify the necessary template function. For example:

~~~jsx {6-8}
const chart = new dhx.Chart("chart_container", {
    type: "pie",
    series: [
        {
            value: "value",
            valueTemplate: value => {
                return (value * 100).toFixed(2) + "%";
            }
        }
    ]
});
~~~