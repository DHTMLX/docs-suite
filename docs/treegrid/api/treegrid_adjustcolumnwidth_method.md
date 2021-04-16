---
sidebar_label: adjustColumnWidth
title: adjustColumnWidth
---          

@short: adjusts the width of a column to make all its content visible

@signature: adjustColumnWidth(id: string | number, adjust?: string | boolea): void;

@params:
- id		string | number		the id of a column
- adjust	string | boolean		optional, the mode of adjusting a column ("header", "data", true)

@example:
treegrid.adjustColumnWidth("b", "header");

@template: api_method
@descr:
If no value is set to the *adjust* parameter, the **adjustColumnWidth** method sets it to *true*.

@relatedapi: treegrid/api/treegrid_adjust_config.md

@changelog:
