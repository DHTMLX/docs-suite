---
sidebar_label: add()
title: JavaScript DataCollection - add Method 
description: You can explore the add method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# add()

@short: adds a new item to the component

@signature: {'add(new_item: object | object[], index?: number): (string | number) | (string | number)[];'}

@params:
- `new_item: object | array` - the object of a new item or an array of item objects
- `index: number` - optional, the index of the position starting from which new items will be added

@returns:
Either item's id or an array with ids of items.

@example:
// adding a new item into the beginning of a data collection 
component.data.add({"value": 57.44787660011765, "id": "u1565340894584"},0);

// adding an array of new items into a data collection
component.data.add([
    {
        "value": 57.44787660011765,
        "id": "u1565340894584"
    },
    {
        "value": 14.612810637958095,
        "id": "u1565340894585"
    },
    {
        "value": 83.9707181117741,
        "id": "u1565340894586"
    },
    {
        "value": 59.01285878162044,
        "id": "u1565340894587"
    }
]);

@descr:

**Related sample**: [Data. Add](https://snippet.dhtmlx.com/ktd8ks0m)

@changelog: The possibility to pass an array of items is added in v6.1.

[comment]: # (@related:window/customization.md#controls-and-operations)
