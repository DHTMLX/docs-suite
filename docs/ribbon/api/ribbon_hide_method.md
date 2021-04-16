---
sidebar_label: hide
title: hide
---          

@short: hides an item of Ribbon

@signature: hide(ids: string | string[]): void;

@params:
- ids 		string,array	optional, an ID or an array of IDs of items

@example:
ribbon.hide("save_btn");
// several at a time
ribbon.hide(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Ribbon items
ribbon.hide();
~~~

@relatedsample: https://snippet.dhtmlx.com/1jkf7954	Ribbon. Show/Hide Ribbon Item

@related: ribbon/operating_ribbon.md#hidingandshowingcontrols

@changelog:


