---
sidebar_label: enable
title: enable
---          

@short: enables disabled items of Sidebar

@signature: {'enable(ids: string | string[]): void;'}

@params:
- ids 		string,array		optional, one ID or an array of IDs of items

@example:
sidebar.enable("search");
// several at a time
sidebar.enable(["search", "currentButton", "edit"]);



@descr:

Starting from v7.0, it is possible to enable all items at once by using the method without the parameter:

~~~js
// enables all Sidebar items
sidebar.enable();
~~~



**Related sample**:
- [Sidebar. Enable/Disable](https://snippet.dhtmlx.com/ea9fywne)



@related: sidebar/work_with_sidebar.md#disabling-and-enabling-controls
