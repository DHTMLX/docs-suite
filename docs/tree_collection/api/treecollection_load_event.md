---
sidebar_label: load
title: JavaScript TreeCollection - load Event 
description: Learn when the load event of TreeCollection fires when hierarchical data is loaded into a tree collection from a local data source or from the server. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# load

@short: fires when items are loaded into the collection

#### Usage

~~~ts
load: () => void;
~~~

@example:
component.data.events.on("load", () => {
    console.log("Items are loaded.");
});

@descr:

**Related API**:
- [`load()`](tree_collection/api/treecollection_load_method.md)
- [`parse()`](tree_collection/api/treecollection_parse_method.md)
