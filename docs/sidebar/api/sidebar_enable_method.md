---
sidebar_label: enable()
title: JavaScript Sidebar - enable Method 
description: You can explore the enable method of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# enable()

@short: enables disabled items of Sidebar

@signature: {'enable(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - optional, one ID or an array of IDs of items

@example:
sidebar.enable("search");
// several at a time
sidebar.enable(["search", "currentButton", "edit"]);

@descr:

**Related sample**: [Sidebar. Enable/Disable](https://snippet.dhtmlx.com/ea9fywne)

Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Sidebar items
sidebar.enable();
~~~

[comment]: # (@related: sidebar/work_with_sidebar.md#disabling-and-enabling-controls)
