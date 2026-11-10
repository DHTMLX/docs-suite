---
sidebar_label: removeAll()
title: JavaScript TreeCollection - removeAll Method 
description: You can explore the removeAll method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# removeAll()

@short: removes all the items of a branch or of the whole collection

#### Usage

~~~ts
type Id = string | number;
removeAll(id?: Id): void;
~~~

@params:
- `id?: Id` - optional, the id of the branch; if not set, all the items of the collection are removed

@example:
toolbar.data.removeAll(id);

@descr:
When called without the parameter, the method removes all the items of the collection.