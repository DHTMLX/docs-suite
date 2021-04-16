---
sidebar_label: id
title: id
description: description
---          

@short: sets the id of a tab

```todoapi  в старой локе не вижу```
@signature: id?: string;

@example: 
var tabbar = new dhx.Tabbar("tabbar_container",{
	views:[ 
		{ tab: "left", id:"1"},
		{ tab: "west", id:"2"},
		{ tab: "east", id:"3"},
		{ tab: "right", id:"4"}
	]
});
