---
sidebar_label: closable
title: closable
---          

@short: adds close buttons for tabs

@signature: {'closable?: boolean | string[];'}

@example: 
// adds close buttons for all tabs
var tabbar = new dhx.Tabbar("tabbar", {
	closable: true
});

// adds close buttons for separate tabs
var tabbar = new dhx.Tabbar("tabbar", {
	closable: ["paris", "london"]
});

@descr:

**Related sample**: [Tabbar. Close Button](https://snippet.dhtmlx.com/cysre4v8)

@related: 
tabbar/init.md#define-tabbar-structure
tabbar/configuring_tabbar.md#close-buttons-for-tabs

 

@changelog: added in v6.4
