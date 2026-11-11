---
sidebar_label: find()
title: JavaScript DataCollection - find Method 
description: Learn how the find method of DataCollection searches a flat collection for the first item that matches a rule object or a function and returns the item or null. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# find()

@short: returns the first item of the collection that matches the specified rule

#### Usage

~~~ts
type Id = string | number;

find(rule: { by: Id; match: string | number | boolean } | ((item: IDataItem, index?: number, array?: IDataItem[]) => any)): IDataItem;
~~~

@params:
- `rule: object | function` - the search criteria:
    - if set as an object, the parameter contains the following attributes:
        - `by: Id` - the key of the item attribute
        - `match: string | number | boolean` - the value of the item attribute
    - if set as a function, the search will be applied by the rule specified in the function. The function is called with the following parameters:
        - `item: IDataItem` - the object of an item
        - `index?: number` - optional, the index of the item
        - `array?: IDataItem[]` - optional, the array of items the method was called upon

@returns:
The object of the first matching item, or `null` if no item matches the rule.

@example:
// searching for an item by the function
const item = component.data.find(function (item) {
    if (item.text === "Manager" || item.text === "Marketer") {
        return true
    }
});

// searching for an item by the attribute key
const item = component.data.find({ by: "text", match: "Manager" });

@descr:

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)

**Related API**:
- [`findAll()`](data_collection/api/datacollection_findall_method.md)
- [`filter()`](data_collection/api/datacollection_filter_method.md)
