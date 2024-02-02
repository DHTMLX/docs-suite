---
sidebar_label: forEach()
title: JavaScript Form - forEach Fieldset Method 
description: You can explore the forEach method of the Fieldset control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: allows iterating through all the nested items

@signature: {'forEach(callback: (item: obj, index: number, array: obj[]) => void, tree?: boolean): void;'}

@params:

- `callback: function` - a function that will iterate over the items of the fieldset. It is called with the following arguments:
    - `item: object` - the object of an item 
    - `index: number` - the index of an item
    - `array: object[]` - an array of iterated items
- `tree: boolean` - defines, whether all the nested items should be iterated, *false* by default

@example:
form.getItem("fieldset").forEach((item, index, arr) => {
    console.log(index, item, arr);
}, true);

@descr: