---
sidebar_label: header
title: JavaScript Grid column - header Config 
description: You can explore the header config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# header

@short: Required. An array of objects with header rows configuration

### Usage

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
        filterConfig?: {
            placeholder?: string, // sets an input placeholder for `inputFilter`, `comboFilter` and `dateFilter`
            icon?: string, // sets CSS class for the filter icon in `inputFilter` and the calendar icon in `dateFilter`
            /* properties of `comboFilter` configuration */
            filter?: (item, input: string) => boolean,
            multiselection?: boolean,
            readonly?: boolean,
            virtual?: boolean, // true by default
            template?: function,
            /* properties of `dateFilter` configuration */
            asDateObject?: boolean,
            date?: Date | string,
            mark?: (date: Date) => string,
            disabledDates?: (date: Date) => boolean,
            weekStart?: "saturday" | "sunday" | "monday",
            weekNumbers?: boolean,
            mode?: "calendar" | "year" | "month" | "timepicker",
            timePicker?: boolean,
            dateFormat?: string,
            timeFormat?: 24 | 12,
            thisMonthOnly?: boolean,
            width?: string | number,
            range?: boolean
        },
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

### Parameters 

Each header object may include:

<table>
    <tbody>
        <tr>
            <td><a href="../../../configuration/#headerfooter-text"><b>text</b></a></td><td>(optional) the text of a header or a callback function which is called with the following parameter:<ul><li><b>content</b> - an object with the content of the header tooltip that contains the calculated values as *key:value* pairs, where<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul>The calculated values are taken either from the <b>summary</b> config option of the component or the <b>summary</b> config option of a column</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#column-headerfooter-tooltip"><b>tooltip</b></a></td><td>(optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the <b>tooltip</b> config can have the following properties:<ul><li><b>force</b> - (optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored, *false* by default</li><li><b>showDelay</b> - (optional) the time period that should pass before showing a tooltip, in ms</li><li><b>hideDelay</b> - (optional) the time period that should pass before hiding a tooltip, in ms</li><li><b>margin</b> - (optional) the margin between the node and tooltip; *8px* by default</li><li><b>position</b> - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li><b>css</b> - (optional) the style of a tooltip box</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#column-headerfooter-tooltip"><b>tooltipTemplate</b></a></td><td>(optional) sets a template for the header tooltip. Takes into account the <a href="../../../configuration/#html-content-of-grid-columns">htmlEnable</a> property. The value of the <b>tooltipTemplate</b> property is a callback function which is called with the following parameters:<ul><li><b>content</b> - an object with the content of the header tooltip. Contains two properties which are available either from the component's or from the column's configuration:<ul><li><b>value</b> - the value rendered in a cell, including the applied templates</li><li>an object with the calculated values of the <b>summary</b> property, set as *key:value* pairs where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul></li></ul></li><li><b>header</b> - the object of the column header</li><li><b>column</b> - the object of a column</li></ul>Return <i>false</i> to disable the tooltip</td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#alignment"><b>align</b></a></td><td>(optional) aligns data in the header: *"left"* | *"center"* | *"right"*, <i>"left"</i> by default</td>
        </tr>
        <tr>
            <td><b>colspan</b></td><td>(optional) the number of columns in a colspan</td>
        </tr>
        <tr>
            <td><b>rowspan</b></td><td>(optional) the number of rows in a rowspan</td>
        </tr>
        <tr>
            <td><b>css</b></td><td>(optional) styling to be applied to a header</td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#headerfooter-filters"><b>content</b></a></td><td>(optional) defines the content of the column header, including the filter type. Allows setting one of the predefined filters: 
            <ul><li>"inputFilter" — a text input field</li><li>"selectFilter" — a dropdown list</li><li>"comboFilter" — a combobox with search</li><li>"dateFilter" (<b>PRO version</b>) — a filter with a calendar for selecting a date or a date range</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#headerfooter-filters"><b>filterConfig</b></a></td>
            <td>(optional) a configuration object for setting the behavior and appearance of the filter. The set of properties depends on the filter type specified in the `content` property: <br><br> - a configuration object for <b>"inputFilter"</b> can contain the following properties: <ul><li><b>placeholder</b> - (optional) the placeholder text in the input field</li><li><b> icon</b> - (optional) the CSS class for the filter icon</li></ul> <br> - a configuration object for <b>"comboFilter"</b> can contain a set of properties:<ul><li><b>filter</b> - (optional) sets a custom function for filtering Combo Box options</li><li><b>multiselection</b> - (optional) enables selection of multiple options</li><li><b>readonly</b> - (optional) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input). The default value of the <b>readonly</b> property depends on the following conditions:<ul><li>the `readonly:true` is set as a default value, if `htmlEnable:true` is set for a column and there is no template specified for a column</li><li>in all other cases, `readonly:false` is set by default</li></ul></li><li><b>placeholder</b> - (optional) sets a placeholder in the input of ComboBox</li><li><b>virtual</b> - (optional) enables dynamic loading of data on scrolling the list of options, <i>true</i> by default</li><li><b>template</b> - (optional) a function which returns a template with content for the filter options. Takes an option item as a parameter:<ul><li><b>item</b> - (object) an option item</li></ul></li></ul> - a configuration object for <b>"dateFilter" (PRO version)</b> can contain a set of properties:<br>Main properties:<ul><li><b>icon</b> - (optional) the CSS class for the calendar icon</li><li><b>placeholder</b> - (optional) the placeholder text in the input field when no date is selected</li><li><b>asDateObject</b> (optional) - determines how the filter processes data for `customFilter` and the `beforeFilter` and `filterChange` events. If `true`, the comparison is performed using Date objects</li><li><b>range</b> - (optional) enables the date range selection mode (from and to)</li><li><b>dateFormat</b> - (optional) the date display format (e.g., `"%d/%m/%Y"`). By default, applies the `dateFormat` used for the column</li></ul>Calendar API configuration properties:<ul><li><b>date</b> - (optional) - the initial date opened in the calendar</li><li><b>mark</b> - (optional) - a function for adding custom CSS classes to specific dates </li><li><b>disabledDates</b> - (optional) - a function for disabling the selection of specific dates </li><li><b>weekStart</b> - (optional) - the start day of the week (`"saturday"`, `"sunday"`, `"monday"`).</li><li><b>weekNumbers</b> - (optional) - shows week numbers if `true`</li><li><b>mode</b> - (optional) - the calendar display mode (`"calendar"`, `"year"`, `"month"`, `"timepicker"`)</li><li><b>timePicker</b> - (optional) - adds the ability to select time</li><li><b>timeFormat</b> - (optional) - the time format (`12` or `24` hours)</li><li><b>thisMonthOnly</b> - (optional) - if `true`, allows selecting dates only within the current month</li><li><b>width</b> - (optional) - the width of the dropdown calendar</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#customizing-headerfooter-filters"><b>customFilter</b></a> </td><td>(optional) a callback function that allows defining custom filtering logic. It takes two parameters:<ul><li><b>value</b> - (required) the cell value in the row</li><li> <b>match</b> - (required) the value selected in the filter</li></ul>and returns `true`, if the row matches the filtering criteria, otherwise `false`</td>
        </tr>
        <tr>
            <td><b>headerSort</b></td><td>(optional) enables/disables sorting by clicking the header, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><b>sortAs</b></td><td>(optional) a function that defines the type to sort data as (e.g. string, number, date, etc.)</td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#html-content-of-grid-columns"><b>htmlEnable</b></a></td><td>(optional) <i>false</i> by default. If set to <i>true</i>, allows using and displaying HTML content in a header. If set to <i>false</i>, the content of the header cells will be displayed as a <i>string</i> value</td>
        </tr>
    </tbody>
</table>


@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "title", header: [{ text: "Title" }] },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related article**: [Configuration](grid/configuration.md)

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)