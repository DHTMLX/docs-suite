---
sidebar_label: html
title: html
---          

@short: sets HTML content for a tab

```todoapi  в старой доке не вижу```
@signature: html?: string;

@example: 
var tabbar = new dhx.Tabbar("tabbar_container",{
	views:[ 
		{ tab: "left", html:"Some HTML1"},
		{ tab: "west", html:"Some HTML2"},
		{ tab: "east", html:"Some HTML3"},
		{ tab: "right", html:"Some HTML4"}
   ]
});



