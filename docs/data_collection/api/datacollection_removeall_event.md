---
sidebar_label: removeAll
title: JavaScript DataCollection - removeAll Event 
description: Learn when the removeAll event of DataCollection fires after all the items are removed from a flat collection at once with the removeAll method. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# removeAll

@short: fires when all items are removed from the collection

#### Usage

~~~ts
removeAll: () => void;
~~~

@example:
component.data.events.on("removeAll", () => {
    console.log("Items are removed");
});

@descr:

**Related API**:
- [`removeAll()`](data_collection/api/datacollection_removeall_method.md)
