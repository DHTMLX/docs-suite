---
sidebar_label: eachParent()
title: JavaScript TreeCollection - eachParent Method 
description: You can explore the eachParent method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# eachParent()

@short: iterates through all the parent items (the immediate parent and its parent, etc until the parent is the component itself)

@signature: {'eachParent(id: Id, callback: DataCallback<T>, self?: boolean): void;'}

@params:
- `id: string` - the ID of the item
- `callback: function` - the function that will be applied to each parent of the item
- `self: boolean` - optional, defines whether the function should iterate over the specified item itself; *false* by default

@example:
toolbar.data.eachParent("new_btn", item => console.log(item));

@descr:
