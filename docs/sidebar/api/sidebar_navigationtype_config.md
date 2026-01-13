---
sidebar_label: navigationType
title: JavaScript Sidebar - navigationType Config 
description: You can explore the navigationType config of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# navigationType

@short: Optional. Defines the action that opens sidebar options

@signature: {'navigationType?: "click" | "pointer";'}

@default: "pointer"

:::info
- `"click"` - displays the sidebar when a user clicks on it 
- `"pointer"` - displays the sidebar when a user hovers the mouse pointer over it
:::

@example:
const sidebar = new dhx.Sidebar("sidebar_container", {
    navigationType: "click"
});

@descr: