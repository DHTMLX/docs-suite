---
sidebar_label: enable()
title: JavaScript Ribbon - enable Method 
description: You can explore the enable method of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# enable()

@short: enables a disabled item(s) of Ribbon

@signature: {'enable(ids: string | string[]): void;'}

@params:
`ids: string | array` - optional, one ID or an array of IDs of items

@example:
ribbon.enable("save_btn");
// several at a time
ribbon.enable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Ribbon. Enable/Disable Ribbon Item](https://snippet.dhtmlx.com/l3f8pq2g)

Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Ribbon items
ribbon.enable();
~~~

[comment]: # (@related: ribbon/operating_ribbon.md#disabling-and-enabling-controls)
