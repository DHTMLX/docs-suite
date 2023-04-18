---
sidebar_label: data
title: JavaScript Menu - data Config 
description: You can explore the data config of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# data

@short: Optional. Specifies an array of data objects to set into Menu

@signature: {'data?: object[];'}

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
            "items": [
				{
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
    	}]
	}]
});

@descr:

**Related sample**: [Menu. Initialization with config.data](https://snippet.dhtmlx.com/cg62qa9v)

[comment]: # (@related: menu/data_loading.md)
