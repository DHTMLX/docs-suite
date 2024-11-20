---
sidebar_label: Grid сolumn properties
title: JavaScript Grid - Grid Column Properties 
description: You can explore the Grid column properties of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Grid column properties

### Usage

~~~js
columns:[
 {
    id: string | number,
    width?: number, // 100 by default
    minWidth?: number, // 20 by default
    maxWidth?: number, 
    autoWidth?: boolean, // false by default
    header: [
        {
            text?: string | ((content: ISummaryList) => string),
            tooltip?: boolean | object, // true by default
            tooltipTemplate?: (
                content: { value: string } & ISummaryList,
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
    footer?: [
        {
            text?: string | ((content: ISummaryList) => string),
            tooltip?: boolean | object, // true by default
            tooltipTemplate?: (
                content: { value: string } & ISummaryList,
                header: IHeader,
                column: ICol
            ) => string | boolean,
            align?: "left" | "center" | "right", // "left" by default
            colspan?: number,
            rowspan?: number,
            css?: string,
            htmlEnable?: boolean, // false by default
        },
    ],
    type?: "string" | "number" | "boolean" | "date" | "percent", // "string" by default
    // "input" by default
    editorType?: "input" | "select" | "datePicker" | "combobox" | "multiselect" | "textarea", 
    format?: string,
    options?: (string | { id: string | number, value: string })[] |
              (column: object, row?: object) => (string | { id: string | number, value: string })[],
    editorConfig?: obj,
    adjust?: "data" | "header" | "footer" | boolean, // false by default
    align?: "left" | "center" | "right", // "left" by default
    htmlEnable?: boolean, // false by default
    hidden?: boolean, // false by default
    draggable?: boolean, // false by default
    editable?: boolean, // false by default
    resizable?: boolean, // false by default
    sortable?: boolean, // true by default
    mark?: { min?: string, max?: string } |
           (cell: any, columnCells: any[], row?: object, column?: object) => string,
    template?: (cellValue: any, row: object, column: object) => string,
    tooltip?: boolean | object, // true by default
    tooltipTemplate?: (cellValue: any, row: object, column: object) => string,
    summary?: ISummary | string
  },
  // more column objects
]
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>(required) the id of a column</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a column, <i>100</i> by default. Note that width can't be less than 20px.<br>The property is ignored if the <a href="../../../grid/configuration/#autosize-for-columns">adjust</a> property is used</td>
        </tr>
        <tr>
            <td><b>minWidth</b></td>
            <td>(optional) the minimum width to be set for a column, <i>20</i> by default <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/x5hmpi9d" target="_blank">Grid. Columns min width</a></td>
        </tr>
        <tr>
            <td><b>maxWidth</b></td>
            <td>(optional) the maximal width to be set for a column <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/ku3cfaux" target="_blank">Grid. Columns max width</a></td>
        </tr>
        <tr>
            <td><a href="../../configuration#autowidth-for-columns"><b>autoWidth</b></a></td>
            <td>(optional) enables/disables the ability of a column to adjust its size to the size of Grid, <i>false</i> by default<br><br>Also note:<br><li>If <b>autoWidth</b> is set for a column, the width of the column is calculated on the base of the sizes of the container of the grid and the values of the <b>minWidth/maxWidth</b> properties if they are set for the column.</li><li>The property is ignored if the <a href="../../../grid/configuration/#autosize-for-columns">adjust</a> property is used.</li><li>If the <b>width</b> property is specified in the configuration object of a column, the <b>autoWidth</b> property won't work for this column.</li></td>
        </tr>
        <tr>
            <td><b id="header">header</b></td>
            <td>(required) an array of objects with header rows configuration. Each header object may include:<ul><li><a href="../../configuration/#headerfooter-text"><b>text</b></a> - (optional) the text of a header or a callback function which is called with the following parameter:<ul><li><b>content</b> - an object with the content of the header tooltip that contains the calculated values as *key:value* pairs, where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul> The calculated values are taken either from the <b>summary</b> config option of the component or the <b>summary</b> config option of a column</li></ul></li><li><b>tooltip</b> - (optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the <b>tooltip</b> config can have the following properties:<ul><li><b>force</b> - (optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored, *false* by default</li><li><b>showDelay</b> - (optional) the time period that should pass before showing a tooltip, in ms</li><li><b>hideDelay</b> - (optional) the time period that should pass before hiding a tooltip, in ms</li><li><b>margin</b> - (optional) the margin between the node and tooltip; *8px* by default</li><li><b>position</b> - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li><b>css</b> - (optional) the style of a tooltip box</li></ul></li><li><a href="../../configuration#column-headerfooter-tooltip"><b>tooltipTemplate</b></a> - (optional) sets a template for the header tooltip. Takes into account the <a href="../../configuration#html-content-of-grid-columns">htmlEnable</a> property. The value of the <b>tooltipTemplate</b> property is a callback function which is called with the following parameters:<ul><li><b>content</b> - an object with the content of the header tooltip. Contains two properties which are available either from the component's or from the column's configuration:<ul><li><b>value</b> - the value rendered in a cell, including the applied templates</li><li>an object with the calculated values of the <b>summary</b> property, set as *key:value* pairs where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul></li></ul></li><li><b>header</b> - the object of the column header</li><li><b>column</b> - the object of a column</li></ul>Return <i>false</i> to disable the tooltip</li><li><a href="../../configuration#alignment"><b>align</b></a> - (optional) aligns data in the header: *"left"* | *"center"* | *"right"*, <i>"left"</i> by default</li><li><b>colspan</b> - (optional) the number of columns in a colspan</li><li><b>rowspan</b> - (optional) the number of rows in a rowspan </li><li><b>css</b> - (optional) styling to be applied to a header</li><li><a href="../../configuration#headerfooter-filters"><b>content</b></a> - (optional) additional content of a header, which can be one of the filters: *"inputFilter"* | *"selectFilter"* | *"comboFilter"*</li><li><a href="../../configuration#headerfooter-filters"><b>filterConfig</b></a> - (optional) a configuration object for <b>"comboFilter"</b>. It can contain a set of properties:<ul><li><b>filter</b> - (optional) sets a custom function for filtering Combo Box options</li><li> <b>multiselection</b> - (optional) enables selection of multiple options</li><li><b>readonly</b> - (optional) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input). The default value of the <b>readonly</b> property depends on the following conditions:<ul><li>the `readonly:true` is set as a default value, if `htmlEnable:true` is set for a column and there is no template specified for a column</li><li>in all other cases, `readonly:false` is set by default</li></ul></li><li><b>placeholder</b> - (optional) sets a placeholder in the input of ComboBox</li><li><b>virtual</b> - (optional) enables dynamic loading of data on scrolling the list of options</li><li><b>template</b> - (optional) a function which returns a template with content for the filter options. Takes an option item as a parameter:<ul><li><b>item</b> - (object) an option item</li></ul></li></ul></li><li><a href="../../configuration#customizing-headerfooter-filters"><b>customFilter</b></a> - (optional) a custom function for extended filtering. It takes two parameters:<ul><li><b>item</b> - (required) a data item the value of which should be compared</li><li> <b>input</b> - (required) the value of the option selected in the filter</li></ul>and returns <i>true/false</i> to specify whether the data item should be displayed in the grid after filtering</li><li><b>headerSort</b> - (optional) enables/disables sorting by clicking the header, <i>true</i> by default</li><li><b>sortAs</b> - (optional) a function that defines the type to sort data as (e.g. string, number, date, etc.)</li><li><b>htmlEnable</b> - (optional) <i>false</i> by default. If set to <i>true</i>, specifies the HTML content (inner HTML) of a header. If set to <i>false</i>, the content of the header cells will be displayed as a <i>string</i> value</li></ul><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/eol76o68" target="_blank">Grid. Grouped headers (spans)</a></td>
        </tr>
        <tr>
            <td><b>footer</b></td>
            <td>(optional) an array of objects with footer rows configuration. Each footer object may include:<ul><li><a href="../../configuration/#-headerfooter-text"><b>text</b></a> - (optional) the text of a header or a callback function which is called with the following parameter:<ul><li><b>content</b> - an object with the content of the footer tooltip that contains the calculated values as *key:value* pairs, where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul> The calculated values are taken either from the <b>summary</b> config option of the component or the <b>summary</b> config option of a column</li></ul></li><li><b>tooltip</b> - (optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the <b>tooltip</b> config can have the following properties:<ul><li><b>force</b> - (optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored, *false* by default</li><li><b>showDelay</b> - (optional) the time period that should pass before showing a tooltip, in ms</li><li><b>hideDelay</b> - (optional) the time period that should pass before hiding a tooltip, in ms</li><li><b>margin</b> - (optional) the margin between the node and tooltip; *8px* by default</li><li><b>position</b> - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li><b>css</b> - (optional) the style of a tooltip box</li></ul></li><li><a href="../../configuration#column-headerfooter-tooltip"><b>tooltipTemplate</b></a> - (optional) sets a template for the footer tooltip. Takes into account the <a href="../../configuration#html-content-of-grid-columns">htmlEnable</a> property. The value of the <b>tooltipTemplate</b> property is a callback function which is called with the following parameters:<ul><li><b>content</b> - an object with the content of the footer tooltip. Contains two properties which are available either from the component's or from the column's configuration:<ul><li><b>value</b> - the value rendered in a cell, including the applied templates</li><li>an object with the calculated values of the <b>summary</b> property, set as *key:value* pairs where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul></li></ul></li><li><b>footer</b> - the object of the column footer</li><li><b>column</b> - the object of a column</li></ul>Return <i>false</i> to disable the tooltip</li><li><b>align</b> - (optional) aligns data in the footer: "left" | "center" | "right", <i>"left"</i> by default</li><li><b>colspan</b> - (optional) the number of columns in a colspan</li><li><b>rowspan</b> - (optional) the number of rows in a rowspan </li><li><b>css</b> - (optional) styling to be applied to a footer</li><li><b>htmlEnable</b> - (optional) <i>false</i> by default. If set to <i>true</i>, specifies the HTML content (inner HTML) of a footer. If set to <i>false</i>, the content of the footer cells will be displayed as a <i>string</i> value</li></ul><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/9jl55ep7" target="_blank">Grid. Grid with footer</a></td>
        </tr>
        <tr>
            <td><b>type</b></td>
            <td>(optional) the type of a column. The type sets the alignment of the content and defines the type of the editor used in the column:<ul><li><i>"string" (the default one)</i> - aligns data to the left side and applies the <i>"input"/"textarea"</i> editor</li><li><i>"number"</i> - aligns data to the right side and applies the <i>"input"</i> editor</li><li><i>"boolean"</i> - aligns data to the left side and applies the <i>"checkbox"</i> editor</li><li><i>"percent"</i> - aligns data to the left side and applies the <i>"input"</i> editor</li><li><i>"date"</i> - aligns data to the left side and applies the <i>"datePicker"</i> editor</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../configuration#types-of-column-editor"><b>editorType</b></a></td>
            <td>(optional) the type of an editor used in a column: "input" | "select" | "combobox" | "textarea" | "multiselect" | "datePicker", <i>"input"</i> by default </td>
        </tr>
        <tr>
            <td><a href="../../configuration#formatting-columns"><b>format</b></a></td>
            <td>(optional) defines the format for the content of the column's cells. The date format must include delimiters (space or symbol), otherwise an error will be thrown</td>
        </tr>
        <tr>
            <td><b>options</b></td>
            <td>(optional) specifies a set of options to be displayed in the editor of a cell. It is required if you specify <a href="../../configuration/#types-of-column-editor">editorType: "select" | "combobox" | "multiselect"</a>. The property can be:<ul><li>an array of string values</li><li>an array of objects with a set of <i>key:value</i> pairs - attributes of options and their values:<ol>The <b>id</b> attribute sets the id for the option</ol><ol>The <b>value</b> attribute sets the value to be displayed both in the editor and in the grid cell. If the id of the option is specified in the data set, the value will also be displayed in the cell on Grid initialization</ol></li><li>a function which takes two parameters:<ol><b>column</b> - (required) an object with the configuration of a column</ol><ol><b>row</b> - (optional) an object with all cells in a row</ol>and must return either an array of string values or an array of objects</li></ul><b>Related Samples:</b><ul><li><a href="https://snippet.dhtmlx.com/w2cdossn" target="_blank">Grid. Editing with different editors (combobox, select, multiselect, boolean, date)</a></li><li><a href="https://snippet.dhtmlx.com/i22fg83z" target="_blank">Grid. Individual option lists for select, multiselect and combobox editors</a></li></ul>If <b>newOptions</b> property is enabled, all new options will be displayed in the editor regardless of the initialized options.</td>
        </tr>
        <tr>
            <td id="editorconfig"><b>editorConfig</b></td>
            <td>(optional) an object with configuration settings of the column's editor. The structure of this object depends on the specified type of the editor or the column. Check the list below:<br><br><ul><li><b>editorType: "combobox/multiselect"</b><br><br>For this type of editor, the <b>editorConfig</b> object can include the following properties:<ul><li><b>css</b> - (optional) styling to be applied to an option</li><li><b>filter</b> - (optional) sets a custom function for filtering combobox options. Takes two parameters:<ul><li><b>item</b> - (<i>object</i>) an item of data collection</li><li><b>target</b> - (<i>string</i>) the string to compare to</li></ul> and should return <i>true/false</i> to specify whether an item should be displayed in the filtered list of options</li><li><b>eventHandlers</b> - (<i>object</i>) adds event handlers to HTML elements of a custom template of combobox items. <a href="../../../combobox/api/combobox_eventhandlers_config/">Check the details.</a></li><li><b>itemHeight</b> - (optional) the height of an option</li><li><b>listHeight</b> - (optional) the height of the list of options</li><li><a href="../../configuration/#editable-combobox"><b>newOptions</b></a> - (optional) allows end users to add new values into the list of combobox options from UI. The new options will also appear in the drop-down list of the header/footer filters (<i>content: "selectFilter" | "comboFilter"</i>)</li><li><b>placeholder</b> - (optional) sets a placeholder in the editor's input</li><li><b>readonly</b> - (optional) makes the editor readonly (it is only possible to select options from the list, without entering words in the input)</li><li><b>template</b> - (optional) a callback function which returns a string. It is called with an object argument which contains two properties:<ul><li><b>id</b> - the id of the selected option</li></ul><ul><li><b>value</b> - the value of the selected option</li></ul></li></ul><br></li><li><b>editorType: "multiselect"</b><br><br>For this type of editor, the <b>editorConfig</b> object can include the following properties:<ul><li><b>selectAllButton</b> - (optional) adds a button that allows selecting all the options in the editor</li></ul><br></li><li><b>editorType:"datePicker"</b><br><br>For this type of editor, the <b>editorConfig</b> object can include <a href="https://docs.dhtmlx.com/suite/category/calendar-properties/">a set of properties of Calendar</a> (except for the <b>value</b>, <b>range</b>, and <b>dateFormat</b> ones).<br><br></li><li><b>editorType:"input"</b> and column <b>type:"number"</b><br><br>For this combination, the <b>editorConfig</b> object can include the following properties:<ul><li><b>min</b> - (optional) the minimum allowed value</li><li><b>max</b> - (optional) the maximum allowed value</li></ul></li></ul><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/1mxmshax" target="_blank">Grid. Rich example with templates and different editors</a></td>
        </tr>
        <tr>
            <td><a href="../../configuration#autosize-for-columns"><b>adjust</b></a></td>
            <td>(optional) <i>false</i> by default, defines whether the width of a column is automatically adjusted to its content.<br><br><li>The property has a priority over the <a href="../../configuration/#autowidth-for-columns">autoWidth</a> property if it is specified either for the grid or for the column, and over the <b>width</b> property of the column.</li><li>The width the columns will be adjusted to also depends on the values of the <b>minWidth/maxWidth</b> properties if they are set for a column.</li></td>
        </tr>
        <tr>
            <td><a href="../../configuration#alignment"><b>align</b></a></td>
            <td>(optional) aligns data in a column: "left" | "center" | "right", <i>"left"</i> by default</td>
        </tr>
        <tr>
            <td><a href="../../configuration#html-content-of-grid-columns"><b>htmlEnable</b></a></td>
            <td>(optional) <i>false</i> by default. If set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/chitkvkc" target="_blank">Grid. Html in data</a></td>
        </tr>
        <tr>
            <td><a href="../../configuration#hidden-columns"><b>hidden</b></a></td>
            <td>(optional) defines whether a column is hidden, <i>false</i> by default <br/><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/lh7ma639" target="_blank">Grid. Hidden columns</a></td>
        </tr>
        <tr>
            <td><a href="../../configuration#drag-n-drop-inside-the-grid"><b>draggable</b></a></td>
            <td>(optional) defines whether a column is draggable, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><a href="../../configuration#editing-grid-and-separate-columns"><b>editable</b></a></td>
            <td>(optional) defines whether a column is editable, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><a href="../../configuration#resizable-columns"><b>resizable</b></a></td>
            <td>(optional) defines whether a column can be resized, <i>false</i> by default</td>
        </tr>
        <tr>
            <td><a href="../../configuration#sortable-columns"><b>sortable</b></a></td>
            <td>(optional) defines whether a column is sortable, <i>true</i> by default</td>
        </tr>
        <tr>
            <td><a href="../../customization#adding-custom-marks-to-cells"><b>mark</b></a></td>
            <td>(optional) can be either an object or a function:<ul><li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li><li>as a <i>function</i> returns a template for marking a cell(s) and takes several parameters:<ul><li><b>cell</b> - (required) the value of a cell</li><li><b>columnCells</b> - (required) an array of all cell values in the specified column</li><li><b>row</b> - (optional) an object with all cells in a row</li><li><b>column</b> - (optional) an object with the configuration of a column (see the <b>columns</b> config)</li></ul></li></ul><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/buirf16n" target="_blank">Grid. Mark cells</a></td>
        </tr>
        <tr>
            <td><a href="../../customization#adding-template-to-cells"><b>template</b></a></td>
            <td>(optional) a function which returns a template with content for a cell(s). Takes 3 parameters:<ul><li><b>cellValue</b> - (required) the value of a cell</li><li><b>row</b> - (required) an object with all cells in a row</li><li><b>column</b> - (required) an object with the configuration of a column (see the <b>columns</b> config)</li></ul><br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/9txizaow" target="_blank">Grid. Cell templates</a></td>
        </tr>
        <tr>
            <td><a href="../../configuration#tooltip"><b>tooltip</b></a></td>
            <td>(optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the <b>tooltip</b> config can have the following properties:<ul><li><b>force</b> - (optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored, *false* by default</li><li><b>showDelay</b> - (optional) the time period that should pass before showing a tooltip, in ms</li><li><b>hideDelay</b> - (optional) the time period that should pass before hiding a tooltip, in ms</li><li><b>margin</b> - (optional) the margin between the node and tooltip; *8px* by default</li><li><b>position</b> - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li><b>css</b> - (optional) the style of a tooltip box</li></ul>The **tooltip** config can be redefined for the header/footer tooltip</td>
        </tr>
        <tr>
            <td><a href="../../customization#adding-template-to-tooltip"><b>tooltipTemplate</b></a></td>
            <td>(optional) a function which returns a template for the content of the tooltip. Takes 3 parameters:<ul><li><b>value</b> - (required) the value of a cell</li><li><b>row</b> - (required) an object with all cells in a row</li><li><b>column</b> - (required) an object with the configuration of a column (see the <b>columns</b> config)</li></ul>Returning *false* from the function will block showing of the tooltip</td>
        </tr>
        <tr>
            <td id="summary"><a href="../../configuration#summary-of-calculated-values"><b>summary</b></a></td>
            <td>(optional) creates the list of calculated values based on the column's data. The defined list is available only at the column's level. Can be initialized either as an *object* or as a *string*. As an object it contains calculated values set as *key:value* pairs, where the keys are the field names and values can be:<ul><li>a string with the name of the applied functor</li><li>a tuple `[string, string]` that specifies the field name and the name of the applied functor</li><li>a `(rows: IRow[]) => string | number;` function for calculating the summary of the column</li></ul>**Note** that, when the column **summary** property is initialized as a string, the resulting value (excluding "count") is used with applied **patternMask**/**numberMask**, if there are any.</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/1mxmshax?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

**Related articles:**
- [Configuration](grid/configuration.md)
- [Customization](grid/customization.md)
