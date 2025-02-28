---
sidebar_label: Grid сolumn properties
title: JavaScript Grid - Grid Column Properties 
description: You can explore the Grid column properties of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Grid column properties

Click the name of the necessary property to see the details on its usage.

|  Property                                                             |        Description                                     |
|---------------------------------------------------------------------- |------------------------------------------------------- |
| [adjust](grid/api/gridcolumn_properties/gridcolumn_adjust_property.md) | (optional) *false* by default, defines whether the width of a column is automatically adjusted to its content |
| [align](grid/api/gridcolumn_properties/gridcolumn_align_property.md) | (optional) aligns data in a column: *"left"*/*"center"*/*"right"*| 
| [autoWidth](grid/api/gridcolumn_properties/gridcolumn_autowidth_property.md) | (optional) enables/disables the ability of a column to adjust its size to the size of Grid, *false* by default |
| [closable](grid/api/gridcolumn_properties/gridcolumn_closable_property.md) | (optional)  either allows closing a particular element of the [`group`](../../api/grid_group_config/) panel or makes it permanently enabled (**PRO version only**)|
| [dateFormat](grid/api/gridcolumn_properties/gridcolumn_dateformat_property.md) | (optional) defines the format of dates. The date format must include delimiters (spaces or symbols), otherwise an error will be thrown |
| [draggable](grid/api/gridcolumn_properties/gridcolumn_draggable_property.md) | (optional) defines whether a column is draggable, *false* by default |
| [editable](grid/api/gridcolumn_properties/gridcolumn_editable_property.md) | (optional) defines whether a column is editable, *false* by default |
| [editorConfig](grid/api/gridcolumn_properties/gridcolumn_editorconfig_property.md) | (optional) an object with configuration settings of the column's editor. The structure of this object depends on the specified type of the editor or the column |
| [editorType](grid/api/gridcolumn_properties/gridcolumn_editortype_property.md) | (optional) the type of an editor used in a column: *"input"*/*"select"*/*"combobox"*/*"textarea"*/*"multiselect"*/*"datePicker"* |
| [footer](grid/api/gridcolumn_properties/gridcolumn_footer_property.md) | (optional) an array of objects with footer rows configuration |
|[gravity](grid/api/gridcolumn_properties/gridcolumn_gravity_property.md)| (optional) sets the relative width proportions for Grid columns |
| [groupable](grid/api/gridcolumn_properties/gridcolumn_groupable_property.md) | (optional) enables data grouping by the values of a certain column via the user interface (**PRO version only**) |
| [header](grid/api/gridcolumn_properties/gridcolumn_header_property.md) | (required) an array of objects with header rows configuration |
| [hidden](grid/api/gridcolumn_properties/gridcolumn_hidden_property.md) | (optional) defines whether a column is hidden, *false* by default |
| [htmlEnable](grid/api/gridcolumn_properties/gridcolumn_htmlenable_property.md) | (optional) allows using and displaying HTML content in a column. If set to *false*, the content of the column cells will be displayed as a *string* value, *false* by default |
| [id](grid/api/gridcolumn_properties/gridcolumn_id_property.md)        | (required) the id of a column                          |
| [mark](grid/api/gridcolumn_properties/gridcolumn_mark_property.md) | (optional) returns a template for marking a cell(s) or applies the desired CSS classes to cells with minimal/maximal values in a column   |
| [maxWidth](grid/api/gridcolumn_properties/gridcolumn_maxwidth_property.md) | (optional) the maximal width to be set for a column |
| [minWidth](grid/api/gridcolumn_properties/gridcolumn_minwidth_property.md) | (optional) the minimum width to be set for a column |
| [numberMask](grid/api/gridcolumn_properties/gridcolumn_numbermask_property.md) | (optional) sets an input mask for entering number values |
| [options](grid/api/gridcolumn_properties/gridcolumn_options_property.md) | (optional) specifies a set of options to be displayed in the editor of a cell. It is required if you specify `editorType:"select"/"combobox"/"multiselect"` |
| [patternMask](grid/api/gridcolumn_properties/gridcolumn_patternmask_property.md) | (optional) sets an input mask for entering number and string values according to a special pattern |
| [resizable](grid/api/gridcolumn_properties/gridcolumn_resizable_property.md) | (optional) defines whether a column can be resized, *false* by default |
| [sortable](grid/api/gridcolumn_properties/gridcolumn_resizable_property.md) | (optional) defines whether a column is sortable, *true* by default |
| [summary](grid/api/gridcolumn_properties/gridcolumn_closable_property.md) | (optional) creates the list of calculated values based on the column's data. The defined list is available only at the column's level  |
| [template](grid/api/gridcolumn_properties/gridcolumn_template_property.md) | (optional) a function which returns a template with content for a cell  |
| [tooltip](grid/api/gridcolumn_properties/gridcolumn_tooltip_property.md) | (optional) enables/disables the header tooltip, or sets the configuration object with the tooltip settings  |
| [tooltipTemplate](grid/api/gridcolumn_properties/gridcolumn_tooltiptemplate_property.md) | (optional) a function which returns a template for the content of the tooltip  |
| [type](grid/api/gridcolumn_properties/gridcolumn_footer_property.md) | (optional) the type of a column |
| [width](grid/api/gridcolumn_properties/gridcolumn_width_property.md)  | (optional) the width of a column, *100* by default     |


## Example

<iframe src="https://snippet.dhtmlx.com/1mxmshax?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

**Related articles:**
- [Configuration](grid/configuration.md)
- [Customization](grid/customization.md)
