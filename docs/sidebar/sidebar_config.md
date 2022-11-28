---
sidebar_label: Configuration
title: JavaScript Sidebar - Configuration 
description: You can explore the configuration of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Configuration

## Collapsed mode

To initialize a sidebar in the collapsed state, make use of the [](sidebar/api/sidebar_collapsed_config.md) property. This is what Sidebar looks like in the collapsed mode:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
	css: "dhx_widget--border_right",
	collapsed: true
});
~~~

**Related sample**: [Sidebar. Collapsed](https://snippet.dhtmlx.com/bkh54ir7)

## Minimal width

In order to set the minimal width of a sidebar in the collapsed state, you can use the [](sidebar/api/sidebar_minwidth_config.md) property. By default it is set to 69px. 

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    minWidth: 80,
    collapsed: true
});
~~~

## Width 

It is easy to change the width of a sidebar with the help of the [](sidebar/api/sidebar_width_config.md) configuration option. By default it is set to 200px. Set the desired value in the configuration object of the component:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    width: "450"
});
~~~
