---
sidebar_label: adjustColumnWidth()
title: JavaScript TreeGrid - adjustColumnWidth Method 
description: You can explore the adjustColumnWidth method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# adjustColumnWidth()

@short: adjusts the width of a column to make all its content visible

@signature: {'adjustColumnWidth(id: string | number, adjust?: string | boolean): void;'}

@params:
- `id: string | number` - the id of a column
- `adjust: string | boolean` - optional, the mode of adjusting a column ("header", "data", true)

@example:
treegrid.adjustColumnWidth("b", "header");

@descr:

If no value is set to the *adjust* parameter, the **adjustColumnWidth** method sets it to *true*.

[comment]: # (@relatedapi: treegrid/api/treegrid_adjust_config.md)
