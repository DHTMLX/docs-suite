---
sidebar_label: getHeaderFilter
title: getHeaderFilter
---          

@short: returns an object of the header filter by column id

@signature: getHeaderFilter(colId: string | number): HTMLElement | object;

@params:
- colId	string | number   the id of a column

@returns:
- param	HTMLElement | object  an HTML object or an object with Combobox configuration

@example:
var countryFilter = treegrid.getHeaderFilter("capital");
// -> return HTMLElement
// <label class="dhx_grid-filter__label dxi dxi-magnify">...</label>

countryFilter.focus();

// or

var countryFilter = treegrid.getHeaderFilter("name");
// -> return Combobox
// Combobox {_uid: "u1597322507580", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.blur();

@template: api_method
@descr:

[TreeGrid. Get Header Filter](https://snippet.dhtmlx.com/vg5o912t)

@related: treegrid/usage.md#gettingheaderfilter

@changelog:
added in 7.0

