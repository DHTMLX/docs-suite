---
sidebar_label: maxWidth
title: JavaScript Grid column - maxWidth Config 
description: You can explore the maxWidth config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# maxWidth

@short: Optional. The maximal width to be set for a column

### Usage

~~~jsx
maxWidth?: number;
~~~

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], maxWidth: 150 },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related sample**: [Grid. Columns max width](https://snippet.dhtmlx.com/ku3cfaux)