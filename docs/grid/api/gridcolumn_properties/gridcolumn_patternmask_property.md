---
sidebar_label: patternMask
title: JavaScript Grid column - patternMask Config 
description: You can explore the patternMask config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# patternMask

@short: Optional. Sets an input mask for entering number and string values according to a special pattern

### Usage

~~~jsx
patternMask?:
    | {
        pattern: ((value: string | number) => string) | string,
        charFormat?: {
            [char: string]: RegExp
        }
      }
    | string,
~~~

### Parameters

The `patternMask` property can be set in two ways:
- as an *object* with the following properties:
	- **pattern** - (*function* | *string*) allows specifying the necessary mask and change it dynamically, depending on the entered values. Can be set as:
		- a *function* that takes as a parameter an entered value specified as a string or as a number and returns a string with a pattern mask
		- a *string* with a pattern mask
	- **charFormat** - (*object*) allows specifying a regular expression for an optional symbol. It is set as an object with *key:value* pairs, where the *key* is a symbol and the *value* is a regular expression
- as a *string* allows setting a mask as a string using a predefined set of symbols

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {  
            id: "employee_id", 
            header: [{ text: "Employee ID" }], 
            width: 110, 
            patternMask: "ID.000" 
        },
        // more columns
    ],
    data: dataset
});
~~~

**Related article**: [patternMask](grid/configuration.md#patternmask)

**Related sample**: [Grid. Pattern and number masks](https://snippet.dhtmlx.com/45gjhciv)