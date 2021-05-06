---
sidebar_label: show
title: show
---          

@short: shows an item of Toolbar

@signature: {'show(ids: string | string[]): void;'}

@params:
- ids 		string | array		an ID or an array of IDs of items

@example:
toolbar.show("save_btn");
// several at a time
toolbar.show(["cancel_btn","del_btn"]);



@descr:

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Toolbar items
toolbar.show();
~~~

**Related sample**: [Toolbar. Hide/Show](https://snippet.dhtmlx.com/cldp89u4)

@related: toolbar/common_methods.md#hiding-and-showing-controls




