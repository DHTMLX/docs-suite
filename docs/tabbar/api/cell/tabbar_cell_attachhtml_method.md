---
sidebar_label: attachHTML()
title: JavaScript Tabbar - attachHTML Method 
description: You can explore the attachHTML method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# attachHTML()

@short: adds an HTML content into a Tabbar cell

@signature: {'attachHTML(html: string): void;'}

@params:
- `html: string` - an HTML content to be added into a cell

@example:
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",
    css: "dhx_widget--bordered",
    views: [
        { id: "vilnius", tab: "Vilnius" },
    ]
});

tabbar.getCell("vilnius").attachHTML("<p>Information about Vilnius</p>");

@descr:

**Related sample**: [Tabbar. Attach HTML](https://snippet.dhtmlx.com/3av81rvn)