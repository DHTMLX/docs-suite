---
sidebar_label: data
title: JavaScript Toolbar - data Config 
description: You can explore the data config of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: specifies an array of data objects to set into Toolbar

@signature: {'data?: any[];'}

@example:
const toolbar = new dhx.Toolbar("toolbar_container", {
    css: "dhx_widget--bordered",
    data: [ 
        {
            "id": "edit",
            "value": "Edit"
        },
        {
            "id": "search",
            "type": "input",
            "placeholder": "Search",
            "icon": "mdi mdi-magnify"
        },
        {
            "type": "spacer"
        },
        {
            "type": "button",
            "view": "link",
            "color": "secondary",
            "circle": true,
            "id": "notifications",
            "icon": "mdi mdi-bell",
            "tooltip": "Notifications",
            "count": 7
        }
    ]
)};

@descr:

**Related samples**:
- [Toolbar. Initialization with config.data ](https://snippet.dhtmlx.com/nie9tuks)
- [Toolbar. Initialization with external TreeCollection](https://snippet.dhtmlx.com/b0fmkwg5)

[comment]: # (@related: toolbar/load_data.md)
