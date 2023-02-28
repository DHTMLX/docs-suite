---
sidebar_label: hide()
title: JavaScript Sidebar - hide Method 
description: You can explore the hide method of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# hide()

@short: hides items of Sidebar

@signature: {'hide(ids: Id | Id[]): void;'}

@params:
- `ids: string | number | array` - optional, an ID or an array of IDs of items

@example:
sidebar.hide("search");
// several at a time
sidebar.hide(["search","currentButton","edit"]);

@descr:

**Related sample**: [Sidebar. Show/hide](https://snippet.dhtmlx.com/5hsowdoy)

Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Sidebar items
sidebar.hide();
~~~

[comment]: # (@related: sidebar/work_with_sidebar.md#hiding-and-showing-controls)
