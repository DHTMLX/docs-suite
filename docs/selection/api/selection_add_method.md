---
sidebar_label: add()
title: JavaScript Selection - add Method 
description: You can explore the add method of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# add()

@short: selects a specified item

@signature: {'add(id: string | number): void;'}

@params:
- `id: string | number` - the id of an item

@example:
const id = component.selection.getId(); // -> "2"
component.selection.add("2");

@descr:

:::note 
The method can be used in the [DataView](/dataview/usage_selection/), [List](/list/usage_selection/), [Tree](/tree/usage_selection/) components.
:::

Starting from v7.0, the method selects all unselected items when calling without parameters (in **List/DataView**):

~~~js
component.selection.add();
~~~
