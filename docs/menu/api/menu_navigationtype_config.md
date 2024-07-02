---
sidebar_label: navigationType
title: JavaScript Menu - navigationType Config 
description: You can explore the navigationType config of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# navigationType

@short: Optional. Defines the action that opens menu options

@signature: {'navigationType?: "click" | "pointer";'}

@default: "pointer"

:::info
- `"click"` - displays the menu when a user clicks on it 
- `"pointer"` - displays the menu when a user hovers the mouse pointer over it
:::

@example:
const menu = new dhx.Menu("menu_container", {
    navigationType: "click"
});

@descr:

**Related sample**: [Menu. Navigation type. Click or pointer (hover)](https://snippet.dhtmlx.com/uhv64cm7)

[comment]: # (@related: menu/how_to_start.md#initialize-menu)
