---
sidebar_label: getSubRow()
title: JavaScript Grid - getSubRow Method 
description: You can explore the getSubRow method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSubRow()

@short: returns the configuration and content of a sub-row for the specified row

:::info
Note that the method works if a sub-row is in the visible area or if the `preserve:true` property is specified in the `subRowConfig` object of the sub-row.
:::

@signature: {'getSubRow(id: string | number): ISubViewCell | null;'}

@params:
- `id: string | number` - the id of a row 

@returns:
An object that includes:
- the configuration of the sub-row, including both user-defined settings and the default settings (`expanded`, `fullWidth`, `padding`, `height`, `toggleItem`, `preserve`, `css`)
- `element: HTMLElement | null` - the parent container of the current sub-row
- `view: string | object | null`:
	- a *string*, if the sub-row is set by the HTML content
	- an *object* instance to interact with, if a sub-row is an instance of a nested component (for example, Grid)
	- *null*, if the sub-row is unavailable (for example, it is hidden or placed outside the visible area and the `preserve` config is not specified)

**Related article:** [Getting sub-row config and content](grid/configuration.md#getting-sub-row-config-and-content)

@changelog:
- Added in v9.1
