---
sidebar_label: Custom scroll
title: JavaScript Guides - Custom Scroll 
description: You can learn about custom scroll in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom scroll

:::info
This functionality requires the PRO version of the DHTMLX Suite package.
:::

From v7.2, DHTMLX includes custom scrollbars with a thin, grey, semi-transparent design that replace the standard browser scrollbars. The custom bars hide automatically: they stay hidden until the user hovers the mouse over the page.

<iframe src="https://snippet.dhtmlx.com/gjsbvzdk?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

The custom scroll is available for the following DHTMLX components: List, DataView, Grid, Grid in the TreeGrid mode, Layout cell, Toolbar, Ribbon, Sidebar, and Window.

Set the `enable` property of the `dhx.scrollViewConfig` global variable to `true` before you initialize the widgets:

~~~js
// enable the custom scroll for all available widgets
dhx.scrollViewConfig.enable = true;

// initialize a widget
const list = new dhx.List("list_container", {
    itemHeight: 30
});
~~~

To enable the custom scroll after initialization, apply the `enable()` method of the `scrollView` object:

~~~js
// initialize the widget
const list = new dhx.List("list_container", {
    template: listTemplate,
    itemHeight: 52,
    height: "100%",
    dragMode: "both",
});
list.data.load(data);

// enable custom scroll
list.scrollView.enable();
~~~

For more details, read the [custom scroll configuration](helpers/custom_scroll.md) article.

## Custom scroll in Optimus demos

All DHTMLX demos built with Optimus have the custom scroll enabled.

![Hospital management demo grid with thin custom scrollbars enabled in DHTMLX Suite](/img/integration/custom_scroll_optimus.png)

**View the live demos to check the feature:**

| Demo                                                                                    | Related article                                                             |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [File Explorer](https://dhtmlx.com/docs/products/demoApps/dhtmlxFileExplorerDemo/)      | [File Explorer guide](optimus_guides/filemanager_demo.md)       |
| [UI Dashboard](https://dhtmlx.com/docs/products/demoApps/dhtmlxFileExplorerDemo/)       | [UI Dashboard guide](optimus_guides/dashboard_demo.md)          |
| [Hotel Management Template](https://dhtmlx.com/docs/products/demoApps/dhtmlxDashboard/) | [Hotel Management guide](optimus_guides/hotel_demo.md)          |
| [Geo Tracking](https://dhtmlx.com/docs/products/demoApps/dhtmlxGeoTracking/)            | [Geo Tracking guide](optimus_guides/geotracking_demo.md)        |
| [Hospital Management](https://dhtmlx.com/docs/products/demoApps/dhtmlxHospital/)        | [Hospital Management guide](optimus_guides/hospital_demo.md)    |
| [Sales KPI Tracking](https://dhtmlx.com/docs/products/demoApps/dhtmlxKPI/)              | [Sales KPI Tracking guide](optimus_guides/kpi_demo.md)          |
| [Online Exam System](https://dhtmlx.com/docs/products/demoApps/dhtmlxExam/)             | [Online Exam System guide](optimus_guides/exam_demo.md)         |
