---
sidebar_label: Sorting and filtering data
title: JavaScript Guides - Sorting and filtering data 
description: You can learn how to sort and filter data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Sorting and filtering data 

When working with data you may need to sort or filter it. You can sort or filter the data of a component via the DataCollection API.

## Sorting data

To sort data items in a component, use the [`sort()`](data_collection/api/datacollection_sort_method.md) method of [DataCollection](data_collection.md). The method takes two parameters:

- `rule: object` - an object with parameters for sorting. The object has the following attributes:
    - `by: string | number` - the id of a data field (a column of Grid)
    - `dir: string` - the direction of sorting: "asc" or "desc"
    - `as: function` -  a function that specifies the type to sort data as
    - `rule: function` - optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)
- `config: object` - defines the parameter of sorting. It may contain one property:
    - `smartSorting: boolean` - specifies whether a sorting rule should be applied each time after changing the data set

~~~jsx
grid.data.sort({
    by:"a",
    dir:"desc",
    as: function(item){
        return item.toUpperCase(); 
    },
    {
        smartSorting: true
    }
});

// cancels the applied sorting rules
grid.data.sort();
~~~

**Related sample**: [Data. Sorting](https://snippet.dhtmlx.com/lz351u47)

:::note 
Calling the method without parameters will discard all the applied sorting rules.
:::

### Custom sorting

To set a custom function for sorting, you need to specify the `rule` attribute in a passed object. For example:

~~~jsx
grid.data.sort({
    rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

## Filtering data

To filter data items in a component, use the [`filter()`](data_collection/api/datacollection_filter_method.md) method of [DataCollection](data_collection.md). The method takes two parameters:

- `rule: function | object` - the filtering criteria
    - If set as a *function*, filtering will be applied by the rule specified in the function. The function takes an object of a data item as a parameter and returns *true/false*
    - If set as an *object*, the parameter has the following attributes:
        - `by: string | number` - mandatory, the id of a data field (the column of Grid)
        - `match: string` - mandatory, a pattern to match
        - `compare: function` - optional, a function for extended filtering that takes three parameters:
            - `value` - the value to compare (e.g. a column in a row for Grid)
            - `match` - a pattern to match
            - `item` - a data item the values of which should be compared (e.g. a row)
- `config: object` - optional, defines the parameters of filtering. It may contain the following properties: 
    - `id: string` - optional, the id of the filter
    - `add: boolean` - optional, defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
    - `permanent: boolean` - optional, *true* to make the current filter permanent. It will be applied even if the next filtering doesn't have the `add:true` property in its configuration object. Such a filter can be removed just with the [resetFilter()](data_collection/api/datacollection_resetfilter_method.md) method

The `filter()` method returns the id of the filter.

~~~jsx
// filtering data by a function
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});

// or
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true,
});

// filtering data by the column
grid.data.filter({
    by: "a",
    match: "Orange",
    compare: function (value, match, item) {
        if (item.a !== "Some") {
            return val === "New";
        }
    return false;
    }
}, {
    add: true,
});
~~~

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)
