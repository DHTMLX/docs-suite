---
sidebar_label: show
title: show
---          

@short: shows an item of Ribbon

@signature: show(ids: string | string[]): void;

@params:
- ids 		string,array		optional, an ID or an array of IDs of items

@example:
ribbon.show("save_btn");
// several at a time
ribbon.show(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Ribbon items
ribbon.show();
~~~

@relatedsample: https://snippet.dhtmlx.com/1jkf7954	Ribbon. Show/Hide Ribbon Item

@related: ribbon/operating_ribbon.md#hidingandshowingcontrols

@changelog:


