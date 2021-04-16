---
sidebar_label: add
title: add
---          

@short: adds a new item to the component

@params:
- new_item		object,array		the object of a new item or an array of item objects
- index			number 				optional, the index of the position starting from which new items will be added

@returns:
- id    string|string[]   the item's id or an array with ids of items

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

@template:	api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/ktd8ks0m	Data. Add

@changelog:
possibility to pass an array of items is added in v6.1

@related:window/customization.md#controlsandoperations