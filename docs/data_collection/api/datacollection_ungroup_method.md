---
sidebar_label: ungroup()
title: JavaScript DataCollection - ungroup Method 
description: You can explore the ungroup method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ungroup()

@short: resets the applied data grouping

@signature: {'ungroup(): void;'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "salary", header: [{ text: "Salary" }] },
        { id: "experience", header: [{ text: "Experience (years)" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

// grouping grid data
grid.data.group([
    // grouping logic
]);

// ungrouping grid data
grid.data.ungroup();

@descr:

@changelog: added in v9.0