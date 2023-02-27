---
sidebar_label: setConfig()
title: JavaScript Chart - setConfig Method 
description: You can explore the setconfig method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setConfig()

@short: sets configuration of a chart

@signature: {'setConfig(config: IChartConfig): void;'}

@params:
- `config: object` - an object with chart configurations

@example:
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

@descr:

**Related sample**: [Chart. Change configuration on the fly](https://snippet.dhtmlx.com/7umj531n)

See the list of chart configuration properties in the [Configuration](chart/configuration_properties.md) article.

[comment]: # (@related: chart/configuration_properties.md chart/usage.md#setting-chart-configuration)
