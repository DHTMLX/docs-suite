---
sidebar_label: forEach()
title: JavaScript DataCollection - forEach Method 
description: You can explore the forEach method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: iterates over all items of a data collection

@signature: {'forEach(callback: (item: object, index?: number, array?: object[]) => any): void;'}

@params:
- `callback: function` - a function that will iterate over items of a data collection. The function is called with the following parameters:
    - `item` - the object of an item
    - `index` - the index of an item
    - `array` - an array of items the method was called upon

@example:
component.data.forEach(function(item, index, array) {
    console.log("This is an item of dataCollection: ", item);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@descr:

**Related sample**: [Data. ForEach](https://snippet.dhtmlx.com/wa6tcmtn)

@changelog: added in v6.4
