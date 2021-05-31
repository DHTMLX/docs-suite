---
sidebar_label: update()
title: JavaScript DataCollection - update Method 
hide_title: true
description: You can explore the update method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# update()

@short: updates properties of the item

@signature: {'updateUrl?: (id: string | number, newItem: IUpdateObject) => void;'}

@params:
- `id: string | number` - the id of the item which needs to be updated
- `newItem: object` - a hash of properties which need to be updated

@example:
component.data.update(123, { text:"New text" });

@descr:

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

[comment]: # (@related:window/customization.md#controls-and-operations)
