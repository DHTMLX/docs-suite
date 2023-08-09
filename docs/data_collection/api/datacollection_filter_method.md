---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters data items in a component

@signature: {'filter(rule?: function | object, config?: object): void;'}

@params:
- `rule: function | object` - the filtering criteria
    - If set as a *function*, filtering will be applied by the rule specified in the function. The function takes an object of a data item as a parameter and returns *true/false*
    - If set as an *object*, the parameter has the following attributes:
        - `by: string | number` - mandatory, the id of a data field (the column of Grid)
        - `match: string` - mandatory, a pattern to match
        - `compare: function` - optional, a function for extended filtering that takes three parameters:
            - `value` - the value to compare (e.g. a column in a row for Grid)
            - `match` - a pattern to match
            - `item` - a data item the values of which should be compared (e.g. a row)
- `config: object` - optional, defines the parameters of filtering. It may contain two properties: 
    - `add: boolean` - defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
	- `smartFilter: boolean` defines whether a filtering rule will be applied after adding and editing items of the collection

@example:
// filtering data by a function
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});

// or
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true,
    smartFilter: true
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
    smartFilter: true
});

@descr:

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)

Calling the **filter()** method without parameters reverts the component to the initial state:

~~~js
grid.data.filter();
~~~
