---
sidebar_label: getParent()
title: JavaScript Tabbar - getParent Method 
description: You can explore the getParent method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getParent()

@short: returns the parent of a cell

@signature: {'getParent(): object;'}

@returns:
The config object of the parent of a cell.

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",
    css: "dhx_widget--bordered",
    views: [
        { id: "vilnius", tab: "Vilnius" },
        { tab: "dataview", id: "dataview"}
    ]
});

tabbar.getCell("vilnius").getParent();

@descr:


