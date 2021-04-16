---
sidebar_label: unselect
title: unselect
---          

@short: unselects a selected Sidebar item

@signature: unselect(id?: string): void;

@params:
- id    string      optional, the id of a Sidebar item

@example:
// unselects all previously selected items
sidebar.unselect();

// unselects a specified selected item
sidebar.unselect("categoryPost");


@template: api_method
@descr:

[Sidebar. Select/Unselect](https://snippet.dhtmlx.com/3odod5v1)

@relatedapi: 
sidebar/api/sidebar_getselected_method.md
sidebar/api/sidebar_isselected_method.md
sidebar/api/sidebar_select_method.md



@changelog: added in v6.5


@related: sidebar/work_with_sidebar.md#selectingunselectinganitem