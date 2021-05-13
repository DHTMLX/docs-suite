---
sidebar_label: isSelected
title: isSelected
---          

@short: checks whether a specified Ribbon item is selected

@signature: {'isSelected(id: string): boolean;'}

@params:
- id	string  the id of a Ribbon item

@returns:
- param	boolean     true, if an item of Ribbon is selected, otherwise false


@example:
ribbon.isSelected("print"); // -> returns true/false



@descr:

**Related sample**: [Ribbon. Select/Unselect](https://snippet.dhtmlx.com/0vy8uk4s)

@changelog:
added in v7.0

@related: ribbon/operating_ribbon.md#checking-if-a-ribbon-item-is-selected

@relatedapi:
ribbon/api/ribbon_select_method.md
ribbon/api/ribbon_unselect_method.md
ribbon/api/ribbon_getselected_method.md
