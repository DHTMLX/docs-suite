---
sidebar_label: disable
title: disable
---          

@short: disables and dims an item(s) of Toolbar

@signature: disable(ids: string | string[]): void;

@params:
- ids 		string, array		an ID or an array of IDs of items


@example:
toolbar.disable("save_btn");
// several at a time
toolbar.disable(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Toolbar items
toolbar.disable();
~~~

@relatedsample: https://snippet.dhtmlx.com/ovblenaf	Toolbar. Enable/Disable

@related: toolbar/common_methods.md#disablingandenablingcontrols

@changelog:


