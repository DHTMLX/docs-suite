---
sidebar_label: show
title: show
---          

@short: shows an item of Menu

@signature: show(ids: string | string[]): void;

@params:
- ids 		string, array		optional, an ID or an array of IDs of items


@example:
menu.show("save_btn");
// several at a time
menu.show(["cancel_btn","del_btn"]);


@template: api_method
@descr:
Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Menu items
menu.show();
~~~

@relatedsample: https://snippet.dhtmlx.com/a9vbhxgd	Menu. Show/Hide Menu Item


@changelog:


