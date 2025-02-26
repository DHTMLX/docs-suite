---
sidebar_label: align
title: JavaScript Grid column - align Config 
description: You can explore the align config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# align

@short: Optional. Aligns data in a column

### Usage

~~~jsx
align?: "left" | "center" | "right"; 
~~~

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header:  [{ text: "Name", align: "center" }], align: "right"}
        // more options
    ],
    data: dataset
});
~~~

**Related article**: [Alignment](grid/configuration.md#alignment)

**Related sample**: [Grid. Content align](https://snippet.dhtmlx.com/eyreddku)