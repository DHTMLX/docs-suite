---
sidebar_label: editEnd()
title: editEnd()
---          

@short: finishes editing in a cell

@signature: {'editEnd(withoutSave?: boolean): void;'}

@params:
`withoutSave: boolean` - defines whether the edited data will be saved after the editing of a cell is complete. If set to `true`, the edited data won't be saved.

@example:
treegrid.editEnd(); // the edited data will be saved

treegrid.editEnd(true); // the edited data won't be saved

@descr:

The method works with [any type of cell editors](treegrid/configuration.md#columneditors), except for **checkbox**. 

@changelog: added in v6.3

[comment]: # (@relatedapi: treegrid/api/treegrid_editcell_method.md)

[comment]: # (@related: treegrid/usage.md#editing-data)
