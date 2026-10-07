---
sidebar_label: ariaLabel
title: JavaScript Grid - ariaLabel Config
description: You can explore the ariaLabel config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the grid, which a screen reader announces when focus enters the grid

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    ariaLabel: "Orders"
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the element with the `grid` role (the `treegrid` role in the TreeGrid mode). Use the property to tell several grids on one page apart. If the property is not set, the grid has no accessible name.

An `aria-label` attribute set on the container of the grid does not name the grid, because the element with the `grid` role is nested inside the container.

**Related articles**: [Grid accessibility](grid/accessibility.md)

@changelog: added in v9.4
