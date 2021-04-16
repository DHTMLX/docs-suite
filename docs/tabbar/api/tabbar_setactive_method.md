---
sidebar_label: setActive
title: setActive
---          

@short: sets an active tab

@signature: setActive(id: string): void;

@params:
- id 		string		the id of a tab

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
 
tabbar.setActive("2");


@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/u9ryz38f	Tabbar. Set Active

@relatedapi: tabbar/api/tabbar_getactive_method.md

@related: tabbar/work_with_tabbar.md#settinggettingtheactivetab

@changelog:


