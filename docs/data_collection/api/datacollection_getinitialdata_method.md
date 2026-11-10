---
sidebar_label: getInitialData()
title: JavaScript DataCollection - getInitialData Method 
description: You can explore the getInitialData method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getInitialData()

@short: returns all the items of the collection, including the filtered-out ones

#### Usage

~~~ts
getInitialData(): IDataItem[];
~~~

@returns:
An array with all the items of the collection, including the ones the applied filters leave out, or `null` if no filter is applied.

@example:
const startingData = component.data.getInitialData();

@descr:

**Related sample**: [Data. Get initial data](https://snippet.dhtmlx.com/l6wun9j4)
