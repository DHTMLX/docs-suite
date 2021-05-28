---
sidebar_label: activeTab
title: JavaScript Tabbar - activeTab Config 
hide_title: true
description: You can explore the activeTab config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# activeTab

@short: sets the currently active tab

@signature: {'activeTab?: string;'}

@example:
var tabbar = new dhx.Tabbar("tabbar", {
	activeTab:"3",
    mode: "top",
    views:[
        { id:"1", tab: "leftside", css:"panel flex", header:"Left"},
        { id:"2", tab: "west", css:"panel flex", header:"West"},
        { id:"3", tab: "east", css:"panel flex", header:"East"},
        { id:"4", tab: "right", css:"panel flex", header:"Right" }
    ]
});

@descr:

**Related sample**: [Tabbar. Active Tab](https://snippet.dhtmlx.com/0y8kd9oa)

@changelog: added in v6.4
