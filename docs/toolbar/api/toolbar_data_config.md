---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into Toolbar

@signature: data?: array;

@example: 
const toolbar = new dhx.Toolbar("toolbar", {
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



@template:	api_config
@descr: 

@related: toolbar/load_data.md

@relatedsample: 
https://snippet.dhtmlx.com/nie9tuks	Toolbar. Config Data 
https://snippet.dhtmlx.com/b0fmkwg5	Toolbar. Init With External Data