---
sidebar_label: tabAutoHeight
title: JavaScript Tabbar - tabAutoHeight Config 
description: You can explore the tabAutoHeight config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# tabAutoHeight

@short: defines whether the height of tabs is automatically adjusted to the height of the tabbar container

@signature: {'tabAutoHeight?: boolean;'}

@example:
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAutoHeight: true,
    mode: "right"
});

@descr:

**Related sample**: [Tabbar. Tab auto height](https://snippet.dhtmlx.com/pqvycp1c)

{{note The property can be applicable when [mode](tabbar/api/tabbar_mode_config.md) is set to "right" or "left". }}

[comment]: # (@changelog: added in v7.0)

[comment]: # (@related: tabbar/configuring_tabbar.md#autosize-for-tabs)
