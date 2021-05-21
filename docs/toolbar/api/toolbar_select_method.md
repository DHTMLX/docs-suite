---
sidebar_label: select()
title: select()
---          

@short: selects a specified item of Toolbar

@signature: {'select(id: string, unselect: boolean): void;'}

@params:
- `id: string` - the id of a Toolbar item
- `unselect: boolean` - optional, *true* to unselect previously selected items; otherwise, *false*; *true* by default

@example:
toolbar.select("web");

@descr:

**Related sample**: [Toolbar. Select/Unselect](https://snippet.dhtmlx.com/mi7qjwg2)

@changelog:
added in v7.0

[comment]: # (@related: toolbar/common_methods.md#selectingunselecting-an-item)

[comment]: # (@relatedapi: toolbar/api/toolbar_unselect_method.md toolbar/api/toolbar_isselected_method.md toolbar/api/toolbar_getselected_method.md)
