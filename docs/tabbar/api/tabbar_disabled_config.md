---
sidebar_label: disabled
title: disabled
---          

@short: makes a tab/tabs disabled

@signature: {'disabled?: string | string[];'}

@example: 
// make a tab disabled
var tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: "London"
});

// make tabs disabled
var tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: ["London", "Rome"]
});

@descr:

**Related sample**: [Tabbar. Disabled Tab](https://snippet.dhtmlx.com/pxa6rkpj)

@changelog:added in v6.4

@related: 
tabbar/init.md#define-tabbar-structure
tabbar/configuring_tabbar.md#disabled-tabs