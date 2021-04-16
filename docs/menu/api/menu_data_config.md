---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into Menu

```todoapi 
array data;
data?: any[] | TreeCollection<any>;
```

@example: 
const menu = new dhx.Menu("menu_container", {
    data: [{
        "id": "edit",
        "value": "Edit",
        "hotKey": "ctrl-z",
        "count": 25,
        "countColor": "success",
        "items": [{
            "id": "undo",
            "value": "Undo",
            "icon": "dxi dxi-undo",
            "hotKey": "Ctrl-z",
            "count": 25,
            "countColor": "danger",
            "items": [{
                "id": "redo1",
                "value": "Redo",
                "icon": "dxi dxi-redo",
                "disabled": "true"
            },
            {
                "type": "separator"
            },
            {
                "id": "lock1",
                "value": "Lock cell",
                "icon": "dxi dxi-key"
            }
            ]
        }
    ]
});


@template:	api_config
@descr: 

@related: menu/from_script.md

@relatedsample: https://snippet.dhtmlx.com/cg62qa9v	Menu. Basic Initialization