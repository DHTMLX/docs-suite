---
sidebar_label: sort()
title: JavaScript TreeCollection - sort Method 
description: You can explore the sort method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# sort()

@short: sorts controls according to some criteria

@signature: {'sort(rule?: object, config?: object): void;'}

@params:
- `rule?: object` - optional, an object with parameters for sorting. The object has the following attributes:
    - `by?: string | number` - optional, the id of a data field 
    - `dir?: string` - optional, the direction of sorting: "asc" or "desc"
    - `as?: function` -  optional, a function that specifies the type to sort data as
    - `rule?: function` -  optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)
- `config?: object` - optional, defines the parameter of sorting. It may contain one property:
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

Calling the method with a `rule` but without a `config` always sets the sorting anew, discarding whatever sorting was applied before.

### Multi-level sorting

To sort by several fields at once, apply the base level with `smartSorting: true` and every next level with `smartSorting: false`:

~~~jsx
// two-level sorting: by country, then by population
component.data.sort({ by: "country", dir: "asc" }, { smartSorting: true });
component.data.sort({ by: "population", dir: "desc" }, { smartSorting: false });
~~~

While the base level has `smartSorting: true`, the sorting is maintained as items are added or updated.

`smartSorting: false` only appends a level on top of a base applied with `smartSorting: true`. Without such a base already applied, it replaces the current sorting instead of adding to it.

### Custom sorting

To set a custom function for sorting, you need to specify the `rule` attribute in a passed object. For example:

~~~jsx
component.data.sort({
    rule: (a,b) => (a.type < b.type) ? -1 : ( (a.type > b.type) ? 1 : 0 )
});
~~~

@changelog:

The `config` parameter is added in v9.0.
