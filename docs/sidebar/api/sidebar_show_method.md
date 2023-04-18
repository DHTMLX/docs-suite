---
sidebar_label: show()
title: JavaScript Sidebar - show Method 
description: You can explore the show method of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# show()

@short: shows items of Sidebar

@signature: {'show(ids?: (string | number) | (string | number)[]): void;'}

@params:
- `ids: string | number | array` - optional, an ID or an array of IDs of items

@example:
sidebar.show("search");
// several at a time
sidebar.show(["search","currentButton","edit"]);

@descr:

**Related sample**: [Sidebar. Show/hide](https://snippet.dhtmlx.com/5hsowdoy)

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Sidebar items
sidebar.show();
~~~

[comment]: # (@related: sidebar/work_with_sidebar.md#hiding-and-showing-controls)
