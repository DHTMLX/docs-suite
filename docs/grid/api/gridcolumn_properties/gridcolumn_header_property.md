---
sidebar_label: header
title: JavaScript Grid column - header Config 
description: You can explore the header config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# header

@short: Required. An array of objects with header rows configuration

## Usage

~~~jsx
header: [
    {
        text?: string | ((content: {
            [key: string]: string | number | null
        }) => string),
        tooltip?: boolean | object, // true by default
        tooltipTemplate?: (
            content: { value: string } & { [key: string]: string | number | null },
            header: IHeader,
            column: ICol
        ) => string | boolean,
        align?: "left" | "center" | "right", // "left" by default
        colspan?: number,
        rowspan?: number,
        css?: string,
        content?: "inputFilter" | "selectFilter" | "comboFilter",
        filterConfig?: {
            filter?: (item: any, input: string) => boolean,
            multiselection?: boolean,
            readonly?: boolean,
            placeholder?: string,
            virtual?: boolean,
            template?: function
        },
        customFilter?: (item: any, input: string) => boolean,
        headerSort?: boolean, // true by default
        sortAs?: (cellValue: any) => string | number,
        htmlEnable?: boolean, // false by default
    }
],
~~~

## Parameters 

Each header object may include:

- [`text`](grid/configuration.md#headerfooter-text) - (optional) the text of a header or a callback function which is called with the following parameter:
    - **content** - an object with the content of the header tooltip that contains the calculated values as *key:value* pairs, where:
        - the *key* is either the key defined in the list or the functor name
        - the *value* can be a *string/number* or *null* 
The calculated values are taken either from the **summary** config option of the component or the **summary** config option of a column
- `tooltip` - (optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings; *true* by default. When set as an object, the **tooltip** config can have the following properties:
    - **force** - (optional) forces opening of a tooltip; if set to true, the **showDelay** and **hideDelay** settings are ignored, *false* by default
    - **showDelay** - (optional) the time period that should pass before showing a tooltip, in ms
    - **hideDelay** - (optional) the time period that should pass before hiding a tooltip, in ms
    - **margin** - (optional) the margin between the node and tooltip; *8px* by default
    - **position** - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default
    - **css** - (optional) the style of a tooltip box
- [`tooltipTemplate`](grid/configuration.md#column-headerfooter-tooltip) - (optional) sets a template for the header tooltip. Takes into account the [**htmlEnable**](grid/configuration.md#html-content-of-grid-columns) property. The value of the **tooltipTemplate** property is a callback function which is called with the following parameters:
    - **content** - an object with the content of the header tooltip. Contains two properties which are available either from the component's or from the column's configuration:
        - **value** - the value rendered in a cell, including the applied templates
        - an object with the calculated values of the **summary** property, set as *key:value* pairs where:
            - the *key* is either the key defined in the list or the functor name
            - the *value* can be a *string/number* or *null*
    - **header** - the object of the column header
    - **column** - the object of a column
    Return *false* to disable the tooltip
- [`align`](grid/configuration.md#column-headerfooter-tooltip) - (optional) aligns data in the header: *"left"* | *"center"* | *"right"*, *"left"* by default
- `colspan` - (optional) the number of columns in a colspan
- `rowspan` - (optional) the number of rows in a rowspan 
- `css` - (optional) styling to be applied to a header
- [`content`](grid/configuration.md#headerfooter-filters) - (optional) additional content of a header, which can be one of the filters: *"inputFilter"* | *"selectFilter"* | *"comboFilter"*
- [`filterConfig`](grid/configuration.md#headerfooter-filters) - (optional) a configuration object for **"comboFilter"**. It can contain a set of properties:
    - **filter** - (optional) sets a custom function for filtering Combo Box options
    - **multiselection** - (optional) enables selection of multiple options
    - **readonly** - (optional) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input). The default value of the **readonly** property depends on the following conditions:
        - the `readonly:true` is set as a default value, if `htmlEnable:true` is set for a column and there is no template specified for a column
        - in all other cases, `readonly:false` is set by default
    - **placeholder** - (optional) sets a placeholder in the input of ComboBox
    - **virtual** - (optional) enables dynamic loading of data on scrolling the list of options
    - **template** - (optional) a function which returns a template with content for the filter options. Takes an option item as a parameter:
        - **item** - (object) an option item
- [`customFilter`](grid/configuration.md#customizing-headerfooter-filters) - (optional) a custom function for extended filtering. It takes two parameters:
    - **item** - (required) a data item the value of which should be compared
    - **input** - (required) the value of the option selected in the filter and returns *true/false* to specify whether the data item should be displayed in the grid after filtering
- **headerSort** - (optional) enables/disables sorting by clicking the header, *true* by default
- **sortAs** - (optional) a function that defines the type to sort data as (e.g. string, number, date, etc.)
- **htmlEnable** - (optional) *false* by default. If set to *true*, specifies the HTML content (inner HTML) of a header. If set to *false*, the content of the header cells will be displayed as a *string* value

@descr:

**Related article**: [Configuration](grid/configuration.md)

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)