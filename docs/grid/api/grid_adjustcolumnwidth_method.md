---
sidebar_label: adjustColumnWidth()
title: JavaScript Grid - adjustColumnWidth Method 
description: You can explore the adjustColumnWidth method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# adjustColumnWidth()

@short: adjusts the width of a column to make all its content visible

@signature: {'adjustColumnWidth(rowId: string | number, adjust?: "data" | "header" | "footer" | boolean): void;'}

@params:
- `rowId: string | number` - the id of a column
- `adjust: string | boolean` - optional, the mode of adjusting a column ("data" | "header" | "footer" | boolean)

@example:
grid.adjustColumnWidth("b", "header");

@descr:

If no value is set to the *adjust* parameter, the **adjustColumnWidth** method sets it to *true*.

[comment]: # (@relatedapi: grid/api/grid_adjust_config.md)
