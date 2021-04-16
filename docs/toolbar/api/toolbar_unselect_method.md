---
sidebar_label: unselect
title: unselect
---          

@short: unselects a selected Toolbar item

@signature: unselect(id?: string): void;

@params:
- id	string  optional, the id of a Toolbar item

@example:
// unselects all previously selected items
toolbar.unselect();
 
// unselects a specified selected item
toolbar.unselect("web");


@template: api_method
@descr:

@related: toolbar/common_methods.md#selectingunselectinganitem

@relatedapi:
toolbar/api/toolbar_select_method.md
toolbar/api/toolbar_isselected_method.md
toolbar/api/toolbar_getselected_method.md

[Toolbar. Select/Unselect](https://snippet.dhtmlx.com/mi7qjwg2)

@changelog:
added in v7.0

