---
sidebar_label: enable()
title: JavaScript Toolbar - enable Method 
description: You can explore the enable method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# enable()

@short: enables a disabled item(s) of Toolbar

@signature: {'enable(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - one ID or an array of IDs of items

@example:
toolbar.enable("save_btn");
// several at a time
toolbar.enable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Toolbar. Enable/Disable](https://snippet.dhtmlx.com/ovblenaf)

Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Toolbar items
toolbar.enable();
~~~

[comment]: # (@related: toolbar/common_methods.md#disabling-and-enabling-controls)
