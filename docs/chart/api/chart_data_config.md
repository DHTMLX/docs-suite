---
sidebar_label: data
title: JavaScript Chart - data Config 
description: You can explore the data config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# data

@short: Optional. Specifies an array of data objects to set into the chart

@signature: {'data?: object[];'}

@example:
const treeMapData = [
    { id: "2020", month: "2020" },
    { id: "Jan", value: 144.33, month: "Jan", parent: "2020" },
    { id: "Feb", value: 22.12, month: "Feb", parent: "2020" },
    { id: "Mar", value: 53.21, month: "Mar", parent: "2020" },
    { id: "Apr", value: 34.25, month: "Apr", parent: "2020" },
    { id: "May", value: 64.65, month: "May", parent: "2020" },

    // more data
];

const chart = new dhx.Chart("chart_container", {
    type: "treeMap",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    series: [
        {
            value: "value",
            text: "month",
            stroke: "#eeeeee",
            strokeWidth: 6, 
            tooltipTemplate: item => `${item[1]} - ${item[0]}`,
        }
    ],
    legend: {
        treeSeries: [
            { greater: 80 },
            { from: 50, to: 80 },
            { from: 25, to: 50 },
            { less: 25, color: "#CAC2D1"},
        ],
        halign: "right",
        valign: "bottom",
    },
    data: treeMapData
});


@descr:
