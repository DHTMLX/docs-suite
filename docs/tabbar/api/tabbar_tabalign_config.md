---
sidebar_label: tabAlign
title: JavaScript Tabbar - tabAlign Config 
description: You can explore the tabAlign config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tabAlign

@short: Optional. Sets alignment for tabs

@signature: {'tabAlign?: "left" | "start" | "center" | "middle" | "right" | "end";'}

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAlign: "right"
});

@descr:

**Related sample**: [Tabbar. Tab align](https://snippet.dhtmlx.com/bctscs71)

@changelog: added in v7.0

[comment]: # (@related: tabbar/configuring_tabbar.md#alignment)
