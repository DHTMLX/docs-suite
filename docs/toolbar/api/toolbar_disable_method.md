---
sidebar_label: disable()
title: JavaScript Toolbar - disable Method 
description: You can explore the disable method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# disable()

@short: disables and dims an item(s) of Toolbar

@signature: {'disable(ids: Id | Id[]): void;'}

@params:
- `ids: string | number | array` - an ID or an array of IDs of items

@example:
toolbar.disable("save_btn");
// several at a time
toolbar.disable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Toolbar items
toolbar.disable();
~~~

[comment]: # (@related: toolbar/common_methods.md#disabling-and-enabling-controls)
