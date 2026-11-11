---
sidebar_label: afterLazyLoad
title: JavaScript DataCollection - afterLazyLoad Event 
description: Learn when the afterLazyLoad event of DataCollection fires once the server responds to a dynamic loading request, with the start index and the number of items. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterLazyLoad

@short: fires after the collection gets a response from the server

#### Usage

~~~ts
afterLazyLoad: (from: number, count: number) => void;
~~~

@params:
- `from: number` - the index of the first loaded item
- `count: number` - the count of records loaded from the server

@example:
component.data.events.on("afterLazyLoad", function (from, count) {
    // your code here
});

@descr:

**Related article**: [Dynamic loading](helpers/lazydataproxy.md)

**Related API**:
- [`beforeLazyLoad`](data_collection/api/datacollection_beforelazyload_event.md)
- [`isDataLoaded()`](data_collection/api/datacollection_isdataloaded_method.md)
