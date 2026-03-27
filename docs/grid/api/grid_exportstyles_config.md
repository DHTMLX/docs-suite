---
sidebar_label: exportStyles
title: JavaScript Grid - exportStyles Config 
description: You can explore the exportStyles config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# exportStyles

@short: Optional. Defines the styles that will be sent to the export service when exporting Grid to PDF/PNG

@signature: {'exportStyles?: boolean | string[];'}

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    exportStyles: false,
    data: dataset
});

@descr:
By default, the `exportStyles` property is disabled. Thus, when you export Grid, CSS styles included to the page are not sent to the export service. This reduces the size of the exported data. 

If you want some styles to be exported, set string values with the absolute paths to the desired styles to the `exportStyles` array:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    exportStyles: [
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ],
    data: dataset
});
~~~

:::tip
You must use only absolute paths not relative ones.
:::

:::info
You need to enable the property if you want to export Grid with a [custom or overridden theme](themes.md).
:::

@descr:

**Related API:**
- [`png()`](grid/api/export/grid_png_method.md)
- [`pdf()`](grid/api/export/grid_pdf_method.md)

@changelog: added in v8.1
