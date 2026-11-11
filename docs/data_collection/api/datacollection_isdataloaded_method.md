---
sidebar_label: isDataLoaded()
title: JavaScript DataCollection - isDataLoaded Method 
description: Learn how the isDataLoaded method of DataCollection checks whether the items of the specified range are already loaded from the server when data is loaded dynamically. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# isDataLoaded()

:::tip pro version only
The method works with the [Dynamic loading](helpers/lazydataproxy.md) functionality which is available in the PRO edition only.
:::

@short: checks whether the specified data range is loaded from the server

#### Usage

~~~ts
isDataLoaded(from?: number, to?: number): boolean;
~~~

@params:
- `from?: number` - optional, the index of the first item of the data range to be checked
- `to?: number` - optional, the index of the last item of the data range to be checked

@returns:
`true`, if a range of data is loaded; otherwise, `false`.

@example:
component.data.isDataLoaded();

@descr:

**Related article**: [Dynamic loading](helpers/lazydataproxy.md)

**Related API**:
- [`beforeLazyLoad`](data_collection/api/datacollection_beforelazyload_event.md)
- [`afterLazyLoad`](data_collection/api/datacollection_afterlazyload_event.md)

@changelog: added in v6.4
