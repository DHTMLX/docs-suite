---
sidebar_label: scales
title: JavaScript Chart - scales Config 
description: You can explore the scales config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# scales

@short: Required. Defines configuration of scales for Line, Spline, Bar, X-Bar, Area, SplineArea, Radar, and Scatter charts

@signature: {'scales: {[key: string]: object};'}

@example:
const chart = new dhx.Chart("chart_container", {
    type:"area",
    scales: {
        "bottom" : {
            text: 'month'
        },
        "left" : {
            padding: 10,
            max: 90
        }
    },
    series: [
        {
           value: 'company A',
           strokeWidth: 2
           // more options   
        }
    ]
});

@descr:

:::info
The `scales` object can contain a set of `key:value` pairs where *key* is the type of a scale and *value* is an object with configuration options of the scale.

There are the following *types* of the scales: `"left"`,`"right"`,`"top"`,`"bottom"`,`"radial"`.

Two scales of the same direction can be used together, each with its own dimension. Check the [Dual axis chart](chart/configuration_properties.md#dual-axis-chart) section for the details.
:::

## The list of config options for scales

:::tip
You can apply the options below to configure scales for charts with the following types: 
["line", "spline"](chart/charts_overview.md#line-and-spline-chart), ["bar", "xbar"](chart/charts_overview.md#bar-and-x-bar-chart), ["area", "splineArea"](chart/charts_overview.md#area-and-splinearea-chart), ["scatter"](chart/charts_overview.md#scatter-chart).
:::

### Usage

~~~js
scales: {
    // type - "left" | "right" | "top" | "bottom"
    type: {
        title?: string,
        text?: string,
        textTemplate?: <T>(value: T) => string,
        textPadding?: number,
        showText?: boolean,
        scaleRotate?: number,
        scalePadding?: number,
        hidden?: boolean,
        grid?: boolean,
        alignTicks?: boolean | ScaleType,
        dashed?: boolean,
        targetLine?: number | string,
        targetValue?: number,
        max?: number,
        min?: number,
        log?: boolean,
        padding?: number,
        maxTicks?: number,
        size?: number,
        locator?: string,
    }
}
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>title</b></td>
            <td>(optional) sets a title for a scale <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/5ir00fer" target="_blank">Chart. Scale title</a></td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>(optional) sets a template for labels of data items rendered on a scale</td>
        </tr>
        <tr>
            <td><b>textTemplate</b></td>
            <td>(optional) sets a template for scale labels <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/nhm3438n" target="_blank">Chart. Text template for scale labels</a></td>
        </tr>
        <tr>
            <td><b>textPadding</b></td>
            <td>(optional) distance between labels of data items and the scale</td>
        </tr>
        <tr>
            <td><b>showText</b></td>
            <td>(optional) shows/hides labels of data items on the scale</td>
        </tr>
        <tr>
            <td><b>scaleRotate</b></td>
            <td>(optional) the degree of rotation of labels of data items on the scale <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/iw00fgl5" target="_blank">Chart. Scale rotate</a></td>
        </tr>
        <tr>
            <td><b>scalePadding</b></td>
            <td>(optional) distance between the scale and its title</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) hides/shows the whole scale</td>
        </tr>
        <tr>
            <td><b>grid</b></td>
            <td>(optional) shows/hides the grid lines of a scale. Check the <a href="#grid">grid</a> section</td>
        </tr>
        <tr>
            <td><b>alignTicks</b></td>
            <td>(optional) aligns the ticks of the scale with the ticks of another scale of the same direction. Check the <a href="#alignticks">alignTicks</a> section</td>
        </tr>
        <tr>
            <td><b>dashed</b></td>
            <td>(optional) sets the dashed type for a scale. Use the <i>dashed:true</i> option in the configuration of the scale <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/gnj1xc3r" target="_blank">Chart. Dashed grid</a></td>
        </tr>
        <tr>
            <td><b>targetLine</b></td>
            <td>(optional) shows a threshold line (a target value); looks for the specified value in the data <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/28y4x1zd" target="_blank">Chart. Target value and target line</a></td>
        </tr>
        <tr>
            <td><b>targetValue</b></td>
            <td>(optional) allows setting a threshold line at any defined level (any number, not necessarily from the data) <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/28y4x1zd" target="_blank">Chart. Target value and target line</a></td>
        </tr>
        <tr>
            <td><b>max</b></td>
            <td>(optional) the maximal value of the Y scale</td>
        </tr>
        <tr>
            <td><b>min</b></td>
            <td>(optional) the minimal value of the Y scale</td>
        </tr>
        <tr>
            <td><b>log</b></td>
            <td>(optional) sets the Y scale as logarithmic</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) the padding between the values of the Y scale (area)</td>
        </tr>
        <tr>
            <td><b>maxTicks</b></td>
            <td>(optional) sets the maximal number of ticks on the Y scale</td>
        </tr>
        <tr>
            <td><b>size</b></td>
            <td>(optional) sets the padding between the scale and the chart container</td>
        </tr>
        <tr>
            <td><b>locator</b></td>
            <td>(optional) points to the data property, the values of which should be rendered in the chart (used for Scatter chart only)</td>
        </tr>
    </tbody>
</table>
<br><br>

## Options for a dual axis chart

The `grid` and `alignTicks` properties define how the grid is rendered when a chart has two scales of one direction, and `grid` shows and hides the grid lines of any chart. Check the [Dual axis chart](chart/configuration_properties.md#dual-axis-chart) section of the guide for the details.

### grid

~~~jsx
grid?: boolean
~~~

The `grid` property shows and hides the grid lines of a scale, `true` by default for both scales. To hide the grid completely, set `grid: false` in the configuration of each scale.

If a chart has two scales of the same direction, the grid of this direction belongs to the first of them ("bottom" for the horizontal direction and "left" for the vertical one), and the second scale is rendered without the grid. Set `grid: true` for the second scale to render both grids, or `grid: false` for the first one to leave the grid to the second scale.

**Related sample**: [Chart. Without grid (lines)](https://snippet.dhtmlx.com/leqdx9qr)

**Related article**: [Grid of the second scale](chart/configuration_properties.md#grid-of-the-second-scale)

### alignTicks

~~~jsx
alignTicks?: boolean | ScaleType
~~~

The `alignTicks` property makes the scale take the number of ticks from another scale of the same direction and spread its own range over them, so that both grids match:

- not set or `false`: the scale chooses the number of its ticks on its own
- `true`: the number of ticks is taken from the main scale of the same direction ("left" for the vertical direction and "bottom" for the horizontal one), so the grid lines of both scales coincide
- the position of a scale: the number of ticks is taken from the specified scale

~~~jsx
scales: {
    bottom: { text: "month" },
    left:   { title: "Volume, t" },
    right:  { title: "Ratio, %", alignTicks: true }
}
~~~

**Related article**: [Matching the ticks of the two scales](chart/configuration_properties.md#matching-the-ticks-of-the-two-scales)

## The list of config options for radial scales

:::tip
The **radial** scale is used for [Radar chart (type: "radar")](chart/charts_overview.md#radar-chart) and has its own properties, due to peculiarities of configuration.
:::

### Usage

~~~js
scales: {
    radial: {
        value?: string,
        zebra?: boolean,
        showAxis?: boolean
    }
}
~~~

### Description

<table>
    <tbody>
       <tr>
            <td><b>radial</b></td>
            <td>(required) the radial object contains the following properties:<ul><li><b>value</b> - (optional) the name of a <a href="../../data_loading/#preparing-data-set">data set</a> property to take data values from (map to)</li><li><b>zebra</b> - (optional) sets a striped scale coloring for the Radar chart (alternation of two colors in a step)</li><li><b>showAxis</b> - (optional) renders values of the scale</li></ul></td>
        </tr>
    </tbody>
</table>

**Related sample**: [Chart. Radar chart. Axis configuration](https://snippet.dhtmlx.com/yksfvhhl)

**Related article:** [Configuration](chart/configuration_properties.md)
