---
sidebar_label: setConfig
title: setConfig
---          

@short: sets configuration of a chart

@signature: {'setConfig(config: IChartConfig): void;'}

```todoapi
void setConfig(object config);
setConfig(config: IChartConfig): void;
    export interface IChartConfig {
    type?: ChartType;
    css?: string;
    barWidth?: number;
    scales?: IScalesConfig;
    legend?: ILegendConfig;
    series?: SeriaConfig[];
    maxPoints?: number;
    data?: DataCollection<any> | any[];
}
```

@params:
- config	object	 an object with chart configuration



@example:
var config = {
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

**Related sample**:
- [Chart. Change Configuration On The Fly](https://snippet.dhtmlx.com/7umj531n)

@related:
chart/configuration_properties.md
chart/usage.md#setting-chart-configuration


