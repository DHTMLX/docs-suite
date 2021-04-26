---
sidebar_label: disable
title: disable
---          

@short: disables and dims an item(s) of Ribbon

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-ribbon/sources/types.d.ts)

@params:
- ids 		string,array		optional, an ID or an array of IDs of items

@example:
ribbon.disable("save_btn");
// several at a time
ribbon.disable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Ribbon items
ribbon.disable();
~~~


**Related sample**: [Ribbon. Enable/Disable Ribbon Item](https://snippet.dhtmlx.com/l3f8pq2g)

@changelog:

@related: ribbon/operating_ribbon.md#disablingandenablingcontrols
