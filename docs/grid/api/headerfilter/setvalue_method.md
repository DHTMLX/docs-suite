---
sidebar_label: setValue()
title: JavaScript Grid - setValue Method 
description: You can explore the setValue method of the header filter of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: Sets the filter value

@signature: {'setValue(value: string | string[] | Date | Date[]): void;'}

@params:
- `value: string | string[] | Date | Date[]` - the value to be set for the filter

:::info
- An array of string values can be specified only for [`comboFilter`](/grid/configuration/#customizing-headerfooter-filters) in the `multiselection:true` mode.

- For [`dateFilter`](/grid/configuration/#customizing-headerfooter-filters), the value must be passed strictly as a *Date* object (for a single selection) or an array of *Date[]* objects (for the `range` mode). *String* values are not supported by the `setValue()` method for this filter type.
:::

@example:
grid.getHeaderFilter("country").setValue("Brazil");

@descr:

@changelog:

- The `value` parameter can be set as a *Date* object or as an array of *Date[]* objects since v9.3
- Added in v8.0