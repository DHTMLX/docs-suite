---
sidebar_label: changeId()
title: JavaScript DataCollection - changeId Method 
description: You can explore the changeId method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# changeId()

@short: changes the id of an element of a data collection

@signature: {'changeId(id: string | number, newId?: string | number, silent?: boolean): void;'}

@params:
- `id: string | number` - the old id of an item
- `newId: string | number` - optional, the new id; auto-generated if not set
- `silent: boolean` - true, to prevent changing the id; otherwise, false

@example:
component.data.changeId("1", "22");

@descr:

@changelog: added in v6.4
