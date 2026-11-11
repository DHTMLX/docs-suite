---
sidebar_label: sort()
title: JavaScript TreeCollection - sort Method 
description: Learn how the sort method of TreeCollection orders the items on every level of a tree collection by a field, by a custom rule or by several rules. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# sort()

@short: sorts the items of the collection by the specified criteria

#### Usage

~~~ts
interface ISortMode {
    by?: string | number;
    dir?: "asc" | "desc";
    as?: (value: any) => any;
    rule?: (a: IDataItem, b: IDataItem) => number;
}
interface ISortConfig {
    smartSorting?: boolean;
}

sort(rule?: ISortMode, config?: ISortConfig): void;
~~~

@params:
- `rule?: ISortMode` - optional, an object with parameters for sorting. The object has the following attributes:
    - `by?: string | number` - optional, the id of a data field
    - `dir?: "asc" | "desc"` - optional, the direction of sorting, *"asc"* by default
    - `as?: function` - optional, a function that specifies the type to sort data as. It is called with the value of the field and returns the value to compare
    - `rule?: function` - optional, a sorting rule. It is called with two data items and returns a number (-1, 0, 1)
- `config?: ISortConfig` - optional, defines the parameters of sorting. It may contain one property:
    - `smartSorting?: boolean` - optional, specifies whether a sorting rule should be applied each time after changing the data set

@example:
component.data.sort(
    {
        by: "price",
        dir: "asc",
        as: value => (value || "") 
    },
    { smartSorting: true }
);

// cancels the applied sorting rules
component.data.sort();

@descr:

:::note 
Calling the method without parameters will discard all applied sorting rules.
:::

### Custom sorting

To set a custom function for sorting, you need to specify the `rule` attribute in a passed object. For example:

~~~jsx
component.data.sort({
    rule: (a,b) => (a.type < b.type) ? -1 : ( (a.type > b.type) ? 1 : 0 )
});
~~~

**Related API**:
- [`getSortingStates()`](tree_collection/api/treecollection_getsortingstates_method.md)
- [`restoreOrder()`](tree_collection/api/treecollection_restoreorder_method.md)

@changelog:

The `config` parameter is added in v9.0.
