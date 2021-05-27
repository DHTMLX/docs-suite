---
sidebar_label: html
title: JavaScript Tabbar - html Config 
hide_title: true
description: You can explore the html config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# html

@short: sets HTML content for a tab

@signature: {'html?: string;'}

@example:
var tabbar = new dhx.Tabbar("tabbar_container",{
	views:[ 
		{ tab: "left", html:"Some HTML1"},
		{ tab: "west", html:"Some HTML2"},
		{ tab: "east", html:"Some HTML3"},
		{ tab: "right", html:"Some HTML4"}
   ]
});
