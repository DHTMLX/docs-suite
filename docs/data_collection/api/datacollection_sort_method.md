---
sidebar_label: sort()
title: JavaScript DataCollection - sort Method 
description: You can explore the sort method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# sort()

@short: sorts data items in a component

@signature: {'sort(rule?: object, config?: object): void;'}

@params:
- `rule: object` - an object with parameters for sorting. The object has the following attributes:
    - `by: string | number` - the id of a data field 
    - `dir: string` - the direction of sorting: "asc" or "desc"
    - `as: function` -  a function that specifies the type to sort data as
    - `rule: function` -  optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)
- `config: object` - defines the parameter of sorting. It may contain one property:
    - `smartSorting: boolean` - specifies whether a sorting rule should be applied each time after changing the data set

@example:
grid.data.sort(
    {
        by:"a",
        dir:"desc",
        as: item => (item.toUpperCase())
    },
    { smartSorting: true }
);

// cancels the applied sorting rules
grid.data.sort();

@descr:

**Related sample**: [Data. Sorting](https://snippet.dhtmlx.com/lz351u47)

:::note 
Calling the method without parameters will discard all applied sorting rules.
:::

### Custom sorting

To set a custom function for sorting, you need to specify the `rule` attribute in a passed object. For example:

~~~jsx
grid.data.sort({
    rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

@changelog:

The `config` parameter is added in v7.0.
