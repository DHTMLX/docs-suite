---
sidebar_label: getCell()
title: getCell()
---          

@short: returns the config object of a cell

@signature: {'getCell(id: string): ICell;'}

@params:
`id: string` - the id of a cell

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
