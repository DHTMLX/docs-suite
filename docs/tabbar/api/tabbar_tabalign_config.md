---
sidebar_label: tabAlign
title: tabAlign
---          

@short: sets alignment for tabs

@signature: tabAlign?: "left" | "start" | "center" | "middle" | "right" | "end";

@example: 
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAlign: "right" /*!*/
});


@template:	api_config
@descr: 

@changelog: added in v7.0

[Tabbar. Tab align](https://snippet.dhtmlx.com/bctscs71)

@related: tabbar/configuring_tabbar.md#alignment

