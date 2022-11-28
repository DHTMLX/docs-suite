---
sidebar_label: isDisabled()
title: JavaScript Tabbar - isDisabled Method 
description: You can explore the isDisabled method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# isDisabled()

@short: checks whether a tab is disabled

@signature: {'isDisabled(id?: string): boolean;'}

@params:
- `id: string` - the id of a tab

@returns:
`true`, if a tab is disabled; otherwise, `false`.

@example:
// checks whether a currently active tab is disabled
tabbar.isDisabled();  // -> returns true/false 

// checks whether a tab is disabled by its id
tabbar.isDisabled("London"); // -> returns true/false

@descr:

**Related sample**: [Tabbar. Is disabled tab](https://snippet.dhtmlx.com/86er2y7m)

@changelog: added in v6.4

[comment]: # (@related: tabbar/work_with_tabbar.md#checking-if-a-tab-is-disabled)
