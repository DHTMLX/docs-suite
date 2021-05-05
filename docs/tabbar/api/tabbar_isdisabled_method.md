---
sidebar_label: isDisabled
title: isDisabled
---          

@short: checks whether a tab is disabled

@signature: {'isDisabled(id?: string): boolean;'}

@params:
- id	string      the id of a tab


@returns:
- param	boolean     true, if a tab is disabled, otherwise false

@example:
// checks whether a currently active tab is disabled
tabbar.isDisabled();  // -> returns true/false 

// checks whether a tab is disabled by its id
tabbar.isDisabled("London"); // -> returns true/false




@descr:

**Related sample**: [Tabbar. Is Disabled Tab](https://snippet.dhtmlx.com/86er2y7m)

@related: tabbar/work_with_tabbar.md#checking-if-a-tab-is-disabled

@changelog: added in v6.4
