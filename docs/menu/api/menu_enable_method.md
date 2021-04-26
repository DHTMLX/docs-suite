---
sidebar_label: enable
title: enable
---          

@short: enables a disabled item(s) of Menu

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-menu/sources/types.d.ts)

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


**Related sample**: [Menu. Enable/Disable Menu Item](https://snippet.dhtmlx.com/zuoam7r7)



@changelog:


