---
sidebar_label: isGrouped()
title: JavaScript DataCollection - isGrouped Method 
description: Learn how the isGrouped method of DataCollection checks whether the data of a flat collection is grouped at the moment and returns true or false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# isGrouped()

@short: checks whether the data of the collection is grouped at the moment

#### Usage

~~~ts
isGrouped(): boolean;
~~~

@returns:
`true`, if the data is grouped; otherwise, `false`.

@example:
if (component.data.isGrouped()) {
    console.log("The data is currently grouped");
}

@descr:

**Related API**:
- [`group()`](data_collection/api/datacollection_group_method.md)
- [`ungroup()`](data_collection/api/datacollection_ungroup_method.md)

@changelog: added in v9.0