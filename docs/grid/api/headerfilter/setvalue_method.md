---
sidebar_label: setValue()
title: JavaScript Grid - setValue Method 
description: You can explore the setValue method of the header filter of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: Sets the filter value

@signature: {'setValue(value: string | string[] | Date | Date[]): void;'}

@descr:
#### Usage

- for inputFilter, selectFilter, comboFilter

~~~jsx
setValue(value: string): void; 
~~~

- for comboFilter

~~~jsx
setValue(value: string | string[]): void;
~~~

- for dateFilter

~~~jsx
setValue(value: Date | Date[]): void; 
~~~

@params:
- `value: string | string[] | Date | Date[]` - the value to be set for the filter

@example:
grid.getHeaderFilter("country").setValue("Brazil");

@descr:
:::info
The [`dateFilter`](/grid/configuration/#headerfooter-filters) type of filter supports only the *Date object* values.
:::

Note that in case of the enabled `multiselection` or `range` modes, the method awaits the value to be passed as an array.

**Related article**: [Header/footer filters](/grid/configuration/#headerfooter-filters)

@changelog:

- The `value` parameter can be set as a *Date* object or as an array of *Date[]* objects since v9.3
- Added in v8.0