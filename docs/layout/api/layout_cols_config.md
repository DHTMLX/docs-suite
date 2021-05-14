---
sidebar_label: cols
title: cols
---          

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

@relatedapi: layout/api/layout_rows_config.md

@related: layout/init.md#initialize-layout
layout/layout_structure.md

