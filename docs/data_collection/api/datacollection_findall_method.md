---
sidebar_label: findAll()
title: JavaScript DataCollection - findAll Method 
description: You can explore the findAll method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# findAll()

@short: returns all the items of the collection that match the specified rule

#### Usage

~~~ts
type Id = string | number;

findAll(rule: { by: Id; match: string | number | boolean } | ((item: IDataItem, index?: number, array?: IDataItem[]) => any)): IDataItem[];
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
An array with the objects of the matching items; an empty array if no item matches the rule.

@example:
// searching for items by the function
const items = component.data.findAll(function (items) {
    if (items.text === "Manager" || items.text === "Marketer") {
        return true
    }
});

// searching for items by the attribute key
const items = component.data.findAll({ by: "text", match: "Manager" });

@descr:

**Related sample**: [Data. Find all](https://snippet.dhtmlx.com/kvemrz93)
