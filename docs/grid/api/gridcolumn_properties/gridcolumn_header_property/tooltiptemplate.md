---
sidebar_label: tooltipTemplate
title: JavaScript Grid column header - tooltipTemplate Config 
description: You can explore the tooltipTemplate config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltipTemplate

@short: Optional. Sets a template for the header tooltip, taking into account the `htmlEnable` property

#### Usage

~~~jsx
tooltipTemplate?: (
    content: {
        [key: string]: string | number | null;
        value: string;
    },
    header: IHeader,
    column: ICol
) => string | boolean;
~~~

@params:
The value of the `tooltipTemplate` property is a callback function which is called with the following parameters:

- `content` - an object with the content of the header tooltip. Contains two properties which are available either from the component's or from the column's configuration:
	- `value` - the value rendered in a cell, including the applied templates
	- an object with the calculated values of the `summary` property, set as *key:value* pairs, where:
		- the *key* is either the key defined in the list or the functor name
		- the *value* can be a *string/number* or *null*
- `header` - the object of the column header
- `column` - the object of a column

Return *false* to disable the tooltip.

@example:

const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [
                {
                    text: "Population",
                    tooltipTemplate: ({ totalPopulation, count }) => `Total: ${totalPopulation}, Count: ${ count }`
                }
            ],
            summary: "count"
        }
        // more columns configuration objects
    ]
    // more options
});

@descr:
**Related article**: [Column header/footer tooltip](/grid/configuration/#column-headerfooter-tooltip)

**Related sample**: [Grid. Header/footer tooltips](https://snippet.dhtmlx.com/fgstf2mq)