---
sidebar_label: getActive()
title: getActive()
---          

@short: gets the id of the active tab

@signature: {'getActive(): string;'}

@returns:
`id: string` - the id of the active tab

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

@descr:

**Related sample**: [Tabbar. Get Active](https://snippet.dhtmlx.com/xpvkcwiu)

[comment]: # (@relatedapi: tabbar/api/tabbar_setactive_method.md)

[comment]: # (@related: tabbar/work_with_tabbar.md#settinggetting-the-active-tab)
