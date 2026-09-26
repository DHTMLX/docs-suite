---
sidebar_label: header 
title: JavaScript Grid - Grid Column Header Properties 
description: You can explore the Grid column header properties of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Grid column header properties

The Grid column `header` is a required property that presents an array of objects with header rows configuration. This section contains the list of the column header objects' properties. Click the name of the necessary property to see the details on its usage.

## Usage

~~~jsx
header: [
    {
        text?:
            string |
            ((content: {
                [key: string]: string | number | null
            }) => string),
        tooltip?: boolean | object, // true by default
        tooltipTemplate?: (
            content: {
                [key: string]: string | number | null;
                value: string;
            },
            header: IHeader,
            column: ICol
        ) => string | boolean,
        align?: "left" | "center" | "right", // "left" by default
        colspan?: number,
        rowspan?: number,
        css?: string,
        content?: "inputFilter" | "selectFilter" | "comboFilter" | "dateFilter",
        filterConfig?: object,
        customFilter?: (
            value: string | number | Date | Date[],
            match: string | string[] | Date | Date[]
        ) => boolean,
        headerSort?: boolean, // true by default
        sortAs?: (cellValue) => string | number,
        htmlEnable?: boolean, // false by default
    }
];
~~~

## Properties

|  Property                                                                          |        Description                                     |
|---------------------------------------------------------------------------------- |------------------------------------------------------- |
| [`align`](grid/api/gridcolumn_properties/gridcolumn_header_property/align.md)     | (optional) aligns data in the header                   |
| [`colspan`](grid/api/gridcolumn_properties/gridcolumn_header_property/colspan.md) | (optional) the number of columns in a colspan          |
| [`content`](grid/api/gridcolumn_properties/gridcolumn_header_property/content.md) | (optional) defines the content of the column header, including the filter type  |
| [`css`](grid/api/gridcolumn_properties/gridcolumn_header_property/css.md)         | (optional) styling to be applied to a header           |
| [`customFilter`](grid/api/gridcolumn_properties/gridcolumn_header_property/customfilter.md) | (optional) a callback function that allows defining custom filtering logic   |
| [`filterConfig`](grid/api/gridcolumn_properties/gridcolumn_header_property/filterconfig.md) | (optional) a configuration object for setting the behavior and appearance of the filter   |
| [`headerSort`](grid/api/gridcolumn_properties/gridcolumn_header_property/headersort.md)     | (optional) enables/disables sorting by clicking the header    |
| [`htmlEnable`](grid/api/gridcolumn_properties/gridcolumn_header_property/htmlenable.md)     | (optional) allows using and displaying HTML content in a header   |
| [`rowspan`](grid/api/gridcolumn_properties/gridcolumn_header_property/rowspan.md) | (optional) the number of rows in a rowspan             |
| [`sortAs`](grid/api/gridcolumn_properties/gridcolumn_header_property/sortas.md)   | (optional) a function that defines the type to sort data as (e.g. string, number, date, etc.)    |
| [`text`](grid/api/gridcolumn_properties/gridcolumn_header_property/text.md)       | (optional) the text of a header                        |
| [`tooltip`](grid/api/gridcolumn_properties/gridcolumn_header_property/tooltip.md) | (optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings  |
| [`tooltipTemplate`](grid/api/gridcolumn_properties/gridcolumn_header_property/tooltiptemplate.md) | (optional) sets a template for the header tooltip, taking into account the `htmlEnable` property      |

## Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "title", header: [{ text: "Title" }] },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related articles:**
- [Configuration](grid/configuration.md)
- [Grid column properties](grid/api/api_gridcolumn_properties.md)

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)
