---
sidebar_label: hide()
title: JavaScript Toolbar - hide Method 
description: You can explore the hide method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# hide()

@short: hides an item of Toolbar

@signature: {'hide(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - one ID or an array of IDs of items

@example:
toolbar.hide("save_btn");
// several at a time
toolbar.hide(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Toolbar items
toolbar.hide();
~~~

[comment]: # (@related: toolbar/common_methods.md#hiding-and-showing-controls)
