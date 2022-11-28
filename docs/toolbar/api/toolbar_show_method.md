---
sidebar_label: show()
title: JavaScript Toolbar - show Method 
description: You can explore the show method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# show()

@short: shows an item of Toolbar

@signature: {'show(ids: Id | Id[]): void;'}

@params:
- `ids: string | number | array` - an ID or an array of IDs of items

@example:
toolbar.show("save_btn");
// several at a time
toolbar.show(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Toolbar items
toolbar.show();
~~~

[comment]: # (@related: toolbar/common_methods.md#hiding-and-showing-controls)
