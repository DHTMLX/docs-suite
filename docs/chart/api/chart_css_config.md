---
sidebar_label: css
title: JavaScript Chart - css Config 
description: You can explore the css config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to Chart

@signature: {'css?: string;'}

@descr:
#### Example

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

**Related sample**: [Chart. Styling (custom CSS)](https://snippet.dhtmlx.com/p82iew5s)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Chart:

~~~js
const chart = new dhx.Chart("chart_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
