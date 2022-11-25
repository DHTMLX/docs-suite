---
sidebar_label: closable
title: JavaScript Tabbar - closable Config 
description: You can explore the closable config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# closable

@short: adds close buttons for tabs

@signature: {'closable?: boolean | string[];'}

@example:
// adds close buttons for all tabs
const tabbar = new dhx.Tabbar("tabbar_container", {
	closable: true
});

// adds close buttons for separate tabs
const tabbar = new dhx.Tabbar("tabbar_container", {
	closable: ["paris", "london"]
});

@descr:

**Related sample**: [Tabbar. Close button](https://snippet.dhtmlx.com/cysre4v8)

@changelog: added in v6.4

@related: [comment]: # (tabbar/init.md#define-tabbar-structure [comment]: # (tabbar/configuring_tabbar.md#close-buttons-for-tabs)

