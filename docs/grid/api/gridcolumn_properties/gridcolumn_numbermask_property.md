---
sidebar_label: numberMask
title: JavaScript Grid column - numberMask Config 
description: You can explore the numberMask config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# numberMask

@short: Optional. Sets an input mask for entering number values

## Usage

~~~jsx
numberMask?:
    | {
        prefix?: string, // "" by default (before the value)
        suffix?: string, // "" by default (after the value)
        groupSeparator?: string, // "," by default
        decSeparator?: string, // "." by default
        allowNegative?: boolean, // true by default
        maxIntLength?: number, 
        maxDecLength?: number, 
        minDecLength?: number // 0 by default
      }
    | boolean,
~~~

## Parameters

The `numberMask` property can be set in two ways:

- as an *object* with the following properties:
	- **prefix** - renders a text before the resulting value
	- **suffix** - renders a text after the resulting value
	- **groupSeparator** - sets a separator for thousands
	- **decSeparator** - sets a separator for decimals
	- **allowNegative** - allows using negative numbers
	- **maxIntLength** - allows setting the maximal length of an integer
	- **maxDecLength** - allows setting the maximal length of a decimal
	- **minDecLength** - allows setting the minimal rendered length of a decimal
- as a *boolean* value converts the number value displayed in the input field into one of the predefined templates

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 130,
            id: "cost",
            header: [{ text: "Cost" }, { content: "inputFilter" }],
            numberMask: {
                prefix: "$",
                groupSeparator: ",",
                decSeparator: ".",
                maxIntLength: 7,
                maxDecLength: 2,
                minDecLength: 0
            },
        },
        // more columns
    ],
    data: dataset
});

@descr:

**Related article**: [numberMask](grid/configuration.md#numbermask)

**Related sample**: [Grid. Pattern and number masks](https://snippet.dhtmlx.com/45gjhciv)