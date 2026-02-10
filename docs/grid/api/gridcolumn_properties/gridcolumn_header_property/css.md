---
sidebar_label: css
title: JavaScript Grid column header - css Config 
description: You can explore the css config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Styling to be applied to a header

#### Usage

~~~jsx
css?: string;
~~~

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: "Country", css: "myCustomStyle" }]
            // other column properties
        },
        // more columns configuration objects
    ],
    // more options
});