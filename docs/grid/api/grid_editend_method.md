---
sidebar_label: editEnd
title: editEnd
---          

@short: finishes editing in a cell

@signature: {'editEnd(withoutSave?: boolean): void;'}

@params:
- withoutSave	boolean    defines whether the edited data will be saved after the editing of a cell is complete. If set to <i>true</i>, the edited data won't be saved. 

@example:
grid.editEnd(); // the edited data will be saved

grid.editEnd(true); // the edited data won't be saved



@descr:

The method works with [any type of cell editors](grid/configuration.md#columneditors), except for **checkbox**. 

@changelog: added in v6.3

@relatedapi: grid/api/grid_editcell_method.md

@related: grid/usage.md#editing-data

