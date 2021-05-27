---
sidebar_label: id
title: JavaScript Tabbar - id Config 
hide_title: true
description: You can explore the id config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# id

@short: sets the id of a tab

@signature: {'id?: string;'}

@example:
var tabbar = new dhx.Tabbar("tabbar_container",{
	views:[ 
		{ tab: "left", id:"1"},
		{ tab: "west", id:"2"},
		{ tab: "east", id:"3"},
		{ tab: "right", id:"4"}
	]
});
