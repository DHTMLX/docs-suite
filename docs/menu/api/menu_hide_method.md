---
sidebar_label: hide()
title: JavaScript Menu - hide Method 
description: You can explore the hide method of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# hide()

@short: hides an item of Menu

@signature: {'hide(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - optional, one ID or an array of IDs of items

@example:
menu.hide("save_btn");
// several at a time
menu.hide(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Menu. Show / hide menu item](https://snippet.dhtmlx.com/a9vbhxgd)

Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Menu items
menu.hide();
~~~
