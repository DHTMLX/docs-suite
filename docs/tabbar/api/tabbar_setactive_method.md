---
sidebar_label: setActive()
title: JavaScript Tabbar - setActive Method 
description: You can explore the setActive method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setActive()

@short: sets an active tab

@signature: {'setActive(id: string): void;'}

@params:
- `id: string` - the id of a tab

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

tabbar.setActive("2");

@descr:

**Related sample**: [Tabbar. Set active](https://snippet.dhtmlx.com/u9ryz38f)

[comment]: # (@relatedapi: tabbar/api/tabbar_getactive_method.md)

[comment]: # (@related: tabbar/work_with_tabbar.md#settinggetting-the-active-tab)
