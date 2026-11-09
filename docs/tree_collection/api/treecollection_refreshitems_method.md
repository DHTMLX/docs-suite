---
sidebar_label: refreshItems()
title: JavaScript TreeCollection - refreshItems Method 
description: You can explore the refreshItems method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# refreshItems()

@short: refreshes child items of a control

#### Usage

~~~ts
type Id = string | number;
type DataDriver = "json" | "csv" | "xml";

refreshItems(id: Id, driver?: DataDriver | IDataDriver): void;
~~~

@params:
- `id: Id` - the id of the item to refresh the child items of
- `driver?: DataDriver | IDataDriver` - optional, the type of data ("json", "csv", "xml") or a DataDriver object, "json" by default

@example:
toolbar.data.refreshItems("menu_id");

@descr:
