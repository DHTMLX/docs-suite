---
sidebar_label: rows
title: JavaScript Layout - rows Config 
description: You can explore the rows config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# rows

@short: an array of rows objects

@signature: {'rows?: ICellConfig[] | ILayoutConfig[];'}

@example:
const layout = new dhx.Layout("layout_container", {
    header: "Main Block Header",
    rows: [
        {
            cols: [
                {
                    header: "Block 1",
                    width: "40%"                                
                },
                {
                    header: "Block 2",                  
                    width: "60%"
                }
            ]
        },
        {
            rows: [
                {
                    header: "Block 3",
                    height: "200px"                             
                },
                {
                    header: "Block 4",                              
                    height: "300px"
                }
            ]
        }
    ]
});

@descr:

[comment]: # (@relatedapi: layout/api/layout_cols_config.md)

[comment]: # (@related: layout/initialization.md#initialize-layout layout/layout_structure.md)
