---
sidebar_label: editorConfig
title: JavaScript Grid column - editorConfig Config 
description: You can explore the editorConfig config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editorConfig

@short: Optional. An object with configuration settings of the column's editor

### Usage

~~~jsx
editorConfig?: object;
~~~

### Parameters

The structure of the `editorConfig` object depends on the specified type of the editor or the column. Check the list below:

<table>
    <tbody>
        <tr>
            <td><b>editorType: "<a href="../../../configuration/#combobox">combobox</a>/<a href="../../../configuration/#multiselect">multiselect"</a></b></td>
            <td>For this type of editor, the <b>editorConfig</b> object can include the following properties:<ul><li><b>css</b> - (optional) styling to be applied to an option</li><li><b>filter</b> - (optional) sets a custom function for filtering combobox options. Takes two parameters:<ul><li><b>item</b> - (<i>object</i>) an item of data collection</li><li><b>target</b> - (<i>string</i>) the string to compare to</li></ul> and should return <i>true/false</i> to specify whether an item should be displayed in the filtered list of options</li><li><b>eventHandlers</b> - (<i>object</i>) adds event handlers to HTML elements of a custom template of combobox items. <a href="../../../../combobox/api/combobox_eventhandlers_config/">Check the details.</a></li><li><b>itemHeight</b> - (optional) the height of an option</li><li><b>listHeight</b> - (optional) the height of the list of options</li><li><a href="../../../configuration/#editable-combobox"><b>newOptions</b></a> - (optional) allows end users to add new values into the list of combobox options from UI. The new options will also appear in the drop-down list of the header/footer filters (<i>content: "selectFilter" | "comboFilter"</i>)</li><li><b>placeholder</b> - (optional) sets a placeholder in the editor's input</li><li><b>readonly</b> - (optional) makes the editor readonly (it is only possible to select options from the list, without entering words in the input)</li><li><b>template</b> - (optional) a callback function which returns a string. It is called with an object argument which contains two properties:<ul><li><b>id</b> - the id of the selected option</li><li><b>value</b> - the value of the selected option</li></ul></li></ul></td>            
        </tr>
        <tr>
            <td><b>editorType: <a href="../../../configuration/#multiselect">"multiselect"</a></b></td>
            <td>For this type of editor, the <b>editorConfig</b> object can include the following properties:<ul><li><b>selectAllButton</b> - (optional) adds a button that allows selecting all the options in the editor</li></ul></td>
        </tr>
        <tr>
            <td><b>editorType:<a href="../../../configuration/#datepicker">"datePicker"</a></b> and column <b>type:"date"</b></td>
            <td>For this type of editor, the <b>editorConfig</b> object can include the following properties:<ul><li><b>asDateObject</b> - (optional) sets the date picker mode that presupposes saving a date as a Date object</li></ul> and <a href="../../../../category/calendar-properties/">a set of properties of Calendar</a> (except for the <b>value</b> and <b>range</b> ones)</td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#editing-columns-with-the-number-type"><b>editorType:</b><b>"input"</b> and column <b>type:"number"</b></a></td>
            <td>For this combination, the <b>editorConfig</b> object can include the following properties:<ul><li><b>min</b> - (optional) the minimum allowed value</li><li><b>max</b> - (optional) the maximum allowed value</li></ul></td>
        </tr>
    </tbody>
</table>

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "status",
            header: [{ text: "Status" }],
            editorType: "combobox",
            // enables the ability to add new values into the combobox editor of the "Status" column
            editorConfig: { newOptions: true },
            options: [ "Done", "In Progress", "Not Started" ]
        },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related article**: [Editing Grid and separate columns](grid/configuration.md#editing-grid-and-separate-columns)

**Related sample**: [Grid. Rich example with templates and different editors](https://snippet.dhtmlx.com/1mxmshax)