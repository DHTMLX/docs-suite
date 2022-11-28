---
sidebar_label: show()
title: JavaScript Menu - show Method 
description: You can explore the show method of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# show()

@short: shows an item of Menu

@signature: {'show(ids: Id | Id[]): void;'}

@params:
- `ids: string | number | array` - optional, an ID or an array of IDs of items

@example:
menu.show("save_btn");
// several at a time
menu.show(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Menu. Show / hide menu item](https://snippet.dhtmlx.com/a9vbhxgd)

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Menu items
menu.show();
~~~
