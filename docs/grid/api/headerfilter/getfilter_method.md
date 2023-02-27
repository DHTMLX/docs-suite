---
sidebar_label: getFilter()
title: JavaScript Grid - getFilter Method 
description: You can explore the getFilter method of the header filter of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getFilter()

@short: returns either an HTML object or an object with Combobox configuration

@signature: {'getFilter(): HTML object | Combobox;'}

@returns:
Either an HTML object or an object with Combobox configuration

@example:
const filter1 = grid.getHeaderFilter("country").getFilter();
console.log(filter1);
// -> returns Combobox
//  {config: {…}, _uid: 'u1670500020936', events: o, data: d, popup: f, …}


const filter2 = grid.getHeaderFilter("netChange").getFilter();
console.log(filter2);
// -> returns an HTML object
// {type: 1, attrs: {…}, tag: 'div', _class: 'dhx_grid-filter__label dxi dxi-magnify', 
// ref: 'netChange_filter', …}

@changelog:
added in v8.0