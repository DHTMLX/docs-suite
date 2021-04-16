---
sidebar_label: enable
title: enable
---          

@short: enables a disabled item(s) of Menu

@signature: enable(ids: string | string[]): void;

@params:
- ids 		string,array		optional, one ID or an array of IDs of items

@example:
menu.enable("save_btn");
// several at a time
menu.enable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Menu items
menu.enable();
~~~


@relatedsample: https://snippet.dhtmlx.com/zuoam7r7	Menu. Enable/Disable Menu Item



@changelog:


