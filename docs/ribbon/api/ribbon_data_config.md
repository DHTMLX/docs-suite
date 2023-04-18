---
sidebar_label: data
title: JavaScript Ribbon - data Config 
description: You can explore the data config of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# data

@short: Optional. Specifies an array of data objects to set into Ribbon

@signature: {'data?: object[];'}

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

const ribbon = new dhx.Ribbon("ribbon_container", {
    css: "dhx_widget--bordered dhx_widget--bg_white", 
    data: data
});

@descr:

**Related samples**:
- [Ribbon. Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)
- [Ribbon. Initialization with external TreeCollection](https://snippet.dhtmlx.com/aue48f5f)

[comment]: # (@related: ribbon/data_loading.md)
