---
sidebar_label: disable()
title: JavaScript Sidebar - disable Method 
description: You can explore the disable method of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# disable()

@short: disables and dims items of Sidebar

@signature: {'disable(ids: Id | Id[]): void;'}

@params:
- `ids: string | number | array` - optional, the ID or an array of IDs of items

@example:
sidebar.disable("search");
// several at a time
sidebar.disable(["search", "currentButton", "edit"]);

@descr:

**Related sample**: [Sidebar. Enable/disable](https://snippet.dhtmlx.com/ea9fywne)

Starting from v7.0, it is possible to disable all items at once by using the method without the parameter:

~~~js
// disables all Sidebar items
sidebar.disable();
~~~

[comment]: # (@related: sidebar/work_with_sidebar.md#disabling-and-enabling-controls)
