---
sidebar_label: Layout structure
title: JavaScript Layout - Layout Structure 
description: You can explore the structure of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Layout structure

DHTMLX Layout arranges the parts of your application into blocks. You can build three types of layout: horizontal, vertical, and mixed.

## Horizontal layout

A horizontal layout consists of [](layout/api/layout_rows_config.md) of cells placed one under another:

~~~js
const layout = new dhx.Layout("layout_container", {                                  
    rows: [
       { header: "The header of the row 1" },
       { header: "The header of the row 2" },
       { header: "The header of the row 3" },
       { header: "The header of the row 4" }
    ]                                        
});
~~~

## Vertical layout

A vertical layout consists of [columns](layout/api/layout_cols_config.md) of cells placed side by side:

~~~js
const layout = new dhx.Layout("layout_container", {   
    cols: [
        { header: "The header of the column 1" },
        { header: "The header of the column 2" },
        { header: "The header of the column 3" },
        { header: "The header of the column 4" }
    ]
});
~~~

## Mixed layout

A mixed layout combines rows and columns. A row can include several columns, and a column can contain rows:

~~~js
const layout = new dhx.Layout("layout_container", {   
    rows: [
        {
            cols: [
                {
                    header: "Block 1"                        
                },
                {
                    header: "Block 2"               
                }
            ]
        },
        {
            rows: [
                {
                    header: "Block 3"                                       
                },
                {
                    header: "Block 4"                                                
                }
            ]
        }
    ]
});
~~~
