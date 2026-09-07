---
sidebar_label: changeId()
title: JavaScript DataCollection - changeId Method 
description: You can explore the changeId method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# changeId()

@short: changes the id of an element of a data collection

#### Usage

~~~ts
type Id = string | number;
changeId(id: Id, newId?: Id, silent?: boolean): Id;
~~~

@params:
- `id: Id` - the old id of an item
- `newId?: Id` - optional, the new id; auto-generated if not set
- `silent?: boolean` - optional, if set to *true*, the method will not trigger the [change](data_collection/api/datacollection_change_event.md) event; otherwise, *false*

@returns:
The new id of the item, or the original id if the change was rejected.

@example:
// changing the id of an item
component.data.changeId("1", "22"); // -> "22"

// the new id is generated automatically
const generatedId = component.data.changeId("22");

// changing the id without triggering the change event
component.data.changeId(generatedId, "33", true);

@descr:

@changelog:

- The return value was added in v9.4
- The method was added in v6.4
