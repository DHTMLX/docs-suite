---
sidebar_label: Overview of Chart types 
title: JavaScript Chart - Overview of Chart Types 
description: You can have an overview of various Chart types in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Overview of Chart types

DHTMLX Chart includes 13 chart types, so you can display your data in the best way. Every type is fully configurable.

The list below groups the types by kind:

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

A basic chart type that shows how trends change over time. Use it to display price dynamics over a year or staff growth over several years. Choose this type when your data has **more than 10 items**.

### Line chart

![Line chart comparing four company data series over time in DHTMLX Suite](/img/chart/line_overview.png)

**Related sample**: [Chart. Line chart initialization](https://snippet.dhtmlx.com/t881qcim)

**Related article:** [Line and Spline chart configuration](chart/configuration_properties.md#line-and-spline-chart)

### Spline chart

![Spline chart with smooth curved lines for three company series in DHTMLX Suite](/img/chart/spline_overview.png)

**Related sample**: [Chart. Spline chart initialization](https://snippet.dhtmlx.com/2wvmdm0y)

**Related article:** [Line and Spline chart configuration](chart/configuration_properties.md#line-and-spline-chart)

## Bar and X-Bar chart

Like the Line chart, the Bar chart displays data for a set of periods. It works best when your data set has **fewer than 10 items**.

### Bar chart

![Vertical bar chart comparing three company series across periods in DHTMLX Suite](/img/chart/bar_overview.png)

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

**Related article:** [Bar and X-Bar chart configuration](chart/configuration_properties.md#bar-and-x-bar-chart)

### X-Bar chart

![Horizontal X-Bar chart comparing two sales series by year in DHTMLX Suite](/img/chart/xbar_overview.png)

**Related sample**: [Chart. X-Bar chart initialization](https://snippet.dhtmlx.com/qz80yw84)

**Related article:** [Bar and X-Bar chart configuration](chart/configuration_properties.md#bar-and-x-bar-chart)

## Area and SplineArea chart

The Area chart builds on the Line chart, but fills the areas below the lines with color. Use it to compare two or more values over time.

### Area chart

![Area chart with color-filled regions for three company series in DHTMLX Suite](/img/chart/area_overview.png)

**Related sample**: [Chart. Area chart initialization](https://snippet.dhtmlx.com/nv6t6lvm)

**Related article:** [Area and SplineArea chart configuration](chart/configuration_properties.md#area-and-splinearea-chart)

### SplineArea chart

![SplineArea chart with smooth curved filled regions for three series in DHTMLX Suite](/img/chart/splinearea_overview.png)

**Related sample**: [Chart. Spline Area chart initialization](https://snippet.dhtmlx.com/bo82km4n)

**Related article:** [Area and SplineArea chart configuration](chart/configuration_properties.md#area-and-splinearea-chart)

## Pie, Pie 3D and Donut chart

The Pie chart and its variations are the best choice for proportions and percentages. Each chart splits a circle into parts that show how items in a data set relate to each other.

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

A two-dimensional chart that places one or more series of values over multiple numerical variables. Use the Radar chart to study how several parameters relate to one item (the center point of the chart) and to compare parameter values.

![Radar chart plotting two data series across multiple axes in DHTMLX Suite](/img/chart/radar_overview.png)

**Related sample**: [Chart. Radar chart initialization](https://snippet.dhtmlx.com/6otf4h0t)

**Related article:** [Radar chart configuration](chart/configuration_properties.md#radar-chart)

## Scatter chart

The Scatter chart explores relations between two sets of data to reveal dependencies or patterns.

![Scatter chart plotting two value series as points on XY axes in DHTMLX Suite](/img/chart/scatter_overview.png)

**Related sample**: [Chart. Scatter chart initialization](https://snippet.dhtmlx.com/pkczfmpu)

**Related article:** [Scatter chart configuration](chart/configuration_properties.md#scatter-chart)

## Treemap chart

The Treemap chart displays hierarchical data as a set of rectangular tiles, which makes patterns easy to spot. You can collect several tiles into a group. The size of each tile is proportional to the value of its data item.

![Treemap chart sizing planets by value with a color legend in DHTMLX Suite](/img/chart/treemap.png)

**Related sample**: [Chart. Treemap chart initialization](https://snippet.dhtmlx.com/p31wzm0b)

**Related sample**: [Chart. Treemap chart with groups initialization](https://snippet.dhtmlx.com/fmgnlue4)

**Related article:** [Treemap chart configuration](chart/configuration_properties.md#treemap-chart)

## Calendar heatmap chart

:::tip PRO VERSION ONLY
The Calendar heatmap chart is available only in the PRO version of DHTMLX Chart (or DHTMLX Suite).
:::

This chart is a two-dimensional calendar view. It uses graduated colors to show how many events fall on each day of a year or another period. The chart divides the period into years, and each year into months. Each cell in a column corresponds to a day of the week.

The chart helps you identify daily patterns and anomalies over the chosen period.

![Calendar heatmap chart showing daily profit values by color over a year in DHTMLX Suite](/img/chart/heatmap_overview.png)

**Related samples:**

- [Chart. Calendar heatmap chart initialization](https://snippet.dhtmlx.com/ptncsadz)
- [Gantt. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/jodcbkr5)
- [Event Calendar. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/0n3ta0je)
- [Scheduler. Integration with Suite Calendar heatmap chart](https://snippet.dhtmlx.com/tlfazogt)

**Related article:** [Calendar heatmap chart configuration](chart/configuration_properties.md#calendar-heatmap-chart)
