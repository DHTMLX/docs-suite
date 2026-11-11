---
sidebar_label: beforeLazyLoad
title: JavaScript DataCollection - beforeLazyLoad Event 
description: Learn when the beforeLazyLoad event of DataCollection fires before a dynamic loading request is sent to the server and how to block it by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeLazyLoad

@short: fires before the collection sends a request to the server

#### Usage

~~~ts
beforeLazyLoad: () => boolean | void;
~~~

@returns:
Return `false` to block sending a request to the server; otherwise, `true`.

@example:
component.data.events.on("beforeLazyLoad", function () {
    // your code here
    return false;
});

@descr:

**Related article**: [Dynamic loading](helpers/lazydataproxy.md)

**Related API**:
- [`afterLazyLoad`](data_collection/api/datacollection_afterlazyload_event.md)
- [`isDataLoaded()`](data_collection/api/datacollection_isdataloaded_method.md)

@changelog:
added in v6.4
