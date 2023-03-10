---
sidebar_label: getFocus()
title: JavaScript List - getFocus Method 
description: You can explore the getFocus method of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getFocus()

@short: returns the id of an item in focus

@signature: {'getFocus(): string | number;'}

@returns:
The id of an item in focus.

@example:
list.getFocus(); // -> "item_id"

@descr:

:::info
From v8.0, focusing of items isn't available when [key navigation](list/api/list_keynavigation_config.md) is disabled. Use methods of the [Selection](selection.md#methods) object.
:::

@changelog:
added in v6.3

[comment]: # (@related: list/work_with_list.md#setting-focus-on-item)
