---
sidebar_label: closable
title: JavaScript Grid column - closable Config 
description: You can explore the closable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# closable

@short: Optional. Either allows closing a particular element of the group panel or makes it permanently enabled

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

### Usage

~~~jsx
closable?: boolean; 
~~~

@default: true

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country",
            header: [{ text: "Country" }],
            // grouping of the "country" column is permanently enabled
            // and can't be switched off via the group panel
            closable: false, 
        },
        // more columns configuration objects
    ],
    group: {
        order: [ "country" ]
    },
    // more options
});
~~~

**Related article**: [Making group panel elements closable](grid/usage.md#making-group-panel-elements-closable)