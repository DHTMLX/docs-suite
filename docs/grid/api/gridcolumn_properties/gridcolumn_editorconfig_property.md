---
sidebar_label: editorConfig
title: JavaScript Grid column - editorConfig Config 
description: You can explore the editorConfig config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editorConfig

@short: Optional. An object with configuration settings of the column's editor

## Usage

~~~jsx
editorConfig?: object,
~~~

## Parameters

The structure of the `editorConfig` object depends on the specified type of the editor or the column. Check the list below:

### editorType: "combobox/multiselect"

For this type of editor, the `editorConfig` object can include the following properties:

- **css** - (optional) styling to be applied to an option
- **filter** - (optional) sets a custom function for filtering combobox options. Takes two parameters:
	- **item** - (object) an item of data collection
	- **target** - (string) the string to compare to
and should return *true/false* to specify whether an item should be displayed in the filtered list of options.
- **eventHandlers** - (object) adds event handlers to HTML elements of a custom template of combobox items. [Check the details](/combobox/api/combobox_eventhandlers_config/).
- **itemHeight** - (optional) the height of an option
- **listHeight** - (optional) the height of the list of options
- **newOptions** - (optional) allows end users to add new values into the list of combobox options from UI. The new options will also appear in the drop-down list of the header/footer filters (*content: "selectFilter" | "comboFilter"*)
- **placeholder** - (optional) sets a placeholder in the editor's input
- **readonly** - (optional) makes the editor readonly (it is only possible to select options from the list, without entering words in the input)
- **template** - (optional) a callback function which returns a string. It is called with an object argument which contains two properties:
	- **id** - the id of the selected option
	- **value** - the value of the selected option

### editorType: "multiselect"

For this type of editor, the `editorConfig` object can include the following properties:

- **selectAllButton** - (optional) adds a button that allows selecting all the options in the editor

### editorType:"datePicker" and column type:"date"

For this combination, the `editorConfig` object can include the following properties:
- **asDateObject** - (optional) sets the date picker mode that presupposes saving a date as a Date object
and [a set of Calendar properties](/category/calendar-properties/) (except for the **value** and **range** ones)

### editorType:"input" and column type:"number"

For this combination, the `editorConfig` object can include the following properties:

- **min** - (optional) the minimum allowed value
- **max** - (optional) the maximum allowed value

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150,
            id: "status",
            header: [{text: "Status"}, {content: "selectFilter"}],
            editorType: "combobox",
            // enables the ability to add new values into the combobox editor of the "Status" column
            editorConfig: { newOptions: true },
            options: ["Done", "In Progress", "Not Started"]
        },
        // more columns
    ],
    data: dataset
});

@descr:

**Related article**: [Editing Grid and separate columns](grid/configuration.md#editing-grid-and-separate-columns)

**Related sample**: [Grid. Rich example with templates and different editors](https://snippet.dhtmlx.com/1mxmshax)