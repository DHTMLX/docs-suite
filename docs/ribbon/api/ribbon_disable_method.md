---
sidebar_label: disable()
title: JavaScript Ribbon - disable Method 
description: You can explore the disable method of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# disable()

@short: disables and dims an item(s) of Ribbon

@signature: {'disable(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - optional, an ID or an array of IDs of items

@example:
ribbon.disable("save_btn");
// several at a time
ribbon.disable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Ribbon. Enable / disable Ribbon item](https://snippet.dhtmlx.com/l3f8pq2g)

Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Ribbon items
ribbon.disable();
~~~

[comment]: # (@related: ribbon/operating_ribbon.md#disabling-and-enabling-controls)
