---
sidebar_label: Work with Chart
title: JavaScript Chart - Work with Chart 
description: You can explore how to work with Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Chart

## Setting Chart configuration

You can change configuration of Chart on the fly with the help of the [](chart/api/chart_setconfig_method.md) method. It takes as a parameter an object with updated [chart configuration](chart/configuration_properties.md).

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

The Chart API gives you the possibility to get an object with the configuration of a certain series. Use the [](chart/api/chart_getseries_method.md) method for this purpose. It takes the id of a series as a parameter:

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

It is possible to iterate over chart series using the [](chart/api/chart_eachseries_method.md). As a parameter it takes a handler function that will perform iteration. 
Pass an array with series objects as a parameter of the handler function:

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

The API of [Data Collection](data_collection.md) allows you to perform operations with Chart data items. 
For example, you can add more items (points) into your Chart using the [](data_collection/api/datacollection_add_method.md) method, like this:

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

The method takes as a parameter an object with two properties:

<table>
    <tbody>
        <tr>
            <td><b>value</b></td>
            <td>the value of an item</td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>the text of an item on the X-axis</td>
        </tr>
    </tbody>
</table>

A new data item is added relative to the X-axis. In case of adding many items, you need to increase the value of each new data item position to add it correctly.

**Related sample**: [Chart. Adding data on the fly](https://snippet.dhtmlx.com/dpz4w5nr)

## Exporting data

You can export data of Chart into the PDF or PNG format via the corresponding methods of the `Export` module.

### Exporting data to PDF

The [`pdf()`](chart/api/export/chart_pdf_method.md) method of the Export module allows you to export Chart data into a PDF file. The method takes an [object with the export settings](chart/api/export/chart_pdf_method.md) as a parameter (all settings are optional) and returns a promise of data export.

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

The [`png()`](chart/api/export/chart_png_method.md) method of the Export module allows you to export data from Chart into a PNG file. The method takes an [object with export settings](chart/api/export/chart_png_method.md) as a parameter (all settings are optional) and returns a promise of data export.

~~~jsx
chart.export.png({
    theme: "dark" // the exported theme, "light" by default
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**Related sample**: [Chart. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)