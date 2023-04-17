---
sidebar_label: getId()
title: JavaScript TreeCollection - getId Method 
description: You can explore the getId method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getId()

@short: gets the ID of an item

@signature: {'getId(index: number, parentId?: string | number): string | number;'}

@params:
- `index: number` - the index of the item
- `parentId: string | number` - the id of the parent of an item

@returns:
The id of the item.

@example:
const id = tree.data.getId(2, "1"); -> returns "3"

@descr:
