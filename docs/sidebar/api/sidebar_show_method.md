---
sidebar_label: show()
title: show()
---          

@short: shows items of Sidebar

@signature: {'show(ids: string | string[]): void;'}

@params:
`ids: string | array` - optional, an ID or an array of IDs of items

@example:
sidebar.show("search");
// several at a time
sidebar.show(["search","currentButton","edit"]);

@descr:

**Related sample**: [Sidebar. Show/Hide](https://snippet.dhtmlx.com/5hsowdoy)

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Sidebar items
sidebar.show();
~~~

[comment]: # (@related: sidebar/work_with_sidebar.md#hiding-and-showing-controls)
