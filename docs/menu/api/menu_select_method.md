---
sidebar_label: select()
title: select()
---          

@short: selects a specified item of Menu

@signature: {'select(id: string, unselect: boolean): void;'}

@params:
- `id: string` - the id of a Menu item
- `unselect: boolean` - optional, true - to unselect previously selected items; otherwise, false; true by default `check form`

@example:
menu.select("align-left");

@descr:

**Related sample**: [Menu. Select/Unselect](https://snippet.dhtmlx.com/9qqah8ex)

@changelog:
added in v7.0

[comment]: # (@related: menu/work_with_menu.md#selectingunselectinganitem)

[comment]: # (@relatedapi: menu/api/menu_unselect_method.md menu/api/menu_isselected_method.md menu/api/menu_getselected_method.md)
