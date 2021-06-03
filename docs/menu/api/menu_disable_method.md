---
sidebar_label: disable()
title: JavaScript Menu - disable Method 
description: You can explore the disable method of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# disable()

@short: disables and dims an item(s) of Menu

@signature: {'disable(ids: string | string[]): void;'}

@params:
`ids: string | array` - optional, an ID or an array of IDs of items

@example:
menu.disable("save_btn");
// several at a time
menu.disable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Menu. Enable/Disable Menu Item](https://snippet.dhtmlx.com/zuoam7r7)

Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Menu items
menu.disable();
~~~
