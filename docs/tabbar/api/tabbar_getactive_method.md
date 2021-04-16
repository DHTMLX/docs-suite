---
sidebar_label: getActive
title: getActive
---          

@short: gets the id of the active tab

@signature: getActive(): string;

@returns:
- id 		string		the id of the active tab

@example:
var tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});
 
var active = tabbar.getActive(); // -> "2"


@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/xpvkcwiu	Tabbar. Get Active

@relatedapi: tabbar/api/tabbar_setactive_method.md

@related: tabbar/work_with_tabbar.md#settinggettingtheactivetab

@changelog:


