---
sidebar_label: Configuration
title: Configuration
---          

Collapsed mode
---------------

To initialize a sidebar in the collapsed state, make use of the [](sidebar/api/sidebar_collapsed_config.md) property. This is what Sidebar looks like in the collapsed mode:

~~~js
var sidebar = new dhx.Sidebar(document.body, {
	css: "dhx_widget--border_right",
	collapsed: true
});
~~~

{{editor	https://snippet.dhtmlx.com/bkh54ir7	Sidebar. Sidebar Collapsed}}


Minimal width 
--------------

In order to set the minimal width of a sidebar in the collapsed state, you can use the [](sidebar/api/sidebar_minwidth_config.md) property. By default it is set to 69px. 

~~~js
var sidebar = new dhx.Sidebar(document.body, {
    css: "dhx_widget--border_right",
    minWidth: 80,
    collapsed: true
});
~~~

Width 
----------

It is easy to change the width of a sidebar with the help of the [](sidebar/api/sidebar_width_config.md) configuration option. By default it is set to 200px. Set the desired value in the configuration object of the component:

~~~js
var sidebar = new dhx.Sidebar(document.body, {
    css: "dhx_widget--border_right",
    width: "450"
});
~~~





