---
sidebar_label: hide()
title: JavaScript Ribbon - hide Method 
description: You can explore the hide method of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# hide()

@short: hides an item of Ribbon

@signature: {'hide(ids: Id | Id[]): void;'}

@params:
`ids: string | number | array` - optional, an ID or an array of IDs of items

@example:
ribbon.hide("save_btn");
// several at a time
ribbon.hide(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Ribbon. Show/Hide Ribbon Item](https://snippet.dhtmlx.com/1jkf7954)

Starting from v7.0, it is possible to hide all items at once by using the method without the parameter:

~~~js
// hides all Ribbon items
ribbon.hide();
~~~

[comment]: # (@related: ribbon/operating_ribbon.md#hiding-and-showing-controls)
