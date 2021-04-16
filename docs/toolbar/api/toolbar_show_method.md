---
sidebar_label: show
title: show
---          

@short: shows an item of Toolbar

@signature: show(ids: string | string[]): void;

@params:
- ids 		string,array		an ID or an array of IDs of items

@example:
toolbar.show("save_btn");
// several at a time
toolbar.show(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Toolbar items
toolbar.show();
~~~

@relatedsample: https://snippet.dhtmlx.com/cldp89u4	Toolbar. Hide/Show

@related: toolbar/common_methods.md#hidingandshowingcontrols

@changelog:


