---
sidebar_label: text
title: JavaScript Grid column header - text Config 
description: You can explore the text config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# text

@short: Optional. The text of a header 

#### Usage

~~~jsx
text?:
    string |
    ((content: {
        [key: string]: string | number | null
    }) => string);
~~~

@params:
The text of a header can be set as a *string* or a *callback function* which is called with the following parameter: 

- `content` - an object with the content of the header/footer tooltip that contains the calculated values from the `summary` property as *key:value* pairs, where:
    - the *key* is either the key defined in the list or the functor name
    - the *value* can be a *string*, *number* or *null*

The calculated values are taken from the [`summary`](grid/api/grid_summary_config.md) config option of the component and the [`summary`](grid/api/api_gridcolumn_properties.md) config option of a column.

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

**Related article**: [Header/footer text](/grid/configuration/#headerfooter-text)