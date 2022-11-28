---
sidebar_label: getCell()
title: JavaScript Layout - getCell Method 
description: You can explore the getCell method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getCell()

@short: returns the config object of a cell

@signature: {'getCell(id: string): ICell;'}

@params:
- `id: string` - the id of a cell

@returns:
The config object of a cell.

@example:
layout.getCell("toolbar");

@descr:

A returned object looks like this:
~~~js
{gravity: false, id: "toolbar", header: "Header"}
~~~

@changelog:
added in v6.3

[comment]: # (@related: layout/work_with_layout.md#getting-the-object-of-a-cell)
