---
sidebar_label: tabAutoHeight
title: tabAutoHeight
---          

@short: defines whether the height of tabs is automatically adjusted to the height of the tabbar container

@signature: tabAutoHeight?: boolean;

@example: 
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAutoHeight: true, /*!*/
    mode: "right"
});


@template:	api_config
@descr:
{{note The property can be applicable when [mode](tabbar/api/tabbar_mode_config.md) is set to "right" or "left". }}

@changelog: added in v7.0

[Tabbar. Tab auto height](https://snippet.dhtmlx.com/pqvycp1c)

@related: tabbar/configuring_tabbar.md#autosizefortabs