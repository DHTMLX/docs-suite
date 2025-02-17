---
sidebar_label: getFilters()
title: JavaScript DataCollection - getFilters Method 
description: You can explore the getFilters method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getFilters()

@short: returns an object with the applied filters 

@signature: {'getFilters({ permanent?: boolean }): { [key: string]: { rule: object | callback, config: object } }; '}

@params: 

- `permanent: boolean` - optional, <i>false</i> by default. Allows getting the list of permanent filters

@returns:
- `filters: object` - an object with the applied filters, where the key is the id of a filter and the value is an object with the [`rule` and `config` properties](data_collection/api/datacollection_filter_method.md)

@example:
const filters = grid.data.getFilters();

@descr: