---
sidebar_label: What's new
title: What's new
---

Before updating DHTMLX to the latest version, please check the [Migration to Newer Versions](migration.md) guide to avoid possible breakdowns.

Version 7.0.2
---------------

<span class="rel_date">released on December 28, 2020</span>

### Fixes

- Fix the issue with loading data into the component via the `parse()` method of Tree Collection, or via the `data` configuration property of the component 
- Fix the types of events in Grid   

Version 7.0.1
---------------

<span class="rel_date">released on December 21, 2020</span>

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


Version 7.0
---------------

<span class="rel_date">released on December 7, 2020</span>

### Breaking changes

The update brings various changes in the API methods. Check the [Migration article](migration.md#65---70) to keep in step with the latest version.

### Major updates

- [The new Pagination widget](pagination/index.md) is added (Pro version) 
- <a href="https://github.com/DHTMLX/nodejs-suite-demo" target="_blank">Suite with Node.js demo</a> is added
- <a href="https://dhtmlx.com/docs/products/dhtmlxSuite/how-to-create-javascript-applications" target="_blank">CSS templates for Suite widgets</a>
- Layout. The configuration has become simpler, more concise and clearer.  New [type: "line", "space", "wide", "none"](layout/api/layout_type_config.md) allows creating Layout of the desired view.
- Tabbar. The ability [to automatically distribute tabs evenly by the width of the container](tabbar/api/tabbar_tabautowidth_config.md). The ability [to align tabs inside the container](tabbar/api/tabbar_tabalign_config.md). Now, instead of the scrollbar <a href="https://snippet.dhtmlx.com/3gf9av9q" target="_blank">the neat arrows automatically appear to navigate to tabs when the container overflows</a>.
- Grid and TreeGrid. The ability to hide and show rows.
- [The ability to interact with the widgets of Suite on touch devices by gestures](guides/touch_support.md)
- Significantly expanded list of drag-n-drop events in widgets. See details below.
- Form. Lots of important and useful changes. See details below.

### Full list of changes

#### Combobox

- The ability to specify the initial value of the combobox via the [value](combobox/api/combobox_value_config.md) configuration property

#### DataView

- The ability to add event handlers to custom templates of DataView items via the [eventHandlers](dataview/api/dataview_eventhandlers_config.md) property 
- New drag-n-drop events: [afterDrag](dataview/api/dataview_afterdrag_event.md), [afterDrop](dataview/api/dataview_afterdrop_event.md), [beforeDrag](dataview/api/dataview_beforedrag_event.md), [beforeDrop](dataview/api/dataview_beforedrop_event.md), [cancelDrop](dataview/api/dataview_canceldrop_event.md), [canDrop](dataview/api/dataview_candrop_event.md), [dragIn](dataview/api/dataview_dragin_event.md), [dragOut](dataview/api/dataview_dragout_event.md), [dragStart](dataview/api/dataview_dragstart_event.md)
- The ability [to enable/disable selection of items](dataview/usage_selection.md) in DataView via the related [enable()](dataview/api/selection/selection_enable_method.md)/ [disable()](dataview/api/selection/selection_disable_method.md) methods of the selection object
- The ability to use simplified versions of the [afterSelect](dataview/api/selection/selection_afterselect_event.md), [afterUnSelect](dataview/api/selection/selection_afterunselect_event.md), [beforeSelect](dataview/api/selection/selection_beforeselect_event.md), [beforeUnSelect](dataview/api/selection/selection_beforeunselect_event.md) events of DataView
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
- The new "getProperties()" and "setProperties()" methods are added for Form controls: [Button](form/api/api_overview.md#button-api), [DatePicker](form/api/api_overview.md#datepicker-api), [Checkbox](form/api/api_overview.md#checkbox-api), [ColorPicker](form/api/api_overview.md#colorpicker-api), [Combo](form/api/api_overview.md#combo-api), [Input](form/api/api_overview.md#input-api), [RadioGroup](form/api/api_overview.md#radiogroup-api), [Select](form/api/api_overview.md#select-api), [SimpleVault](form/api/api_overview.md#simple-vault-api), [Slider](form/api/api_overview.md#slider-api), [Text](form/api/api_overview.md#text-api), [Textarea](form/api/api_overview.md#textarea-api), [TimePicker](form/api/api_overview.md#timepicker-api)
- The Event Systems are added for Form controls: [Button](form/api/api_overview.md#events-1), [DatePicker](form/api/api_overview.md#events-2), [Checkbox](form/api/api_overview.md#events-3), [ColorPicker](form/api/api_overview.md#events-5), [Combo](form/api/api_overview.md#events-6), [Input](form/api/api_overview.md#events-7), [RadioGroup](form/api/api_overview.md#events-8), [Select](form/api/api_overview.md#events-9), [Slider](form/api/api_overview.md#events-11), [Text](form/api/api_overview.md#events-13), [Textarea](form/api/api_overview.md#events-14), [TimePicker](form/api/api_overview.md#events-15) 
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

- New properties of a layout cell: [maxHeight](layout/api/layout_maxheight_config.md), [maxWidth](layout/api/layout_maxwidth_config.md), [minHeight](layout/api/layout_minheight_config.md), [minWidth](layout/api/layout_minwidth_config.md)
- The ability to specify borders between cells via the [type](layout/api/layout_type_config.md) configuration option of a Layout cell


#### List

- The ability to add event handlers to custom templates of List items via the [eventHandlers](list/api/list_eventhandlers_config.md) property 
- New drag-n-drop events of List: [afterDrag](list/api/list_afterdrag_event.md), [afterDrop](list/api/list_afterdrop_event.md), [beforeDrag](list/api/list_beforedrag_event.md), [beforeDrop](list/api/list_beforedrop_event.md), [cancelDrop](list/api/list_canceldrop_event.md), [canDrop](list/api/list_candrop_event.md), [dragIn](list/api/list_dragin_event.md), [dragOut](list/api/list_dragout_event.md), [dragStart](list/api/list_dragstart_event.md)
- The ability [to enable/disable selection of items](list/usage_selection.md) in List via the related [enable](list/api/selection/selection_enable_method.md)/ [disable](list/api/selection/selection_disable_method.md) methods of the Selection object
- The ability to use simplified versions of the [afterSelect](list/api/selection/selection_afterselect_event.md), [afterUnSelect](list/api/selection/selection_afterunselect_event.md), [beforeSelect](list/api/selection/selection_beforeselect_event.md), [beforeUnSelect](list/api/selection/selection_beforeunselect_event.md) events of List
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
- The ability [to enable/disable selection of items](tree/usage_selection.md) in Tree via the related [enable()](tree/api/selection/selection_enable_method.md)/ [disable()](tree/api/selection/selection_disable_method.md) methods of the Selection object
- The ability [to enable selection of Tree items](tree/configuration.md#selection-of-items) via the [selection](tree/api/tree_selection_config.md) configuration property of Tree
- The ability to use simplified versions of the [afterSelect](tree/api/selection/selection_afterselect_event.md), [afterUnSelect](tree/api/selection/selection_afterunselect_event.md), [beforeSelect](tree/api/selection/selection_beforeselect_event.md), [beforeUnSelect](tree/api/selection/selection_beforeunselect_event.md) events of Tree
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
- SimpleVault control of Form. The [](form/api/simplevault/simplevault_beforeuploadfile_event), [](form/api/simplevault/simplevault_uploadbegin_event.md), [](form/api/simplevault/simplevault_uploadcomplete_event.md), [](form/api/simplevault/simplevault_uploadfail_event.md), [](form/api/simplevault/simplevault_uploadfile_event.md), [](form/api/simplevault/simplevault_uploadprogress_event.md) events are improved
- TimePicker control of Form. The [getValue()](form/api/timepicker/timepicker_getvalue_method.md)/ [setValue()](form/api/timepicker/timepicker_setvalue_method.md) methods are updated
- Form. The [getValue()](form/api/form_getvalue_method.md) method is updated
- Grid/TreeGrid. The "splitAt" configuration property is replaced by the "leftSplit" one 
- [Grid](grid/api/grid_beforecolumndrag_event.md)/[TreeGrid](treegrid/api/treegrid_beforecolumndrag_event.md). The "beforeColumnDrag" event is updated - the `id` parameter is replaced with the `data` and `e` ones.
- [Grid](grid/api/grid_beforecolumndrop_event.md)/[TreeGrid](treegrid/api/treegrid_beforecolumndrop_event.md). The "beforeColumnDrop" event is updated - the `sourceId`/ `targetId` parameters are replaced with the `data` and `e` ones.
- Layout. [Layout patterns](layout/layout_patterns.md) section is added to docs
- Layout. The [gravity](layout/api/layout_gravity_config.md) property of a Layout cell is updated
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
- Issues with the [width](layout/api/layout_width_config.md), [height](layout/api/layout_height_config.md), [padding](layout/api/layout_padding_config.md) properties of a Layout cell when setting their values as `number` type
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


Version 6.5.8
------------------

<span class="rel_date">released on October 15, 2020</span>

### Fixes

- Fix the incorrect behavior of the sorting icon in the header of a Grid column when setting the [sortable](grid/configuration.md#sorting-columns) property to false
- Fix the issue which caused [key navigation](tree/configuration.md#key-navigation) in Tree not to work in IE

Version 6.5.7
---------------

<span class="rel_date">released on October 15, 2020</span>

### Fixes

- Fix the incorrect work of the [](grid/api/grid_aftereditend_event.md), [](grid/api/grid_aftereditstart_event.md), [](grid/api/grid_beforeeditend_event.md), [](grid/api/grid_beforeeditstart_event.md) events for cells with the checkbox editor type in Grid
- Fix the issue with rendering [a tooltip on hovering over the slider thumb](slider/api/slider_tooltip_config.md) when the slider is attached both to a Layout and a Window at the same time
- Fix the issue with [a tooltip added to a Title control of Toolbar](toolbar/title.md#adding-a-tooltip) which caused a tooltip not to be shown
- Fix the issue with drag and drop of Grid columns with [selectFilter](grid/configuration.md#headerfooter-content) filled

Version 6.5.6
-------------

<span class="rel_date">released on October 5, 2020</span>

### Fixes

- Fix the incorrect work of the input filter of a Grid column when placing a grid into a shadowDOM while working in Firefox
- Fix the issue with key navigation in a grid placed to a layout cell, which caused key navigation to stop working after collapsing/expanding the layout cell
- Fix the incorrect work of the select filter of a Grid column after resizing the column 
- Fix the issue with ignoring [alignment](grid/configuration.md#alignment) of data in the column's header while using [spans](grid/configuration.md#spans) in Grid
- Fix the incorrect behavior of editors when working with several grids on one page
- Fix the issue with the width of expanded items in Tree
- Fix the incorrect work of selection in Grid cells when using [key navigation](grid/configuration.md#keyboard-navigation) on a page with several grids

Version 6.5.5
-----------------

<span class="rel_date">released on September 17, 2020</span>

### Fixes

- Fix the behavior of the align property of a Grid column when the [spans](grid/api/grid_spans_config.md) configuration option is used
- Fix the issue with rendering of Grid/TreeGrid

Version 6.5.4
-------------

<span class="rel_date">released on September 15, 2020</span>

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

Version 6.5.3
-------------

<span class="rel_date">released on September 2, 2020</span>

### Fixes

- Fix the behavior of the [](grid/api/grid_keynavigation_config.md) property of Grid when the grid is attached to a collapsed Layout cell
- Fix the issue with positioning of a popup relative to a Window
- Fix issues with the event system of a checkbox editor in Grid 
- Fix the issue with calculation of Grid height when Grid has [frozen columns](grid/configuration.md#frozen-columns)
- Fix the behavior of the [](grid/api/grid_adjust_config.md) property of Grid when some columns are [hidden](grid/configuration.md#hidden-columns) 
- Mechanism of appearing of a Popup widget on a page is reworked
- Checking the incorrect data of the [](grid/api/selection/selection_setcell_method.md) method of Grid is added
- Fix issues with minimal and maximal values of scales in Chart


Version 6.5.2
-------------

<span class="rel_date">released on July 14, 2020</span>

### Fixes

- Fixed types in d.ts 
- Issue with the [](grid/api/grid_editcell_method.md) method in Grid
- Issue with the [](grid/api/grid_removerowcss_method.md) method in Grid
- Issue with Grid while using together with Window
- Issue with "email" validation rule of input in Form 
- Improved editing mode when drag and drop is enabled in Tree
- Issue with rendering nested levels of TreeGrid items

Version 6.5.1
----------------

<span class="rel_date">released on June 16, 2020</span>

### Fixes

- Issue with npm codebase build

Version 6.5
----------------

<span class="rel_date">released on June 16, 2020</span>

### New functionality

- [TypeScript support for all components](guides/using_typescript.md)
- <a href="https://github.com/DHTMLX/angular-suite-demo" target="_blank">Suite with Angular demo</a> is added

#### Grid 

- The ability to [drag and drop columns in Grid](grid/configuration.md#drag-n-drop-of-grid-columns) using the grid/api/grid_dragitem_config.md configuration property of Grid, or via the [draggable](grid/configuration.md#columns) configuration option of a Grid column (Pro)
- New grid/api/grid_beforecolumndrag_event.md and grid/api/grid_beforecolumndrop_event.md events are added (Pro)
- The ability [to align data in a column as well as in the header of a column](grid/configuration.md#alignment)
- The ability [to show/hide tooltips](grid/configuration.md#tooltip) while hovering over the content of a column via the grid/api/grid_tooltip_config.md configuration property

#### TreeGrid 

- The ability to [drag and drop columns in TreeGrid](treegrid/configuration.md#drag-n-drop-of-grid-columns) via the treegrid/api/treegrid_dragitem_config.md configuration property of TreeGrid, or via the [draggable](treegrid/configuration.md#columns) configuration option of a TreeGrid column
- New treegrid/api/treegrid_beforecolumndrag_event.md and treegrid/api/treegrid_beforecolumndrop_event.md events are added 
- The ability to [group data in TreeGrid](treegrid/usage.md#grouping-data) using the treegrid/api/treegrid_groupby_method.md method
- The possibility to set a template to the title of the group via the treegrid/api/treegrid_grouptitletemplate_config.md configuration option of TreeGrid
- The ability [to align data in a column as well as in the header of a column](treegrid/configuration.md#alignment)
- The ability [to show/hide tooltips](treegrid/configuration.md#tooltip) while hovering over the content of a column via the treegrid/api/treegrid_tooltip_config.md configuration property

#### DataView

- The ability to [disable selection of items in DataView](dataview/configuration.md#selection-of-items) via the dataview/api/dataview_selection_config.md configuration property 
- The ability to [enable/disable](dataview/manipulating_data.md#disabling-and-enabling-selection-of-an-item) selection of DataView items via the corresponding dataview/api/dataview_enableselection_method.md and dataview/api/dataview_disableselection_method.md methods

#### List

- The possibility to [disable selection of items in List](list/configuration.md#selection-of-items) via the list/api/list_selection_config.md configuration property 
- The ability to [enable/disable](list/work_with_list.md#disabling-and-enabling-selection-of-an-item) selection of List items via the corresponding list/api/list_enableselection_method.md and list/api/list_disableselection_method.md methods

#### Form

- New methods of the [Select control of Form](form/select.md#working-with-select) are added: getOptions(), setOptions()
- The ability to [make Form hidden](form/configuration.md#making-form-hidden)
- The ability to make a Form control (form/button.md, form/calendar.md, form/checkbox.md, form/colorpicker.md, form/combo.md, form/input.md, form/radiogroup.md, form/select.md, form/simplevault.md, form/slider.md, form/text.md, form/textarea.md, form/timepicker.md) hidden via the related configuration attribute of the control
- New methods of Form are added: form/api/form_hide_method.md, form/api/form_show_method.md, form/api/form_isvisible_method.md
- The form/api/form_afterhide_event.md, form/api/form_aftershow_event.md, form/api/form_beforehide_event.md, form/api/form_beforeshow_event.md events are added
- The ability to hide/show Form controls (form/button.md#workingwithbutton, form/calendar.md#workingwithdatepicker, form/checkbox.md#workingwithcheckbox, form/colorpicker.md#workingwithcolorpicker, form/combo.md#workingwithcombo, form/input.md#workingwithinput, form/radiogroup.md#workingwithradiogroup, form/select.md#workingwithselect, form/simplevault.md#workingwithsimplevault, form/slider.md#workingwithslider, form/text.md#workingwithtext, form/textarea.md#workingwithtextarea, form/timepicker.md#workingwithtimepicker) via the corresponding hide()/show() methods of the controls
- [New methods](form/simplevault.md#working-with-simplevault) of the SimpleVault control of Form are added: selectFile(), send(), setValue()

#### Sidebar

- New methods of Sidebar are added: sidebar/api/sidebar_select_method.md, sidebar/api/sidebar_unselect_method.md, sidebar/api/sidebar_isselected_method.md, sidebar/api/sidebar_getselected_method.md

### Updates

- The ability to adjust the width of columns to the width of their footer in [Grid](grid/configuration.md#autosize-for-columns) and [TreeGrid](treegrid/configuration.md#autosize-for-columns)
- <a href = "https://github.com/DHTMLX/react-widgets" target="_blank">Suite with React demo</a> is updated
- Ability to work with number type of id in Combobox, DataView, List widgets and in Select control of Form


Version 6.4.4
----------------

<span class="rel_date">released on May 19, 2020</span>

#### Fixes

- Fix the behavior of Layout inside a resizable window
- Fix the behavior of charts placed into a cell of Tabbar in IE
- Fix issue with the layout/api/layout_aftershow_event.md event of Layout not being called
- Fix the incorrect work of the [destructor()](grid/api/grid_destructor_method.md) method when combo filters are not specified in Grid
- Fix the incorrect work of the [Change](combobox/api/combobox_change_event.md) event when the combobox/api/combobox_multiselection_config.md property is enabled in Combobox
- Fix the incorrect work of the colorpicker/api/colorpicker_change_event.md event while calling the [clear()](colorpicker/api/colorpicker_clear_method.md) method in ColorPicker
- Fix issue with the [getValue()](form/api/form_getvalue_method.md) method of Form
- Fix the incorrect work of the form/api/form_change_event.md event  while calling the [clear()](form/api/form_clear_method.md) method for Form controls (Input, Textarea, Checkbox, RadioGroup, Select, DatePicker, TimePicker, ColorPicker, Combo)
- Fix the incorrect work of the Combo control of Form while calling the [getValue()](form/api/form_getvalue_method.md) method
- Fix issue with the form/api/form_change_event.md event of Form
- Fix validation for the Input control of Form
- Fix rendering of custom HTML content in Window
- Fix priority of the modal window while calling more than one window

Version 6.4.3
----------------

<span class="rel_date">released on April 29, 2020</span>

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


Version 6.4.2
----------------

<span class="rel_date">released on March 3, 2020</span>

#### Fixes

- The issue with virtualization behavior in Grid when interacting with Tabbar
- The issue with clicking on [a frozen column](grid/configuration.md#frozen-columns) in Grid
- The issue with export data from Grid to Excel
- Issue with rendering of Chart at zero value
- Status of an active element is added in Menu
- The ability to check validation of values is added in Colorpicker
- Styles for all inputs with invalid values for Firefox browser are fixed 

Version 6.4.1
----------------

<span class="rel_date">released on January 30, 2020</span>


#### Fixes

- Behavior of Lazy loading in Grid
- The issue with the template configuration option in a column of Grid
- The issue with the headerIcon property of a layout cell
- The issue with the height of layout cells when the layout has a header



Version 6.4
----------------

<span class="rel_date">released on January 28, 2020</span>

### New functionality

- <a href = "https://github.com/DHTMLX/react-widgets" target="_blank">Suite with React demo</a> is added

#### Calendar

- The ability to clear the value set in the calendar using the calendar/api/calendar_clear_method.md method

#### Chart

- The chart/api/chart_serieclick_event.md event is added
- The ability to rotate labels of data items on the scale using [the scaleRotate property in the configuration of the scale](chart/configuration_properties.md#scales)
- The ability to rotate text values of data items in Bar and X-Bar chart via [the showTextRotate property in the configuration of the series](chart/configuration_properties.md#series) 


#### ColorPicker

- The possibility to specify the mode of displaying a colorpicker using the colorpicker/api/colorpicker_mode_config.md property
- The ability to clear the value set in the colorpicker and remove focus via the colorpicker/api/colorpicker_clear_method.md method

#### Combobox

- The possibility [to check whether a combobox is disabled on the page](combobox/work_with_combo.md#checking-if-a-combobox-is-disabled) using the combobox/api/combobox_isdisabled_method.md method
- The combobox/api/combobox_beforeclose_event.md and combobox/api/combobox_afterclose_event.md events are added
- The ability to specify an array of data objects before initialization via the combobox/api/combobox_data_config.md configuration property
- The possibility to define the position of a label of a combobox using the combobox/api/combobox_labelposition_config.md property


#### Dataview

- The dataview/api/dataview_itemmouseover_event.md event is added

#### Form

- The ability [to check whether a form or a form control is disabled on the page](form/work_with_form.md#checking-if-a-form-is-disabled) via the form/api/form_isdisabled_method.md method 
- The possibility [to disable a form on a page](form/work_with_form.md#enabling-disabling-a-form) using the form/api/form_disable_method.md method
- The possibility [to enable a form on a page](form/work_with_form.md#enabling-disabling-a-form) using the form/api/form_enable_method.md method
- The possibility [to make a form disabled](form/configuration.md#making-form-disabled) using the form/api/form_disabled_property.md property 
- The ability to use methods for [Button](form/button.md#working-with-button), [DatePicker](form/calendar.md#working-with-datepicker), [Checkbox](form/checkbox.md#working-with-checkbox), [ColorPicker](form/colorpicker.md#working-with-colorpicker), [Combo](form/combo.md#working-with-combo), [Input](form/input.md#working-with-input), [RadioGroup](form/radiogroup.md#working-with-radiogroup), [Select](form/select.md#working-with-select), [SimpleVault](form/simplevault.md#working-with-simplevault), [Slider](form/slider.md#working-with-slider), [Text](form/text.md#working-with-text), [Textarea](form/textarea.md#working-with-textarea), [TimePicker](form/timepicker.md#working-with-timepicker) Form controls: disable(), enable(), isDisabled()
- The possibility to specify the maximum number of characters allowed in the input via the maxlength attribute of form/input.md Form control
- The ability [to set the format of the value that will be returned while getting the current value of DatePicker control using the valueFormat property](form/calendar.md#adding-datepicker)
- The ability to define the position of a label for form/button.md, form/calendar.md, form/checkbox.md, form/colorpicker.md, form/combo.md, form/input.md, form/radiogroup.md, form/select.md, form/simplevault.md, form/slider.md, form/text.md form/textarea.md, form/timepicker.md Form controls using the labelPosition attribute
- The possibility to specify the url attribute to which form data will be sent to for [Button Form control](form/button.md#adding-button) 
- The form/api/form_foreach_method.md method is added


#### Grid

- The ability [to adjust the size of Grid columns to the size of Grid](grid/configuration.md#autowidth-for-columns) via the grid/api/grid_autowidth_config.md configuration property
- The possibility [to adjust the width of columns to the width of their content automatically](grid/configuration.md#autosize-for-columns) using the grid/api/grid_adjust_config.md configuration option
- The ability [to select multiple rows or cells of Grid](grid/configuration.md#multiple-selection-of-grid-cells) using the grid/api/grid_multiselection_config.md property
- The possibility [to set selection to multiple cells/rows of Grid](grid/usage.md#using-selection-api) via the setCell() method of the selection object
- New additional arrow keyboard shortcuts are added to [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- The ability [to sort content of any Grid column by clicking on its header](grid/configuration.md#sorting-columns) via the grid/api/grid_sortable_config.md property
- The grid/api/grid_getsortingstate_method.md method that [allows getting the current state of sorting data in Grid](grid/usage.md#getting-the-sorting-state) is added
- The possibility [to check visibility of a column](grid/usage.md#checking-visibility-of-a-column) via the grid/api/grid_iscolumnhidden_method.md method
- The ability to enable [dynamic loading of data in Grid](grid/data_loading.md#dynamic-loading)
- The grid/api/grid_afterkeydown_event.md and grid/api/grid_beforekeydown_event.md events are added

#### Layout

- The layout/api/layout_afterexpand_event.md and layout/api/layout_beforeexpand_event.md events are added
- The ability to [collapse/expand a specified cell](layout/work_with_layout.md#collapsing-expanding-a-cell) using the corresponding layout/api/layout_collapse_method.md and layout/api/layout_expand_method.md methods 
- The layout/api/layout_toggle_method.md method is added
- The layout/api/layout_foreach_method.md method is added
- The ability to set the height for a cell of a layout with a header via the layout/api/layout_headerheight_config.md configuration property of a cell


#### List

- The list/api/list_itemmouseover_event.md event is added
- The ability to enable [dynamic loading of data in List](list/load_data.md#dynamic-loading)

#### Menu, Toolbar, Sidebar, Ribbon

- The menu/api/menu_isdisabled_method.md method is added into the Menu API
- The toolbar/api/toolbar_isdisabled_method.md method is added into the Toolbar API
- The sidebar/api/sidebar_isdisabled_method.md method is added into the Sidebar API
- The ribbon/api/ribbon_isdisabled_method.md method is added into the Ribbon API

#### Sidebar

- The sidebar/api/sidebar_beforecollapse_event.md, sidebar/api/sidebar_aftercollapse_event.md, sidebar/api/sidebar_beforeexpand_event.md, sidebar/api/sidebar_afterexpand_event.md events are added
- The possibility [to expand/collapse a sidebar](sidebar/work_with_sidebar.md#expanding-and-collapsing-sideba) using the corresponding sidebar/api/sidebar_expand_method.md and sidebar/api/sidebar_collapse_method.md methods

#### Slider

- The possibility [to check if a slider is disabled](slider/usage.md#checking-if-a-slider-is-disabled) via the slider/api/slider_isdisabled_method.md method
- The possibility to define the position of a label of a slider using the slider/api/slider_labelposition_config.md property

#### Tabbar

- The possibility [to equip each Tabbar tab with a close button](tabbar/configuring_tabbar.md#close-buttons-for-tabs) using the  tabbar/api/tabbar_closable_config.md property
- The tabbar/api/tabbar_beforeclose_event.md and tabbar/api/tabbar_afterclose_event.md events are added
- The ability [to make a tab or several tabs disabled](tabbar/configuring_tabbar.md#disabled-tabs) using the tabbar/api/tabbar_disabled_config.md property 
- The ability [to disable/enable a tab on a page](tabbar/work_with_tabbar.md#enabling-disabling-a-tab) via the corresponding tabbar/api/tabbar_disabletab_method.md and tabbar/api/tabbar_enabletab_method.md methods 

#### TimePicker

- The ability to clear the value set in the timepicker using the timepicker/api/timepicker_clear_method.md method
- The timepicker/api/timepicker_beforeclose_event.md and timepicker/api/timepicker_afterclose_event.md events are added

#### Tree

- The tree/api/tree_aftercollapse_event.md, tree/api/tree_afterexpand_event.md, tree/api/tree_beforecollapse_event.md, tree/api/tree_beforeexpand_event.md events are added
- The ability [to set the icon property in the configuration of a tree item](tree/api/tree_data_config.md) to render a tree item as a custom folder

#### TreeGrid

- The ability [to check visibility of a column](treegrid/usage.md#checking-visibility-of-a-column) via the treegrid/api/treegrid_iscolumnhidden_method.md 
- The treegrid/api/treegrid_aftercollapse_event.md, treegrid/api/treegrid_beforecollapse_event.md, treegrid/api/treegrid_afterexpand_event.md, treegrid/api/treegrid_beforeexpand_event.md events are added
- The possibility [to adjust the size of TreeGrid columns to the size of TreeGrid](treegrid/configuration.md#autowidth-for-columns) via the treegrid/api/treegrid_autowidth_config.md configuration property
- The ability [to adjust the width of columns to the width of their content automatically](treegrid/configuration.md#autosize-for-columns) with the help of the treegrid/api/treegrid_adjust_config.md property
- The ability [to sort content of any TreeGrid column by clicking on its header](treegrid/configuration.md#sorting-columns) using the treegrid/api/treegrid_sortable_config.md property
- The treegrid/api/treegrid_getsortingstate_method.md method that [allows getting the current state of sorting data in TreeGrid](treegrid/usage.md#getting-the-sorting-state) is added

#### Window

- The possibility [to place a window into a custom container](window/configuration.md#custom-node) using the window/api/window_node_config.md property

#### Helpers

- The possibility [to load data dynamically using the LazyDataProxy helper](helpers/lazydataproxy.md) 

#### Data Collection

- The data_collection/api/foreach.md method is added
- The data_collection/api/changeid.md method is added
- The ability to check whether the specified data range is loaded from the server using the data_collection/api/isdataloaded.md method
- The data_collection/api/beforelazyload_event.md and data_collection/api/afterlazyload_event.md events are added


#### Tree Collection

- The tree_collection/api/foreach.md method is added

#### Updates

- Now the dataview/api/dataview_multiselection_config.md configuration property [allows setting the mode of multiselection in Dataview](dataview/configuration.md#multiple-selection-of-items)
- Now the list/api/list_multiselection_config.md property [allows setting the mode of multiselection in List](list/configuration.md#multiple-selection-of-items)
- The getValue method of [DatePicker Form control](form/calendar.md#working-with-datepicker)


#### Fixes

- The issue with ability to use all types of [chart scales](chart/api/chart_scales_config.md) in any combinations
- The issue with the setActive() method in Tabbar
- The issue with styles when switching between modes in Colorpicker
- The issue with the getValue() method in Calendar and Colorpicker
- The issue with styles when Slider is disabled
- The issue with styles when Combobox is disabled
- Issues with the filter() method in Tree Collection

Version 6.3.1 
---------------

<span class="rel_date">released on December 18, 2019</span>

### Fixes

- Add the possibility to set the css and data property in Chart
- Issue with starting editing Grid columns with the help of the keyboard navigation when the *editing: false* property is set in the configuration of a column
- Issue with the change event that fired before changes were applied in Form
- Add the ability to set the name attribute in the setValue method of Form control as *key*
- Issue with the combo control of Form

Version 6.3 
---------------

<span class="rel_date">released on December 12, 2019</span>

### New functionality

#### Calendar

- The ability to get the current mode of displaying Calendar via the [getCurrentMode()](calendar/operating_calendar.md#getting-current-mode) method
- New calendar/api/calendar_cancelclick_event.md, calendar/api/calendar_modechange_event.md, calendar/api/calendar_monthselected_event.md, calendar/api/calendar_yearselected_event.md events are added

#### Chart

- The ability to specify templates for showing values of data items in [Bar, X-Bar, Pie and Pie 3D charts](chart/configuration_properties.md#series) using the showTextTemplate property

#### Grid

- [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- The possibility to finish editing of a cell via the [editEnd()](grid/api/grid_editend_method.md) method 
- The ability [to add custom elements into Grid cells](grid/configuration.md#html-content-of-grid-columns) using the grid/api/grid_htmlenable_config.md property

#### TreeGrid

- The treegrid/api/treegrid_collapse_method.md, treegrid/api/treegrid_collapseall_method.md, treegrid/api/treegrid_expand_method.md, treegrid/api/treegrid_expandall_method.md methods are added
- The ability [to add custom elements into TreeGrid cells](treegrid/configuration.md#html-content-of-treegrid-columns) using the treegrid/api/treegrid_htmlenable_config.md property

#### Menu/Ribbon/SideBar/Toolbar

- The ability to add custom HTML items into [Menu](menu/configuring_menu_items.md#custom-html), [Ribbon](ribbon/customhtmlbutton.md), [Sidebar](sidebar/customhtmlbutton.md) and [Toolbar](toolbar/customhtmlbutton.md)
- The possibility [to create Menu controls (MenuItem, NavItem) with custom HTML content](menu/configuring_menu_items.md#html-content) using the html attribute of Menu controls
- The possibility [to create Ribbon controls (Block, Button, ImageButton, NavItem, SelectButton, Title) with custom HTML content](ribbon/block.md#adding-html-content) using the html attribute of Ribbon controls
- The possibility [to create Sidebar controls (MenuItem, NavItem, Title) with custom HTML content](sidebar/menuitem.md#adding-html-content) using the html attribute of Sidebar controls
- The possibility [to create Toolbar controls (Button, ImageButton, NavItem, SelectButton, Title) with custom HTML content](toolbar/button.md#adding-html-content) using the html attribute of Toolbar controls



#### Helper

- The ability to exchange data with a web server using [AJAX](ajax/api/refs/ajax.md)

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
- Add ability to change sizes of Window according to content size via the css property
- Issue with the setSize method when Window is hidden
- Issues with interaction between the HTML form and controls of Toolbar, Sidebar, Ribbon, Menu
- Issue with the validation property of Form controls
- Behavior of a TimePicker control of Form

Version 6.2.3 
---------------

<span class="rel_date">released on November 19, 2019</span>

### Fixes

- Issue with setting the value in TimePicker of Form
- Issue with getting the value while editing DatePicker Form control
- Issue with getting values in the validation mode of Form
- Issue with the "movable" property in Window
- Issue with Window fixation

Version 6.2.2 
---------------

<span class="rel_date">released on November 5, 2019</span>

### Fixes

- Issues with selection in Grid
- Issue with the height of a cell in Layout

Version 6.2.1 
---------------

<span class="rel_date">released on October 25, 2019</span>

### Fixes

- Issue with the setValue() method in Calendar
- Issue with the combo filters in Grid


Version 6.2
---------------

<span class="rel_date">released on October 23, 2019</span>

### New functionality

####Calendar

- The ability [to select a range of dates in one calendar](calendar/configuring.md#range-mode)


####Form 

- The ability to manipulate Form controls via the [getItem() method of Form](form/api/form_getitem_method.md)
- The ability to use methods for form/calendar.md#workingwithdatepicker, form/checkbox.md#workingwithcheckbox, form/colorpicker.md#workingwithcolorpicker, form/combo.md#workingwithcombo, form/input.md#workingwithinput, form/radiogroup.md#workingwithradiogroup, form/select.md#workingwithselect, form/simplevault.md#workingwithsimplevault, form/slider.md#workingwithslider, form/text.md#workingwithtext, form/textarea.md#workingwithtextarea, form/timepicker.md#workingwithtimepicker Form controls: clear(), clearValidate(), getValue(), setValue(), validate()
- The possibility to update the configuration of form/calendar.md#workingwithdatepicker, form/checkbox.md#workingwithcheckbox, form/colorpicker.md#workingwithcolorpicker, form/combo.md#workingwithcombo, form/input.md#workingwithinput, form/radiogroup.md#workingwithradiogroup, form/select.md#workingwithselect, form/simplevault.md#workingwithsimplevault, form/slider.md#workingwithslider, form/text.md#workingwithtext, form/textarea.md#workingwithtextarea, form/timepicker.md#workingwithtimepicker Form controls via the setConfig() method
- The ability to use methods of DHTMLX widgets via the getWidget() method of form/calendar.md#workingwithdatepicker, form/colorpicker.md#workingwithcolorpicker, form/simplevault.md#workingwithsimplevault, form/slider.md#workingwithslider, form/timepicker.md#workingwithtimepicker Form controls

####Grid/TreeGrid

- The possibility to [show and hide](grid/usage.md#hiding-showing-a-column) a column in the grid via the [showColumn()](grid/api/grid_showcolumn_method.md) and [hideColumn()](grid/api/grid_hidecolumn_method.md) methods
- A new [comboFilter](grid/configuration.md#columns) for the [header/footer content](grid/configuration.md#header-footer-content) of a Grid column
- New [checkbox and combobox editors](grid/configuration.md#column-editors) for the cells of a Grid column
- The ability to set [min and max width](grid/configuration.md#columns) to Grid columns
- The possibility to [change the width of columns](grid/configuration.md#resizing) via the [resizable](grid/api/grid_resizable_config.md) property
- [Drag-n-drop](grid/configuration.md#drag-n-drop-of-grid-rows) of rows between grids via the [dragMode](grid/api/grid_dragmode_config.md) property
- [Export to CSV format](grid/usage.md#export-csv)

####Layout

- New [events](layout/api/refs/layout_events.md)

### Updates

- The sample with [default icons of DHTMLX library](helpers/icon.md) to decorate an application without using icon fonts
- A set of [CSS classes](helpers/base_elements.md) for using them outside DHTMLX widgets
- A set of CSS classes for changing the appearance of DHTMLX widgets via the css property of the widgets API

####Calendar

- The possibility to set the start and end dates for a calendar in the range mode via the [setValue()](calendar/api/calendar_setvalue_method.md) method 
- The ability to get the start and end dates from the selected range of dates in the calendar via the [getValue()](calendar/api/calendar_getvalue_method.md) method

####Grid

- Accelerating Grid speed to 2.5x

### Fixes

- Issues with months selection in Calendar
- Issues with the setValue() method in Calendar
- Issues with boolean type in a Grid cell
- Issue with selection on frozen columns in Grid
- Issues with animation in Charts
- Issue with Timepicker Form control
- Issue with Colorpicker Form control


Version 6.1.7 
---------------

<span class="rel_date">released on October 10, 2019</span>

### Fixes

- Issue with custom validation in Form 
- Issue with the "value" property in Form
- Issue with editor on a frozen column in Grid


Version 6.1.6 
---------------

<span class="rel_date">released on September 26, 2019</span>

### Fixes

- Issue with the Button events in Form 
- Issue with the Uploader styles in Form
- Issue with the header rowspans in Grid
- Issues with the copy() and move() methods in Treecollection and Datacollection

Version 6.1.5 
-----------------

<span class="rel_date">released on September 12, 2019</span>

### Fixes

- Issues with the Submit button in Form
- Issue with the baseline in Chart
- Issue with Combobox popup
- Issue with the height of uploader in Form

Version 6.1.4 
----------------------------

<span class="rel_date">released on September 5, 2019</span>

### Fixes

- Issues with date sorting in Grid
- Issue with filters in Grid
- Issue with resizer in Layout
- Issue with resizing textarea in Form
- Issues with restoring selection in Grid, DataView and List
- Issues with Calendar styles
- Fixes in samples

Version 6.1.3
-------------------

<span class="rel_date">released on August 29, 2019</span>

### Fixes

- Issues with scroll in DataView
- Issues with styles in Chart
- Issues with the "hidden" property in Checkboxes and RadioGroup of Form

Version 6.1.2 
-------------------

<span class="rel_date">released on August 22, 2019</span>

### Fixes

- Restore the ability to send FormData in the send() method of Form
- Issues with Form select
- Issue with the add() method of Datacollection

Version 6.1.1 
-------------------

<span class="rel_date">released on August 16, 2019</span>

### Fixes

- Issues with DnD in List and DataView
- Issue with the getValue() method in Form

Version 6.1
---------------

<span class="rel_date">released on August 15, 2019</span>

### New functionality

####ComboBox

- Ability to [manipulate the visibility of the Combo popup](combo/work_with_combo.md#hiding-showing-the-popup) via the Popup API

####Dataview/List

- The possibility to edit items via API ([DataView](dataview/manipulating_data.md#editing-items) / [List](list/work_with_list.md#editing-items)) or the configuration object 
([DataView](dataview/configuration.md#editing-items) / [List](list/configuration.md#editing-items))
- New editing-related events: DoubleClick, BeforeEditStart, BeforeEditEnd, AfterEditStart, AfterEditEnd
- Multiple selection of items ([DataView](dataview/configuration.md#editing-items) / [List](list/configuration.md#multiple-selection-of-items)) 
- Multiple drag-n-drop of items ([DataView](dataview/configuration.md#drag-n-drop-of-items) / [List](list/configuration.md#drag-n-drop-of-items))


####Data/Tree Collection

- A new [LoadError](data_collection/api/loaderror_event.md) event for catching loading errors

####Form 

- [Dynamic config updating and re-rendering of a form](form/work_with_form.md#updating-form-configuration)  
- [Adding values into controls on the fly](form/work_with_form.md#setting-new-values-for-controls)
- [Clearing a form](form/work_with_form.md#clearing-form)
- The new [send()](form/work_with_form.md#sending-form-to-server) method for sending a form to the server
- A new [RadioGroup](form/radiogroup.md) control for grouping RadioButtons

####Grid

- Editing the whole Grid or separate columns [via the configuration object](grid/configuration.md#editing-grid-and-separate-columns)
- Editing certain cells [via the API method](grid/usage.md#editing-data)
- New editing-related events: BeforeEditStart, BeforeEditEnd, AfterEditStart, AfterEditEnd
- The possibility to define the [type of an editor for a column](grid/configuration.md#column-editors)
- A new [type:"date" for a column](grid/configuration.md#columns)
- The ability to [add vertical span into the columns headers](grid/configuration.md#columns)
- The possibility to [enable automatic adding of an empty row to the end of the Grid](grid/configuration.md#automatic-adding-of-empty-row-into-grid)
- Initialization without data

####Popup

- The possibility to [adjust the Popup offsets relative to the element](popup/work_with_popup.md#hiding-showing-popup)

####Tree

- The possibility to [enable editing of items](tree/configuration.md) via the configuration object


####Window

- The ability to [check the visibility of a window](window/usage.md#checking-visibility-of-window)


### Updates

####Data/Tree Collection

- Calling data_collection/api/sort.md without parameters resets applied sorting
- The possibility to add an array of items via the data_collection/api/sort.md method

####Form

- The possibility to set values for [DatePicker](form/calendar.md), [TimePicker](form/timepicker.md), [ColorPicker](form/colorpicker.md) Form controls via inputs
- The possibility to make Form [Inputs](form/input.md) hidden 
- The autocomplete feature for Form [Inputs](form/input.md)  
- Validation of a Form [Select](form/select.md) control 


####Grid

- Extended [selection](grid/configuration.md#selection) possibilities

### Fixes

- The possibility to set value for the Combo control via the configuration object of Form
- Behavior of the Slider control

Version 6.0.4
------------------

<span class="rel_date">released on August 6, 2019</span>

### Fixes

- Issue with the load() method of Datacollection
- Issue with arrow navigation in Tabbar
- Issues with Window positioning and sizing
- Issue with the sort() method of Datacollection
- Issues with DnD in Tree
- Issue with badges in Toolbar
- Issues with Message positioning
- Issues with names in Calendar localization
- Styles fixes

Version 6.0.3
------------------

<span class="rel_date">released on July 19, 2019</span>

### Fixes

- Issues with the require property of Form
- Restore the setConfig() method of Form
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


Version 6.0.2 
-----------------

<span class="rel_date">released on July 11, 2019</span>

### Fixes

- Issues with Form custom CSS
- Issues with Form elements
- Issue with the getValue() method of Form
- Issues with Menu and Context menu
- Issues with popup in Form 
- Issue with scroll in Combobox
- Issue with data parsing in Toolbar
- Styles fixes

Version 6.0.1 
--------------

<span class="rel_date">released on July 5, 2019</span>

### Fixes

- Issues with the setValue() method of Calendar
- Issue with the set/getValue() methods of Slider
- Issue with buttons in Confirm message box
- Styles fixes

