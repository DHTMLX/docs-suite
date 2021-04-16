---
sidebar_label: select
title: select
---          

@short: selects a specified Sidebar item

@signature: select(id: string, unselect?: boolean): void;

@params:
- id    string      the id of a Sidebar item
- unselect  boolean     optional, true - to unselect previously selected items, otherwise - false; true by default

@example:
sidebar.select("categoryPost");

@template: api_method
@descr:

[Sidebar. Select/Unselect](https://snippet.dhtmlx.com/3odod5v1)

@changelog: added in v6.5

@relatedapi: 
sidebar/api/sidebar_getselected_method.md
sidebar/api/sidebar_isselected_method.md
sidebar/api/sidebar_unselect_method.md

@related: sidebar/work_with_sidebar.md#selectingunselectinganitem