---
sidebar_label: Work with Chart
title: JavaScript Chart - Work with Chart 
description: You can explore how to work with Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Chart

## Setting Chart configuration

You can change the Chart configuration on the fly with the [](chart/api/chart_setconfig_method.md) method. It takes an object with the updated [chart configuration](chart/configuration_properties.md) as a parameter.

~~~js
const config = {
    type: "radar",
    scales: {
        radial:{
            value: "month",
            maxTicks: 7
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            fill: "#000000",
            alpha: 0.3,
            color: "#000000"
        },
        {
            id: "B",
            value: "company B",
            fill: "#FFFF33",
            alpha: 0.3,
            color: "#FFFF33"
        }
    ]
}

chart.setConfig(config);
~~~

**Related sample**: [Chart. Change configuration on the fly](https://snippet.dhtmlx.com/7umj531n)

## Getting series configuration

Use the [](chart/api/chart_getseries_method.md) method to get the configuration of a specific series. It takes the series `id` as a parameter:

~~~js
const config = chart.getSeries("A");
/* => 
{
    "strokeWidth": 2, "active": true,
    "tooltip": true, "paddings": 5,
    "color": "none", "fill": "none",
    "pointType": "circle", "id": "A",
    "value": "company A", "pointColor": "blue",
    "type": "radar",
    "scales": [
        "radial"
    ]
}
*/
~~~

**Related sample**: [Chart. Get series](https://snippet.dhtmlx.com/9jtscd9q)

## Iterating over series

Use the [](chart/api/chart_eachseries_method.md) method to iterate over chart series. It takes a handler function that runs for each series.
The handler function receives each series object as its argument:

~~~js
const chart = new dhx.Chart("chart_container", {
    type: "radar",
    scales: {
        radial:{
            value: "month",
            maxTicks: 7
        }
    },
    series: [
        {
            id: "A",
            value: "company A",
            fill: "#000000",
            alpha: 0.3,
            color: "#000000"
        },
        {
            id: "B",
            value: "company B",
            fill: "#FFFF33",
            alpha: 0.3,
            color: "#FFFF33"
        }
    ]
});
 
chart.eachSeries(function(seria){
    seria.config.fill
});
// -> ["#394E79", "#5E83BA", "#C2D2E9"]
~~~

**Related sample**: [Chart. Each series](https://snippet.dhtmlx.com/4kbj4lmw)

## Adding items into Chart

The [Data Collection](/data_collection/) API lets you work with Chart data items.
For example, you can add more items (points) to your Chart with the [](data_collection/api/datacollection_add_method.md) method:

~~~js
const config = {
    type:"line",
    scales: {
        "bottom" : {
            text: "text",
            showText: false
        },
        "left" : {
            maxTicks: 10,
            max: 100,
            min: 0
        }
    },
    series: [
        {
            value: "value",
            color: "#5E83BA",
            strokeWidth: 2
        }
    ]
};

const chart = new dhx.Chart("chart_container", config);
chart.data.parse([
    {
        value: Math.random() * 100,
        text: "u" + Date.now() + 1
    },
    {
        value: Math.random() * 100,
        text: "u" + Date.now() + 2
    },
    {
        value: Math.random() * 100,
        text: "u" + Date.now() + 3
    }
]);
function add() {
    chart.data.add({
        value: Math.random() * 100,
        text: "u" + Date.now()
    });
};
~~~

The method takes an object with two properties as a parameter:

<table>
    <tbody>
        <tr>
            <td><code>value</code></td>
            <td>the value of an item</td>
        </tr>
        <tr>
            <td><code>text</code></td>
            <td>the text of an item on the X-axis</td>
        </tr>
    </tbody>
</table>

Chart places a new data item relative to the X-axis. When you add several items, increase the position value of each one so that they render in order.

**Related sample**: [Chart. Adding data on the fly](https://snippet.dhtmlx.com/dpz4w5nr)

## Exporting data

You can export Chart data to PDF or PNG with the `pdf()` and `png()` methods of the `Export` module.

### Exporting data to PDF

The [`pdf()`](chart/api/export/chart_pdf_method.md) method of the `Export` module exports Chart data to a PDF file. The method takes an [object with export settings](chart/api/export/chart_pdf_method.md) as a parameter (all settings are optional) and returns a promise of data export.

~~~jsx
chart.export.pdf({
    url: "https://export.dhtmlx.com/chart/pdf/9.3.0",
    name: "result.pdf"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**Related sample**: [Chart. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)

### Exporting data to PNG

The [`png()`](chart/api/export/chart_png_method.md) method of the `Export` module exports Chart data to a PNG file. The method takes an [object with export settings](chart/api/export/chart_png_method.md) as a parameter (all settings are optional) and returns a promise of data export.

~~~jsx
chart.export.png({
    theme: "dark" // the exported theme, "light" by default
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**Related sample**: [Chart. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)