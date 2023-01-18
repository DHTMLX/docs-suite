---
sidebar_label: tabAutoWidth
title: JavaScript Tabbar - tabAutoWidth Config 
description: You can explore the tabAutoWidth config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# tabAutoWidth

@short: Optional. Defines whether the width of tabs is automatically adjusted to the width of the tabbar container

@signature: {'tabAutoWidth?: boolean;'}

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAutoWidth: true,
    mode: "bottom"
});

@descr:

**Related sample**: [Tabbar. Tab auto width](https://snippet.dhtmlx.com/mlzko8am)

{{note The property can be applicable when [mode](tabbar/api/tabbar_mode_config.md) is set to "top" or "bottom".}}

@changelog: added in v7.0

[comment]: # (@related: tabbar/configuring_tabbar.md#autosize-for-tabs)
