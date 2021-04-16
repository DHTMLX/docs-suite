---
sidebar_label: getHeaderFilter
title: getHeaderFilter
---          

@short: returns an object of the header filter by column id

@signature: getHeaderFilter(colId: string | number): HTMLElement | object;

@params:
- colId	string|number   the id of a column

@returns:
- param	HTMLElement|object      an HTML object or an object with Combobox configuration

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


@template: api_method
@descr:

[Grid. Get Header Filter](https://snippet.dhtmlx.com/n8srjle3)

@related: grid/usage.md#gettingheaderfilter

@changelog:
added in 7.0




