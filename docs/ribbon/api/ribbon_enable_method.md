---
sidebar_label: enable
title: enable
---          

@short: enables a disabled item(s) of Ribbon

@signature: enable(ids: string | string[]): void;

@params:
- ids 		string,array		optional, one ID or an array of IDs of items

@example:
ribbon.enable("save_btn");
// several at a time
ribbon.enable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Ribbon items
ribbon.enable();
~~~

@relatedsample: https://snippet.dhtmlx.com/l3f8pq2g	Ribbon. Enable/Disable Ribbon Item

@related: ribbon/operating_ribbon.md#disablingandenablingcontrols

@changelog:


