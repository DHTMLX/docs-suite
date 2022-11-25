---
sidebar_label: getHeaderFilter()
title: JavaScript TreeGrid - getHeaderFilter Method 
description: You can explore the getHeaderFilter method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getHeaderFilter()

@short: returns an object of the header filter by column id

@signature: {'getHeaderFilter(colId: Id): HTMLElement | Combobox;'}

@params:
`colId: string | number` - the id of a column

@returns:
An HTML object or an object with Combobox configuration.

@example:
const countryFilter = treegrid.getHeaderFilter("capital");
// -> return HTMLElement
// <label class="dhx_grid-filter__label dxi dxi-magnify">...</label>

countryFilter.focus();

// or

const countryFilter = treegrid.getHeaderFilter("name");
// -> return Combobox
// Combobox {_uid: "u1597322507580", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.blur();

@descr:

**Related sample**: [TreeGrid. Get header filter](https://snippet.dhtmlx.com/vg5o912t)

@changelog:
added in 7.0

[comment]: # (@related: treegrid/usage.md#getting-header-filter)
