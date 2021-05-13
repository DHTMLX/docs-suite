---
sidebar_label: hide
title: hide
---          

@short: hides an item of Menu

@signature: {'hide(ids: string | string[]): void;'}

@params:
- ids 		string,array	optional, one ID or an array of IDs of items

@example:
menu.hide("save_btn");
// several at a time
menu.hide(["cancel_btn","del_btn"]);



@descr:

**Related sample**: [Menu. Show/Hide Menu Item](https://snippet.dhtmlx.com/a9vbhxgd)

Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Menu items
menu.hide();
~~~








