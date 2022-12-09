---
sidebar_label: setValue()
title: JavaScript TreeGrid - setValue Method 
description: You can explore the setValue method of the header filter of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setValue()

@short: sets a value by which a column will be filtered

@signature: {'setValue(value: string | string[]): void;'}

@params:
- `value: string | string[]` - a value by which the column will be filtered

@descr:

:::info
An array of string values can be specified only for **comboFilter** in the [`multiselection:true`](treegrid/configuration.md#headerfooter-content) mode.
:::

@example:
treegrid.getHeaderFilter("country").setValue("Brazil");

@descr:

@changelog:
added in v8.0