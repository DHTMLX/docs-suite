---
sidebar_label: cols
title: JavaScript Layout - cols Config 
description: You can explore the cols config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# cols

@short: an array of columns objects

@signature: {'cols?: ICellConfig[] | ILayoutConfig[];'}

@example:
var layout = new dhx.Layout("layout_container", {
    header: "Main Block Header",
    cols: [
        {
            header: "Sub Block Header row"
        },
        {
            header: "Sub Block Header row",
            cols: [
                {
                    header:"Left cols"
                },
                {
                    header:"Center cols",
                    cols: [
                        { header: "Sub Block Header cols 1" },
                        { header: "Sub Block Header cols 2" },
                        { header: "Sub Block Header cols 3" }
                    ]
                },
 
            ]
        }
    ]
});

@descr:

[comment]: # (@relatedapi: layout/api/layout_rows_config.md)

[comment]: # (@related: layout/init.md#initialize-layout layout/layout_structure.md)
