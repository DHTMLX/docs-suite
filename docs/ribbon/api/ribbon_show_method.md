---
sidebar_label: show()
title: JavaScript Ribbon - show Method 
description: You can explore the show method of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# show()

@short: shows an item of Ribbon

@signature: {'show(ids: string | string[]): void;'}

@params:
`ids: string | array` - optional, an ID or an array of IDs of items

@example:
ribbon.show("save_btn");
// several at a time
ribbon.show(["cancel_btn","del_btn"]);

@descr:

**Related sample**: [Ribbon. Show/Hide Ribbon Item](https://snippet.dhtmlx.com/1jkf7954)

Starting from v7.0, it is possible to show all items on the page at once by using the method without the parameter:

~~~js
// shows all Ribbon items
ribbon.show();
~~~

[comment]: # (@related: ribbon/operating_ribbon.md#hiding-and-showing-controls)
