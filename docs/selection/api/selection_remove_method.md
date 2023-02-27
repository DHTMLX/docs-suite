---
sidebar_label: remove()
title: JavaScript Selection - remove Method 
description: You can explore the remove method of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# remove()

@short: unselects a previously selected item

@signature: {'remove(id?: string | number): boolean;'}

@params:
- `id: string | number` - optional, the id of an item

@returns:
`true` if an item is unselected; otherwise, `false`.

@example:
component.selection.remove("1"); // -> true

@descr:

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
component.selection.remove();
~~~
