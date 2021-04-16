---
sidebar_label: disable
title: disable
---          

@short: disables and dims an item(s) of Ribbon

@signature: disable(ids: string | string[]): void;

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


@relatedsample: https://snippet.dhtmlx.com/l3f8pq2g	Ribbon. Enable/Disable Ribbon Item

@changelog:

@related: ribbon/operating_ribbon.md#disablingandenablingcontrols
