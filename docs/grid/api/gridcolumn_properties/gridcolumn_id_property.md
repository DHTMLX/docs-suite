---
sidebar_label: id
title: JavaScript Grid column - id Config 
description: You can explore the id config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# id

@short: Required. The id of a column

### Usage

~~~jsx
id: string | number;
~~~
 
@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "title", header: [{ text: "Title" }] },
        // more columns configuration objects
    ],
    // more options
});
~~~

