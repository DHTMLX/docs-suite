---
sidebar_label: What's new
title: What's New and Release History 
description: You can explore what's new in DHTMLX Suite and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# What's new

Before updating DHTMLX to the latest version, please check the [Migration to Newer Versions](migration.md) guide to avoid possible breakdowns.

Version 9.0
---------------

Released on November 25, 2024

<a href="https://dhtmlx.com/blog/dhtmlx-suite-9-0/" target="_blank">Review of the release on the blog</a>

### Breaking changes

In this version TreeGrid becomes a part of Grid. Check the [Migration](migration.md#84---90) guide to keep in step with the latest updates.

### New functionality

#### DataCollection

- The ability to [group data items](grid/usage.md#using-datacollection-api-for-data-grouping)

#### Form

- The ability to [specify patternMask/numberMask for the Input and Textarea controls](form/work_with_form.md#using-input-masks)

#### Grid

- [TreeGrid mode for Grid](grid/configuration.md#setting-the-treegrid-mode)
- [Row data grouping](grid/usage.md#grouping-data) (PRO version)
- The ability to [render custom statistics in the columns](grid/configuration.md#summary-of-calculated-values)
- The ability to specify [patternMask/numberMask for columns](grid/configuration.md#formatting-columns)

### Updates

#### Grid

- The [`asDateObject` property](grid/configuration.md#datepicker) is added for the `editorConfig` object of the DatePicker editor
- The `cell` parameter is added for the callback function of the following events:
[`headerCellClick`](grid/api/grid_headercellclick_event.md), [`footerCellClick`](grid/api/grid_footercellclick_event.md), [`headerCellMouseOver`](grid/api/grid_headercellmouseover_event.md), [`footerCellMouseOver`](grid/api/grid_footercellmouseover_event.md), [`headerCellMouseDown`](grid/api/grid_headercellmousedown_event.md), [`footerCellMouseDown`](grid/api/grid_footercellmousedown_event.md), [`headerCellDblClick`](grid/api/grid_headercelldblclick_event.md), [`footerCellDblClick`](grid/api/grid_footercelldblclick_event.md), [`headerCellRightClick`](grid/api/grid_headercellrightclick_event.md), [`footerCellRightClick`](grid/api/grid_footercellrightclick_event.md)
- [`Ctrl+Enter` shortcut](grid/configuration.md#keyboard-navigation) for expanding/collapsing the parent item in the TreeGrid mode

Version 8.4.6 
-----------------

Released on October 15, 2024

### Fixes

- Grid. The issue with opening the Combobox column editor without options

Version 8.4.4 
-----------------

Released on September 16, 2024

### Fixes

- Grid. Data is not displayed in the non-PRO version

Version 8.4.3 
------------------

Released on September 10, 2024

### Fixes

- Grid/TreeGrid. Incorrect span editing
- Grid/TreeGrid. The callback of the `dragRowIn` event is called with the source id instead of the target id
- Grid/TreeGrid. Incorrect rendering of header/footer spans
- Grid/TreeGrid. Canceling editing of a cell in the enabled `autoHeight` mode doesn't revert the value of a cell to the initial state
- Grid/TreeGrid. The `beforeColumnDrop` event fires after dragging rows
- Grid/TreeGrid. The `height` property set as a string breaks rendering of the component 

Version 8.4.2 
------------------

Released on August 29, 2024

### Fixes

- Core. Destruction of Layout in the Optimus framework causes an error
- Form. A number input with the predefined minimal value fails validation in case the input is empty 
- Grid/TreeGrid. Incorrect work of the `comboFilter` input in case entering of HTML content is enabled
- Grid/TreeGrid. Input of a number starting with a decimal point
- Grid/TreeGrid. The use of `autoHeight` and `autoEmptyRow` configs prevents appearing of a new empty row 
- Grid/TreeGrid. The `adjust:data` config is applied incorrectly during drag-n-drop
- Grid/TreeGrid. The `adjust` config of the component takes priority over the `adjust` config of a column
- Grid/TreeGrid. Parsing data with the `footerAutoHeight: true` config causes a console error
- Grid/TreeGrid. Dragging adjacent cells from the same column changes their positions relative to each other
- Layout. Issue with cells resizing
- Tree. The intermediate state of three-state checkboxes isn't displayed when a dataset is specified in the Tree configuration

Version 8.4.1
------------------

Released on July 25, 2024

### Fixes

- Combobox. A custom scroll doesn't work 
- Form. The value selected in the Combo control restores after the options reloading
- Form. The input destructor issue while using Optimus
- Form. The `enable()` method fails when a form contains a Fieldset control with a spacer
- Grid/TreeGrid. Row selection gets lost after dragging a column 
- Tree. Checkbox states are not displayed in the serialized data

Version 8.4 
------------------

Released on July 16, 2024

<a href="https://dhtmlx.com/blog/dhtmlx-suite-8-4/" target="_blank">Review of the release on the blog</a>

### New functionality

#### Chart 

- The ability to [specify a template for showing values for data items on the Pie, Pie3D and Donut charts](chart/customization.md#adding-template-to-values-of-data-items-in-pie-and-donut-charts)
- The ability to [add the header/footer for an exported PNG/PDF file](/chart/api/export/chart_png_method/) 

#### Combobox

- The ability to [add event handlers to HTML elements of a custom template of Combobox items](combobox/configuration.md#event-handlers-for-the-template)

#### Form 

- The ability to [add event handlers to HTML elements of a custom template of the Combo control items](/form/api/combo/api_combo_properties/)

#### Grid/TreeGrid

- The ability to [add event handlers to HTML elements of a custom template of Combobox editor items in a column](/grid/api/api_gridcolumn_properties/)
- The ability to [add the header/footer for an exported PNG/PDF file](/grid/api/export/grid_png_method/) 

#### Toolbar

- The ability to [expand items by hovering over Toolbar elements with the mouse pointer](toolbar/api/toolbar_navigationtype_config.md)

### Updates

#### Grid/TreeGrid

- The ability to [use most Data/TreeCollection methods during dynamic loading before data is fully loaded](grid/data_loading.md#dynamic-loading)
- The ability to specify Grid/TreeGrid [tooltips](grid/configuration.md#tooltip) as objects with settings 
- The ability to provide a [filtering function for the Combobox editor in a column](/grid/api/api_gridcolumn_properties/) 

#### List

- The ability to [use most Data/TreeCollection methods during dynamic loading before data is fully loaded](/list/load_data/#dynamic-loading)

### Fixes

- Grid/TreeGrid. Fix an issue related to updating sizes according to the parent container
- Navigation. Closing the menu on click in the "click" navigation mode for Toolbar, Menu, Sidebar, Ribbon

### New samples

- Combobox. [Groups in the drop-down list](https://snippet.dhtmlx.com/sk7q5wvl?tag=combobox)
- Combobox. [Editing/deleting options](https://snippet.dhtmlx.com/xd511ci5?tag=combobox)
- Grid. [Editing with a Colorpicker editor](https://snippet.dhtmlx.com/z2c4sfnn?tag=grid) 
- Grid. [Editing with a Grid editor](https://snippet.dhtmlx.com/7b2vb9mu?tag=grid)
- Tabbar. [Tooltips on tabs](https://snippet.dhtmlx.com/o5x1e3i8?tag=tabbar)
- TreeGrid. [Editing with a colorpicker editor](https://snippet.dhtmlx.com/tx89igxr?tag=treegrid)   
  

## Version 8.3.14

Released on July 8, 2024

### Fixes

- Combobox. The accessibility issue in the NVDA screen reader
- Grid/TreeGrid. Events aren't triggered for the cell template
- Grid/TreeGrid. The `adjust` property isn't applied to the "id" column 
- Grid/TreeGrid. The value of the `headerAutoHeight` property in combination with the `adjust` one is calculated incorrectly
- Grid/TreeGrid. Filtering is reset while dragging rows
- Grid/TreeGrid. The combination of the `minWidth` and `autoWidth` column properties works incorrectly
- Grid/TreeGrid. The scrolling functionality and key navigation are fixed
- Grid/TreeGrid. Filtering with the row-spanned data is fixed
- Layout. A theme applied to a Layout cell resets after the cell is collapsed

## Version 8.3.13

Released on June 24, 2024

### Fixes

- Window. The [`Tabbar.tabAlign`](/tabbar/api/tabbar_tabalign_config/) property is ignored if the Tabbar is placed within the Window control
- Form. The `helpMessage` is displayed in the incorrect position if the Form is scrolled to the bottom edge
- Core. Memory leaks (Layout, Combobox, Form components)

## Version 8.3.12

Released on May 17, 2024

### Updates

- Icons. Add new icons

### Fixes

- TreeGrid. Fix the issue with spans not applying to columns

## Version 8.3.11

Released on May 8, 2024

### Fixes

- DataCollection/TreeCollection. Fix the work of the `serialize()` method for the CSV format
- Form. Fix the issue with the `maxlength` property that made inputs to be required
- Grid. Fix the drag-n-drop functionality for a grid initialized in a web component
- Grid/TreeGrid. Fix the functionality of the comboFilter
- Grid/TreeGrid. Fix the `adjust` property for a cell with the "combobox" editor the options of which are set via the `id` and `value` properties
- Grid/TreeGrid. Fix the error caused by the call of the `addCellCss()` method for a hidden column
- Layout. Fix the error caused by the `destructor` call

## Version 8.3.10

Released on April 3, 2024

### Fixes

- Calendar. The 29th of February isn't rendered for some date formats
- Grid. Row CSS isn't applied in the exported Excel file
- Grid. Row autoHeight fails on changing the order of columns by dragging
- Grid. Custom header sorting doesn't work for the headers containing HTML
- Grid. Incorrect filtering via comboFilter

## Version 8.3.9

Released on March 18, 2024

### Fixes

- Date. Сonsole errors when used on iOS 16.3 in Safari
- Form. Validation for the DatePicker and Select controls
- Form. False rendering of components with the `hidden:true` property
- Grid/TreeGrid. Not displaying tooltips in the spanned footer
- Grid/TreeGrid. Initializing a grid in a web component breaks the inputFilter usage
- Grid/TreeGrid. Pressing Enter in the input filter triggers the afterSort event
- Layout. The destructor() method of the parent doesn't destruct the nested components

## Version 8.3.8

Released on February 26, 2024

### Fixes

- Calendar. Localization of Timepicker is fixed 
- DataCollection/TreeCollection. The DataProxy config for the data driver in the CSV/XML format is replaced
- DataCollection/TreeCollection. The functionality of the `findIndex()` method is optimized
- Form. Incorrect input of CJK characters if the form is placed into a layout
- Form. Incorrect work of the `setProperties()` method
- Form. The padding of the Fieldset control is fixed
- Form. Incorrect work of the `hide()` method of the Fieldset control
- Grid. Navigation through the spanned cells with the Tab key
- Grid/TreeGrid. Improved performance for a dataset with spans
- Grid/TreeGrid. Editing of spanned cells
- Localization. Issues with i18n import

## Version 8.3.7

Released on February 13, 2024

### Fixes

- Combobox. Improvements in the filtering logic. The filter type is changed: now search is carried out by comparing all characters of the query string
- Combobox. Fix the `change` event firing for an empty value
- Form. Fix incorrect clearing of a read-only Combo
- Form. The `validate()` method returns an incorrect value if there are no validation functions or attributes applied
- Form. Fix incorrect style of the input icon
- Form. The `input` event with the `inputType: "number"` returns a string value
- Grid/TreeGrid. Fix the issue with the comboFilter option size to allow entering a long text
- Grid/TreeGrid. Incorrect width calculation in case of a big number of columns
- Message. Fix calculation of the tooltip position
- Ribbon/Sidebar/Toolbar. Fix the types issue with the IState
- Ribbon/Toolbar. The DatePicker value can't be cleared via the API

## Version 8.3.6

Released on January 24, 2024

### Fixes

- Form. Fix Button and ToggleGroup positioning in Layout as well as the functionality of their `width` and `full` properties
- Form. Fix the size of the Toggle and ToggleGroup controls
- Form. Fix the error that occurred after destructing an Avatar control
- Form. Fix incorrect styling of nested controls in the Fieldset control when the `cols` arrangement is applied first
- Grid/TreeGrid. Optimizing the work of Grid/TreeGrid while loading a great number of spans
- Grid/TreeGrid. The `mark` property doesn't work when a hidden row is displayed by the `showRow()` call
- Grid/TreeGrid. Fix a potential regular expression vulnerability in the input editor
- Tree. Fix a typo in types.ts
- TreeGrid. Applying grouping to the filtered data leads to losing the initial data

## Version 8.3.5

Released on January 11, 2024

### Fixes

- DataCollection/DataProxy. Fix the problem with the header Accept type while sending a request with the `load()` method
- Form. Fix triggering of the `change` event during the call of `setValue()` for controls
- Form. The `beforeChange` event doesn't block selection of a radio button, if there hasn't been a selected button in RadioGroup
- Form. Fix the issue with a numeric filter validating an empty value in an input
- Grid/TreeGrid. Closing editor in a numeric column cell by pressing the ESC key clears the cell's value

## Version 8.3.4

Released on January 4, 2024

### Fixes

- Calendar. The week number at the start of the year calculates incorrectly
- Colorpicker. Changing the value in the **pallete** mode does not change the value in **picker** mode
- Form. Fix the issue related to the `destructor()` method in DatePicker control (popup is not hidden)
- Form. Incorrect type for the `hide()` method
- Form. The **number** input type cannot display the 0 number
- Form. The `destructor()` method invokes an error, if the popup is open
- Form. The colorpicker `value` property works incorrectly
- Form. The timepicker value displayes incorrectly, if you specify the `value` property without a value
- Grid/TreeGrid. Fix the issue related to the `autoHeight` property. The Grid takes hidden columns into account
- Grid/TreeGrid. Fix the issue related to the `beforeSort` event. The sort direction stickes
- Grid/TreeGrid. The footer summary calculates incorrectly in case of the empty value
- Pagination. Fix the issue related to the `add()` method. Populating data with the `add()` method breaks the pagination
- Pagination. The applied filter(s) does not refresh paginagion

## Version 8.3.3

Released on December 7, 2023

### Fixes

- Grid/TreeGrid. Fix the issue with impossibility to unselect the row that was selected first
- Grid/TreeGrid. Fix the issue with the beforeEditEnd/afterEditEnd events firing twice when the Esc or Enter key is pressed

## Version 8.3.2

Released on December 4, 2023

### Fixes

- Layout. Fix incorrect adding of content into a cell
- Layout. Fix script errors that occurred when Layout was used in a React app
- Grid/TreeGrid. Fix incorrect header height in case a grid is placed into a Layout cell
- TreeGrid. Fix the problem with rendering an expanded TreeGrid during export to PDF and PNG
- TreeGrid. Fix the issue with selection while using TreeGrid with Pagination

## Version 8.3.1

Released on November 14, 2023

### Fixes

- DataCollection. Fix an error in the DragManager 
- DataCollection. Fix data serialization to the CSV format
- Form. Fix the issue with the Slider ticks breaking the default margin between controls
- Grid/TreeGrid. Fix the width of an exported PNG file
- Menu. Fix resetting the position of a child on clicking its parent item
- Tabbar. Fix incorrect work of the tabAlign property
- TreeGrid. Fix the issue with selection working during pagination only for the first page

## Version 8.3

Released on October 23, 2023

<a href="https://dhtmlx.com/blog/dhtmlx-suite-8-3/" target="_blank">Review of the release on the blog</a>

### New functionality

#### ColorPicker

- The ability to adjust the [color transparency](colorpicker/configuration.md#color-transparency)

#### Form. Container

- The control's [configuration object](form/api/container/api_container_properties.md) is extended with a set of properties that allow adding and controlling the **label**

#### Grid/TreeGrid

- The ability to [set the autoHeight mode for the column's header/footer](grid/configuration.md#headerfooter-height) (PRO version)
- The ability to [enable HTML content in the columns' header/footer](grid/configuration.md#html-content-of-grid-columns) independent of the settings applied for the column or the whole component

#### Menu

- New [keydown](menu/api/menu_keydown_event.md) event

#### Ribbon

- New events: [input](ribbon/api/ribbon_input_event.md), [inputChange](ribbon/api/ribbon_inputchange_event.md), [keydown](ribbon/api/ribbon_keydown_event.md), and the [Datepicker](ribbon/datepicker.md) control

#### Sidebar

- New [keydown](sidebar/api/sidebar_keydown_event.md) event

#### Toolbar

- New events: [input](toolbar/api/toolbar_input_event.md) and [keydown](toolbar/api/toolbar_keydown_event.md)

### Updates

#### Grid/TreeGrid

- The functionality of the [eventHandlers](grid/api/grid_eventhandlers_config.md) configuration property is extended for the columns' header/footer
- The columns with the "number" type [allow only numeric values in the cells](grid/api/api_gridcolumn_properties.md)

### Fixes

- Form. Fix the absence of the bottom margin at the Container control
- Grid/TreeGrid. Fix the work of the [bottomSplit](grid/api/grid_bottomsplit_config.md) property when there was too little data for the proper content height
- TreeGrid. Fix the work of the [adjust](treegrid/api/treegrid_adjust_config.md) property with the "footer" value

## Version 8.2.7

Released on October 19, 2023

### Fixes

- Combobox. Fix the absence of the placeholder if Combobox has a template
- Form. Combo control. Fix the incorrect position of preMessage after the call of setProperties()
- Form. Input/Textarea controls. Fix disappearance of the entered value on entering the full screen mode
- Form. Toggle control. Fix the break of the Toggle button styles in case of simultaneous usage of the Suite and Vault sources on a page
- Grid/TreeGrid. Fix incorrect autoWidth calculation in case of a big number of columns

## Version 8.2.6

Released on October 12, 2023

### Fixes

- ColorPicker. Fix incorrect adding of a custom color
- Form. Fix incorrect work of the [`validate()`](suite/form/api/form_validate_method.md) method in the "silent" mode
- Form. Fix incorrect work of the [`clear()`](suite/form/api/form_clear_method.md) method that triggered validation
- Form. Fix blocking of typing on call of the [`validate()`](suite/form/api/input/input_validate_method.md) method for the Input control  
- Grid/TreeGrid. Fix the difference in the number format used for the cell data and for the footer
- Grid/TreeGrid. Fix the problem with displaying `O`(zero) in the footer as a total sum of a column

## Version 8.2.4

Released on October 4, 2023

### Fixes

- Grid/TreeGrid. Fix the issue with comboFilter not working in case the column's editor contains options with the id and value that don't match
- Grid/TreeGrid. Fix the problem with the [`setColumns()`](/suite/grid/api/grid_setcolumns_method/) method not refreshing the comboFilter options
- TreeGrid. Fix the issue with a console error throwing on hovering over the footer tooltips used together with the "content" property
- Toolbar/Menu. Fix the problem with displaying the count badge with the `0` value

## Version 8.2.3

Released on September 26, 2023

### Fixes

- Chart. Fix the issue with `minValue` rounding a fractional value
- Chart. Fix the functionality of the `dashed` property in the Spline charts
- Grid/TreeGrid. Fix the memory leak related to the header filters
- TreeGrid. Fix the problem when a double click on a grouped row threw an error

## Version 8.2.2

Released on September 13, 2023

### Fixes

- DataView. Fix the issue with the FocusChange event not triggering on selecting an item with the mouse click
- Grid/TreeGrid. Fix export to Excel with the non-numeric footer content
- Grid/TreeGrid. Fix the problem with setting columns' width during export to Excel if the `adjust` config is enabled
- Grid/TreeGrid. Fix export to Excel of the applied cell alignment
- Grid/TreeGrid. Fix export to Excel of the font weight applied to cells
- Grid/TreeGrid. The logic of selecting an option is fixed for comboFilter. The functionality of selectFilter and inputFilter is improved
- Menu. Fix the problem with rendering of the count badge at the root level
- Tree. Fix the impossibility to override the checkbox configuration via the dataset
- TreeGrid. Fix the issue with resetting changes in the edited cells after data ungrouping

## Version 8.2.1

Released on August 31, 2023

### Fixes

- Combobox. Fix the displaying of templates  
- Context Menu. Fix the problem with closing of the context menu when clicking on the scrollbar
- Grid/TreeGrid. Fix the issue when calling of the destructor() method caused a crash of an app based on the Optimus framework
- Grid/TreeGrid. Fix the rendering of hidden columns

## Version 8.2

Released on August 29, 2023

<a href="https://dhtmlx.com/blog/dhtmlx-suite-8-2/" target="_blank">Review of the release on the blog</a>

### New functionality

#### DataCollection/TreeCollection

- New [filter](data_collection/api/datacollection_filter_event.md) event and [resetFilter()](data_collection/api/datacollection_resetfilter_method.md), [getFilters()](data_collection/api/datacollection_getfilters_method.md) methods

#### Grid/TreeGrid

- The ability to [control the header/footer tooltip](grid/configuration.md#tooltip)

#### Form

- New [Avatar](form/avatar.md) control
- New [Fieldset](form/fieldset.md) control
- New [Toggle](form/toggle.md) and [ToggleGroup](form/togglegroup.md) controls

### Updates

#### Chart

- The [series](chart/api/chart_series_config.md) configuration property is extended with the **label** option for setting the text of the legend for a series (for the "line", "spline", "bar", "x-bar", "area", "splineArea", "radar", "scatter" chart types)

#### DataCollection/TreeCollection

- Functionality of the [filter()](data_collection/api/datacollection_filter_method.md) method is updated. Its second parameter - the **config** object gets the *permanent* property instead of the *smartFilter* one, and the new **id** property. Check the [Migration](migration.md#81---82) article for details

#### Form 

- Types of Form controls are restructured. The type declaration file (d.ts) is updated  

#### Form. SimpleVault

- The [API of the control](/category/simple-vault-api/) is renewed and improved

### Fixes

- Form. Fix the functionality of the **change** event of the simpleVault control
- Grid/TreeGrid. Fix the functionality of comboFilter and selectFilter that presupposes displaying options in these filters according to the current filtered state of DataCollection
- Grid/TreeGrid. Fix the issue with triggering the **change** event after filtering data (after selecting the filter)
- Grid/TreeGrid. Fix the issue with incorrect header tooltip rendering due to the use of a colspan
- Grid/TreeGrid. Fix the issue with incorrect displaying of header spans in the fixed columns
- Toolbar. Fix the problem with not displaying the expand triangle icon on adding sub-items into an element placed lower than the second level
- Grid/TreeGrid. Fix the incorrect calculation of the row autoHeight

## Version 8.1.10

Released on August 21, 2023

### Fixes

- Combobox. Fix the issue with the default icon of an option (set via the "src" or "icon" properties) not displayed in the input field
- Toolbar. Fix the problem with the setState() method not applying a value for DatePicker

## Version 8.1.9

Released on August 14, 2023

### Fixes

- Grid/TreeGrid. Fix the issue with a colspan breaking in case of hiding several of its columns
- Grid/TreeGrid. Fix the issue with the Input filter operating with the formatted numeric value instead of the original one
- Grid/TreeGrid. Fix incorrect export of boolean values to PDF/PNG
- Grid/TreeGrid. Fix incorrect work of the autoHeight property that resulted in not displaying multi-line data in cells

## Version 8.1.8

Released on August 8, 2023

### Fixes

- Form. Fix incorrect data rendering in the Input control on blocking changes by the beforeChange event
- Grid/TreeGrid. Fix incorrect behavior when typing "null" in the inputFilter displayed empty rows
- Grid/TreeGrid. Fix the issue with the destructor call after operating with the in-header filters that caused a console error throwing

## Version 8.1.7

Released on July 26, 2023

### Fixes

- Combobox. Fix an incorrect behavior whereby the filter selects option in any case
- Core. Fix an incorrect behavior whereby the form datePicker with the defined time format does not work
- Grid/TreeGrid. Disallow the html markup in the text property of span, if the **htmlEnable** property is set to *false*
- Grid/TreeGrid. Fix incorrect displaying of multilines in cells in the exported PDF
- Grid/TreeGrid. Fix incorrect displaying of spans in the fixed columns
- Toolbar. Fix the incorrect behavior of the toolbar buttons, if the toolbar is attached to a window
- Tree. Fix the issue that occurs if the data contains ID set to the 0 number (`id:0`)

## Version 8.1.6

Released on July 11, 2023

### Fixes

- ContextMenu. Fix displaying of ContextMenu behind Grid due to incorrect z-index
- Grid/TreeGrid. Fix the issue with the comboFilter not rendering options in case of the external data loading/parsing
- Grid/TreeGrid. Fix the incorrect data rendering in the autoHeight mode used together with the autoWidth mode when Grid/TreeGrid is placed in a Layout cell
- Grid/TreeGrid. Fix the console error appearing in case of numeric values in the data set combined with the enabled "multiselection" mode of the comboFilter
- Grid/TreeGrid. Fix incorrect positioning of the **select** editor when the Grid height is limited
- Grid/TreeGrid. Fix the issue when spans ignored the specified column format
- Layout. Fix the incorrect calculation of cells' sizes in the **wide** layout type
- Tree. Fix the issue when focusing an item didn't initiate scrolling a view to it
- TreeGridCollection. Fix the issue with the [getId()](tree_collection/api/treecollection_getid_method.md)/[getIndex()](tree_collection/api/treecollection_getindex_method.md) methods not working correctly in relation to each other

## Version 8.1.5

Released on June 19, 2023

### Fixes

- Combobox. Fix the functionality of the [addOption()](combobox/api/combobox_addoption_method.md) method. Now it takes both a string and an object as a parameter
- Form. Fix the issue with the beforeChange event not triggering for the TimePicker control during the UI interaction in the `controls:false` mode
- Grid. Fix the issue with ignoring colspans defined in the configuration object while loading data via the parse() or load() methods
- Grid/TreeGrid. Fix the problem with the "combobox" editor saving an option's text instead of its id in the data set after editing
- Grid/TreeGrid. Fix the TypeScript error which occurred due to the absence of the `align` property of the footer in the types
- Grid/TreeGrid. Fix the TypeScript error that occurred due to the wrong declaration of the iCol option type  
- Window. Fix the problem with window focusing in FireFox
    - note that the `--dhx-z-index-overlay-total` CSS variable for the [default theme](themes/default_theme.md) has been changed to 10000000

## Version 8.1.4

Released on June 15, 2023

### Fixes

- Form. Fix the issue with the `undefined` CSS class that appeared on creation of a form

## Version 8.1.3

Released on June 12, 2023

### Fixes

- Combobox. Fix the issue with displaying HTML content in the input
- Grid/TreeGrid. Fix incorrect processing of dates containing time in the AM format by the datePicker editor
- Grid/TreeGrid. Fix the problem with the footer colspan not working in the frozen part of a grid
- Grid/TreeGrid. Fix the issue with displaying HTML content in the comboFilter
- TreeGrid. Fix incorrect behavior when removing a child item of a selected row resets the selection

## Version 8.1.2

Released on May 29, 2023

### Fixes

- DataView. Fix incorrect rendering of multiple selected items while dragging them to the target
- Form. Fix incorrect key navigation in the TimePicker control
- Grid/TreeGrid. Fix the horizontal scrolling during the column drag
- Grid/TreeGrid. Fix the vertical scrolling during the row drag
- Grid/TreeGrid. Fix the impossibility to select an empty option in the `multiselection:false` mode of the comboFilter
- Layout. Fix incorrect arrangement of cells on a page after resizing/collapsing
- Window. Fix the issue when a modal window with an attached component refuses to close with the ESC button

## Version 8.1.1

Released on May 18, 2023

### Fixes

- DataProxy. Fix the issue with items' ids during lazy loading
- Dataview. Fix incorrect work of the [`setFocus()`](dataview/api/dataview_setfocus_method.md) method
- Form. Fix incorrect application of a validation class added to a custom CSS class
- Grid/TreeGrid. Fix the issue with ignoring hidden columns being a part of a colspan
- Grid/TreeGrid. Fix displaying of data in the header/footer during the initialization of a large number of columns
- Grid/TreeGrid. Fix incorrect drag-n-drop behavior in the disabled multi select mode
- Grid/TreeGrid. Fix the issue with the multi select filter when it adds an empty value from a data set into selected options by default
- TreeGrid. Fix incorrect work of the [`adjustColumnWidth()`](treegrid/api/treegrid_adjustcolumnwidth_method.md) method

## Version 8.1

Released on April 18, 2023

<a href="https://dhtmlx.com/blog/dhtmlx-suite-8-1/" target="_blank">Review of release on the blog</a>

### New functionality

#### Chart

- New [`exportStyles`](chart/api/chart_exportstyles_config.md) property

#### Grid

- The ability to export Grid to a PDF or PNG file:
    - new export methods: [`pdf()`](grid/api/export/grid_pdf_method.md), [`png()`](grid/api/export/grid_png_method.md)
    - new property: [`exportStyles`](grid/api/grid_exportstyles_config.md)
- The ability to set individual lists of editor options for different cells of the column:
    - now it is possible to define the [`options`](grid/api/api_gridcolumn_properties.md) property of a column as a callback function
- The ability [to set automatic height for Grid](grid/configuration.md#autoheight-for-grid) (Pro)

#### Tree

- The ability to initialize Tree in the collapsed state:
    - new property: [`collapsed`](tree/api/tree_collapsed_config.md)

#### TreeGrid

- The ability to export TreeGrid to a PDF or PNG file:
    - new export methods: [`pdf()`](treegrid/api/export/treegrid_pdf_method.md), [`png()`](treegrid/api/export/treegrid_png_method.md)
    - new property: [`exportStyles`](treegrid/api/treegrid_exportstyles_config.md)
- The ability to set individual lists of editor options for different cells of the column:
    - now it is possible to define the [`options`](treegrid/api/api_treegridcolumn_properties.md) property of a column as a callback function
- The ability [to set automatic height for TreeGrid](treegrid/configuration.md#autoheight-for-treegrid)
- New [`multiselection`](treegrid/api/treegrid_multiselection_config.md) property:
    - [the ability to select multiple cells/rows in TreeGrid](treegrid/configuration.md#multiple-selection-of-treegrid-cells)
    - [the ability to drag-n-drop multiple rows](treegrid/configuration.md#drag-n-drop-of-multiple-rows)
- The ability to define [whether collapsed rows should expand while hovering them over during drag-n-drop](treegrid/configuration.md#expanding-collapsed-rows-on-drag-n-drop):
    - new property: [`dragExpand`](treegrid/api/treegrid_dragexpand_config.md)
- The ability to initialize TreeGrid in the collapsed state:
    - new property: [`collapsed`](treegrid/api/treegrid_collapsed_config.md)

### Updates

#### Chart

- The [pdf()](chart/api/export/chart_pdf_method.md) method was updated:
    - new options of the `export` object are added: `theme`, `exportStyles`
    - new options of the `pdf` object are added: `pageRanges`, `displayHeaderFooter`, `footerTemplate`, `headerTemplate` 
- The [png()](chart/api/export/chart_png_method.md) method was updated:
    - new options of the `export` object are added: `theme`, `exportStyles`

### Fixes

- Grid. Fix work of the [`afterEditEnd`](grid/api/grid_aftereditend_event.md), [`afterEditStart`](grid/api/grid_aftereditstart_event.md), [`beforeEditEnd`](grid/api/grid_beforeeditend_event.md), [`beforeEditStart`](grid/api/grid_beforeeditstart_event.md) events when keyboard navigation is enabled
- Grid/TreeGrid. Fix work of selection on removing or loading data
- Layout. Fix work of the progress bar
- TreeGrid. Fix incorrect work of filtering when collapsing or expanding the parent node

## Version 8.0.3

Released on April 12, 2023

### Fixes

- Calendar. Fix work of the calendar when it is initialized in the container with limited size
- Form. Fix the issue with auto filling of the form in Firefox
- Grid. Fix work of Grid with [`lazyDataProxy`](grid/data_loading.md#dynamic-loading)
- Grid/TreeGrid. Fix display of data in spanned cells
- Grid/TreeGrid. Fix display of data in the tooltip for [new options created via the combobox editor](grid/configuration.md#editable-combobox)
- Grid/TreeGrid. Fix work of the [`cellClick`](grid/api/grid_cellclick_event.md), [`cellDblClick`](grid/api/grid_celldblclick_event.md), [`cellRightClick`](grid/api/grid_cellrightclick_event.md) events for spanned cells
- Slider. Fix work of the slider on touch devices

## Version 8.0.2

Released on March 20, 2023

### Fixes

- Grid. Fix the issue with editing of a span belonging to fixed columns or rows
- Grid. Fix the issue with editing of cells when selection is enabled
- Grid. Fix the issue with export to Excel after applying a custom font to Grid cells
- Grid. Fix the issue with the [`adjustColumnWidth()`](grid/api/grid_adjustcolumnwidth_method.md) method after resizing of a column
- Grid. Fix work of key navigation between a span and cell (in some cases)

## Version 8.0.1

Released on March 13, 2023

### Fixes

- Combobox. Fix default templates for the `img` and `icon` attributes of a [data item](combobox/api/combobox_data_config.md)
- Combobox. Fix work of the [`htmlEnable`](combobox/api/combobox_htmlenable_config.md) property
- Context menu. Fix the issue with applying of [themes](themes.md) to the context menu
- Grid/TreeGrid. Fix an error thrown when editing cells with null or undefined values in the column with [`editorType: "select"`](grid/configuration.md#types-of-column-editor)
- Grid/TreeGrid. Fix the issue with custom scroll when using together with frozen columns/rows
- Grid/TreeGrid. Fix the issue with the value returned from the [`filterChange`](grid/api/grid_filterchange_event.md) event after resetting the value of the [inputFilter/selectFilter](grid/configuration.md#headerfooter-filters). Now the event returns `value` as an empty string
- Grid/TreeGrid. Fix work of events of the [Selection](category/grid-selection-events.md) object
- List. Now focusing of items isn't available when [key navigation](list/api/list_keynavigation_config.md) is disabled
- Suite. Now the date format must include delimiters (space or symbol), otherwise an error will be thrown
- TreeGrid. Fix the issue which caused headers of groups to be duplicated when using the [`leftSplit`](treegrid/api/treegrid_leftsplit_config.md) property of TreeGrid
- Window. Fix the issue with excess scroll in the window content
- Window. Fix work of Window with the [`resizable: true`](window/api/window_resizable_config.md) property

## Version 8.0

Released on February 24, 2023

<a href="https://dhtmlx.com/blog/dhtmlx-suite-8-0/" target="_blank">Review of release on the blog</a>

### New functionality

#### Common features

- [Accessibility support](common_features/accessibility_support.md)

#### Styling

- New ["light", "contrast-light", "dark", "contrast-dark"](themes.md) color themes
- The ability to [change base themes](themes/change_base_themes.md) or [configure your own color theme](themes/custom_theme.md)
- [Theme configurator](themes/theme_configurator.md)

#### Chart

- [Calendar heatmap chart](chart/charts_overview.md#calendar-heatmap-chart) (Pro version)
- The ability to export the Chart data to [PDF](chart/api/export/chart_pdf_method.md) and [PNG](chart/api/export/chart_png_method.md) ([Example](https://snippet.dhtmlx.com/4rybsjjq))

#### Colorpicker

- New [`beforeChange`](colorpicker/api/colorpicker_beforechange_event.md) event

#### Combobox

- New [`beforeChange`](combobox/api/combobox_beforechange_event.md) event

#### Form

- New [`beforeChange`](form/api/form_beforechange_event.md) event

#### Form controls

- New events:
  - Datepicker [`beforeChange`](form/api/calendar/calendar_beforechange_event.md) event
  - Checkbox [`beforeChange`](form/api/checkbox/checkbox_beforechange_event.md) event
  - CheckboxGroup [`beforeChange`](form/api/checkbox_group/checkboxgroup_beforechange_event.md) event
  - Colorpicker [`beforeChange`](form/api/colorpicker/colorpicker_beforechange_event.md) event
  - Combo [`beforeChange`](form/api/combo/combo_beforechange_event.md) event
  - Input [`beforeChange`](form/api/input/input_beforechange_event.md) event
  - Radiogroup [`beforeChange`](form/api/radiogroup/radiogroup_beforechange_event.md) event
  - Select [`beforeChange`](form/api/select/select_beforechange_event.md) and [`beforeChangeOptions`](form/api/select/select_beforechangeoptions_event.md) events
  - Slider [`beforeChange`](form/api/slider/slider_beforechange_event.md) event
  - Textarea [`beforeChange`](form/api/textarea/textarea_beforechange_event.md) event
  - Timepicker [`beforeChange`](form/api/timepicker/timepicker_beforechange_event.md) event

#### Grid

- Now the user can clear date values in the cell
- The ability to configure [drag-n-drop of multiple rows](grid/configuration.md#drag-n-drop-of-multiple-rows) (Pro version)
- The ability to control the process of data filtering (new [`beforeFilter`](grid/api/grid_beforefilter_event.md) event)
- Now the sorting icon will also appear after sorting data via the `data.sort()` method
- The ability to configure the [datePicker editor](grid/configuration.md#types-of-column-editor) of a cell by passing most of properties of [DHTMLX Calendar](category/calendar-properties.md) to the `columns.editorConfig` property
- The ability to fix bottom rows and right columns using the corresponding [`bottomSplit`](grid/api/grid_bottomsplit_config.md) and [`rightSplit`](grid/api/grid_rightsplit_config.md) properties ([Example](https://snippet.dhtmlx.com/hcgl9nth))

#### Layout

- The ability to [show a progress bar for empty cells by default](layout/cell_configuration.md#progress-bar) (new [`progressDefault`](layout/api/cell/layout_cell_progressdefault_config.md) property of a Layout cell)
- The ability to [hide/show a progress bar via API calls](layout/work_with_layout.md#showinghiding-a-progress-bar):
    - new methods of Layout: [`progressShow()`](layout/api/layout_progressshow_method.md) and [`progressHide()`](layout/api/layout_progresshide_method.md)
    - new method of a Layout cell: [`progressShow()`](layout/api/cell/layout_cell_progressshow_method.md) and [`progressHide()`](layout/api/cell/layout_cell_progresshide_method.md)
- The ability to detach a component or HTML content from a cell (new [`detach()`](layout/api/cell/layout_cell_detach_method.md) method of a Layout cell)

#### Message

- The ability to close a message box (new [`close()`](message/api/message_close_method.md) method)
- The ability to set margin between the node and tooltip (new `margin` property of the [tooltip](message/api/api_message_properties.md#tooltip))

#### Slider

- New [`beforeChange`](slider/api/slider_beforechange_event.md) event

#### Timepicker

- New [`beforeChange`](timepicker/api/timepicker_beforechange_event.md) event

#### Toolbar

- [DatePicker control](toolbar/api/api_datepicker_properties.md). The ability to let the user enter the date via the input (new `editable` property)
- [DatePicker control](toolbar/api/api_datepicker_properties.md). New properties: `valueFormat`, `disabledDates`, `mark`, `mode`, `thisMonthOnly`, `timeFormat`, `timePicker`, `weekNumbers`, `weekStart`
- The ability to set focus on an Input (new [`setFocus()`](toolbar/api/toolbar_setfocus_method.md) method)

#### TreeCollection

- New [`beforeItemLoad`](tree_collection/api/treecollection_beforeitemload_event.md) and [`afterItemLoad`](tree_collection/api/treecollection_afteritemload_event.md) events

#### TreeGrid

- The ability to control the process of data filtering (new [`beforeFilter`](treegrid/api/treegrid_beforefilter_event.md) event)
- The ability to configure the [datePicker editor](treegrid/configuration.md#types-of-column-editor) of a cell by passing most of properties of [DHTMLX Calendar](category/calendar-properties.md) to the `columns.editorConfig` property
- The ability to fix bottom rows and right columns using the corresponding [`bottomSplit`](treegrid/api/treegrid_bottomsplit_config.md) and [`rightSplit`](treegrid/api/treegrid_rightsplit_config.md) properties ([Example](https://snippet.dhtmlx.com/46me58ze))

### Updates

#### Combobox

- The [`addOption()`](combobox/api/combobox_addoption_method.md) method is updated (new `join` parameter)

#### Form

- New `id` parameter is added for Form events: [`afterHide`](form/api/form_afterhide_event.md), [`afterShow`](form/api/form_aftershow_event.md), [`beforeHide`](form/api/form_beforehide_event.md), [`beforeShow`](form/api/form_beforeshow_event.md)

#### Form. CheckboxGroup control

- Now it is possible to hide/show not only the whole control but also its separate checkboxes:
    - new `id` parameter is added for CheckboxGroup methods: [`hide()`](form/api/checkbox_group/checkboxgroup_hide_method.md) and [`show()`](form/api/checkbox_group/checkboxgroup_show_method.md)
    - new `id` parameter is added for CheckboxGroup events: [`afterHide`](form/api/checkbox_group/checkboxgroup_afterhide_event.md), [`afterShow`](form/api/checkbox_group/checkboxgroup_aftershow_event.md), [`beforeHide`](form/api/checkbox_group/checkboxgroup_beforehide_event.md), [`beforeShow`](form/api/checkbox_group/checkboxgroup_beforeshow_event.md)

- Now it is possible to enable/disable and check visibility not only of the whole control but also of its separate checkboxes:
    - new `id` parameter is added for CheckboxGroup methods: [`enable()`](form/api/checkbox_group/checkboxgroup_enable_method.md), [`disable()`](form/api/checkbox_group/checkboxgroup_disable_method.md), [`isVisible()`](form/api/checkbox_group/checkboxgroup_isvisible_method.md), [`isDisabled()`](form/api/checkbox_group/checkboxgroup_isdisabled_method.md)

#### Form. Container control

-  The `value` parameter is removed from Container events: [`afterhide`](form/api/container/container_afterhide_event.md), [`aftershow`](form/api/container/container_afterhide_event.md), [`beforehide`](form/api/container/container_beforehide_event.md), [`beforeshow`](form/api/container/container_beforeshow_event.md)

#### Form. RadioGroup control

- Now it is possible to hide/show not only the whole control but also its separate radio buttons:
    - new `id` parameter is added for RadioGroup methods: [`hide()`](form/api/radiogroup/radiogroup_hide_method.md) and [`show()`](form/api/radiogroup/radiogroup_show_method.md)
    - new `id` parameter is added for RadioGroup events: [`afterHide`](form/api/radiogroup/radiogroup_afterhide_event.md), [`afterShow`](form/api/radiogroup/radiogroup_aftershow_event.md), [`beforeHide`](form/api/radiogroup/radiogroup_beforehide_event.md), [`beforeShow`](form/api/radiogroup/radiogroup_beforeshow_event.md)

- Now it is possible to enable/disable and check visibility not only of the whole control but also of its separate radio buttons:
    - new `id` parameter is added for RadioGroup methods: [`enable()`](form/api/checkbox_group/checkboxgroup_enable_method.md), [`disable()`](form/api/checkbox_group/checkboxgroup_disable_method.md), [`isVisible()`](form/api/checkbox_group/checkboxgroup_isvisible_method.md), [`isDisabled()`](form/api/checkbox_group/checkboxgroup_isdisabled_method.md)

#### Form. Select control

- Now it is possible to enable/disable and check visibility not only of the whole control but also of its separate radio buttons:
    - new `value` parameter is added for Select methods: [`enable()`](form/api/select/select_enable_method.md), [`disable()`](form/api/select/select_disable_method.md), [`isDisabled()`](form/api/select/select_isdisabled_method.md)

#### Form. Spacer control

-  The `value` parameter is removed from Spacer events: [`afterhide`](form/api/spacer/spacer_afterhide_event.md), [`aftershow`](form/api/spacer/spacer_afterhide_event.md), [`beforehide`](form/api/spacer/spacer_beforehide_event.md), [`beforeshow`](form/api/spacer/spacer_beforeshow_event.md)

#### Grid/TreeGrid

- The [`getHeaderFilter()`](grid/api/grid_getheaderfilter_method.md) method is updated. Now the method returns an object with a set of methods: [`blur()`](grid/api/headerfilter/blur_method.md), [`clear()`](grid/api/headerfilter/clear_method.md), [`focus()`](grid/api/headerfilter/focus_method.md), [`getFilter()`](grid/api/headerfilter/getfilter_method.md), [`setValue()`](grid/api/headerfilter/setvalue_method.md). Check the [Migration](migration.md#73---80) article
- Now the sorting icon will also appear after sorting data via the `data.sort()` method

#### Message

- The `position` property of the [tooltip](message/api/api_message_properties.md#tooltip) is extended by the "left" and "top" values

## Version 7.3.14

Released on January 17, 2023

### Fixes

- Grid. Fix the issue which caused [inputFilter/selectFilter](grid/configuration.md#headerfooter-filters) to stop working in some browsers
- Grid. Fix the issue with automatic adjustment of the column's width for header or footer consisting of several rows  
- Grid. Fix the issue with calculation of the height for frozen columns in Grid with horizontal and vertical scrollbars
- Grid. Fix work of drag-n-drop for columns
- Grid. Fix work of the [headerSort:false](grid/api/api_gridcolumn_properties.md) property specified for the header consisting of the spanned rows
- Grid. Now it is possible to select several cells/rows when using [multiselection](grid/api/grid_multiselection_config.md) together with [selection:"complex"](grid/api/grid_selection_config.md)
- Grid. Now the [eventHandlers](grid/api/grid_eventhandlers_config.md) property works for frozen columns
- TreeGrid. Fix the display of selection for spanned cells
- TreeGrid. Fix the issue with display of total values in the footer of the [exported .csv / .xlsx file](treegrid/usage.md)
- TreeGrid. Fix the issue with editing of spanned cells
- TreeGrid. Now it is possible to collapse/expand the content of the first cell of the first column even if it is included into the colspan
- Fix issues with [AJAX helper](ajax.md)

## Version 7.3.13

Released on December 14, 2022

### Fixes

- Grid. Fix the issue with checkbox editors of the column which appeared after double-click on one of the checkboxes
- Grid. Fix work of the [beforeUnSelect](grid/api/selection/selection_beforeunselect_event.md) event
- Grid. Now you can edit content in the spans of columns/rows via double-click on it
- Layout. Fix the issue with resizing of cells for which sizes were not specified. The issue appeared after one of the Layout cells was hidden

## Version 7.3.12

Released on November 17, 2022

### Fixes

- Calendar. Fix the issue with calling the [`clear()`](calendar/api/calendar_clear_method.md) method when [two calendars are linked](calendar/operating_calendar.md#linking-two-calendars)
- Gird. Fix the issue with the [`type: "percent"`](grid/api/api_gridcolumn_properties.md) property of a column
- Grid. Fix issues with [selectFilter](grid/configuration.md/#headerfooter-filters) and [comboFilter](grid/configuration.md/#headerfooter-filters). Now they don't ignore the [`type`](grid/api/api_gridcolumn_properties.md) and [`format`](grid/api/api_gridcolumn_properties.md) properties of a column
- Grid. Fix the error thrown when [exporting data to CSV format](grid/usage.md#exporting-data-to-csv)
- Grid. Now [custom tooltip](grid/customization.md#adding-template-to-tooltip) will be also displayed for cells with empty values
- Grid. Now it is possible to prevent a [custom tooltip](grid/customization.md#adding-template-to-tooltip) from being shown via returning `false` from the `tooltipTemplate` function
- TreeGrid. Fix the error appeared on initialization of the component when [`data`](treegrid/api/treegrid_data_config.md) was defined as `TreeGridCollection` instance and [`spans`](treegrid/configuration.md#spans) were applied
- Window. Fix the issue with overlay positioning for a modal window (z-index is changed)

## Version 7.3.11

Released on November 3, 2022

### Fixes

- DataCollection. Fix work of the [`save()`](data_collection/api/datacollection_save_method.md) method which thrown an error in some cases
- Form. Combo control. Fix the issue which caused data of the control to be reset after applying the [`setProperties()`](form/api/combo/combo_setproperties_method.md) method
- Grid. Fix the incorrect display of values for options of the combobox
- Grid. Fix the issue with the selectFilter of a column which appeared after resizing the column
- Grid. Fix the type of data returned by the [`getSpan()`](grid/api/grid_getspan_method.md) method
- Grid. Fix work of the [`mark`](grid/api/api_gridcolumn_properties.md) property of a column. Now the property doesn't ignore cell spans
- Grid. Now it is possible to scroll Grid when a mouse cursor is over frozen columns (rows)
- Layout. Fix the issue with resizing of a cell
- Toolbar. Input control. Now autocomplete of an input field is disabled by default. To enable it, use the [`autocomplete`](toolbar/api/api_input_properties.md) property of the control

## Version 7.3.10

Released on October 18, 2022

### Fixes

- Grid. Fix the issue with incorrect defining of the data type when setting the type of a cell as a boolean value
- Grid. Fix the issue with selection of cells when clicking on a cell from the frozen part
- Layout. Additional container with the "dhx_layout-cell-inner_html" class is added for HTML content
- Message. Fix position of the overlay for the confirm message
- Window. Fix the issue with incorrect positioning of the active window

## Version 7.3.9

Released on September 26, 2022

### Fixes

- Combobox. Fix work of the `addOption()` method
- Combobox&Combo control of Form. Fix the issue with the `setValue()` method which caused currently selected options to remain selected after setting new values
- Form. Combo control. Fix the issue with validation of the control in the `multiselection:true` mode
- List, DataView, Combobox&Combo control of Form. Fix work with IDs specified as numbers

## Version 7.3.8

Released on September 19, 2022

### Fixes

- Calendar. Fix the issue which appeared when the [`width`](calendar/api/calendar_width_config.md) property specified as a number was used together with [`weekNumbers: true`](calendar/api/calendar_weeknumbers_config.md)
- Grid. Fix the behavior of selection with frozen spans
- Grid. Fix the incorrect work of the [`dragItem`](grid/api/grid_dragitem_config.md) property when the item's ID was defined as a number
- Grid. Fix the issue which caused the resized width of the columns to be reset to the initial values after dragging the columns
- Grid. Fix the issue with the [`getCells()`](grid/api/selection/selection_getcells_method.md) method which returned incorrect results if multiple cells were selected with the `Shift` key
- Layout. Fix the issue with the [`attachHTML()`](layout/api/cell/layout_cell_attachhtml_method.md) method
- Ribbon. Input control. Fix the behavior of the label which caused focus not to be moved to the input field
- Toolbar. Input control. Fix the behavior of the label which caused focus not to be moved to the input field
- TreeGrid. Fix the incorrect calculation of the columns and rows displayed on the screen when calling the [`hideColumn()`](treegrid/api/treegrid_hidecolumn_method.md) or [`hideRow()`](treegrid/api/treegrid_hiderow_method.md) methods correspondingly

## Version 7.3.7

Released on September 5, 2022

### Fixes

- Grid. Fix the issue with disappearing of the comboFilter of a visible column after you hide any other column
- Grid. Fix the issue with display of the comboFilter for frozen columns when scrolling Grid horizontally
- Grid. Fix the issue with display of tooltips for columns with checkboxes
- Grid. Fix the issue with the [`canRowDrop`](grid/api/grid_canrowdrop_event.md) event
- Grid. Fix the issue with work of key navigation for Grid initialized in a collapsed Layout cell
- Ribbon. Fix the issue with the `label` property of the [Input](ribbon/api/api_input_properties.md) control
- Suite. Fix the issue with work of the "promiz" webpack together with ES6 modules
- Tabbar. Fix the issue with work of Tabbar in IE11
- Toolbar. Fix the issue with the `label` property of the [Datepicker](toolbar/api/api_datepicker_properties.md) control
- Toolbar. Fix the issue with the `label` property of the [Input](toolbar/api/api_input_properties.md) control
- TreeCollection. Fix work of the `add` and `smartFilter` properties of the **config** parameter of the [`filter()`](tree_collection/api/treecollection_filter_method.md) method

## Version 7.3.6

Released on August 8, 2022

### Fixes

- Calendar. Now it is possible [to set "saturday" as the starting day of the week](calendar/api/calendar_weekstart_config.md)
- Data. Fix the issue which caused extra requests to be sent to the server when making several changes to one item
- Data. Now it is possible to sort data by the value without use of the `as` attribute of the **rule** object if some of the values are `null` | `undefined`
- DataView, List, Tree. Now you can block bubbling of the events specified via the `eventHandlers` property by using `stopPropagation()`
- Form inside Popup. Fix the issue which caused the Popup to close after clicking on a popup of a Form control
- Grid. Fix the issue which caused the `eventHandlers` template to return an empty row object when the row ID was an integer
- Grid. Fix the issue with calculation of the correct number of columns which should be rendered on the screen (in some cases)
- Grid. Fix the issue with exporting Grid with the footer to Excel (the value for the footer in the exported file was different from the value in Grid)
- Grid. Fixed location of zones for a resize handle. Now it is possible to resize each column under the spanned header
- LazyDataProxy. Fix the issue with dynamic data loading which caused a part of the data to be loaded one more time. Now `LazyDataProxy` will load only the data which hasn't been loaded into the component before
- Popup. Fix the issue with display of tooltips for items of a component (for example, Toolbar) which is attached to a popup
- Tree with scrollbar. Now the content of the Tree will be auto scrolled if you drag an item of a Tree above or below its body

## Version 7.3.5

Released on July 7, 2022

### Fixes

- Form. Fix the issue with internal paddings of Form elements when using the `setProperties()` method
- Form. Now it is possible to set a new value for the disabled Combobox control via API
- Grid. Fix the incorrect work of formatting of numbers in some cases
- Grid. Fix the incorrect display of dates when the date format includes milliseconds
- Grid. Fix the incorrect work of editing of spanned cells
- Grid. Fix the issue which caused "fixed" columns to hide horizontal scrollbar
- Grid. Fix the issue which caused sorting icons not to show the correct direction of the future sorting order
- Grid. Fix the issue which caused the hidden rows to become visible after filtering of data was reset
- Grid. Fix the issue which prevented spans from being stylized via the `addCellCss()` method
- Grid. Now it is possible to reset filtering in the read-only mode of comboFilter by choosing an empty option in the dropdown list
- List. Fix the issue which caused focus to set on an item when clicking on it even so selection functionality was disabled via `selection:false`
- TreeGrid. Fix the incorrect work of the `getLength()` method which returned null instead of "0" for empty TreeGrid in some cases
- TreeGrid. Fix the issue which caused the height of the treegrid not to be recalculated after changing the data set
- Window. Fix the incorrect display of modal window (it was displayed behind the non-modal one)
- Window. Fix the issue with positioning of the window if the values of the width and height were incorrect

## Version 7.3.4

Released on June 07, 2022
### Fixes

- Calendar. Fix the issue with a miscalculation of number of the last week of year
- Combobox. Fix the issue with setting values if the widget is disabled
- Custom scroll. Fix the issue with custom scrolling on MacOS
- Form. Fix the issue with validation of the combo component. The ID is validated instead of value
- Form. Fix the issue with sending the html form (if *dhx.Form* is included into the *form* tag) when pressing the "enter" key, if any input field is in focus
- Form. Fix the issue with activating/displaying the initially hidden control (`hidden: true`) of the "container" form using the `show()` method
- Form. Fix the issue with including a toolbar into the "container" form (errors in console)
- Grid. Fix the issue with selection when adding spans into the grid component
- Grid. Fix the issue with reselection of a cell after calling the `grid.selection.removeCell()` method
- Layout. Fix the issue with the initially collapsed cell which includes the `min-width` and `min-height` settings. Instead of being collapsed, the cell takes the specified min sizes
- Layout. Fix the issue with dynamic resizing a cell when resizing a viewport (in some cases)
- Layout. Fix the issue with resizing cells which contain the iframe element
- Tree. Fix the issue with dynamic loading of the child elements, if the url for autoloading includes "?"

## Version 7.3.3

Released on April 25, 2022

### Fixes

- Form. Combo control. Fix the issue with re-setting of the same value of the readonly Combo control after the `clear()` method of Form was called
- Form. Fix the issue which caused the `getValue()` method to return the `null` value as a string
- Grid. Fix the issue with filtering of a big data set which caused the symbols to get lost when typing them into the header filter. Now you have more time for typing symbols into the input filter of Grid
- Toolbar. Fix the issue which caused the `getState()` method not to return the value of a datePicker
- Vault and Suite. Fix the conflict appeared between CSS styles of the Vault and Suite scrollbars when including source files of the components to the one page

## Version 7.3.2

Released on April 4, 2022

### Fixes

- Data. Now the `,`,  `;`, `"` symbols will be wrapped into the quotes when serializing a data set into the CSV format
- Form. Text control. Fix the incorrect display of the long value of the Text control
- Grid, TreeGrid. Now the Grid and TreeGrid packages includes the ability to localize the "datePicker" and "combobox" column editors
- Grid. Fix the issue which caused the empty row/col objects to be returned after calling [events for custom templates](../grid/api/grid_eventhandlers_config/) of Grid columns
- Grid. Fix the issue with processing of Date objects when exporting the Grid data into the CSV/Excel format
- Grid. Fix the issue with the `htmlEnable: true` property which didn't take into account the line breaks of the cells content when the `autoHeight:false` property of Grid was applied 

## Version 7.3.1

Released on March 17, 2022

### Fixes

- Data. Fix the issue with serialization of data into CSV format which caused the incorrect structure of the output data if the initial data set contained a comma (",") in a value
- DataCollection. Fix the issue with the `save()` method of DataCollection which sent multiple requests (when making multiple changes) to server instead one
- Form. Fix the incorrect work of the `destruct()` method when calling it from the `change` event
- Grid. Fix the issue which caused a selected item still to remain selected after it was removed from the data collection
- Grid. Fix the issue with applying the `adjust` property of Grid after the data reloading
- Grid. Fix the script error thrown after removing all selected options from the "multiselect" editor of a cell
- Grid. Pagination. Fix the issue which caused pagination not to work when using lazy loading of Grid data
- List. Pagination. Fix the issue which caused pagination not to work when using lazy loading of List data

## Version 7.3

Released on January 19, 2022

<a href="https://dhtmlx.com/blog/dhtmlx-suite-7-3-new-treemap-chart-free-text-combobox-input-custom-filters-grid-treegrid/" target="_blank">Review of release on the blog</a>

### New functionality

#### Chart

- New [Treemap chart](chart/charts_overview.md/#treemap-chart)
- The ability to arrange legend items vertically or horizontally via the `direction` property of the [legend](chart/api/chart_legend_config.md)

#### Combobox

- The ability to disable rendering of HTML content in Combobox options via the [`htmlEnable`](combobox/api/combobox_htmlenable_config.md) property
- The ability [to allow users to add new items into the list of options from UI](combobox/configuration.md/#editable-combobox) via the [`newOptions`](combobox/api/combobox_newoptions_config.md) property
- New [`addOption()`](combobox/api/combobox_addoption_method.md) method
- New ["createItem"](combobox/localization.md) locale option added

#### Form. Combo control

- The ability [to allow users to add new values into the list of combobox options from UI](combobox/configuration.md/#editable-combobox) via the [`newOptions`](form/api/combo/api_combo_properties.md) property
- The ability to add a new item into the Combo control via the [`addOption()`](combobox/api/combobox_addoption_method.md) method of Combobox: [form.getItem("combo").getWidget().addOption("new_value");](form/combo.md/#working-with-the-dhtmlxcombobox-widget)

#### Grid

- The ability [to add custom logic to the header/footer filters of the column](grid/configuration.md/#customizing-headerfooter-filters) via the `customFilter` attribute
- The ability [to allow users to add new values into the list of options from UI](grid/configuration.md/#editable-combobox) via the `newOptions` attribute of the [`editorConfig`](grid/api/api_gridcolumn_properties.md) property of a column

#### List

- The ability to disable rendering of HTML content in List options via the [`htmlEnable`](list/api/list_htmlenable_config.md) property

#### Message

- The ability to disable displaying HTML content in the [Alert box](message/api/api_message_properties.md/#alert-box), [Confirm box](message/api/api_message_properties.md/#confirm-box), and [Tooltip](message/api/api_message_properties.md/#tooltip) via the [`htmlEnable`](message/api/api_message_properties.md) property

#### Tabbar

- New [`beforeChange`](tabbar/api/tabbar_beforechange_event.md) event

#### TreeGrid

- The ability [to add custom logic to the header/footer filters of the column](treegrid/configuration.md/#customizing-headerfooter-filters) via the `customFilter` attribute
- The ability [to allow users to add new items into the list of options from UI](treegrid/configuration.md/#editable-combobox) via the `newOptions` attribute of the  [`editorConfig`](treegrid/api/api_treegridcolumn_properties.md) property of a column

### Fixes

- Chart. Fix the incorrect display of Radar chart if the values in the data set are the same
- Chart. Fix the issue with displaying an empty tooltip in Line chart
- Chart. Fix the issue with the type of the [`value`](chart/data_loading.md/#preparing-data-set) property in a data set
- Custom Scroll. Fix the incorrect position of scroll after scrolling the grid attached to the tabbar and changing the tabs
- Form. Fix the issue with enabling the disabled RadioGroup control
- Form. Fix the issue with the Textarea control. Now the [`required`](form/api/textarea/api_textarea_properties.md) property doesn't take `value: null` as a valid
- Form. Input control. Fix the issue with display of excess whitespace in the output value of the [`Input`](form/api/input/input_input_event.md) event
- Grid, Pagination. Fix the incorrect work of Pagination if the first column of the grid is hidden
- Grid. Fix the incorrect display of actual values specified in the "select", "combobox", or "multiselect" editor when opening the editor
- Grid. Fix the incorrect loading of string values from XML file
- Grid. Fix the incorrect work of [selectFilter](grid/configuration.md/#headerfooter-filters) with boolean values
- Grid. Fix the issue that caused the [`adjust`](grid/api/api_gridcolumn_properties.md) property to ignore the [`template`](grid/api/api_gridcolumn_properties.md) specified for a column
- Grid. Fix the issue which caused key navigation to stop working in Grid attached into Tabbar which is attached into Window
- Grid. Fix the issue which caused [`autoWidth`](grid/api/grid_autowidth_config.md) not to work if the [`width`](grid/configuration.md/#columns) wasn't specified for only one of the grid columns
- Grid. Fix the issue with [number formatting](grid/configuration.md/#formatting-columns) which caused minus numbers from -1 to 0 to be displayed like positive numbers
- Grid. Fix the issue with drag-and-drop of the first row
- Grid. Fix the issue with the [`canRowDrop`](grid/api/grid_canrowdrop_event.md) event
- Layout. Fix the issue which caused the cells without the height/width specified initially cannot be reverted to the original state after they've been resized and collapsed several times
- Layout. Fix the issue with collapsing and resizing a cell after it has been resized
- LazyDataProxy in Grid. Fix the issue with the [`loadError`](data_collection/api/datacollection_loaderror_event.md) event
- Menu. ContextMenu. Fix the issue with the self-generated "–context-menu" postfix for the name of the custom CSS class
- Menu. Fix the issue which caused the menu to close after hovering over the first item which is disabled
- Ribbon. Fix the issue with calculation of the widget's height when some items are hidden
- Toolbar. Datepicker control. Fix the issue which caused the same date to be shown in different Datepickers (two or more)
- Toolbar. SelectButton control. Fix the issue that caused an icon of the selected value not being displayed initially or after applying the [`setState()`](toolbar/api/toolbar_setstate_method.md) method
- TreeGrid. Fix the incorrect work of filtering when [`multiselection`](treegrid/configuration.md/#the-list-of-configuration-properties-for-combofilter) is enabled for comboFilter and multiple options are selected
- TreeGrid. Fix the issue with exporting a grouped treegrid to CSV
- TreeGrid. Fix the issue with render of data items when they are parsed in reverse order

## Version 7.2.5

Released on October 28, 2021

### Fixes

- Form. Timepicker control. Fix the issue with setting the time in the timepicker using the keyboard
- Grid, TreeGrid. Now the value of the option will be displayed both in the editor and a cell if the options of the "combobox" and "select" editors are set as an array of objects with the *id-value* combinations
- Grid, TreeGrid. Now the width of the column is calculated depending on the following properties: **minWidth**/ **maxWidth**, **adjust**, and **autoWidth**
- Grid, TreeGrid. Now there is the ability to set the options of the "select" editor of a cell as an array of objects with the *id-value* combinations
- Grid. Fix the issue which caused the method of dragging a column to be called after clicking the in-header filter of a column (in Firefox only)
- Grid. Fix the issue with incorrect calculation of the height of the grid header when the [autoHeight](grid/api/grid_autoheight_config.md) property is enabled
- Grid. Fix the issue with key navigation when working with several grids
- Grid. Fix the issue with the [autoWidth](grid/configuration.md/#autowidth-for-columns) property which caused the minimal width of the column not being taken into account when calculating the column's width
- Grid. TreeGrid. Fix the issue which caused data of the treegrid to be changed after filtering and dragging a column/row

## Version 7.2.4

Released on October 13, 2021

### Fixes

- DataCollection. Now the [](data_collection/api/datacollection_save_method.md) method of DataCollection sends `PUT` request to the backend after adding new data to the component, and `POST` one after editing the data
- Form. Combo control. Fix the issue which caused errors to appear in the console after calling the [](form/api/combo/combo_setproperties_method.md) method of the control
- Form. Fix the issue which caused the [](form/api/form_send_method.md) method to accept only one success HTTP status code which is 200. Now the method can accept other 2xx codes. 
- Form. TimePicker control. Fix the issue which caused the value of the control not being updated after the value is selected in the timepicker when working in Firefox
- Grid. Fix issues with touch events for the in-header filters of the Grid columns
- Grid. Fix the incorrect work of key navigation in the components when they are attached into the grid which is attached into a layout cell
- Grid. Fix the issue which caused key navigation to be broken after the [](grid/api/grid_setcolumns_method.md) method is called in the grid with empty columns
- Grid. Fix the issue which caused the width of the columns not being updated when using the [](grid/api/grid_setcolumns_method.md) method
- Grid. Fix the issue with filtering the grid via the combo filter when the [](grid/api/grid_autoemptyrow_config.md) configuration property of Grid is set to *true*
- TreeGrid. Fix the incorrect display of an icon of a treegrid row after adding a child row and then deleting it. Now the *$items* property of the TreeGridCollection object is updated after deleting all child items.

## Version 7.2.3

Released on September 27, 2021

### Fixes

- Chart. Fix the issue which caused the labels to overlap each other in Donut, Pie, Pie3D charts when `subType:"basic"` option is set
- Chart. Fix the issue which caused the long content of the legend to go beyond the chart container
- Combobox. Fix the incorrect work of the combobox which caused the selected values to be cleared after deleting options in the input when the `multiselection` property is enabled
- Grid, TreeGrid. Fix the issue with editing empty cells
- Grid. Fix the incorrect calculation of the line height for the multiline content of cells if the `htmlEnable` property of the column is enabled
- Grid. Fix the incorrect work of key navigation after editing cells with the "combobox" and "multiselect" editor types
- Grid. Fix the issue which caused key navigation to stop working after initializing the second grid. Now it is possible to set focus to the grid using `grid.selection.setCell()`
- Grid. Now the content of the grid is filtered strictly by the values selected in the combo filter
- Toolbar. Fix the issue with render of data when recreating the toolbar after removing it via the `destructor()` method

## Version 7.2.2

Released on September 13, 2021

### Fixes

- Grid. Fix the issue with the render of the grid, which is placed into the tabbar, after applying the `setColumns()` method of Grid and switching between the tabs of the tabbar
- Layout. Fix the script error thrown when trying to resize a cell when the next cell is hidden
- List. Fix the issue which caused new items not to be added into an empty data collection after applying the `filter()` method to the data collection
- TreeGrid. Fix the issue with selection of the child rows and its cells

## Version 7.2.1

Released on August 26, 2021

### Fixes

- Calendar. Fix the issue which caused sending of the form after clicking the buttons of the calendar if the calendar is placed into the HTML form
- Combobox. Fix the issue with the `Change` event which caused the event to fire twice after selecting a new option
- Form. Textarea control. Fix the issue which caused the text cursor not to move to a new line after pressing "Enter"
- Grid. Fix the incorrect work of selection after filtering the grid
- Grid. Fix the issue which caused the parent container for Grid, which is attached to the layout, to reset when calling the `setColumns()` method after initialization of Grid
- Grid. Fix the issue with filtering the content of the grid when multiple options are chosen in the combo filter
- Grid. Fix the issue with resizing of the columns if the in-header filters are specified for the columns
- Grid. Fix the script error thrown after scrolling the grid horizontally several times
- Layout. Fix the issue with the `collapse()` method of a layout cell
- List. Fix the issue which caused the list not to be scrolled to the item selected via the `setFocus()` method
- TreeGrid. Now it is possible to filter the content of the treegrid by multiple header filters

## Version 7.2

Released on August 4, 2021

<a href="https://dhtmlx.com/blog/dhtmlx-suite-7-2-new-form-control-custom-scroll-tree-templates/" target="_blank">Review of release on the blog</a>
<br/><br/>

Check the [Migration article](migration.md/#71---72) to keep in step with the latest version.

### New functionality

#### Combobox

- New [blur()](combobox/api/combobox_blur_method.md) method is added
- New events are added: [blur](combobox/api/combobox_blur_event.md), [focus](combobox/api/combobox_focus_event.md), [keydown](combobox/api/combobox_keydown_event.md), [beforeOpen](combobox/api/combobox_beforeopen_event.md), [afterOpen](combobox/api/combobox_afteropen_event.md)

#### Form

- New [Container control](form/container.md) to attach HTML code or the DHTMLX widgets is added (Pro version)
- New [blur()](form/api/form_blur_method.md) method is added
- New events are added: [blur](form/api/form_blur_event.md), [focus](form/api/form_focus_event.md), [keydown](form/api/form_keydown_event.md)

#### Form controls

- New "blur()" method of Form controls: [Button](form/api/button/button_blur_method.md), [DatePicker](form/api/calendar/calendar_blur_method.md), [Checkbox](form/api/checkbox/checkbox_blur_method.md), [CheckboxGroup](form/api/checkbox_group/checkboxgroup_blur_method.md), [ColorPicker](form/api/colorpicker/colorpicker_blur_method.md), [Combo](form/api/combo/combo_blur_method.md), [Input](form/api/input/input_blur_method.md), [RadioGroup](form/api/radiogroup/radiogroup_blur_method.md), [Select](form/api/select/select_blur_method.md), [Slider](form/api/slider/slider_blur_method.md), [Textarea](form/api/textarea/textarea_blur_method.md), [TimePicker](form/api/timepicker/timepicker_blur_method.md)
- New "focus()" method of Form controls: [Button](form/api/button/button_focus_method.md), [Slider](form/api/slider/slider_focus_method.md)
- New "blur" event of Form controls: [Button](form/api/button/button_blur_event.md), [DatePicker](form/api/calendar/calendar_blur_event.md), [Checkbox](form/api/checkbox/checkbox_blur_event.md), [CheckboxGroup](form/api/checkbox_group/checkboxgroup_blur_event.md), [ColorPicker](form/api/colorpicker/colorpicker_blur_event.md), [Combo](form/api/combo/combo_blur_event.md), [Input](form/api/input/input_blur_event.md), [RadioGroup](form/api/radiogroup/radiogroup_blur_event.md), [Select](form/api/select/select_blur_event.md), [Slider](form/api/slider/slider_blur_event.md), [Textarea](form/api/textarea/textarea_blur_event.md), [TimePicker](form/api/timepicker/timepicker_blur_event.md)
- New "focus" event of Form controls: [Button](form/api/button/button_focus_event.md), [DatePicker](form/api/calendar/calendar_focus_event.md), [Checkbox](form/api/checkbox/checkbox_focus_event.md), [CheckboxGroup](form/api/checkbox_group/checkboxgroup_focus_event.md), [ColorPicker](form/api/colorpicker/colorpicker_focus_event.md), [Combo](form/api/combo/combo_focus_event.md), [Input](form/api/input/input_focus_event.md), [RadioGroup](form/api/radiogroup/radiogroup_focus_event.md), [Select](form/api/select/select_focus_event.md), [Slider](form/api/slider/slider_focus_event.md), [Textarea](form/api/textarea/textarea_focus_event.md), [TimePicker](form/api/timepicker/timepicker_focus_event.md)
- New "keydown" event of Form controls: [Button](form/api/button/button_keydown_event.md), [DatePicker](form/api/calendar/calendar_keydown_event.md), [Checkbox](form/api/checkbox/checkbox_keydown_event.md), [CheckboxGroup](form/api/checkbox_group/checkboxgroup_keydown_event.md), [ColorPicker](form/api/colorpicker/colorpicker_keydown_event.md), [Combo](form/api/combo/combo_keydown_event.md), [Input](form/api/input/input_keydown_event.md), [RadioGroup](form/api/radiogroup/radiogroup_keydown_event.md), [Select](suite/form/api/select/select_keydown_event.md), [Slider](form/api/slider/slider_keydown_event.md), [Textarea](form/api/textarea/textarea_keydown_event.md), [TimePicker](form/api/timepicker/timepicker_keydown_event.md)

#### Grid

- New [multiselect editor](grid/configuration.md/#types-of-column-editor) is added
- The ability to [choose several options in comboFilter at once](grid/configuration.md/#headerfooter-filters) via setting [multiselection:true](grid/configuration.md/#the-list-of-configuration-properties-for-combofilter) property of comboFilter
- The ability to show different values in the grid cell and in the combo editor by setting ["id-value" combinations for each option](grid/configuration.md/#types-of-column-editor) of the combo editor
- The ability to specify the type to sort data as via the [sortAs](grid/api/api_gridcolumn_properties.md) attribute of the header configuration property of a Grid column
- The ability to enable/disable sorting by clicking the header via the [headerSort](grid/api/api_gridcolumn_properties.md) attribute of the header configuration property of a Grid column

#### Slider

- New methods are added: [blur()](slider/api/slider_blur_method.md) , [focus()](slider/api/slider_focus_method.md)
- New events are added: [blur](slider/api/slider_blur_event.md), [focus](slider/api/slider_focus_event.md), [keydown](slider/api/slider_keydown_event.md)

#### Toolbar

- New [Datepicker control](toolbar/datepicker.md) is added
- The [inputChange](toolbar/api/toolbar_inputchange_event.md) event is added

#### Tree

- The ability to [specify a template](tree/api/tree_template_config.md) for Tree items
- The ability to [add event handlers](tree/api/tree_eventhandlers_config.md) to the HTML elements of a custom template
- The ability to [set the height](tree/api/tree_itemheight_config.md) of an item

#### Treegrid

- New [multiselect editor](treegrid/configuration.md#types-of-column-editor) is added
- The ability to [choose several options in comboFilter at once](treegrid/configuration.md/#headerfooter-filters) via setting [multiselection:true](treegrid/configuration.md/#the-list-of-configuration-properties-for-combofilter) property of comboFilter
- The ability to show different values in the grid cell and in the combobox editor by setting ["id-value" combinations for each option](treegrid/configuration.md/#types-of-column-editor) of the combobox editor
- The ability to specify the type to sort data as via the [sortAs](treegrid/api/api_treegridcolumn_properties.md) attribute of the header configuration property of a TreeGrid column
- The ability to enable/disable sorting by clicking the header via the [headerSort](treegrid/api/api_treegridcolumn_properties.md) attribute of the header configuration property of a TreeGrid column

#### Helpers

- [Custom scroll](../helpers/custom_scroll/) to replace the standard browser scrollbar is added (Pro version)

### Updates

- DataCollection. The [save()](data_collection/api/datacollection_save_method.md/) method of DataCollection is updated. Now the method sends either `POST`, or `PUT`, or `DELETE` requests to the [backend](../integration/suite_and_backend/).
- Grid, TreeGrid. The "row" and "both" values of the [dragItem](grid/api/grid_dragitem_config.md/) configuration property are added.
- Tree. Now it is possible to edit multiline content of a Tree item after setting [editable:true](tree/api/tree_editable_config.md/) configuration option of Tree

### Fixes

- Grid. Fix the issue with the update of options in the combo filter after adding a new item into the data collection
- Grid. Fix the issue with loading data into Grid using `lazyDataProxy`
- Grid. Fix the issue with entering text in the combobox editor of a Grid cell
- Menu. Fix the issue which caused the context menu not to close after clicking outside the menu if `navigationType: "click"` property is specified

## Version 7.1.10

Released on July 20, 2021

### Fixes

- Chart. Fix the default paddings between the chart and its container
- Chart. Fix the incorrect display of "stroke" for Pie, Pie3D
- Chart. Now the "valueOnly" subtype of a chart is available not only for Donut chart but also for Pie and Pie3D ones
- Chart. The display of the "basic", "valueOnly", "percentOnly" subtypes of a chart is unified
- Form. Combo control. Fix the issue which caused sending of - Form after an item of Combobox is selected by pressing the Enter key
- Form. Fix the issue which caused the value in Form not to be cleared after clearing the value in the Datepicker control
- Grid, TreeGrid. Fix the script error thrown when setting the "adjust: true" configuration option of Grid and using columns with the combo filter
- Grid. Fix the incorrect work of the "beforeEditEnd" event when returning false
- Grid. Fix the incorrect work of the "editable:false" configuration option of the column when the checkbox editor is set for the column
- Grid. Fix the issue which caused the filter in the source grid not being reset after dragging the row into the target grid
- Grid. Fix the issue which caused the parent container for Grid, which is attached to the layout, to reset when calling the "setColumns()" method after initialization of Grid
- Grid. Fix the issue with editing of the checkboxes by using the Space key
- Grid. Fix the issue with formatting of the fractional numbers
- Grid. Fix the issue with ignoring the "filter" and "template" configuration properties of comboFilter
- Grid. Fix the issue with incorrect calculation of the footer of the frozen columns
- Layout. Fix the issue which caused the "сlick" event of DataView to be called after clicking the empty area in the dataview attached to the Layout cell
- Pagination. Fix the script error thrown after clicking on the "next" button
- Sidebar. Fix the issue with the display of the tooltip when the sidebar is attached to the modal window
- Tabbar. Fix the issue which caused the "change" event to be called when clicking the currently active tab in the tabbar
- Tree. Fix the issue which caused custom CSS classes not being applied to the nested items (non-folders)
- TreeCollection. Fix the issue that caused the "beforeAdd" event not to be called after adding new items into TreeCollection
- TreeGrid. Fix the incorrect display of data when entering the value, which doesn't exist in the data set, into the header cell with the input filter
- TreeGrid. Fix the issues with the top and bottom borders of the footer cells of the frozen columns

## Version 7.1.9

Released on June 24, 2021

### Fixes

- A helper error now will be thrown in the console for the id of the new item if such id already exists in the dataset
- Calendar. Fix the incorrect display of the date after changing the time zone
- Chart. Fix the incorrect work of tooltips when the chart is attached to the window
- Combobox. Fix the issue with the scroll position in the list of options when the "readOnly" mode is enabled
- Grid, TreeGrid. Fix the issue with alignment of data in the header of the column
- Grid. Fix the incorrect work of key navigation
- Grid. Fix the issue that caused the column to drop at the end of the grid after the column is dragged and then dropped back to its own place
- Grid. Fix the issue that caused the filtering of Grid to reset after applying key navigation
- Grid. Fix the issue that caused the filtering of the column to reset after the data reloading
- Grid. Fix the issue with drag-and-drop of rows that caused the editor for the columns that are absent in the target grid to stop opening
- Grid. Fix the issue with dragging the column when the "rowspan" attribute is set for its header
- Grid. Fix the issue with filtering of the columns when combo/select filters are specified for their content
- Grid. Fix the issue with the alignment of the content of the column header when the "colspan" attribute is set for the header
- Grid. Fix the issue with the display of Grid if it is attached to Layout and the "setColumns()" method is called after initialization of the grid
- Grid. Fix the issue with the display of the borders of the header colspan
- Grid. Fix the issue with the height of the footer
- Grid. Fix the issue with the type of the "source" attribute of the "data" parameter in the "afterColumnDrag" and "afterColumnDrop" events. Now the type of the attribute is an array.
- Grid. Fix the script error thrown in the console after drag-and-drop of rows from one grid to another if the grids are placed in the Layout cells
- Grid. Fix the script error thrown in the console after drag-and-drop of rows from one grid to another if the grids are placed in the window
- Layout. The size of the space between cells is changed from 10 to 12 pixels (for type:"space"|"wide")
- Tabbar. Fix the issue with scrolling a large number of tabs  
- TreeGrid. Fix the issue with dragging the rows in the grouped treegrid
- TreeGrid. Fix the incorrect work of selection after a tree node is collapsed

## Version 7.1.8

Released on June 10, 2021

### Fixes

- Calendar. Fix the issue that caused the previously selected date to remain highlighted with the grey circle after selecting some other date
- Calendar. Fix the script error that appeared when two calendars are linked and the "destructor()" method is called
- Chart. Fix the issue with the "log" configuration option of the chart scales
- Data Collection. Fix the issue with the "update()" method
- Form. Fix the issue with the `height: "content"` configuration option of the Textarea control
- Grid. Fix the display of the hidden rows on data loading
- Grid. Fix the issue with drag-and-drop of rows that caused the editor for the columns that are absent in the target grid to stop opening
- Grid. Fix the issue with the alignment of the header of the column when `sortable: false` is specified in the configuration of the column
- Grid. Fix the script error thrown after editing of the column with `type: "date"`
- Grid. Fix the script error thrown when a column with the filter is set via the "setColumns()" method and no data are loaded into the grid on initialization
- Grid. Fix the script error thrown when the "getHeaderFilter()" method is called for the column that is created through the "setColumns()" method
- Sidebar. Fix the issue with the display of nested items of the Sidebar controls
- Tree. Fix the issue with opening of the selected folder using key navigation when using the "autoload" configuration property of Tree

## Version 7.1.7

Released on May 17, 2021

### Fixes

- Grid. Fix the issue with the "adjust" and "maxWidth" properties
- Menu. Fix the issue with the ability to block the context menu from being hidden via returning `false` to the "beforeHide" event
- TreeGrid. Fix the issue that caused an item to disappear after dragging and dropping it under the container
- TreeGrid. Fix the issue with selection when some of items are collapsed in TreeGrid
- Window. Fix the issue with showing of the context menu which is attached to the window
- Data Collection. Fix the error fired after an item with the already existing id is added to the component via the "add()" method of the data collection
- Tree Collection. Fix the issue with the "filter()" method

## Version 7.1.6

Released on May 5, 2021

### Fixes

- DataView, List. Fix the issue with removing of items
- Grid. Fix the issue that caused filtering to reset after the data are reloaded
- Grid. Fix the issue with dynamic showing of a hidden column when the "autoWidth" configuration property of Grid is enabled
- Grid. Fix the issue with number formatting
- TreeGrid. Fix the issue with adding of nested items to the treegrid
- TreeGrid. Fix the issue with drag-n-drop of rows
- Tree Collection. Fix the issue with the "copy" and "move" methods

## Version 7.1.5

Released on April 22, 2021

### Fixes

- Calendar, Colorpicker, Combobox, Dataview, Form, Layout, List, Tabbar, Timepicker, Window. Fix the "destructor()" method
- Combobox. Fix the behavior of the [](combobox/api/combobox_css_config.md) configuration option
- Tabbar. The recalculation function of the width of the tabs is optimized

## Version 7.1.4

Released on April 16, 2021

### Fixes

- Chart. Fix the issue with display of chart tooltips when Chart is attached to Window
- ComboBox. Fix the issue with filtering
- Grid. Fix the issue with display of HTML content in the header of Grid
- Grid. Fix the issue with applying of custom css styles to the header of a column when  the "colspan" attribute is set to the header
- Grid. The [adjust](grid/api/grid_adjust_config.md) and [autoHeight](grid/api/grid_autoheight_config.md) configuration properties now should adjust the sizes of cells with account of [HTML content](grid/configuration.md#html-content-of-grid-columns) and [template](grid/api/api_gridcolumn_properties.md) applied to cells
- Grid. Fix the incorrect work of drag-n-drop in Grid when the grid is attached to Window
- Grid. Fix the issue with applying of custom css styles to the footer of the grid
- LazyDataProxy in Grid. Fix the error occurred when returning `false` from the 'beforeLazyLoad" event handler
- Window. Fix the issue with display of tooltips of Grid cells behind the window when Grid is attached to Window

## Version 7.1.3

Released on April 12, 2021

### Fixes

- Form. Fix the behavior of [DatePicker](form/calendar.md) control when adding a timepicker into the control
- Calendar. Fix the issue with the [dateFormat](calendar/api/calendar_dateformat_config.md) property that caused AM/PM to be ignored
- Chart. Fix the issue with the [serieClick](chart/api/chart_serieclick_event.md) event in the Bar chart
- ComboBox. Fix the issue with filtering
- Form. Fix the incorrect work of the popup control that is located at the bottom of the page and is shown at the top relative to the input when opening
- Grid. The [adjust](grid/api/grid_adjust_config.md) and [autoHeight](grid/api/grid_autoheight_config.md) configuration properties now should adjust the sizes of cells with account of [HTML content](grid/configuration.md#html-content-of-grid-columns) and [template](grid/api/api_gridcolumn_properties.md) added to cells
- Grid. Fix the issue with editing of the value after its filtering
- Grid. Fix the issue with filters in the header rowspans
- Grid. Fix the issue with the border of the footer colspan
- Grid. Fix the issue that caused the header to disappear after scrolling the grid with the frozen columns on Safari
- Grid. Fix the issue with sorting
- Grid. Fix the issue that caused no line break to appear between the header and the first data row after exporting data to the CSV file
- Grid. Fix the issue with applying of the styles to the grid footer
- Grid. Fix the issue that caused extra footer rows to appear in the frozen part of the grid when the grid has several header rows
- Grid. Fix the script error appeared when either `data: null` or `data: undefined` property is set in the configuration of Grid
- Grid. Fix the issue with incorrect overflow of the text in the header of Grid
- Grid, TreeGrid. Fix the issue with the column width
- Layout. Fix the issue with the sizes of Layout when placing it inside the window
- Menu. Fix the issue with display of menu items when placing the menu inside the window
- Message. Fix the issue with display of the content of the alert box on touch devices
- Slider. Fix the issue with key navigation
- TreeGrid. Fix the issue with incorrect serialization of data
- Tree Collection. Fix the issue with the "mapRange()" method
  
## Version 7.1.2

Released on March 9, 2021

### Fixes

- Chart. Fix the issue with display of the maximal value
- Donut Chart. Fix the issue with the "stroke" property
- DataDrivers. Fix the issue with serialization of Grid data when the data are serialized with the header  
- DataView. Fix the script error thrown either when the user drags an item after its editing or when the user highlights the text of the item
- Form. Fix the different behavior of margins between the label and input on Safari and Chrome
- Grid. Fix the incorrect work of the keyboard navigation in Grid when placing it inside the HTML form
- Grid. Fix the issue with drag-n-drop of Grid columns when using several grids
- Grid. Fix the issue with row selection
- Grid. Fix the issue with keyboard navigation in Grid when initializing the grid in the cell of Layout that is hidden and then shown
- Grid. Fix the issue with the [getHeaderFilter()](grid/api/grid_getheaderfilter_method.md) method
- Grid. Fix the issue that caused the popup of the select filter to disappear after scrolling the page
- Grid. Fix the issue with filtering data in the header of Grid on Safari
- Grid. Fix the issue with the [autoWidth](grid/api/grid_autowidth_config.md) configuration option of a Grid column that caused the column not to shrink after its extending
- Grid/TreeGrid. Fix the issue with hiding columns when the "autoWidth" configuration option is used
- Layout. Fix the issue that caused an active focus not to be removed from the cell after its collapsing/expanding
- Menu. Fix the incorrect display of the menu items when placing the menu inside the window
- Menu. Fix the issue with the outline focus
- Menu. Fix the issue with positioning of the popup after clicking an item with nested controls
- Tabbar. Fix the issue with Tabbar when placing it inside the HTML form
- TimePicker. The default height is reduced from 322px to 275px
- Tree. Fix the issue that caused the expand/collapse events not to trigger on expanding/collapsing the Tree item first time when [autoload](tree/api/tree_autoload_config.md) is used

## Version 7.1.1

Released on February 23, 2021

### Fixes

- Grid. Fix the issue with tooltips on Firefox
- Grid. Fix the issue that caused a row selected in the movable part of the grid not being selected in the "frozen" part
- Grid. Fix the issue that caused the script error to be thrown when applying a template to the cell with the footer
- Grid. Fix the issue that caused the grid to crash when initializing the grid with "data: null"
- Form. Fix the script error thrown when the container of Form is set to `null`
- Form. Fix the issue with the "required" configuration option of the Select control
- Window. Fix the incorrect display of the menu items when placing the menu inside the window

## Version 7.1

Released on February 18, 2021

<a href="https://dhtmlx.com/blog/number-formatting-multiline-content-tooltip-templates-7-1/" target="_blank">Review of release on the blog</a>
<br/><br/>

Check the [Migration article](migration.md#70---71) to keep in step with the latest version.

### New functionality

#### Grid

- The ability to display and edit multiline content in the cells of Grid via setting the [autoHeight: true](grid/api/grid_autoheight_config.md) configuration option of Grid (Pro version)
- New [textarea editor](grid/configuration.md#types-of-column-editor) is added
- The ability to set [the format the content of the cells to be displayed in](grid/configuration.md#formatting-columns)
- Now [columns with dates support the Date() object](grid/api/grid_data_config.md)
- The ability to [customize the tooltip of a column](grid/customization.md#adding-template-to-tooltip) via the [tooltipTemplate](grid/api/api_gridcolumn_properties.md) configuration option of a Grid column
- The ability [to define the height for a separate row of Grid](grid/configuration.md#row-height)
- New events are added: [beforeRowResize](grid/api/grid_beforerowresize_event.md) and [afterRowResize](grid/api/grid_afterrowresize_event.md) (Pro version)
- New events are added: [beforeSort](grid/api/grid_beforesort_event.md) and [afterSort](grid/api/grid_aftersort_event.md)

#### Tree

- New events: [beforeCheck](tree/api/tree_beforecheck_event.md) and [afterCheck](tree/api/tree_aftercheck_event.md)

#### TreeGrid

- The ability to display and edit multiline content in the cells of TreeGrid via setting the [autoHeight: true](treegrid/api/treegrid_autoheight_config.md) configuration option of TreeGrid
- New [textarea editor](treegrid/configuration.md#types-of-column-editor) is added
- The ability to set [the format the content of the cells to be displayed in](treegrid/configuration.md#formatting-columns)
- Now [columns with dates support the Date() object](treegrid/api/treegrid_data_config.md)
- The ability to [customize the tooltip of a column](treegrid/customization.md#adding-template-to-tooltip) via the [tooltipTemplate](treegrid/api/api_treegridcolumn_properties.md) configuration option of a TreeGrid column
- The ability [to define the height for a separate row of TreeGrid](treegrid/configuration.md#row-height)
- New events are added: [beforeRowResize](treegrid/api/treegrid_beforerowresize_event.md) and [afterRowResize](treegrid/api/treegrid_afterrowresize_event.md), [beforeSort](treegrid/api/treegrid_beforesort_event.md) and [afterSort](treegrid/api/treegrid_aftersort_event.md)
- The ability to define the id of the parent root via the [rootParent](treegrid/api/treegrid_rootparent_config.md) configuration option of TreeGrid

#### Window

- New methods are added: [unsetFullScreen()](window/api/window_unsetfullscreen_method.md) and [isFullScreen()](window/api/window_isfullscreen_method.md)

### Updates

- Chart. [Improved tooltips for all charts](chart/charts_overview.md).
- Chart. Now the tooltip will contain values of multiple series on hovering over a chart ([Line](https://snippet.dhtmlx.com/t881qcim), [Spline](https://snippet.dhtmlx.com/2wvmdm0y), [Area](https://snippet.dhtmlx.com/nv6t6lvm), [Spline Area](https://snippet.dhtmlx.com/bo82km4n)).
- Grid/TreeGrid. The values of the [type](grid/api/api_gridcolumn_properties.md) configuration property of the Grid/TreeGrid columns are updated. Now the type sets the alignment of content inside cells and defines the type of the editor used in the cells of the column.

### Fixes

- Chart. Fix the issue with Bar charts that caused series that are not filled in to be shown on the page
- Chart. Fix the incorrect display of the line above the area filled with the color in the Bar chart
- DataView. Fix the script error thrown after editing a DataView item
- Grid/TreeGrid. Fix the incorrect work of selection when the "hidden: true" property is used
- Grid/TreeGrid. Fix the issue with the incorrect size of selection when selecting the cell in the first column of the grid
- Grid/TreeGrid. Speed optimization of the "adjust" property
- Grid. Fix the issues with the "beforeRowDrop" and "columnDrag" events
- Grid. Fix the issue with resizing of the column when the "autoWidth" property is used
- Grid. Fix the issue with key navigation in the combobox editor
- KeyManager module is reworked
- List. Fix the issue with the "afterFocusChange" event  
- Pagination. Fix the issues with the Pagination widget when using together with Grid, TreeGrid, DataView, List
- Pagination. Fix the incorrect work of the "showItem" method
- Tabbar. Fix the issue that caused the usage of memory to increase when working in Firefox
- TreeGrid. Fix the issue with positioning of the input editor of a TreeGrid cell when editing a cell
- Window. Fix the incorrect display of the menu items when placing the menu inside the window
- Window. Fix the issue with the sequence of closing modal windows when using key navigation
- Fix the issue that invoked the `domvm.js` warning in the console

## Version 7.0.3

Released on January 19, 2021

### Fixes

- [Donut chart](chart/charts_overview.md#pie-pie-3d-and-donut-chart). Fix the issue with colors
- Grid. Fix the issue that caused the [frozen](grid/api/grid_leftsplit_config.md) columns to become movable when hiding columns
- Grid. Fix the issue with the [filter()](data_collection/api/datacollection_filter_method.md) method when the [](grid/api/grid_autoemptyrow_config.md) property is enabled
- Grid. Fix the issue with alignment of spans in the header of the grid
- Grid. Fix the incorrect behavior of "comboFilter" after reloading data
- Tabbar. Fix the incorrect alignment of bottom lines in the tabs
- Tree. Fix the issue that caused Tree items not to be collapsed in the [autoload](tree/api/tree_autoload_config.md) mode
- Window. Fix the issue that caused the text in the title of the window to overflow
- Fix the issue with types
  
## Version 7.0.2

Released on December 28, 2020

### Fixes

- Fix the issue with loading data into the component via the `parse()` method of Tree Collection, or via the `data` configuration property of the component
- Fix the types of events in Grid

## Version 7.0.1

Released on December 21, 2020

### Fixes

- Fix the issue which appeared when scrolling Grid after opening a combo editor
- Fix the issue with the initial width of Grid columns when using "minWidth"
- Fix the incorrect work of [autoWidth](grid/configuration.md#autowidth-for-columns) when the total width of Grid columns is wider than the container width
- Fix the issue with display of [rows spans](grid/configuration.md#spans) when the column is [frozen](grid/configuration.md#frozen-columns) in Grid
- Fix the issue which caused the hidden column with the filter not to be shown in Grid
- Fix the incorrect work of the select filter when applying to the columns with numeric values in Grid
- Fix the incorrect work of regular expressions in columns with filters in Grid
- Fix the issue with the [collapseAll()](treegrid/api/treegrid_collapseall_method.md) method in TreeGrid
- Fix the incorrect work of the [save()](data_collection/api/datacollection_save_method.md) method of Data Collection
- Fix the issue with display of sorting icon when applying alignment to Grid columns
- Fix the issue which caused the item in the filtered state after deleting from the data collection to be still found via the [afterRemove](data_collection/api/datacollection_afterremove_event.md) event
- Fix the issue which caused the multiple combo options selected not to be numerated when [sending values of Form to the server as Form Data](form/api/form_send_method.md)

## Version 7.0

Released on December 7, 2020

<a href="https://dhtmlx.com/blog/dhtmlx-suite-7-0-pagination-node-js-css-templates-touch-support/" target="_blank">Review of release on the blog</a>

### Breaking changes

The update brings various changes in the API methods. Check the [Migration article](migration.md#65---70) to keep in step with the latest version.

### Major updates

- [The new Pagination widget](pagination.md) is added (Pro version) 
- <a href="https://github.com/DHTMLX/nodejs-suite-demo" target="_blank">Suite with Node.js demo</a> is added
- <a href="https://dhtmlx.com/docs/products/dhtmlxSuite/how-to-create-javascript-applications/" target="_blank">CSS templates for Suite widgets</a>
- Layout. The configuration has become simpler, more concise and clearer.  New [type: "line", "space", "wide", "none"](layout/api/cell/layout_cell_type_config.md) allows creating Layout of the desired view.
- Tabbar. The ability [to automatically distribute tabs evenly by the width of the container](tabbar/api/tabbar_tabautowidth_config.md). The ability [to align tabs inside the container](tabbar/api/tabbar_tabalign_config.md). Now, instead of the scrollbar <a href="https://snippet.dhtmlx.com/3gf9av9q" target="_blank">the neat arrows automatically appear to navigate to tabs when the container overflows</a>.
- Grid and TreeGrid. The ability to hide and show rows.
- [The ability to interact with the widgets of Suite on touch devices by gestures](common_features/touch_support.md)
- Significantly expanded list of drag-n-drop events in widgets. See details below.
- Form. Lots of important and useful changes. See details below.

### Full list of changes

#### Combobox

- The ability to specify the initial value of the combobox via the [value](combobox/api/combobox_value_config.md) configuration property

#### DataView

- The ability to add event handlers to custom templates of DataView items via the [eventHandlers](dataview/api/dataview_eventhandlers_config.md) property
- New drag-n-drop events: [afterDrag](dataview/api/dataview_afterdrag_event.md), [afterDrop](dataview/api/dataview_afterdrop_event.md), [beforeDrag](dataview/api/dataview_beforedrag_event.md), [beforeDrop](dataview/api/dataview_beforedrop_event.md), [cancelDrop](dataview/api/dataview_canceldrop_event.md), [canDrop](dataview/api/dataview_candrop_event.md), [dragIn](dataview/api/dataview_dragin_event.md), [dragOut](dataview/api/dataview_dragout_event.md), [dragStart](dataview/api/dataview_dragstart_event.md)
- The ability [to enable/disable selection of items](dataview/usage_selection.md) in DataView via the related [enable()](selection/api/selection_enable_method.md)/ [disable()](selection/api/selection_disable_method.md) methods of the selection object
- The ability to use the simplified versions of the [afterSelect](selection/api/selection_afterselect_event.md), [afterUnSelect](selection/api/selection_afterunselect_event.md), [beforeSelect](selection/api/selection_beforeselect_event.md), [beforeUnSelect](selection/api/selection_beforeunselect_event.md) events of Selection object
- The ability to select all DataView items at once by using ["Ctrl+A"](dataview/configuration.md#arrow-keys-navigation) combination

#### Form

- The ability [to set focus to a Form control by its id](form/work_with_form.md#setting-focus-to-a-control) via the [setFocus()](form/api/form_setfocus_method.md) method
- The new [getProperties()](form/api/form_getproperties_method.md) and [setProperties()](form/api/form_setproperties_method.md) methods
- The new [beforeChangeProperties](form/api/form_beforechangeproperties_event.md) and [afterChangeProperties](form/api/form_afterchangeproperties_event.md) events
- The new [afterValidate](form/api/form_aftervalidate_event.md) and [beforeValidate](form/api/form_beforevalidate_event.md) events
- The new [click](form/api/form_click_event.md) event

#### Form controls

- New Form controls: [CheckboxGroup](form/checkboxgroup.md) and [Spacer](form/spacer.md)
- New "focus()" method of Form controls: [DatePicker](form/api/calendar/calendar_focus_method.md), [Checkbox](form/api/checkbox/checkbox_focus_method.md), [ColorPicker](form/api/colorpicker/colorpicker_focus_method.md), [Combo](form/api/combo/combo_focus_method.md), [Input](form/api/input/input_focus_method.md), [RadioGroup](form/api/radiogroup/radiogroup_focus_method.md), [Select](form/api/select/select_focus_method.md), [Textarea](form/api/textarea/textarea_focus_method.md), [TimePicker](form/api/timepicker/timepicker_focus_method.md) 
- The new "getProperties()" and "setProperties()" methods are added for Form controls: [Button](form/api/api_overview.md#button-api), [DatePicker](form/api/api_overview.md#datepicker-api), [Checkbox](form/api/api_overview.md#checkbox-api), [ColorPicker](form/api/api_overview.md), [Combo](form/api/api_overview.md#combo-api), [Input](form/api/api_overview.md#input-api), [RadioGroup](form/api/api_overview.md#radiogroup-api), [Select](form/api/api_overview.md#select-api), [SimpleVault](form/api/api_overview.md#simple-vault-api), [Slider](form/api/api_overview.md#slider-api), [Text](form/api/api_overview.md#text-api), [Textarea](form/api/api_overview.md#textarea-api), [TimePicker](form/api/api_overview.md#timepicker-api)
- The Event Systems are added for Form controls: [Button](form/api/api_overview.md#button-events), [DatePicker](form/api/api_overview.md#datepicker-events), [Checkbox](form/api/api_overview.md#checkbox-events), [ColorPicker](form/api/api_overview.md#color-picker-events), [Combo](form/api/api_overview.md#combo-events), [Input](form/api/api_overview.md#input-events), [RadioGroup](form/api/api_overview.md#radiogroup-events), [Select](form/api/api_overview.md#select-events), [Slider](form/api/api_overview.md#slider-events), [Text](form/api/api_overview.md#text-events), [Textarea](form/api/api_overview.md#textarea-events), [TimePicker](form/api/api_overview.md#timepicker-events)
- SimpleVault control. New events: 
[AfterHide](form/api/simplevault/simplevault_afterhide_event.md), [AfterShow](form/api/simplevault/simplevault_aftershow_event.md), [AfterValidate](form/api/simplevault/simplevault_aftervalidate_event.md), [BeforeHide](form/api/simplevault/simplevault_beforehide_event.md), [BeforeShow](form/api/simplevault/simplevault_beforeshow_event.md), [BeforeValidate](form/api/simplevault/simplevault_beforevalidate_event.md), [Change](form/api/simplevault/simplevault_change_event.md)
- Checkbox control. The [isChecked()](form/api/checkbox/checkbox_ischecked_method.md) method and the ["text"](form/api/checkbox/api_checkbox_properties.md) property are added
- Input control. The new ["minlength", "min", "max"](form/api/input/api_input_properties.md) attributes are added 
- Input control. The validations for [minimal/maximal values](form/work_with_form.md#minimal-and-maximal-values) and for [number of characters](form/work_with_form.md#number-of-allowed-characters) allowed in the input are added
- RadioGroup control. The ability to define the initial value via the ["value"](form/api/radiogroup/api_radiogroup_properties.md) attribute
- RadioGroup control. The ["padding", "label", "labelWidth", "labelPosition", "hiddenLabel", "helpMessage"](form/api/radiogroup/api_radiogroup_properties.md) attributes are added
- Radio button of the RadioGroup control. The ["text", "padding", "hidden"](form/api/radiogroup/api_radiogroup_properties.md#radiobutton-properties) configuration properties are added
- Select control. The ability to make an option of the control disabled via the ["disabled" attribute of the "option" property](form/api/select/api_select_properties.md)
- Text control. The ["inputType"](form/api/text/api_text_properties.md) attribute is added
- Textarea control. The ["maxlength", "minlength"](form/api/textarea/api_textarea_properties.md) attributes are added
- Textarea control. The validation for [number of characters](form/work_with_form.md#number-of-allowed-characters) allowed in the textarea field is added 
- TimePicker control. The ["valueFormat"](form/api/timepicker/api_timepicker_properties.md) attribute is added

#### Grid

- The ability to add event handlers to the custom template of a Grid cell via the [eventHandlers](grid/api/grid_eventhandlers_config.md) property of Grid
- New drag-n-drop events of Grid columns: [afterColumnDrag](grid/api/grid_aftercolumndrag_event.md), [afterColumnDrop](grid/api/grid_aftercolumndrop_event.md), [canColumnDrop](grid/api/grid_cancolumndrop_event.md), [cancelColumnDrop](grid/api/grid_cancelcolumndrop_event.md), [dragColumnIn](grid/api/grid_dragcolumnin_event.md), [dragColumnOut](grid/api/grid_dragcolumnout_event.md), [dragColumnStart](grid/api/grid_dragcolumnstart_event.md)
- New events of Grid columns: [beforeColumnHide](grid/api/grid_beforecolumnhide_event.md), [afterColumnHide](grid/api/grid_aftercolumnhide_event.md), [beforeColumnShow](grid/api/grid_beforecolumnshow_event.md), [afterColumnShow](grid/api/grid_aftercolumnshow_event.md)
- New drag-n-drop events of Grid rows: [afterRowDrag](grid/api/grid_afterrowdrag_event.md), [afterRowDrop](grid/api/grid_afterrowdrop_event.md), [beforeRowDrag](grid/api/grid_beforerowdrag_event.md), [beforeRowDrop](grid/api/grid_beforerowdrop_event.md), [canRowDrop](grid/api/grid_canrowdrop_event.md), [cancelRowDrop](grid/api/grid_cancelrowdrop_event.md), [dragRowIn](grid/api/grid_dragrowin_event.md), [dragRowOut](grid/api/grid_dragrowout_event.md), [dragRowStart](grid/api/grid_dragrowstart_event.md)
- New events of Grid rows: [beforeRowHide](grid/api/grid_beforerowhide_event.md), [afterRowHide](grid/api/grid_afterrowhide_event.md), [beforeRowShow](grid/api/grid_beforerowshow_event.md), [afterRowShow](grid/api/grid_afterrowshow_event.md) 
- The ability [to hide and show a row of Grid](grid/usage.md#hidingshowing-a-row) via the corresponding [hideRow()](grid/api/grid_hiderow_method.md) and [showRow()](grid/api/grid_showrow_method.md) methods of Grid
- The ability to check whether a row of Grid is hidden via the [isRowHidden()](grid/api/grid_isrowhidden_method.md) method of Grid
- The ability [to get an object of the header filter by column id](grid/usage.md#getting-header-filter) using the [getHeaderFilter()](grid/api/grid_getheaderfilter_method.md) method of Grid
- The ability [to enable/disable selection of cells](grid/usage_selection.md) in Grid via the related [enable()](grid/api/selection/selection_enable_method.md)/ [disable()](grid/api/selection/selection_disable_method.md) methods of the Selection object of Grid
- The ability to remove selection from previously selected cells via the [removeCell()](grid/api/selection/selection_removecell_method.md) method of the Selection object of Grid
- New events of the Selection object of Grid: [afterSelect](grid/api/selection/selection_afterselect_event.md), [afterUnSelect](grid/api/selection/selection_afterunselect_event.md), [beforeSelect](grid/api/selection/selection_beforeselect_event.md), [beforeUnSelect](grid/api/selection/selection_beforeunselect_event.md)

#### Layout

- New properties of a layout cell: [maxHeight](layout/api/cell/layout_cell_maxheight_config.md), [maxWidth](layout/api/cell/layout_cell_maxwidth_config.md), [minHeight](layout/api/cell/layout_cell_minheight_config.md), [minWidth](layout/api/cell/layout_cell_minwidth_config.md)
- The ability to specify borders between cells via the [type](layout/api/cell/layout_cell_type_config.md) configuration option of a Layout cell

#### List

- The ability to add event handlers to custom templates of List items via the [eventHandlers](list/api/list_eventhandlers_config.md) property 
- New drag-n-drop events of List: [afterDrag](list/api/list_afterdrag_event.md), [afterDrop](list/api/list_afterdrop_event.md), [beforeDrag](list/api/list_beforedrag_event.md), [beforeDrop](list/api/list_beforedrop_event.md), [cancelDrop](list/api/list_canceldrop_event.md), [canDrop](list/api/list_candrop_event.md), [dragIn](list/api/list_dragin_event.md), [dragOut](list/api/list_dragout_event.md), [dragStart](list/api/list_dragstart_event.md)
- The ability [to enable/disable selection of items](list/usage_selection.md) in List via the related [enable()](selection/api/selection_enable_method.md)/ [disable()](selection/api/selection_disable_method.md) methods of the Selection object
- The ability to use the simplified versions of the [afterSelect](selection/api/selection_afterselect_event.md), [afterUnSelect](selection/api/selection_afterunselect_event.md), [beforeSelect](selection/api/selection_beforeselect_event.md), [beforeUnSelect](selection/api/selection_beforeunselect_event.md) events of Selection object
- The ability to select all List items at once by using ["Ctrl+A"](list/configuration.md#arrow-keys-navigation) combination

#### Menu

- New methods of Menu: [select()](menu/api/menu_select_method.md), [unselect()](menu/api/menu_unselect_method.md), [getSelected()](menu/api/menu_getselected_method.md), [isSelected()](menu/api/menu_isselected_method.md)

#### Ribbon

- New methods of Ribbon: [select()](ribbon/api/ribbon_select_method.md), [unselect()](ribbon/api/ribbon_unselect_method.md), [getSelected()](ribbon/api/ribbon_getselected_method.md), [isSelected()](ribbon/api/ribbon_isselected_method.md)

#### Tabbar

- The ability to specify the width and height for a separate tab via setting the "tabWidth" and "tabHeight" properties to [views](tabbar/api/tabbar_views_config.md)
- The ability to adjust the width/height of tabs to the width/height of the tabbar container using the related [tabAutoWidth](tabbar/api/tabbar_tabautowidth_config.md)/ [tabAutoHeight](tabbar/api/tabbar_tabautoheight_config.md) configuration properties of Tabbar
- The possibility to set alignment for tabs via the [tabAlign](tabbar/api/tabbar_tabalign_config.md) property of Tabbar

#### TimePicker

- The ability [to set the initial time value for Timepicker](timepicker/configuration.md#initial-value) via the [value](timepicker/api/timepicker_value_config.md) configuration property
- The ability [to define the format of the value to be applied when working with TimePicker events](timepicker/api/timepicker_valueformat_config.md)
- New events of TimePicker: [afterApply](timepicker/api/timepicker_afterapply_event.md), [beforeApply](timepicker/api/timepicker_beforeapply_event.md)

#### Toolbar

- New methods of Toolbar: [select()](toolbar/api/toolbar_select_method.md), [unselect()](toolbar/api/toolbar_unselect_method.md), [getSelected()](toolbar/api/toolbar_getselected_method.md), [isSelected()](toolbar/api/toolbar_isselected_method.md)

#### Tree

- New drag-n-drop events of Tree: [afterDrag](tree/api/tree_afterdrag_event.md), [afterDrop](tree/api/tree_afterdrop_event.md), [beforeDrag](tree/api/tree_beforedrag_event.md), [beforeDrop](tree/api/tree_beforedrop_event.md), [cancelDrop](tree/api/tree_canceldrop_event.md), [canDrop](tree/api/tree_candrop_event.md), [dragIn](tree/api/tree_dragin_event.md), [dragOut](tree/api/tree_dragout_event.md), [dragStart](tree/api/tree_dragstart_event.md)
- New editing-related events of Tree: [afterEditEnd](tree/api/tree_aftereditend_event.md), [afterEditStart](tree/api/tree_aftereditstart_event.md), [beforeEditEnd](tree/api/tree_beforeeditend_event.md), [beforeEditStart](tree/api/tree_beforeeditstart_event.md)
- The [focusChange](tree/api/tree_focuschange_event.md) event is added
- The ability [to enable/disable selection of items](tree/usage_selection.md) in Tree via the related [enable()](selection/api/selection_enable_method.md)/ [disable()](selection/api/selection_disable_method.md) methods of the Selection object
- The ability [to enable selection of Tree items](tree/configuration.md#selection-of-items) via the [selection](tree/api/tree_selection_config.md) configuration property of Tree
- The ability to use the simplified versions of the [afterSelect](selection/api/selection_afterselect_event.md), [afterUnSelect](selection/api/selection_afterunselect_event.md), [beforeSelect](selection/api/selection_beforeselect_event.md), [beforeUnSelect](selection/api/selection_beforeunselect_event.md) events of the Selection object
- The ability to set the id for the root element via the [rootId](tree/api/tree_rootid_config.md) configuration property of Tree

#### TreeGrid

- The ability to add event handlers to the custom template of a Grid cell via the [eventHandlers](treegrid/api/treegrid_eventhandlers_config.md) property of TreeGrid
- New drag-n-drop events of TreeGrid columns: [afterColumnDrag](treegrid/api/treegrid_aftercolumndrag_event.md), [afterColumnDrop](treegrid/api/treegrid_aftercolumndrop_event.md), [canColumnDrop](treegrid/api/treegrid_cancolumndrop_event.md), [cancelColumnDrop](treegrid/api/treegrid_cancelcolumndrop_event.md), [dragColumnIn](treegrid/api/treegrid_dragcolumnin_event.md), [dragColumnOut](treegrid/api/treegrid_dragcolumnout_event.md), [dragColumnStart](treegrid/api/treegrid_dragcolumnstart_event.md)
- New events of TreeGrid columns: [beforeColumnHide](treegrid/api/treegrid_beforecolumnhide_event.md), [afterColumnHide](treegrid/api/treegrid_aftercolumnhide_event.md), [beforeColumnShow](treegrid/api/treegrid_beforecolumnshow_event.md), [afterColumnShow](treegrid/api/treegrid_aftercolumnshow_event.md)
- New drag-n-drop events of TreeGrid rows: [afterRowDrag](treegrid/api/treegrid_afterrowdrag_event.md), [afterRowDrop](treegrid/api/treegrid_afterrowdrop_event.md), [beforeRowDrag](treegrid/api/treegrid_beforerowdrag_event.md), [beforeRowDrop](treegrid/api/treegrid_beforerowdrop_event.md), [canRowDrop](treegrid/api/treegrid_canrowdrop_event.md), [cancelRowDrop](treegrid/api/treegrid_cancelrowdrop_event.md), [dragRowIn](treegrid/api/treegrid_dragrowin_event.md), [dragRowOut](treegrid/api/treegrid_dragrowout_event.md), [dragRowStart](treegrid/api/treegrid_dragrowstart_event.md)
- New events of TreeGrid rows: [beforeRowHide](treegrid/api/treegrid_beforerowhide_event.md), [afterRowHide](treegrid/api/treegrid_afterrowhide_event.md), [beforeRowShow](treegrid/api/treegrid_beforerowshow_event.md), [afterRowShow](treegrid/api/treegrid_afterrowshow_event.md)
- The ability [to hide and show a row of TreeGrid](treegrid/usage.md#hidingshowing-a-row) via the corresponding [hideRow()](treegrid/api/treegrid_hiderow_method.md) and [showRow()](treegrid/api/treegrid_showrow_method.md) methods of TreeGrid
- The ability to check whether a row of TreeGrid is hidden via the [isRowHidden()](treegrid/api/treegrid_isrowhidden_method.md) method of TreeGrid
- The ability [to get an object of the header filter by column id](treegrid/usage.md#getting-header-filter) using the [getHeaderFilter()](treegrid/api/treegrid_getheaderfilter_method.md) method of TreeGrid
- The ability [to enable/disable selection of cells](treegrid/usage_selection.md) in TreeGrid via the related [enable()](treegrid/api/selection/selection_enable_method.md)/ [disable()](treegrid/api/selection/selection_disable_method.md) methods of the Selection object of TreeGrid
- The ability to remove selection from previously selected cells via the [removeCell()](treegrid/api/selection/selection_removecell_method.md) method of the Selection object of TreeGrid
- New events of the Selection object of TreeGrid: [afterSelect](treegrid/api/selection/selection_afterselect_event.md), [afterUnSelect](treegrid/api/selection/selection_afterunselect_event.md), [beforeSelect](treegrid/api/selection/selection_beforeselect_event.md), [beforeUnSelect](treegrid/api/selection/selection_beforeunselect_event.md)

### Updates

- Form. The [afterHide](form/api/form_afterhide_event.md), [afterShow](form/api/form_aftershow_event.md), [beforeHide](form/api/form_beforehide_event.md), [beforeShow](form/api/form_beforeshow_event.md) events are updated - the `id` parameter is replaced with the `name` and `value` ones.
- Form. The [validate()](form/api/form_validate_method.md) method is updated - now the method validates only the required fields or the fields that contain validation rules. The new "silent" parameter is added.
- Form and Form controls. The types of the "width/height" properties are updated - the *number* and *"content"* types are added.
- Form controls. The "value" attribute is updated - the *number* type is added ([Input](form/api/input/api_input_properties.md)/[Text](form/api/text/api_text_properties.md)/[Select](form/api/select/api_select_properties.md)) 
- Form controls. The "validate()" method is updated - the new "silent" and "validateValue" parameters are added ([DatePicker](form/api/calendar/calendar_validate_method.md), [ColorPicker](form/api/colorpicker/colorpicker_validate_method.md), [Combo](form/api/combo/combo_validate_method.md), [Input](form/api/input/input_validate_method.md), [Textarea](form/api/textarea/textarea_validate_method.md), [TimePicker](form/api/timepicker/timepicker_validate_method.md))
- Checkbox control of Form. The [getValue()](form/api/checkbox/checkbox_getvalue_method.md) method is updated
- Input control of Form. The ability to define the type for the input field via the ["inputType"](form/api/input/api_input_properties.md) attribute
- TimePicker control of Form. The ["value"](form/timepicker.md#adding-timepicker) attribute is updated - the ability to specify the value as a Date, a number, an array, an object is added.
- SimpleVault control of Form. The [](form/api/simplevault/simplevault_beforeuploadfile_event.md), [](form/api/simplevault/simplevault_uploadbegin_event.md), [](form/api/simplevault/simplevault_uploadcomplete_event.md), [](form/api/simplevault/simplevault_uploadfail_event.md), [](form/api/simplevault/simplevault_uploadfile_event.md), [](form/api/simplevault/simplevault_uploadprogress_event.md) events are improved
- TimePicker control of Form. The [getValue()](form/api/timepicker/timepicker_getvalue_method.md)/ [setValue()](form/api/timepicker/timepicker_setvalue_method.md) methods are updated
- Form. The [getValue()](form/api/form_getvalue_method.md) method is updated
- Grid/TreeGrid. The "splitAt" configuration property is replaced by the "leftSplit" one
- [Grid](grid/api/grid_beforecolumndrag_event.md)/[TreeGrid](treegrid/api/treegrid_beforecolumndrag_event.md). The "beforeColumnDrag" event is updated - the `id` parameter is replaced with the `data` and `e` ones.
- [Grid](grid/api/grid_beforecolumndrop_event.md)/[TreeGrid](treegrid/api/treegrid_beforecolumndrop_event.md). The "beforeColumnDrop" event is updated - the `sourceId`/ `targetId` parameters are replaced with the `data` and `e` ones.
- Layout. [Layout patterns](layout/layout_patterns.md) section is added to docs
- Layout. The [gravity](layout/api/cell/layout_cell_gravity_config.md) property of a Layout cell is updated
- [Layout](layout/cell_configuration.md#autosize-for-cells). The ability to configure a Layout cell so that its width/ height would automatically adjust to the width/ height of the cell content
- Menu, Ribbon, Sidebar, Toolbar. Improved controls.
- [Menu](menu/work_with_menu.md#disablingenabling-menu-options)/[Ribbon](ribbon/operating_ribbon.md#disabling-and-enabling-controls)/[Sidebar](sidebar/work_with_sidebar.md#disabling-and-enabling-controls)/[Toolbar](toolbar/common_methods.md#disabling-and-enabling-controls). The "disable()"/"enable()" methods are updated - now it is possible to disable/enable all items of the widget at once.
- [Menu](menu/work_with_menu.md#hidingshowing-menu-options)/[Ribbon](ribbon/operating_ribbon.md#hiding-and-showing-controls)/[Sidebar](sidebar/work_with_sidebar.md#hiding-and-showing-controls)/[Toolbar](toolbar/common_methods.md#hiding-and-showing-controls). The "hide()"/"show()" methods are updated - now it is possible to hide/show all items of the widget at once.
- TimePicker. The [](timepicker/api/timepicker_afterclose_event.md), [](timepicker/api/timepicker_beforeclose_event.md)  events are updated - the "value" parameter is added.
- TimePicker. The [](timepicker/api/timepicker_change_event.md) event is updated - the *object* type of the "value" parameter is added.
- Toolbar. The ability to pass the id of a Toolbar control to the [getState()](toolbar/api/toolbar_getstate_method.md) method is added
- Window. The [AfterHide](window/api/window_afterhide_event.md), [AfterShow](window/api/window_aftershow_event.md), [BeforeHide](window/api/window_beforehide_event.md), [BeforeShow](window/api/window_beforeshow_event.md), [HeaderDoubleClick](window/api/window_headerdoubleclick_event.md) events are updated - the new "position" and (or) "events" parameters are added.
- Data Collection. The [filter()](data_collection/api/datacollection_filter_method.md) method is improved - the "smartFilter" attribute of the "config" parameter is added
- Data Collection. The [sort()](data_collection/api/datacollection_sort_method.md) method is updated - the "config" parameter is added
- Selection object. The [add()](selection/api/selection_add_method.md) and [remove()](selection/api/selection_remove_method.md) methods are improved
- Types of Selection are added to the TypeScript definitions

### Fixes

- The incorrect display of the [tooltip](slider/api/slider_tooltip_config.md) of Slider when the [range](slider/api/slider_range_config.md) property is enabled
- Issues with the [width](layout/api/cell/layout_cell_width_config.md), [height](layout/api/cell/layout_cell_height_config.md), [padding](layout/api/cell/layout_cell_padding_config.md) properties of a Layout cell when setting their values as `number` type
- Issues with the [](selection/api/selection_afterunselect_event.md) and [](selection/api/selection_beforeunselect_event.md) events of the Selection object when using in List/DataView 
- Issue with the [update()](data_collection/api/datacollection_update_method.md) method of Data Collection
- Issue with the [update()](tree_collection/api/treecollection_update_method.md) method of Tree Collection
- The issue which caused the width of Grid columns not to be changed via the configuration when the [autoWidth](grid/api/grid_autowidth_config.md) option is enabled and Grid is attached to a Tabbar cell
- The issue with the ability to use numeric fields of Form without their validation. Now it is possible to define the number type for the input via the ["inputType"](form/api/input/api_input_properties.md) attribute.
- The incorrect work of the [autoEmptyRow](grid/api/grid_autoemptyrow_config.md) configuration property of Grid which caused empty rows to appear at the top and at the bottom of the Grid after [loading data from an external file](grid/data_loading.md#external-data-loading)
- The incorrect work of the [save()](data_collection/api/datacollection_save_method.md) method of Data Collection
- Issue with the [add()](tree_collection/api/treecollection_add_method.md) method of Tree Collection when using in Tree/ TreeGrid
- The issue with dynamic loading of data into Grid and Tree when using the url with additional parameters
- The issue which caused nested items of Menu not to close after hovering a mouse pointer back over the parent item
- The issue which caused a nested tabbar to display in the same mode as the parent tabbar although different display modes were applied to the nested and parent tabbars
- The issue with absence of the scrollbar of Tree when using the tree inside a layout cell
- The incorrect behavior of the Tab key when working with the list of options in Combo
- Issue with interaction between Form and Tabbar
- The incorrect behavior of the Tab key when navigating through the header filters in Grid
- The issue that invoked a warning in the console after unchecking the checkbox of an item in Tree
- The incorrect behavior of resizable cells of Layout when attaching Layout into a Window
- The issue with incorrect saving of Grid data when using the [data.update()](data_collection/api/datacollection_update_method.md) method called from the [AfterEditEnd](grid/api/grid_aftereditend_event.md) event, and applying the [data.save()](data_collection/api/datacollection_save_method.md) method
- The incorrect work of the [data.save()](data_collection/api/datacollection_save_method.md) method which caused only the first change of the Grid row to save

## Version 6.5.8

Released on October 15, 2020

### Fixes

- Fix the incorrect behavior of the sorting icon in the header of a Grid column when setting the [sortable](grid/configuration.md#sortable-columns) property to false
- Fix the issue which caused [key navigation](tree/configuration.md#key-navigation) in Tree not to work in IE

## Version 6.5.7

Released on October 15, 2020

### Fixes

- Fix the incorrect work of the [](grid/api/grid_aftereditend_event.md), [](grid/api/grid_aftereditstart_event.md), [](grid/api/grid_beforeeditend_event.md), [](grid/api/grid_beforeeditstart_event.md) events for cells with the checkbox editor type in Grid
- Fix the issue with rendering [a tooltip on hovering over the slider thumb](slider/api/slider_tooltip_config.md) when the slider is attached both to a Layout and a Window at the same time
- Fix the issue with [a tooltip added to a Title control of Toolbar](toolbar/title.md#adding-a-tooltip) which caused a tooltip not to be shown
- Fix the issue with drag and drop of Grid columns with [selectFilter](grid/configuration.md#headerfooter-filters) filled

## Version 6.5.6

Released on October 5, 2020

### Fixes

- Fix the incorrect work of the input filter of a Grid column when placing a grid into a shadowDOM while working in Firefox
- Fix the issue with key navigation in a grid placed to a layout cell, which caused key navigation to stop working after collapsing/expanding the layout cell
- Fix the incorrect work of the select filter of a Grid column after resizing the column
- Fix the issue with ignoring [alignment](grid/configuration.md#alignment) of data in the column's header while using [spans](grid/configuration.md#spans) in Grid
- Fix the incorrect behavior of editors when working with several grids on one page
- Fix the issue with the width of expanded items in Tree
- Fix the incorrect work of selection in Grid cells when using [key navigation](grid/configuration.md#keyboard-navigation) on a page with several grids

## Version 6.5.5

Released on September 17, 2020

### Fixes

- Fix the behavior of the align property of a Grid column when the [spans](grid/api/grid_spans_config.md) configuration option is used
- Fix the issue with rendering of Grid/TreeGrid

## Version 6.5.4

Released on September 15, 2020

### Fixes

- Fix the issue with the value of a cell when calling the [afterEditEnd](grid/api/grid_aftereditend_event.md) event of Grid
- Fix the issue with positioning of selection over frozen columns in Grid and TreeGrid
- Fix the incorrect work of the input filter of a Grid column when placing a grid into a shadowDOM
- Fix the incorrect work of the select filter of a Grid column after resizing of the column
- Fix the issue which caused hidden columns of Grid to be displayed in the exported Excel file
- Fix the incorrect behavior of scrolling Grid container when using [keyboard navigation](grid/configuration.md#keyboard-navigation) in a grid with [frozen columns](grid/configuration.md#frozen-columns)
- Fix the incorrect rendering of a [Spline chart](chart/charts_overview.md#line-and-spline-chart) when a data set contains less than 3 records
- Fix the issue with visualization of the [mark](grid/api/api_gridcolumn_properties.md) property of a Grid column after data reloading
- Fix the issue which caused a footer of a grid not to be included to the exported file

## Version 6.5.3

Released on September 2, 2020

### Fixes

- Fix the behavior of the [](grid/api/grid_keynavigation_config.md) property of Grid when the grid is attached to a collapsed Layout cell
- Fix the issue with positioning of a popup relative to a Window
- Fix issues with the event system of a checkbox editor in Grid
- Fix the issue with calculation of Grid height when Grid has [frozen columns](grid/configuration.md#frozen-columns)
- Fix the behavior of the [](grid/api/grid_adjust_config.md) property of Grid when some columns are [hidden](grid/configuration.md#hidden-columns)
- Mechanism of appearing of a Popup widget on a page is reworked
- Checking the incorrect data of the [](grid/api/selection/selection_setcell_method.md) method of Grid is added
- Fix issues with minimal and maximal values of scales in Chart

## Version 6.5.2

Released on July 14, 2020

### Fixes

- Fixed types in d.ts
- Issue with the [](grid/api/grid_editcell_method.md) method in Grid
- Issue with the [](grid/api/grid_removerowcss_method.md) method in Grid
- Issue with Grid while using together with Window
- Issue with "email" validation rule of input in Form
- Improved editing mode when drag and drop is enabled in Tree
- Issue with rendering nested levels of TreeGrid items

## Version 6.5.1

Released on June 16, 2020

### Fixes

- Issue with npm codebase build

## Version 6.5

Released on June 16, 2020

### New functionality

- [TypeScript support for all components](common_features/using_typescript.md)
- <a href="https://github.com/DHTMLX/angular-suite-demo" target="_blank">Suite with Angular demo</a> is added

#### Grid 

- The ability to [drag and drop columns in Grid](grid/configuration.md#drag-n-drop-inside-the-grid) using the [](grid/api/grid_dragitem_config.md) configuration property of Grid, or via the [draggable](grid/api/api_gridcolumn_properties.md) configuration option of a Grid column (Pro)
- New [](grid/api/grid_beforecolumndrag_event.md) and [](grid/api/grid_beforecolumndrop_event.md) events are added (Pro)
- The ability [to align data in a column as well as in the header of a column](grid/configuration.md#alignment)
- The ability [to show/hide tooltips](grid/configuration.md#tooltip) while hovering over the content of a column via the [](grid/api/grid_tooltip_config.md) configuration property

#### TreeGrid 

- The ability to [drag and drop columns in TreeGrid](treegrid/configuration.md#drag-n-drop-inside-the-grid) via the [](treegrid/api/treegrid_dragitem_config.md) configuration property of TreeGrid, or via the [draggable](treegrid/api/api_treegridcolumn_properties.md) configuration option of a TreeGrid column
- New [](treegrid/api/treegrid_beforecolumndrag_event.md) and [](treegrid/api/treegrid_beforecolumndrop_event.md) events are added
- The ability to [group data in TreeGrid](treegrid/usage.md#grouping-data) using the [](treegrid/api/treegrid_groupby_method.md) method
- The possibility to set a template to the title of the group via the [](treegrid/api/treegrid_grouptitletemplate_config.md) configuration option of TreeGrid
- The ability [to align data in a column as well as in the header of a column](treegrid/configuration.md#alignment)
- The ability [to show/hide tooltips](treegrid/configuration.md#tooltip) while hovering over the content of a column via the [](treegrid/api/treegrid_tooltip_config.md) configuration property

#### DataView

- The ability to [disable selection of items in DataView](dataview/configuration.md#selection-of-items) via the [](dataview/api/dataview_selection_config.md) configuration property 
- The ability to [enable/disable](dataview/manipulating_data.md#disabling-and-enabling-selection-of-an-item) selection of DataView items via the corresponding `enableSelection` and `disableSelection` methods

#### List

- The possibility to [disable selection of items in List](list/configuration.md#selection-of-items) via the [](list/api/list_selection_config.md) configuration property 
- The ability to [enable/disable](list/work_with_list.md#disabling-and-enabling-selection-of-an-item) selection of List items via the corresponding `enableSelection` and `disableSelection` methods

#### Form

- New methods of the [Select control of Form](form/api/api_overview.md#select-api) are added: getOptions(), setOptions()
- The ability to [make Form hidden](form/configuration.md#making-form-hidden)
- The ability to make a Form control ([](form/button.md), [](form/calendar.md), [](form/checkbox.md), [](form/colorpicker.md), [](form/combo.md), [](form/input.md), [](form/radiogroup.md), [](form/select.md), [](form/simplevault.md), [](form/slider.md), [](form/text.md), [](form/textarea.md), [](form/timepicker.md)) hidden via the `hidden` configuration attribute of the control
- New methods of Form are added: [](form/api/form_hide_method.md), [](form/api/form_show_method.md), [](form/api/form_isvisible_method.md)
- The [](form/api/form_afterhide_event.md), [](form/api/form_aftershow_event.md), [](form/api/form_beforehide_event.md), [](form/api/form_beforeshow_event.md) events are added
- The ability to hide/show Form controls ([Button](form/api/api_overview.md#button-api), [DatePicker](form/api/api_overview.md#datepicker-api), [Checkbox](form/api/api_overview.md#checkbox-api), [ColorPicker](form/api/api_overview.md), [Combo](form/api/api_overview.md#combo-api), [Input](form/api/api_overview.md#input-api), [RadioGroup](form/api/api_overview.md#radiogroup-api), [Select](form/api/api_overview.md#select-api), [SimpleVault](form/api/api_overview.md#simple-vault-api), [Slider](form/api/api_overview.md#slider-api), [Text](form/api/api_overview.md#text-api), [Textarea](form/api/api_overview.md#textarea-api), [TimePicker](form/api/api_overview.md#timepicker-api)) via the corresponding hide()/show() methods of the controls
- [New methods](form/api/api_overview.md#simple-vault-api) of the SimpleVault control of Form are added: selectFile(), send(), setValue()

#### Sidebar

- New methods of Sidebar are added: [](sidebar/api/sidebar_select_method.md), [](sidebar/api/sidebar_unselect_method.md), [](sidebar/api/sidebar_isselected_method.md), [](sidebar/api/sidebar_getselected_method.md)

### Updates

- The ability to adjust the width of columns to the width of their footer in [Grid](grid/configuration.md#autosize-for-columns) and [TreeGrid](treegrid/configuration.md#autosize-for-columns)
- <a href = "https://github.com/DHTMLX/react-widgets" target="_blank">Suite with React demo</a> is updated
- Ability to work with number type of id in Combobox, DataView, List widgets and in Select control of Form

## Version 6.4.4

Released on May 19, 2020

#### Fixes

- Fix the behavior of Layout inside a resizable window
- Fix the behavior of charts placed into a cell of Tabbar in IE
- Fix issue with the [](layout/api/layout_aftershow_event.md) event of Layout not being called
- Fix the incorrect work of the [destructor()](grid/api/grid_destructor_method.md) method when combo filters are not specified in Grid
- Fix the incorrect work of the [Change](combobox/api/combobox_change_event.md) event when the [](combobox/api/combobox_multiselection_config.md) property is enabled in Combobox
- Fix the incorrect work of the [](colorpicker/api/colorpicker_change_event.md) event while calling the [clear()](colorpicker/api/colorpicker_clear_method.md) method in ColorPicker
- Fix issue with the [getValue()](form/api/form_getvalue_method.md) method of Form
- Fix the incorrect work of the [](form/api/form_change_event.md) event  while calling the [clear()](form/api/form_clear_method.md) method for Form controls (Input, Textarea, Checkbox, RadioGroup, Select, DatePicker, TimePicker, ColorPicker, Combo)
- Fix the incorrect work of the Combo control of Form while calling the [getValue()](form/api/form_getvalue_method.md) method
- Fix issue with the [](form/api/form_change_event.md) event of Form
- Fix validation for the Input control of Form
- Fix rendering of custom HTML content in Window
- Fix priority of the modal window while calling more than one window

## Version 6.4.3

Released on April 29, 2020

#### Fixes

- Fix clearing values while using the `clear()` method for the DatePicker control of Form
- Fix issues with the `CellClick, CellMouseOver, CellMouseDown, CellDblClick, CellRightClick` events of Grid when its columns are hidden
- Fix issue with the keyboard navigation when columns are hidden in Grid
- Fix the incorrect work of the `selection` module when Grid columns are hidden
- Fix the incorrect work of the filtering blocks when columns are hidden in Grid
- Fix the issue with the redrawing of the table when sizes of a Grid column are changed dynamically
- Fix the issue with the redrawing of Grid columns when the columns have different sizes
- Fix the issue with the `combo` filters when several grids are initialized in the app
- Fix the behavior of spans in the frozen columns of Grid and TreeGrid
- Fix the behavior of editors in Grid
- Fix the issue with the configuration of a Window header
- Fix the behavior of selection in Grid (the `outerClick` is deleted)
- Fix the behavior of charts when zero values are set in a data set
- Fix the behavior of charts placed into the header of a layout in IE
- Fix the issue with the configuration of the `showText` property in Chart
- Fix calculation of width and height in Chart (Pie, 3DPie, Donut, Radar)

## Version 6.4.2

Released on March 3, 2020

#### Fixes

- The issue with virtualization behavior in Grid when interacting with Tabbar
- The issue with clicking on [a frozen column](grid/configuration.md#frozen-columns) in Grid
- The issue with export data from Grid to Excel
- Issue with rendering of Chart at zero value
- Status of an active element is added in Menu
- The ability to check validation of values is added in Colorpicker
- Styles for all inputs with invalid values for Firefox browser are fixed

## Version 6.4.1

Released on January 30, 2020

#### Fixes

- Behavior of Lazy loading in Grid
- The issue with the template configuration option in a column of Grid
- The issue with the headerIcon property of a layout cell
- The issue with the height of layout cells when the layout has a header

## Version 6.4

Released on January 28, 2020

### New functionality

- <a href = "https://github.com/DHTMLX/react-widgets" target="_blank">Suite with React demo</a> is added

#### Calendar

- The ability to clear the value set in the calendar using the [](calendar/api/calendar_clear_method.md) method

#### Chart

- The [](chart/api/chart_serieclick_event.md) event is added
- The ability to rotate labels of data items on the scale using [the scaleRotate property in the configuration of the scale](chart/configuration_properties.md#scales)
- The ability to rotate text values of data items in Bar and X-Bar chart via [the showTextRotate property in the configuration of the series](chart/configuration_properties.md#series)

#### ColorPicker

- The possibility to specify the mode of displaying a colorpicker using the [](colorpicker/api/colorpicker_mode_config.md) property
- The ability to clear the value set in the colorpicker and remove focus via the [](colorpicker/api/colorpicker_clear_method.md) method

#### Combobox

- The possibility [to check whether a combobox is disabled on the page](combobox/work_with_combo.md#checking-if-a-combobox-is-disabled) using the [](combobox/api/combobox_isdisabled_method.md) method
- The [](combobox/api/combobox_beforeclose_event.md) and [](combobox/api/combobox_afterclose_event.md) events are added
- The ability to specify an array of data objects before initialization via the [](combobox/api/combobox_data_config.md) configuration property
- The possibility to define the position of a label of a combobox using the [](combobox/api/combobox_labelposition_config.md) property

#### Dataview

- The [](dataview/api/dataview_itemmouseover_event.md) event is added

#### Form

- The ability [to check whether a form or a form control is disabled on the page](form/work_with_form.md#checking-if-a-form-is-disabled) via the [](form/api/form_isdisabled_method.md) method 
- The possibility [to disable a form on a page](form/work_with_form.md#enablingdisabling-a-form) using the [](form/api/form_disable_method.md) method
- The possibility [to enable a form on a page](form/work_with_form.md#enablingdisabling-a-form) using the [](form/api/form_enable_method.md) method
- The possibility [to make a form disabled](form/configuration.md#making-form-disabled) using the [](form/api/form_disabled_config.md) property
- The ability to use methods for [Button](form/api/api_overview.md#button-api), [DatePicker](form/api/api_overview.md#datepicker-api), [Checkbox](form/api/api_overview.md#checkbox-api), [ColorPicker](form/api/api_overview.md), [Combo](form/api/api_overview.md#combo-api), [Input](form/api/api_overview.md#input-api), [RadioGroup](form/api/api_overview.md#radiogroup-api), [Select](form/api/api_overview.md#select-api), [SimpleVault](form/api/api_overview.md#simple-vault-api), [Slider](form/api/api_overview.md#slider-api), [Text](form/api/api_overview.md#text-api), [Textarea](form/api/api_overview.md#textarea-api), [TimePicker](form/api/api_overview.md#timepicker-api) Form controls: `disable()`, `enable()`, `isDisabled()`
- The possibility to specify the maximum number of characters allowed in the input via the `maxlength` attribute of the [](form/input.md) Form control
- The ability [to set the format of the value that will be returned while getting the current value of DatePicker control using the valueFormat property](form/api/calendar/api_calendar_properties.md)
- The ability to define the position of a label for [](form/button.md), [](form/calendar.md), [](form/checkbox.md), [](form/colorpicker.md), [](form/combo.md), [](form/input.md), [](form/radiogroup.md), [](form/select.md), [](form/simplevault.md), [](form/slider.md), [](form/text.md), [](form/textarea.md), [](form/timepicker.md) Form controls using the `labelPosition` attribute
- The possibility to specify the `url` attribute to which form data will be sent to for [Button Form control](form/api/button/api_button_properties.md)
- The [](form/api/form_foreach_method.md) method is added

#### Grid

- The ability [to adjust the size of Grid columns to the size of Grid](grid/configuration.md#autowidth-for-columns) via the [](grid/api/grid_autowidth_config.md) configuration property
- The possibility [to adjust the width of columns to the width of their content automatically](grid/configuration.md#autosize-for-columns) using the [](grid/api/grid_adjust_config.md) configuration option
- The ability [to select multiple rows or cells of Grid](grid/configuration.md#multiple-selection-of-grid-cells) using the [](grid/api/grid_multiselection_config.md) property
- The possibility [to set selection to multiple cells/rows of Grid](grid/usage.md#using-selection-api) via the `setCell()` method of the selection object
- New additional arrow keyboard shortcuts are added to [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- The ability [to sort content of any Grid column by clicking on its header](grid/configuration.md#sortable-columns) via the [](grid/api/grid_sortable_config.md) property
- The [](grid/api/grid_getsortingstate_method.md) method that [allows getting the current state of sorting data in Grid](grid/usage.md#getting-the-sorting-state) is added
- The possibility [to check visibility of a column](grid/usage.md#checking-visibility-of-a-column) via the [](grid/api/grid_iscolumnhidden_method.md) method
- The ability to enable [dynamic loading of data in Grid](grid/data_loading.md#dynamic-loading)
- The [](grid/api/grid_afterkeydown_event.md) and [](grid/api/grid_beforekeydown_event.md) events are added

#### Layout

- The [](layout/api/layout_afterexpand_event.md) and [](layout/api/layout_beforeexpand_event.md) events are added
- The ability to [collapse/expand a specified cell](layout/work_with_layout.md) using the corresponding [](layout/api/cell/layout_cell_collapse_method.md) and [](layout/api/cell/layout_cell_expand_method.md) methods 
- The [](layout/api/cell/layout_cell_toggle_method.md) method is added
- The [](layout/api/layout_foreach_method.md) method is added
- The ability to set the height for a cell of a layout with a header via the [](layout/api/cell/layout_cell_headerheight_config.md) configuration property of a cell

#### List

- The [](list/api/list_itemmouseover_event.md) event is added
- The ability to enable [dynamic loading of data in List](list/load_data.md#dynamic-loading)

#### Menu, Toolbar, Sidebar, Ribbon

- The [](menu/api/menu_isdisabled_method.md) method is added into the Menu API
- The [](toolbar/api/toolbar_isdisabled_method.md) method is added into the Toolbar API
- The [](sidebar/api/sidebar_isdisabled_method.md) method is added into the Sidebar API
- The [](ribbon/api/ribbon_isdisabled_method.md) method is added into the Ribbon API

#### Sidebar

- The [](sidebar/api/sidebar_beforecollapse_event.md), [](sidebar/api/sidebar_aftercollapse_event.md), [](sidebar/api/sidebar_beforeexpand_event.md), [](sidebar/api/sidebar_afterexpand_event.md) events are added
- The possibility [to expand/collapse a sidebar](sidebar/work_with_sidebar.md#expanding-and-collapsing-sidebar) using the corresponding [](sidebar/api/sidebar_expand_method.md) and [](sidebar/api/sidebar_collapse_method.md) methods

#### Slider

- The possibility [to check if a slider is disabled](slider/usage.md#checking-if-a-slider-is-disabled) via the [](slider/api/slider_isdisabled_method.md) method
- The possibility to define the position of a label of a slider using the [](slider/api/slider_labelposition_config.md) property

#### Tabbar

- The possibility [to equip each Tabbar tab with a close button](tabbar/configuring_tabbar.md#close-buttons-for-tabs) using the [](tabbar/api/tabbar_closable_config.md) property
- The [](tabbar/api/tabbar_beforeclose_event.md) and [](tabbar/api/tabbar_afterclose_event.md) events are added
- The ability [to make a tab or several tabs disabled](tabbar/configuring_tabbar.md#disabled-tabs) using the [](tabbar/api/tabbar_disabled_config.md) property 
- The ability [to disable/enable a tab on a page](tabbar/work_with_tabbar.md#enablingdisabling-a-tab) via the corresponding [](tabbar/api/tabbar_disabletab_method.md) and [](tabbar/api/tabbar_enabletab_method.md) methods

#### TimePicker

- The ability to clear the value set in the timepicker using the [](timepicker/api/timepicker_clear_method.md) method
- The [](timepicker/api/timepicker_beforeclose_event.md) and [](timepicker/api/timepicker_afterclose_event.md) events are added

#### Tree

- The [](tree/api/tree_aftercollapse_event.md), [](tree/api/tree_afterexpand_event.md), [](tree/api/tree_beforecollapse_event.md), [](tree/api/tree_beforeexpand_event.md) events are added
- The ability [to set the icon property in the configuration of a tree item](tree/api/tree_data_config.md) to render a tree item as a custom folder

#### TreeGrid

- The ability [to check visibility of a column](treegrid/usage.md#checking-visibility-of-a-column) via the [](treegrid/api/treegrid_iscolumnhidden_method.md) method
- The [](treegrid/api/treegrid_aftercollapse_event.md), [](treegrid/api/treegrid_beforecollapse_event.md), [](treegrid/api/treegrid_afterexpand_event.md), [](treegrid/api/treegrid_beforeexpand_event.md) events are added
- The possibility [to adjust the size of TreeGrid columns to the size of TreeGrid](treegrid/configuration.md#autowidth-for-columns) via the [](treegrid/api/treegrid_autowidth_config.md) configuration property
- The ability [to adjust the width of columns to the width of their content automatically](treegrid/configuration.md#autosize-for-columns) with the help of the [](treegrid/api/treegrid_adjust_config.md) property
- The ability [to sort content of any TreeGrid column by clicking on its header](treegrid/configuration.md#sortable-columns) using the [](treegrid/api/treegrid_sortable_config.md) property
- The [](treegrid/api/treegrid_getsortingstate_method.md) method that [allows getting the current state of sorting data in TreeGrid](treegrid/usage.md#getting-the-sorting-state) is added

#### Window

- The possibility [to place a window into a custom container](window/configuration.md#custom-node) using the [](window/api/window_node_config.md) property

#### Helpers

- The possibility [to load data dynamically using the LazyDataProxy helper](helpers/lazydataproxy.md)

#### Data Collection

- The [](data_collection/api/datacollection_foreach_method.md) method is added
- The [](data_collection/api/datacollection_changeid_method.md) method is added
- The ability to check whether the specified data range is loaded from the server using the [](data_collection/api/datacollection_isdataloaded_method.md) method
- The [](data_collection/api/datacollection_beforelazyload_event.md) and [](data_collection/api/datacollection_afterlazyload_event.md) events are added

#### Tree Collection

- The [](tree_collection/api/treecollection_foreach_method.md) method is added

#### Updates

- Now the [](dataview/api/dataview_multiselection_config.md) configuration property [allows setting the mode of multiselection in Dataview](dataview/configuration.md#multiple-selection-of-items)
- Now the [](list/api/list_multiselection_config.md) property [allows setting the mode of multiselection in List](list/configuration.md#multiple-selection-of-items)
- The getValue method of [DatePicker Form control](form/api/calendar/calendar_getvalue_method.md)

#### Fixes

- The issue with ability to use all types of [chart scales](chart/api/chart_scales_config.md) in any combinations
- The issue with the `setActive()` method in Tabbar
- The issue with styles when switching between modes in Colorpicker
- The issue with the `getValue()` method in Calendar and Colorpicker
- The issue with styles when Slider is disabled
- The issue with styles when Combobox is disabled
- Issues with the `filter()` method in Tree Collection

## Version 6.3.1

Released on December 18, 2019

### Fixes

- Add the possibility to set the css and data property in Chart
- Issue with starting editing Grid columns with the help of the keyboard navigation when the `editing: false` property is set in the configuration of a column
- Issue with the `change` event that fired before changes were applied in Form
- Add the ability to set the `name` attribute in the `setValue` method of Form control as `key`
- Issue with the Combo control of Form

## Version 6.3

Released on December 12, 2019

### New functionality

#### Calendar

- The ability to get the current mode of displaying Calendar via the [getCurrentMode()](calendar/operating_calendar.md#getting-current-mode) method
- New [](calendar/api/calendar_cancelclick_event.md), [](calendar/api/calendar_modechange_event.md), [](calendar/api/calendar_monthselected_event.md), [](calendar/api/calendar_yearselected_event.md) events are added

#### Chart

- The ability to specify templates for showing values of data items in [Bar, X-Bar, Pie and Pie 3D charts](chart/configuration_properties.md#series) using the `showTextTemplate` property

#### Grid

- [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- The possibility to finish editing of a cell via the [editEnd()](grid/api/grid_editend_method.md) method
- The ability [to add custom elements into Grid cells](grid/configuration.md#html-content-of-grid-columns) using the [](grid/api/grid_htmlenable_config.md) property

#### TreeGrid

- The [](treegrid/api/treegrid_collapse_method.md), [](treegrid/api/treegrid_collapseall_method.md), [](treegrid/api/treegrid_expand_method.md), [](treegrid/api/treegrid_expandall_method.md) methods are added
- The ability [to add custom elements into TreeGrid cells](treegrid/configuration.md#html-content-of-treegrid-columns) using the [](treegrid/api/treegrid_htmlenable_config.md) property

#### Menu/Ribbon/SideBar/Toolbar

- The ability to add custom HTML items into [Menu](menu/configuring_menu_items.md#custom-html), [Ribbon](ribbon/customhtmlbutton.md), [Sidebar](sidebar/customhtmlbutton.md) and [Toolbar](toolbar/customhtmlbutton.md)
- The possibility [to create Menu controls (MenuItem, NavItem) with custom HTML content](menu/configuring_menu_items.md) using the `html` attribute of Menu controls
- The possibility [to create Ribbon controls (Block, Button, ImageButton, NavItem, SelectButton, Title) with custom HTML content](ribbon/block.md#adding-html-content) using the `html` attribute of Ribbon controls
- The possibility [to create Sidebar controls (MenuItem, NavItem, Title) with custom HTML content](sidebar/menuitem.md#adding-html-content) using the `html` attribute of Sidebar controls
- The possibility [to create Toolbar controls (Button, ImageButton, NavItem, SelectButton, Title) with custom HTML content](toolbar/button.md#adding-html-content) using the `html` attribute of Toolbar controls

#### Helpers

- The ability to exchange data with a web server using [AJAX](ajax.md)

### Updates

#### API

-  Some API methods and events of the DHTMLX library have been renamed. Their old variants will be available but is not recommended for use. Check the details in the [Migration](migration.md#62---63) article.

#### List/DataView

- The ability to specify [the height of a List item](list/configuration.md#height-of-an-item) and [height of a list](list/configuration.md#height-of-the-list) either as a number or string value

### Fixes

- Issues with event system in Grid
- Padding for content with header was removed in Layout
- Add ability to set padding for cells with header in Layout
- Issue with incorrect displaying resizers of Layout in IE
- Add ability to change sizes of Window according to content size via the `css` property
- Issue with the `setSize` method when Window is hidden
- Issues with interaction between the HTML form and controls of Toolbar, Sidebar, Ribbon, Menu
- Issue with the validation property of Form controls
- Behavior of a TimePicker control of Form

## Version 6.2.3

Released on November 19, 2019

### Fixes

- Issue with setting the value in TimePicker of Form
- Issue with getting the value while editing DatePicker Form control
- Issue with getting values in the validation mode of Form
- Issue with the `movable` property in Window
- Issue with Window fixation

## Version 6.2.2

Released on November 5, 2019

### Fixes

- Issues with selection in Grid
- Issue with the height of a cell in Layout

## Version 6.2.1

Released on October 25, 2019

### Fixes

- Issue with the `setValue()` method in Calendar
- Issue with the combo filters in Grid

## Version 6.2

Released on October 23, 2019

### New functionality

#### Calendar

- The ability [to select a range of dates in one calendar](calendar/configuring.md#range-mode)

#### Form 

- The ability to manipulate Form controls via the [getItem() method of Form](form/api/form_getitem_method.md)
- The ability to use methods for [DatePicker](form/calendar.md#working-with-datepicker), [Checkbox](form/checkbox.md#working-with-checkbox), [Colorpicker](form/colorpicker.md#working-with-colorpicker), [Combo](form/combo.md#working-with-combo), [Input](form/input.md#working-with-input), [RadioGroup](form/radiogroup.md#working-with-radiogroup), [Select](form/select.md#working-with-select), [SimpleVault](form/simplevault.md#working-with-simplevault), [Slider](form/slider.md#working-with-slider), [Text](form/text.md#working-with-text), [Textarea](form/textarea.md#working-with-textarea), [TimePicker](form/timepicker.md#working-with-timepicker) Form controls: `clear()`, `clearValidate()`, `getValue()`, `setValue()`, `validate()`
- The possibility to update the configuration of [DatePicker](form/calendar.md#working-with-datepicker), [Checkbox](form/checkbox.md#working-with-checkbox), [Colorpicker](form/colorpicker.md#working-with-colorpicker), [Combo](form/combo.md#working-with-combo), [Input](form/input.md#working-with-input), [RadioGroup](form/radiogroup.md#working-with-radiogroup), [Select](form/select.md#working-with-select), [SimpleVault](form/simplevault.md#working-with-simplevault), [Slider](form/slider.md#working-with-slider), [Text](form/text.md#working-with-text), [Textarea](form/textarea.md#working-with-textarea), [TimePicker](form/timepicker.md#working-with-timepicker) Form controls via the `setConfig()` method
- The ability to use methods of DHTMLX widgets via the `getWidget()` method of [DatePicker](form/calendar.md#working-with-the-dhtmlxcalendar-widget), [ColorPicker](form/colorpicker.md#working-with-the-dhtmlxcolorpicker-widget), [Slider](form/slider.md#working-with-the-dhtmlxslider-widget), [TimePicker](form/timepicker.md#working-with-the-dhtmlxtimepicker-widget) Form controls

#### Grid/TreeGrid

- The possibility to [show and hide](grid/usage.md#hidingshowing-a-column) a column in the grid via the [showColumn()](grid/api/grid_showcolumn_method.md) and [hideColumn()](grid/api/grid_hidecolumn_method.md) methods
- A new [combo filter](grid/api/api_gridcolumn_properties.md) for the [header/footer content](grid/configuration.md#headerfooter-filters) of a Grid column
- New [checkbox and combobox editors](grid/configuration.md#types-of-column-editor) for the cells of a Grid column
- The ability to set [min and max width](grid/api/api_gridcolumn_properties.md) for Grid columns
- The possibility to [change the width of columns](grid/configuration.md#resizable-columns) via the [resizable](grid/api/grid_resizable_config.md) property
- [Drag-n-drop](grid/configuration.md#drag-n-drop-between-grids) of rows between grids via the [dragMode](grid/api/grid_dragmode_config.md) property
- [Export to CSV format](grid/usage.md#exporting-data-to-csv)

#### Layout

- New [event system](layout/api/api_overview.md)

### Updates

- The sample with [default icons of DHTMLX library](helpers/icon.md) to decorate an application without using icon fonts
- A set of [CSS classes](helpers/base_elements.md) for using them outside DHTMLX widgets
- A set of CSS classes for changing the appearance of DHTMLX widgets via the `css` property of the widgets API

#### Calendar

- The possibility to set the start and end dates for a calendar in the range mode via the [setValue()](calendar/api/calendar_setvalue_method.md) method
- The ability to get the start and end dates from the selected range of dates in the calendar via the [getValue()](calendar/api/calendar_getvalue_method.md) method

#### Grid

- Accelerating Grid speed to 2.5x

### Fixes

- Issues with months selection in Calendar
- Issues with the `setValue()` method in Calendar
- Issues with boolean type in a Grid cell
- Issue with selection on frozen columns in Grid
- Issues with animation in Charts
- Issue with Timepicker Form control
- Issue with Colorpicker Form control

## Version 6.1.7

Released on October 10, 2019

### Fixes

- Issue with custom validation in Form
- Issue with the `value` property in Form
- Issue with editor on a frozen column in Grid

## Version 6.1.6

Released on September 26, 2019

### Fixes

- Issue with the Button events in Form
- Issue with the Uploader styles in Form
- Issue with the header rowspans in Grid
- Issues with the `copy()` and `move()` methods in Treecollection and Datacollection

## Version 6.1.5

Released on September 12, 2019

### Fixes

- Issues with the Submit button in Form
- Issue with the baseline in Chart
- Issue with Combobox popup
- Issue with the height of uploader in Form

## Version 6.1.4

Released on September 5, 2019

### Fixes

- Issues with date sorting in Grid
- Issue with filters in Grid
- Issue with resizer in Layout
- Issue with resizing textarea in Form
- Issues with restoring selection in Grid, DataView and List
- Issues with Calendar styles
- Fixes in samples

## Version 6.1.3

Released on August 29, 2019

### Fixes

- Issues with scroll in DataView
- Issues with styles in Chart
- Issues with the `hidden` property in Checkboxes and RadioGroup of Form

## Version 6.1.2

Released on August 22, 2019

### Fixes

- Restore the ability to send FormData in the `send()` method of Form
- Issues with Form select
- Issue with the `add()` method of Datacollection

## Version 6.1.1

Released on August 16, 2019

### Fixes

- Issues with DnD in List and DataView
- Issue with the `getValue()` method in Form

## Version 6.1

Released on August 15, 2019

### New functionality

#### ComboBox

- Ability to [manipulate the visibility of the Combo popup](combobox/work_with_combo.md#hidingshowing-the-popup) via the Popup API

#### Dataview/List

- The possibility to edit items via API ([DataView](dataview/manipulating_data.md#editing-items) / [List](list/work_with_list.md#editing-items)) or the configuration object 
([DataView](dataview/configuration.md#editing-items) / [List](list/configuration.md#editing-items))
- New editing-related events: `DoubleClick`, `BeforeEditStart`, `BeforeEditEnd`, `AfterEditStart`, `AfterEditEnd`
- Multiple selection of items ([DataView](dataview/configuration.md#multiple-selection-of-items) / [List](list/configuration.md#multiple-selection-of-items)) 
- Multiple drag-n-drop of items ([DataView](dataview/configuration.md#drag-n-drop-of-items) / [List](list/configuration.md#drag-n-drop-of-items))

#### Data/Tree Collection

- A new [LoadError](data_collection/api/datacollection_loaderror_event.md) event for catching loading errors

#### Form 

- [Dynamic config updating and re-rendering of a form](form/work_with_form.md)  
- [Adding values into controls on the fly](form/work_with_form.md#setting-new-values-for-controls)
- [Clearing a form](form/work_with_form.md#clearing-form)
- The new [send()](form/work_with_form.md#sending-form-to-server) method for sending a form to the server
- A new [RadioGroup](form/radiogroup.md) control for grouping RadioButtons

#### Grid

- Editing the whole Grid or separate columns [via the configuration object](grid/configuration.md#editing-grid-and-separate-columns)
- Editing certain cells [via the API method](grid/usage.md#editing-data)
- New editing-related events: `BeforeEditStart`, `BeforeEditEnd`, `AfterEditStart`, `AfterEditEnd`
- The possibility to define the [type of an editor for a column](grid/configuration.md#types-of-column-editor)
- A new [type:"date" for a column](grid/api/api_gridcolumn_properties.md)
- The ability to [add vertical span into the columns headers](grid/api/api_gridcolumn_properties.md)
- The possibility to [enable automatic adding of an empty row to the end of the Grid](grid/configuration.md#automatic-adding-of-empty-row-into-grid)
- Initialization without data

#### Popup

- The possibility to [adjust the Popup offsets relative to the element](popup/work_with_popup.md#hidingshowing-popup)

#### Tree

- The possibility to [enable editing of items](tree/configuration.md#editing-of-items) via the configuration object

#### Window

- The ability to [check the visibility of a window](window/usage.md#checking-visibility-of-window)

### Updates

#### Data/Tree Collection

- Calling [](data_collection/api/datacollection_sort_method.md) without parameters resets applied sorting
- The possibility to add an array of items via the [](data_collection/api/datacollection_sort_method.md) method

#### Form

- The possibility to set values for [DatePicker](form/calendar.md), [TimePicker](form/timepicker.md), [ColorPicker](form/colorpicker.md) Form controls via inputs
- The possibility to make Form [Inputs](form/input.md) hidden
- The autocomplete feature for Form [Inputs](form/input.md)  
- Validation of a Form [Select](form/select.md) control

#### Grid

- Extended [selection](grid/configuration.md#selection) possibilities

### Fixes

- The possibility to set value for the Combo control via the configuration object of Form
- Behavior of the Slider control

## Version 6.0.4

Released on August 6, 2019

### Fixes

- Issue with the `load()` method of Datacollection
- Issue with arrow navigation in Tabbar
- Issues with Window positioning and sizing
- Issue with the `sort()` method of Datacollection
- Issues with DnD in Tree
- Issue with badges in Toolbar
- Issues with Message positioning
- Issues with names in Calendar localization
- Styles fixes

## Version 6.0.3

Released on July 19, 2019

### Fixes

- Issues with the require property of Form
- Restore the `setConfig()` method of Form
- Issues with Form validation
- Issue with checkboxes in Tree
- Issue with the Select all button in Combobox
- Issue with virtual list in Combobox
- Issue with selection in List
- Issue with header filters in Grid
- Issue with footer in Window
- Issue with the month view in Calendar
- Issues with key navigation in Timepicker
- Issues with z-index in Window and Popup
- Styles fixes

## Version 6.0.2

Released on July 11, 2019

### Fixes

- Issues with Form custom CSS
- Issues with Form elements
- Issue with the `getValue()` method of Form
- Issues with Menu and Context menu
- Issues with popup in Form
- Issue with scroll in Combobox
- Issue with data parsing in Toolbar
- Styles fixes

## Version 6.0.1

Released on July 5, 2019

### Fixes

- Issues with the `setValue()` method of Calendar
- Issue with the `set/getValue()` methods of Slider
- Issue with buttons in Confirm message box
- Styles fixes
