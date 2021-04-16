---
sidebar_label: tabAutoWidth
title: tabAutoWidth
---          

@short: defines whether the width of tabs is automatically adjusted to the width of the tabbar container

@signature: tabAutoWidth?: boolean;

@example: 
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ],
    tabAutoWidth: true, /*!*/
    mode: "bottom"
});


@template:	api_config
@descr: 
{{note The property can be applicable when [mode](tabbar/api/tabbar_mode_config.md) is set to "top" or "bottom".}}

@changelog: added in v7.0

[Tabbar. Tab auto width](https://snippet.dhtmlx.com/mlzko8am)

@related: tabbar/configuring_tabbar.md#autosizefortabs