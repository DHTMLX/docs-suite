---
sidebar_label: Customization
title: JavaScript Chart - Customization 
description: You can explore the customization of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling chart

Apply custom CSS classes to change chart appearance.

![Bar chart styled with custom CSS on a dark background and orange bars in DHTMLX Suite](/img/chart/custom_style.png)

**Related sample**: [Chart. Styling (custom CSS)](https://snippet.dhtmlx.com/p82iew5s)

Follow these steps:

- Add one or more CSS classes in the `<style>` section of your HTML page or in a separate stylesheet linked on the page:

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

- Assign the class name (or several names separated by spaces) to the [](chart/api/chart_css_config.md) property:

~~~js
const chart = new dhx.Chart("chart_container", {
    css:"my_first_class my_second_class"
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
            "bottom" : {
                text: "month", size: 100
            },
            "left" : {
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

Set the `textTemplate` option of [scales](chart/configuration_properties.md#scales) to add a template for scale labels:

~~~js {7-9}
const chart = new dhx.Chart("chart_container", {
    type:"line",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom" : {
            text: "month",
            textTemplate: function(month) {
                return "m:" + month;
            }
        },
        "left" : {
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

Use the `gradient` option of [series](chart/configuration_properties.md#series) to define a color gradient for bars. Set it to a function that takes the series fill color as a Hex string:

~~~js {16-31}
const chart = new dhx.Chart("chart_container", {
    type:"bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom" : {
            text: "month",
        },
        "left" : {
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

## Adding template to tooltips

![Scatter chart with a custom tooltip template showing x and y values in DHTMLX Suite](/img/chart/show_tooltip.png)

**Related sample**: [Chart. Tooltip template](https://snippet.dhtmlx.com/mbz7dkku)

Set the `tooltipTemplate` option of [series](chart/configuration_properties.md#series) to define how data item values appear in a tooltip:

~~~js {1-3,18,23}
function tooltipTemplate(p) {
  return "x: " + p[1] + ", y: " + p[0];
};

const chart = new dhx.Chart("chart_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        bottom:{
            locator: "value B", title: "value B", max: 70
        },
        left:{
            title: "value A", max: 70
        }
    },
    series: [{
        id: "A", type: "scatter", value: "value A", valueY:"value B",
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

The `showTextTemplate` option of [series](chart/configuration_properties.md#series) formats the values that appear on bars:

~~~js {20-22,29-31}
const chart = new dhx.Chart("chart_container", {
    type: "bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        bottom : {
            text: "month"
        },
        left : {
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

**Related sample**: [Chart. Value template](https://snippet.dhtmlx.com/o7ke2f1s)

The `valueTemplate` option of [series](chart/configuration_properties.md#pie-pie-3d-and-donut-chart) formats the values displayed on Pie, Pie3D, and Donut charts. For example:

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