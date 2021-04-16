---
sidebar_label: closable
title: closable
---          

@short: adds close buttons for tabs

@signature:     closable?: boolean | string[];

@example: 
// adds close buttons for all tabs
var tabbar = new dhx.Tabbar("tabbar", {
	closable: true
});

// adds close buttons for separate tabs
var tabbar = new dhx.Tabbar("tabbar", {
	closable: ["paris", "london"]
});

@template:	api_config

@relatedsample: https://snippet.dhtmlx.com/cysre4v8	Tabbar. Close Button

@related: 
tabbar/init.md#definetabbarstructure
tabbar/configuring_tabbar.md#closebuttonsfortabs

@descr: 

@changelog: added in v6.4

