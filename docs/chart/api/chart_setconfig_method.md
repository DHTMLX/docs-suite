---
sidebar_label: setConfig
title: setConfig
---          

@short: sets configuration of a chart

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


@template: api_method
@descr:
See the list of chart configuration properties in the article chart/configuration_properties.md.

@related:
chart/usage.md#settingchartconfiguration

@relatedsample:
https://snippet.dhtmlx.com/7umj531n	Chart. Change Configuration On The Fly

@changelog:
