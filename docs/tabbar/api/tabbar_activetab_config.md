---
sidebar_label: activeTab
title: activeTab
---          

@short: sets the currently active tab

@signature: activeTab?: string;

@type: string

@example: 
var tabbar = new dhx.Tabbar("tabbar", {
	activeTab:"3",
    mode: "top",
    views:[
        { id:"1", tab: "leftside", css:"panel flex", header:"Left"},
        { id:"2", tab: "west", css:"panel flex", header:"West"},
        { id:"3", tab: "east", css:"panel flex", header:"East"},
        { id:"4", tab: "right", css:"panel flex", header:"Right" }
    ]
});


@template:	api_config
@descr: 

@relatedsample: https://snippet.dhtmlx.com/0y8kd9oa	Tabbar. Active Tab

@changelog: added in v6.4