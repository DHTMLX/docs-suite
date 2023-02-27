---
sidebar_label: progressDefault
title: JavaScript Layout - progressDefault Config 
description: You can explore the progressDefault config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# progressDefault

@short: Optional. Defines whether the progress bar must be shown in a cell in the absence of the component/HTML content in the cell
@descr:

A progress bar is a visual component which informs users that the content is loading or updating<br>

@signature: {'progressDefault?: boolean;'}

@default: false

@example:
const layout = new dhx.Layout("layout_container", {
    type: "line",
    rows: [
        {
            id: "one",
            header: "Header",
            height: "250px",
            resizable: true,
            progressDefault: true
        },
        {
            id: "two",
            height: "250px",
            progressDefault: true
        },
    ]
});

@changelog: added in v8.0

@descr:

**Related article:** [Progress bar](layout/cell_configuration.md#progress-bar)