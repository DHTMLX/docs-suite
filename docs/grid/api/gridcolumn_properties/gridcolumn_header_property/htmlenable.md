---
sidebar_label: htmlEnable
title: JavaScript Grid column header - htmlEnable Config 
description: You can explore the htmlEnable config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# htmlEnable

@short: Optional. Allows using and displaying HTML content in a header

#### Usage

~~~jsx
htmlEnable?: boolean;
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: () => `<mark>Population</mark>`, htmlEnable: true }]
            // other column properties
        },
        // more columns configuration objects
    ],
    // more options
});

@descr:

If the `htmlEnable` property is set to *false* (default), the content of the header cells is displayed as a string value.

**Related article**: [HTML content of Grid columns](/grid/configuration/#html-content-of-grid-columns)

**Related sample**: [Grid. Styling header cells (custom CSS)](https://snippet.dhtmlx.com/7o4elf48?tag=grid) 
