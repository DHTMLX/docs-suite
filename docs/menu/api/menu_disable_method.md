---
sidebar_label: disable
title: disable
---          

@short: disables and dims an item(s) of Menu

@signature: disable(ids: string | string[]): void;

@params:
- ids 		string, array		optional, an ID or an array of IDs of items

@example:
menu.disable("save_btn");
// several at a time
menu.disable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Menu items
menu.disable();
~~~

@relatedsample: https://snippet.dhtmlx.com/zuoam7r7	Menu. Enable/Disable Menu Item



@changelog:


