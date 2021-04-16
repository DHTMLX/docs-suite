---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into Ribbon

```todoapi 
array data;
data?: any[] | TreeCollection<IRibbonElement>;
```

@example: 
const data = [
    {
        id: "fileBlock",
        type: "block",
        title: "File",
        items: [
            {
                type: "block",
                direction: "col",
                items: [
                    {
                        value: "File",
                        id: "file",
                        icon: "mdi mdi-file-outline",
                        size: "small",
                        ribbonHeight: "auto"
                    },
                    {
                        type: "block",
                        items: [
                            { id: "folder", icon: "mdi mdi-folder-outline" },
                            { id: "cloud", icon: "mdi mdi-weather-cloudy" }
                        ]
                    }
                ]
            },
            {
                id: "save",
                value: "Save",
                icon: "mdi mdi-content-save",
                size: "auto"
            }
        ]
    }
];

const ribbon = new dhx.Ribbon("ribbon", {
    css: "dhx_widget--bordered dhx_widget--bg_white", 
    data: data
});

@template:	api_config
@descr: 

@related: ribbon/loading_json.md

@relatedsample: 
https://snippet.dhtmlx.com/lek4v9m7	Ribbon. Config Data
https://snippet.dhtmlx.com/aue48f5f	Ribbon. Init With External Data