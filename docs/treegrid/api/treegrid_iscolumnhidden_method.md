---
sidebar_label: isColumnHidden
title: isColumnHidden
---          

@short: checks whether a column is hidden

@signature: {'isColumnHidden(colId: string | number): boolean;'}

@params:
- colId	string | number   the id of a column

@returns:
- param	boolean     'true' if the column is hidden, 'false' otherwise


@example:
grid.isColumnHidden("country"); // -> true|false



@descr:

**Related sample**:
- [TreeGrid. Is column hidden](https://snippet.dhtmlx.com/fcjfp19d)

@changelog:
added in v6.4

@related: treegrid/usage.md#checking-visibility-of-a-column