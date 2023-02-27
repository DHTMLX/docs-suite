---
sidebar_label: mapVisible()
title: JavaScript TreeCollection - mapVisible Method 
description: You can explore the mapVisible method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# mapVisible()

@short: iterates through all visible items

@signature: {'mapVisible(callback: DataCallback<T>, id?: string | number, direct?: boolean): any;'}

@params:
- `callback: function` - the function that will be applied to every visible item
- `id: string | number` - the ID of a control the child items of which will be included
- `direct: boolean` - defines whether only direct children of the control will be included in the iteration

@example:
treegrid.data.mapVisible(item => console.log(item),"parent_id", true);

@descr:

{{note The method is used in TreeGridCollection only.}}

{{note The method iterates through the visible items, i.e through the items that are not hidden or collapsed.}}

@changelog: added in v7.2