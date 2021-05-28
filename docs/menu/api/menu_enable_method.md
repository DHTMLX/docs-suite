---
sidebar_label: enable()
title: JavaScript Menu - enable Method 
hide_title: true
description: You can explore the enable method of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# enable()

@short: enables a disabled item(s) of Menu

@signature: {'enable(ids: string | string[]): void;'}

@params:
`ids: string | array` - optional, one ID or an array of IDs of items

@example:
menu.enable("save_btn");
// several at a time
menu.enable(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Menu. Enable/Disable Menu Item](https://snippet.dhtmlx.com/zuoam7r7)

Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Menu items
menu.enable();
~~~
