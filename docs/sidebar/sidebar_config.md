---
sidebar_label: Configuration
title: JavaScript Sidebar - Configuration 
description: You can explore the configuration of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Collapsed mode

Set the [](sidebar/api/sidebar_collapsed_config.md) property to `true` to initialize a sidebar in the collapsed state:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    collapsed: true
});
~~~

**Related sample**: [Sidebar. Collapsed](https://snippet.dhtmlx.com/bkh54ir7)

## Minimal width

Use the [](sidebar/api/sidebar_minwidth_config.md) property to set the minimal width of a sidebar in the collapsed state (the default value is 69px):

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    minWidth: 80,
    collapsed: true
});
~~~

## Width

Use the [](sidebar/api/sidebar_width_config.md) property to change the width of a sidebar (the default value is 200px). Set the value you need in the configuration object of the component:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    width: "450"
});
~~~
