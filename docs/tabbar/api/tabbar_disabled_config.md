---
sidebar_label: disabled
title: disabled
---          

@short: makes a tab/tabs disabled

@signature: disabled?: string | string[];

@example: 
// make a tab disabled
var tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: "London"
});

// make tabs disabled
var tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: ["London", "Rome"]
});

@template:	api_config

@related: 
tabbar/init.md#definetabbarstructure
tabbar/configuring_tabbar.md#disabledtabs

@relatedsample: https://snippet.dhtmlx.com/pxa6rkpj	Tabbar. Disabled Tab

@descr: 


@changelog:added in v6.4
