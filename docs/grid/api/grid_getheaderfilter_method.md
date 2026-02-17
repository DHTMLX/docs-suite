---
sidebar_label: getHeaderFilter()
title: JavaScript Grid - getHeaderFilter Method 
description: You can explore the getHeaderFilter method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getHeaderFilter()

@short: returns an object with a set of methods for the header filter of the specified column

@signature: {'getHeaderFilter(colId: string | number): object;'}

@params:
- `colId: string | number` - the id of a column

@returns:
An object with a set of methods which let you work with the header filter of the specified column. The methods are:

- [`blur()`](grid/api/headerfilter/blur_method.md) - removes focus from the filter
- [`clear()`](grid/api/headerfilter/clear_method.md) - clears the value set in the filter
- [`focus()`](grid/api/headerfilter/focus_method.md) - sets focus on the filter
- [`getFilter()`](grid/api/headerfilter/getfilter_method.md) - returns either an HTML object, or an object with Combobox/Calendar configuration
- [`setValue()`](grid/api/headerfilter/setvalue_method.md) - sets the filter value

@example:
const countryFilter = grid.getHeaderFilter("country");
countryFilter.setValue("Brazil");

@changelog:
- The returned value was changed in v8.0. Check the [Migration](migration.md#73---80) article
- The method was added in v7.0

@descr:

**Related sample**: [Grid. Get header filter](https://snippet.dhtmlx.com/n8srjle3)

**Related article:** [Getting header filter](grid/usage.md#getting-header-filter)
