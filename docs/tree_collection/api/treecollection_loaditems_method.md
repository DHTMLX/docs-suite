---
sidebar_label: loadItems()
title: JavaScript TreeCollection - loadItems Method 
description: You can explore the loadItems method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# loadItems()

@short: loads child items of a control from a file

#### Usage

~~~ts
type Id = string | number;
type DataDriver = "json" | "csv" | "xml";

loadItems(id: Id, driver?: DataDriver | IDataDriver): void;
~~~

@params:
- `id: Id` - the id of the item to load the child items of
- `driver?: DataDriver | IDataDriver` - optional, the type of data ("json", "csv", "xml") or a DataDriver object, "json" by default

@example:
myToolbar.data.loadItems("menu_id");

@descr:
