---
sidebar_label: Overview of Chart types 
title: JavaScript Chart - Overview of Chart Types 
description: You can have an overview of various Chart types in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Overview of Chart types

DHTMLX Chart provides a variety of charts types that will help you to represent you data in the most suitable way. Each type of chart is easily configurable and can be adjusted according to your preferences.
All in all there are 11 types of chart, in the list below they are combined into groups for the sake of convenience:

- Overview of Chart types
  - [Line and Spline chart](#line-and-spline-chart)
    - [Line chart](#line-chart)
    - [Spline chart](#spline-chart)
  - [Bar and X-Bar chart](#bar-and-x-bar-chart)
    - [Bar chart](#bar-chart)
    - [X-Bar chart](#x-bar-chart)
  - [Area and SplineArea chart](#area-and-splinearea-chart)
    - [Area chart](#area-chart)
    - [SplineArea chart](#splinearea-chart)
  - [Pie, Pie 3D and Donut chart](#pie-pie-3d-and-donut-chart)
    - [Pie and Pie 3D chart](#pie-and-pie-3d-chart)
    - [Donut chart](#donut-chart)
  - [Radar chart](#radar-chart)
  - [Scatter chart](#scatter-chart)
  - [Treemap chart](#treemap-chart)
  - [Calendar heatmap chart](#calendar-heatmap-chart)

## Line and Spline chart

This is a basic chart type that shows changes of trends in progress over a period of time. Thus it will help you to display the dynamics of prices over a year or
how the number of staff has increased over several years. Choose this variant when your data has **more than 10 items**. 

### Line chart

![Line chart comparing four company data series over time in DHTMLX Suite](/img/chart/line_overview.png)

**Related sample**: [Chart. Line chart initialization](https://snippet.dhtmlx.com/t881qcim)

**Related article:** [Line and Spline chart configuration](chart/configuration_properties.md#line-and-spline-chart)

### Spline chart

![Spline chart with smooth curved lines for three company series in DHTMLX Suite](/img/chart/spline_overview.png)

**Related sample**: [Chart. Spline chart initialization](https://snippet.dhtmlx.com/2wvmdm0y)

**Related article:** [Line and Spline chart configuration](chart/configuration_properties.md#line-and-spline-chart)

## Bar and X-Bar chart

The same as Line chart it displays data for certain periods. It greatly suits you if there are **less than 10 items** in your data set.

### Bar chart

![Vertical bar chart comparing three company series across periods in DHTMLX Suite](/img/chart/bar_overview.png)

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

**Related article:** [Bar and X-Bar chart configuration](chart/configuration_properties.md#bar-and-x-bar-chart)

### X-Bar chart

![Horizontal X-Bar chart comparing two sales series by year in DHTMLX Suite](/img/chart/xbar_overview.png)

**Related sample**: [Chart. X-Bar chart initialization](https://snippet.dhtmlx.com/qz80yw84)

**Related article:** [Bar and X-Bar chart configuration](chart/configuration_properties.md#bar-and-x-bar-chart)

## Area and SplineArea chart

Area chart is based on the Line chart. The difference is that areas below lines are filled with color. This type of chart allows you to provide visual comparison of two or more values over time.

### Area chart

![Area chart with color-filled regions for three company series in DHTMLX Suite](/img/chart/area_overview.png)

**Related sample**: [Chart. Area chart initialization](https://snippet.dhtmlx.com/nv6t6lvm)

**Related article:** [Area and SplineArea chart configuration](chart/configuration_properties.md#area-and-splinearea-chart)

### SplineArea chart

![SplineArea chart with smooth curved filled regions for three series in DHTMLX Suite](/img/chart/splinearea_overview.png)

**Related sample**: [Chart. Spline Area chart initialization](https://snippet.dhtmlx.com/bo82km4n)

**Related article:** [Area and SplineArea chart configuration](chart/configuration_properties.md#area-and-splinearea-chart)

## Pie, Pie 3D and Donut chart

Pie chart and its variations are the best choice when you deal with proportions and percentages. It is a circular chart divided into proportional parts that illustrate relations between items in a data set.

### Pie and Pie 3D chart

![Flat pie chart and 3D pie chart showing monthly category shares in DHTMLX Suite](/img/chart/pie_overview.png)

**Related sample**: [Chart. Pie chart initialization](https://snippet.dhtmlx.com/jfbet749)

**Related sample**: [Chart. Pie 3D chart initialization](https://snippet.dhtmlx.com/xfce9pys)

**Related article:** [Pie, Pie 3D and Donut chart configuration](chart/configuration_properties.md#pie-pie-3d-and-donut-chart)

### Donut chart

![Donut chart showing monthly category shares as a ring in DHTMLX Suite](/img/chart/donut_overview.png)

**Related sample**: [Chart. Donut chart initialization](https://snippet.dhtmlx.com/lobb80ig)

**Related article:** [Pie, Pie 3D and Donut chart configuration](chart/configuration_properties.md#pie-pie-3d-and-donut-chart)

## Radar chart

This one is a two-dimensional chart that allows placing one or several series of values over multiple numerical variables. For example, Radar chart will help you to study how a number of parameters 
relate to one item (the center point of a chart) and compare their values.

![Radar chart plotting two data series across multiple axes in DHTMLX Suite](/img/chart/radar_overview.png)

**Related sample**: [Chart. Radar chart initialization](https://snippet.dhtmlx.com/6otf4h0t)

**Related article:** [Radar chart configuration](chart/configuration_properties.md#radar-chart)

## Scatter chart

The peculiarity of Scatter Chart is that it allows exploring relations between two sets of data in order to find out possible dependencies or patterns.

![Scatter chart plotting two value series as points on XY axes in DHTMLX Suite](/img/chart/scatter_overview.png)

**Related sample**: [Chart. Scatter chart initialization](https://snippet.dhtmlx.com/pkczfmpu)

**Related article:** [Scatter chart configuration](chart/configuration_properties.md#scatter-chart)

## Treemap chart

A treemap chart presents a hierarchical visualization of data as a set of rectangular tiles and makes it easy to spot patterns. Several tiles can be collected into a group. The sizes of tiles are proportional to the values of the data items they represent.

![Treemap chart sizing planets by value with a color legend in DHTMLX Suite](/img/chart/treemap.png)

**Related sample**: [Chart. Treemap chart initialization](https://snippet.dhtmlx.com/p31wzm0b)

**Related sample**: [Chart. Treemap chart with groups initialization](https://snippet.dhtmlx.com/fmgnlue4)

**Related article:** [Treemap chart configuration](chart/configuration_properties.md#treemap-chart)

## Calendar heatmap chart 

:::tip PRO VERSION ONLY
The calendar heatmap chart is available only in the PRO version of the DHTMLX Chart (or DHTMLX Suite).
:::

The calendar heatmap chart is a two dimensional calendar view that uses graduated colors to visualize certain number of events for specific days during a year or other specified period of time. The whole time period in the chart is divided into years and years into months. Each cell in a column corresponds to a day of the week.

The chart helps to display and identify daily patterns or anomalies over the necessary period.

![Calendar heatmap chart showing daily profit values by color over a year in DHTMLX Suite](/img/chart/heatmap_overview.png)

**Related samples:**

- [Chart. Calendar heatmap chart initialization](https://snippet.dhtmlx.com/ptncsadz)
- [Gantt. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/jodcbkr5)
- [Event Calendar. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/0n3ta0je)
- [Scheduler. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/tlfazogt)


**Related article:** [Calendar heatmap chart configuration](chart/configuration_properties.md#calendar-heatmap-chart)

