---
sidebar_label: disabled
title: JavaScript Tabbar - disabled Config 
description: You can explore the disabled config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# disabled

@short: makes a tab/tabs disabled

@signature: {'disabled?: string | string[];'}

@example:
// make a tab disabled
const tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: "London"
});

// make tabs disabled
const tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: ["London", "Rome"]
});

@descr:

**Related sample**: [Tabbar. Rich configuration (close, disable, overflow, active tab)](https://snippet.dhtmlx.com/xqthiy66)

@changelog:added in v6.4

[comment]: # (@related: tabbar/init.md#define-tabbar-structure tabbar/configuring_tabbar.md#disabled-tabs)
