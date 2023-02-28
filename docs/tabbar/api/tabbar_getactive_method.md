---
sidebar_label: getActive()
title: JavaScript Tabbar - getActive Method 
description: You can explore the getActive method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getActive()

@short: gets the id of the active tab

@signature: {'getActive(): string;'}

@returns:
A string with the id of the active tab.

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});

const active = tabbar.getActive(); // -> "2"

@descr:

**Related sample**: [Tabbar. Get active](https://snippet.dhtmlx.com/xpvkcwiu)

[comment]: # (@relatedapi: tabbar/api/tabbar_setactive_method.md)

[comment]: # (@related: tabbar/work_with_tabbar.md#settinggetting-the-active-tab)
