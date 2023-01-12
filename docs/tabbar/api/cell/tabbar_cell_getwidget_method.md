---
sidebar_label: getWidget()
title: JavaScript Tabbar - getWidget Method 
description: You can explore the getWidget method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getWidget()

@short: returns the widget attached to a tabbar cell

@signature: {'getWidget(): any;'}

@returns:
An object of a widget attached to a cell.

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",
    css: "dhx_widget--bordered",
    views: [
        { id: "vilnius", tab: "Vilnius" },
        { tab: "dataview", id: "dataview"}
    ]
});

const dataview = new dhx.DataView(null, {
    template: dataviewTemplate,
    itemsInRow: 3,
    gap: "10px"
});

dataview.data.parse(dataset);

tabbar.getCell("dataview").attach(dataview);

// id - the id of a cell a widget is attached to
const widget = tabbar.getCell("dataview").getWidget();

@descr:
