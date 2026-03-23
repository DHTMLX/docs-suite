---
sidebar_label: height
title: JavaScript Grid - height Config 
description: You can explore the height config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# height

@short: Optional. Sets the height of a grid or adjusts it automatically to the content

@signature: {'height?: number | "auto";'}

@descr:

:::tip note
The **height: "auto"** option requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    height: 400,
    data: dataset
});

@descr: 

**Related sample**: 
- [Grid. Custom sizes](https://snippet.dhtmlx.com/ffxj6se0)
- [Grid. Set automatic height (PRO)](https://snippet.dhtmlx.com/srbu56ob)

**Related article:** [Width/height](grid/configuration.md#widthheight)

@changelog: 

- The **"auto"** option was added in v8.1
