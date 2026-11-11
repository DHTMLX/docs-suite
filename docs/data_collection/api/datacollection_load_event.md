---
sidebar_label: load
title: JavaScript DataCollection - load Event 
description: Learn when the load event of DataCollection fires when items are loaded into a flat collection from a local data source or from the server. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# load

@short: fires when items are loaded into the collection

#### Usage

~~~ts
load: () => void;
~~~

@example:
component.data.events.on("load", function(){
    console.log("Items are loaded.");
});

@descr:

**Related API**:
- [`load()`](data_collection/api/datacollection_load_method.md)
- [`parse()`](data_collection/api/datacollection_parse_method.md)
