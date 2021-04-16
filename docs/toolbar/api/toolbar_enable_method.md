---
sidebar_label: enable
title: enable
---          

@short: enables a disabled item(s) of Toolbar

@signature: enable(ids: string | string[]): void;

@params:
- ids 		string,array		one ID or an array of IDs of items

@example:
toolbar.enable("save_btn");
// several at a time
toolbar.enable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Toolbar items
toolbar.enable();
~~~

@relatedsample: https://snippet.dhtmlx.com/ovblenaf	Toolbar. Enable/Disable

@related: toolbar/common_methods.md#disablingandenablingcontrols

@changelog:


