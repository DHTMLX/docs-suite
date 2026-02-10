---
sidebar_label: filterConfig
title: JavaScript Grid column header - filterConfig Config 
description: You can explore the filterConfig config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filterConfig

@short: Optional. A configuration object for setting the behavior and appearance of the filter

#### Usage

~~~jsx
filterConfig?: {
    placeholder?: string, // sets an input placeholder for `inputFilter`, `comboFilter` and `dateFilter`
    icon?: string, // sets CSS class for the filter icon in `inputFilter` and the calendar icon in `dateFilter`
    /* properties of `comboFilter` configuration */
    filter?: (item, input: string) => boolean,
    multiselection?: boolean, // false by default
    readonly?: boolean, // false by default
    virtual?: boolean, // true by default
    template?: function,
    /* properties of `dateFilter` configuration */
    asDateObject?: boolean, // false by default
    date?: Date | string,
    mark?: (date: Date) => string,
    disabledDates?: (date: Date) => boolean,
    weekStart?: "saturday" | "sunday" | "monday", // "sunday" by default
    weekNumbers?: boolean, // false by default
    mode?: "calendar" | "year" | "month" | "timepicker", // "calendar" by default
    timePicker?: boolean, // false by default
    dateFormat?: string, //  by default, applies the dateFormat used for the column
    timeFormat?: 24 | 12, // 24 by default
    thisMonthOnly?: boolean, // false by default
    width?: string | number, // "250px" by default
    range?: boolean // false by default
};
~~~

@params:

The set of properties depends on the filter type specified in the [`content`](/grid/api/gridcolumn_properties/gridcolumn_header_property/content/) property:

- a configuration object for **"inputFilter"** can contain the following properties:
    - `placeholder` - (*string*) - optional, the placeholder text in the input field
    - `icon` - (*string*) - optional, the CSS class for the filter icon

- a configuration object for **"comboFilter"** can contain a set of properties:
    - **filter** - (*function*) sets a custom function for filtering Combo Box options
    - **multiselection** - (*boolean*) enables selection of multiple options
    - **readonly** - (*boolean*) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input). The default value of the **readonly** property depends on the following conditions:
        - the `readonly:true` is set as a default value, if `htmlEnable:true` is set for a column and there is no template specified for a column
        - in all other cases, `readonly:false` is set by default
    - **placeholder** - (*string*) sets a placeholder in the input of ComboBox
    - **virtual** - (*boolean*) enables dynamic loading of data on scrolling the list of options, *true* by default
    - **template** - (*function*) a function which returns a template with content for the filter options. Takes an option item as a parameter

- a configuration object for **"dateFilter"** (**PRO version**) can contain a set of properties:
Main properties:

- `icon` - (*string*) - the CSS class for the calendar icon.
    - `placeholder` - (*string*) - the placeholder text in the input field when no date is selected.
    - `asDateObject` - (*boolean*) - determines how the filter processes data for `customFilter` and the `beforeFilter` and `filterChange` events. If `true`, the comparison is performed using Date objects.
    - `range` - (*boolean*) - enables the date range selection mode (from and to).
    - `dateFormat` - (*string*) - the date display format (e.g., `"%d/%m/%Y"`). By default, applies the `dateFormat` used for the column.

    Calendar API configuration properties:

    - `date` - (*Date | string*) - the initial date opened in the calendar.
    - `mark` - (*function*) - a function for adding custom CSS classes to specific dates.
    - `disabledDates` - (*function*) - a function for disabling the selection of specific dates.
    - `weekStart` - (*string*) - the start day of the week (`"saturday"`, `"sunday"`, `"monday"`).
    - `weekNumbers` - (*boolean*) - shows week numbers if `true`.
    - `mode` - (*string*) - the calendar display mode (`"calendar"`, `"year"`, `"month"`, `"timepicker"`).
    - `timePicker` - (*boolean*) - adds the ability to select time.
    - `timeFormat` - (*number*) - the time format (`12` or `24` hours).
    - `thisMonthOnly` - (*boolean*) - if `true`, allows selecting dates only within the current month.
    - `width` - (*string | number*) - the width of the dropdown calendar.

**dateFilter** supports two modes of operation:

- **single mode** (default) - the filter allows selecting a single specific date by default. Only records corresponding to the selected day will remain in the table.

- **range mode** - this mode is activated by setting the `range: true` property in the `filterConfig` object. In this mode, the user can select the start date and the end date. The table will filter records falling within the selected time interval (inclusive).

@example:

const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "productName",
            minWidth: 200,
            header: [
                { text: "Product Name" },
                { 
                    content: "inputFilter", 
                    filterConfig: { placeholder: "Search by name" } 
                }
            ]
        },
        {
            id: "category",
            header: [
                { text: "Category" },
                {
                    content: "comboFilter",
                    filterConfig: { placeholder: "Select category" }
                }
            ]
        },
        {
            id: "receivedDate",
            minWidth: 200,
            type: "date",
            dateFormat: "%d.%m.%Y",
            header: [
                { text: "Received Date" },
                {
                    content: "dateFilter",
                    filterConfig: {
                        placeholder: "Select date",
                        range: true,
                    }
                }
            ],
        },
        {
            id: "stock",
            type: "number",
            header: [
                { text: "Stock" }, { content: "selectFilter" }
            ]
        },
        // more columns configuration objects
    ],
    // more options
});

@descr:

**Related article**: [Header/footer filters](/grid/configuration/#headerfooter-filters)

**Related sample**: [Grid. Header filters (dateFilter, comboFilter, inputFilter, selectFilter)](https://snippet.dhtmlx.com/4qz8ng3c)
