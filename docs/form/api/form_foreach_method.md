---
sidebar_label: forEach()
title: JavaScript Form - forEach Method 
description: You can explore the forEach method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: iterates over all controls of a form

@signature: {'forEach(callback: (item: object, index: number, array: array) => any): void;'}

@params:
- `callback: function` - a function that will iterate over Form controls. The callback function takes three parameters:
 	- `item: object` - the object of a form control
 	- `index: number` - the index of a form control
 	- `array: array` - an array with form controls

@example:
form.forEach(function(item, index, array) {
    console.log("This is the form control: ", item);
    console.log("This is the index of form control : ", index);
    console.log("This is the array with form controls: ", array);
});

@descr:

**Related sample**: [Form. ForEach](https://snippet.dhtmlx.com/hqzqpavs)

@changelog: added in v6.4
