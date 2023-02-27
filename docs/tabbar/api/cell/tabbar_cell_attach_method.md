---
sidebar_label: attach()
title: JavaScript Tabbar - attach Method 
description: You can explore the attach method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attach()

@short: attaches a DHTMLX component into a Tabbar cell

@signature: {'attach(component: string | object, config?: any): object;'}

@params:
- `component: string | object` - the name or object of a component
- `config: object` - optional, the configuration settings of a component

@returns:
The object of the attached component.

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",
    css: "dhx_widget--bordered",
    views: [
        { tab: "list", id: "list" },
        { tab: "dataview", id: "dataview" }
    ]
});

const dataview = new dhx.DataView(null, {
    template: dataviewTemplate,
    itemsInRow: 3,
    gap: "10px"
});

dataview.data.parse(dataset);

tabbar.getCell("dataview").attach(dataview);

@descr:

**Related sample**: [Tabbar. Attach widget](https://snippet.dhtmlx.com/o1jwmw1l)

{{note The DHTMLX Message, Popup, Window components can't be attached to the Tabbar cell because these components can't have the parent container due to their architecture principles.}}
