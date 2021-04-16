---
sidebar_label: hide
title: hide
---          

@short: hides an item of Toolbar

@signature:  hide(ids: string | string[]): void;

@params:
- ids 		string,array	one ID or an array of IDs of items

@example:
toolbar.hide("save_btn");
// several at a time
toolbar.hide(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Toolbar items
toolbar.hide();
~~~

@relatedsample: https://snippet.dhtmlx.com/cldp89u4	Toolbar. Hide/Show

@related: toolbar/common_methods.md#hidingandshowingcontrols

@changelog:


