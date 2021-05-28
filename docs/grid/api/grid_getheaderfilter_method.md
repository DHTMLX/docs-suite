---
sidebar_label: getHeaderFilter()
title: JavaScript Grid - getHeaderFilter Method 
description: You can explore the getHeaderFilter method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getHeaderFilter()

@short: returns an object of the header filter by column id

@signature: {'getHeaderFilter(colId: string | number): HTMLElement | object;'}

@params:
`colId: string | number` - the id of a column

@returns:
Either an HTML object or an object with Combobox configuration.

@example:
var countryFilter = grid.getHeaderFilter("country");
// -> returns HTMLElement
// <label class="dhx_grid-filter__label dxi dxi-menu-down">...</label>

countryFilter.focus();

// or

var countryFilter = grid.getHeaderFilter("density");
// -> returns Combobox
// Combobox {_uid: "u1597304021754", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.blur();

@descr:

**Related sample**: [Grid. Get Header Filter](https://snippet.dhtmlx.com/n8srjle3)

@changelog:
added in 7.0

[comment]: # (@related: grid/usage.md#getting-header-filter)
