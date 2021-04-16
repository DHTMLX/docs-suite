---
sidebar_label: rows
title: rows
---          

@short: an array of rows objects

```todoapi
array rows;
rows?: ICellConfig[] | ILayoutConfig[];
```

@example: 
var layout = new dhx.Layout("layout_container", {
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


@template:	api_config
@descr: 

@relatedapi: layout/api/layout_cols_config.md

@related: layout/init.md#initializelayout
layout/layout_structure.md
